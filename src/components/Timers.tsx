import { Clock, HeartPulse, Hourglass, Waves } from "lucide-react";
import { person } from "~/config";
import { formatNumber, type TimeParts } from "~/lib/cn";

export function Timers({ lived, age }: { lived: TimeParts; age: number }) {
  const cards = [
    {
      icon: HeartPulse,
      title: "Years",
      value: formatNumber(lived.years),
      sub: `${lived.months} months · ${lived.days} days`,
      tone: "bg-[#bae6fd]",
    },
    {
      icon: Waves,
      title: "Days",
      value: formatNumber(lived.totalDays),
      sub: "Total days so far",
      tone: "bg-[#ccfbf1]",
    },
    {
      icon: Clock,
      title: "Hours",
      value: formatNumber(lived.totalHours),
      sub: "Total hours so far",
      tone: "bg-[#fef08a]",
    },
    {
      icon: Hourglass,
      title: "Minutes",
      value: formatNumber(lived.totalMinutes),
      sub: `${formatNumber(lived.totalSeconds)} seconds`,
      tone: "bg-[#e9d5ff]",
    },
  ];

  return (
    <section id="timers" className="shell py-14 sm:py-20">
      <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Life timers
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {age} years of{" "}
            <span className="text-gradient">{person.firstName}</span>
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            These numbers update every second from the day he was born.
          </p>
        </div>
        <div className="ink-card bg-white px-4 py-3 text-sm font-medium text-muted">
          Full time:{" "}
          <span className="font-mono text-bright">
            {lived.years}y {lived.months}m {lived.days}d {String(lived.hours).padStart(2, "0")}:
            {String(lived.minutes).padStart(2, "0")}:
            {String(lived.seconds).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <article
            key={card.title}
            className={`reveal ink-card p-5 ${card.tone}`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="mb-4 grid size-10 place-items-center rounded-full border-[1.5px] border-line bg-white shadow-[2px_2px_0_#1c1917]">
              <card.icon className="size-4" strokeWidth={2.25} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {card.title}
            </p>
            <p className="mt-2 font-display text-3xl font-bold tabular-nums tracking-tight sm:text-4xl">
              {card.value}
            </p>
            <p className="mt-2 text-sm text-muted">{card.sub}</p>
          </article>
        ))}
      </div>

      <div className="reveal mt-6 grid gap-3 sm:grid-cols-3">
        <Stat label="Months" value={formatNumber(lived.years * 12 + lived.months)} />
        <Stat label="Weeks" value={formatNumber(Math.floor(lived.totalDays / 7))} />
        <Stat
          label="Today"
          value={`${String(lived.hours).padStart(2, "0")}h ${String(lived.minutes).padStart(2, "0")}m ${String(lived.seconds).padStart(2, "0")}s`}
        />
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border-[1.5px] border-line/20 bg-white/70 px-4 py-3 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-dim">{label}</p>
      <p className="mt-1 font-mono text-sm font-semibold text-bright sm:text-base">{value}</p>
    </div>
  );
}
