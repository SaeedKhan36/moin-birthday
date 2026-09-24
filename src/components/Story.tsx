import { Anchor, Home, Ship } from "lucide-react";
import { milestones, person, wishes } from "~/config";

export function Story() {
  return (
    <section className="shell py-14 sm:py-16">
      <div className="reveal ink-card overflow-hidden bg-gradient-to-br from-white via-[#e0f2fe] to-[#fef9c3]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              About him
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              He works in the{" "}
              <span className="text-gradient">merchant navy</span>
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              Most of the year he is on a ship. Right now he is home with
              family. This website is a simple birthday gift from his brother.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {milestones.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border-[1.5px] border-line bg-white/80 p-4 shadow-[3px_3px_0_#1c1917]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-dim">
                    {m.label}
                  </p>
                  <p className="mt-1 font-display text-xl font-bold">{m.value}</p>
                  <p className="mt-1 text-xs text-muted">{m.hint}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[280px] border-t-[1.5px] border-line lg:border-l-[1.5px] lg:border-t-0">
            <img
              src="/photos/sunset-deck.jpg"
              alt="Moin on the ship"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/75 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="mb-3 flex gap-2">
                <span className="chip border-white/40 bg-white/15 text-white backdrop-blur">
                  <Ship className="size-3.5" /> At sea
                </span>
                <span className="chip border-white/40 bg-white/15 text-white backdrop-blur">
                  <Home className="size-3.5" /> Home now
                </span>
              </div>
              <p className="font-display text-2xl font-bold">
                Happy birthday, {person.firstName}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Wishes() {
  return (
    <section id="wishes" className="shell py-14 sm:py-20">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
          Wishes
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Birthday <span className="text-gradient">messages</span>
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {wishes.map((wish, i) => (
          <article
            key={wish.from}
            className="reveal ink-card flex flex-col bg-white p-5 sm:p-6"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="mb-4 grid size-10 place-items-center rounded-full border-[1.5px] border-line bg-[#bae6fd]">
              <Anchor className="size-4" />
            </div>
            <p className="flex-1 text-[0.95rem] leading-relaxed text-muted">
              “{wish.text}”
            </p>
            <p className="mt-5 font-display text-sm font-bold">- {wish.from}</p>
          </article>
        ))}
      </div>

      <div className="reveal mx-auto mt-10 max-w-xl text-center">
        <div className="ink-card bg-[#fff8e7] p-6 sm:p-8">
          <p className="font-display text-xl font-bold sm:text-2xl">
            Happy Birthday, {person.nickname}.
          </p>
          <p className="mt-3 text-muted">
            Made with love by your brother.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line/15 py-10">
      <div className="shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2 font-display font-bold">
          <span className="grid size-8 place-items-center rounded-full border-[1.5px] border-line bg-[#bae6fd]">
            <Anchor className="size-3.5" />
          </span>
          {person.nickname} · Birthday
        </div>
        <a href="#top" className="text-xs font-semibold text-muted hover:text-bright">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
