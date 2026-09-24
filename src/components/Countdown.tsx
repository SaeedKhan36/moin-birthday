import { Cake, PartyPopper } from "lucide-react";
import { person } from "~/config";
import type { TimeParts } from "~/lib/cn";

type Props = {
  birthday: boolean;
  turning: number;
  countdown: { days: string; hours: string; minutes: string; seconds: string };
  until: TimeParts;
};

export function Countdown({ birthday, turning, countdown }: Props) {
  return (
    <section id="countdown" className="shell py-14 sm:py-20">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
          Countdown
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {birthday ? (
            <>
              Happy birthday,{" "}
              <span className="text-gradient">he turns {turning}</span>
            </>
          ) : (
            <>
              Time left until{" "}
              <span className="text-gradient">he turns {turning}</span>
            </>
          )}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          {birthday
            ? `Today is ${person.firstName}'s birthday. Enjoy the day!`
            : "Days, hours, minutes, and seconds left for the birthday."}
        </p>
      </div>

      <div className="reveal mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <Unit value={countdown.days} label="Days" tone="bg-[#bae6fd]" />
        <Unit value={countdown.hours} label="Hours" tone="bg-[#fef08a]" />
        <Unit value={countdown.minutes} label="Minutes" tone="bg-[#ccfbf1]" />
        <Unit value={countdown.seconds} label="Seconds" tone="bg-[#e9d5ff]" />
      </div>

      <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3">
        <span className="chip bg-white">
          {birthday ? <PartyPopper className="size-3.5" /> : <Cake className="size-3.5" />}
          {birthday ? "Birthday today" : "Counting down"}
        </span>
        <span className="chip bg-[#fff8e7]">
          Until {person.firstName}'s next birthday
        </span>
      </div>
    </section>
  );
}

function Unit({
  value,
  label,
  tone,
}: {
  value: string;
  label: string;
  tone: string;
}) {
  return (
    <div className={`ink-card relative overflow-hidden p-4 text-center sm:p-6 ${tone}`}>
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="pulse-ring absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/40" />
      </div>
      <p className="font-display relative text-4xl font-bold tabular-nums tracking-tight sm:text-5xl md:text-6xl">
        {value}
      </p>
      <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </p>
    </div>
  );
}
