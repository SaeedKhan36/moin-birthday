import { useEffect, useState } from "react";
import {
  ageTurning,
  diffParts,
  formatCountdown,
  isBirthdayToday,
  nextBirthday,
  parseLocalDate,
  type TimeParts,
} from "~/lib/cn";

export function useNow(intervalMs = 1000) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);
  return now;
}

const ZERO_PARTS = {
  years: 0,
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  totalDays: 0,
  totalHours: 0,
  totalMinutes: 0,
  totalSeconds: 0,
};

export function useBirthdayClock(birthDate: string) {
  const now = useNow(1000);
  const born = parseLocalDate(birthDate);
  const birthday = isBirthdayToday(birthDate, now);
  const target = nextBirthday(birthDate, now);
  // On the birthday itself, freeze countdown at zero (celebration mode).
  const until = birthday ? ZERO_PARTS : diffParts(now, target);
  const lived = diffParts(born, now);
  const age = ageTurning(birthDate, now);
  const turning = birthday ? age : age + 1;

  return {
    now,
    birthday,
    age,
    turning,
    until,
    lived,
    countdown: formatCountdown(until),
    target,
  };
}

export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

export type { TimeParts };
