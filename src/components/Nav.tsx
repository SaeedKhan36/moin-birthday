import { Anchor } from "lucide-react";
import { nav, person } from "~/config";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/15 bg-[#f7f4ec]/80 backdrop-blur-xl">
      <div className="shell flex h-16 items-center gap-6">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="grid size-9 place-items-center rounded-full border-[1.5px] border-line bg-[#bae6fd] shadow-[2px_2px_0_#1c1917]">
            <Anchor className="size-4" strokeWidth={2.25} />
          </span>
          <span className="hidden sm:inline">{person.nickname}</span>
        </a>

        <nav className="ml-auto hidden items-center gap-5 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-bright"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#wishes" className="btn-primary !px-3.5 !py-2 text-sm md:ml-2">
          Wishes
        </a>
      </div>
    </header>
  );
}
