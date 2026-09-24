import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type TimeParts = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function parseLocalDate(isoDate: string): Date {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Date(y, m - 1, d, 0, 0, 0, 0);
}

/** Next birthday midnight after `now` (or today if birthday is today and not past midnight+24h celebration window). */
export function nextBirthday(birthDate: string, now = new Date()): Date {
  const born = parseLocalDate(birthDate);
  const target = new Date(now.getFullYear(), born.getMonth(), born.getDate(), 0, 0, 0, 0);
  // If birthday already passed this calendar year, aim for next year
  const endOfBirthday = new Date(target);
  endOfBirthday.setHours(23, 59, 59, 999);
  if (now > endOfBirthday) {
    target.setFullYear(target.getFullYear() + 1);
  }
  return target;
}

export function isBirthdayToday(birthDate: string, now = new Date()): boolean {
  const born = parseLocalDate(birthDate);
  return now.getMonth() === born.getMonth() && now.getDate() === born.getDate();
}

export function ageTurning(birthDate: string, now = new Date()): number {
  const born = parseLocalDate(birthDate);
  let age = now.getFullYear() - born.getFullYear();
  const hadBirthday =
    now.getMonth() > born.getMonth() ||
    (now.getMonth() === born.getMonth() && now.getDate() >= born.getDate());
  if (!hadBirthday) age -= 1;
  return age;
}

export function diffParts(from: Date, to: Date): TimeParts {
  const ms = Math.max(0, to.getTime() - from.getTime());
  const totalSeconds = Math.floor(ms / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();
  let hours = to.getHours() - from.getHours();
  let minutes = to.getMinutes() - from.getMinutes();
  let seconds = to.getSeconds() - from.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return {
    years: Math.max(0, years),
    months: Math.max(0, months),
    days: Math.max(0, days),
    hours: Math.max(0, hours),
    minutes: Math.max(0, minutes),
    seconds: Math.max(0, seconds),
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds,
  };
}

export function formatCountdown(parts: TimeParts) {
  return {
    days: String(parts.totalDays),
    hours: pad(parts.hours),
    minutes: pad(parts.minutes),
    seconds: pad(parts.seconds),
  };
}

export function formatNumber(n: number) {
  return new Intl.NumberFormat("en-IN").format(n);
}
