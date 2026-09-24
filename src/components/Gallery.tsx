import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { photos } from "~/config";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="shell py-14 sm:py-20">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
          Photos
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Some <span className="text-gradient">photos</span> of Moin Bhai
        </h2>
        <p className="mt-3 text-muted">
          A few moments from the ship and from home. Tap a photo to read the note.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(i)}
            className={`reveal group cursor-pointer overflow-hidden rounded-[1.1rem] border-[1.5px] border-line bg-white text-left shadow-[4px_4px_0_#1c1917] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#1c1917] ${
              i === 0 || i === 2 ? "lg:row-span-1" : ""
            }`}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className={`relative overflow-hidden ${i === 1 || i === 3 ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute left-3 top-3 chip bg-white/95">{photo.tag}</span>
              <span className="absolute bottom-3 right-3 rounded-full border-[1.5px] border-line bg-[#fef08a] px-2.5 py-1 text-[11px] font-bold opacity-0 shadow-[2px_2px_0_#1c1917] transition-opacity group-hover:opacity-100">
                Open
              </span>
            </div>
            <div className="border-t-[1.5px] border-line px-4 py-3.5">
              <p className="font-display text-base font-bold tracking-tight">
                {photo.title}
              </p>
              <p className="mt-1 text-sm leading-snug text-muted">{photo.note}</p>
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <Lightbox
          index={active}
          onClose={() => setActive(null)}
          onPrev={() =>
            setActive((i) => ((i ?? 0) + photos.length - 1) % photos.length)
          }
          onNext={() => setActive((i) => ((i ?? 0) + 1) % photos.length)}
        />
      )}
    </section>
  );
}

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1c1917]/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      onClick={onClose}
    >
      <div
        className="ink-card relative max-h-[92vh] w-full max-w-3xl overflow-hidden bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid size-10 cursor-pointer place-items-center rounded-full border-[1.5px] border-line bg-white shadow-[2px_2px_0_#1c1917]"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>

        <div className="relative bg-[#0c4a6e]/8">
          <img
            src={photo.src}
            alt={photo.alt}
            className="mx-auto max-h-[58vh] w-full object-contain"
          />
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full border-[1.5px] border-line bg-white/95 shadow-[2px_2px_0_#1c1917]"
            aria-label="Previous photo"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={onNext}
            className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full border-[1.5px] border-line bg-white/95 shadow-[2px_2px_0_#1c1917]"
            aria-label="Next photo"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="border-t-[1.5px] border-line px-5 py-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip bg-[#bae6fd]">{photo.tag}</span>
            <span className="text-xs font-medium text-dim">
              {index + 1} of {photos.length}
            </span>
          </div>
          <p className="mt-3 font-display text-xl font-bold tracking-tight">
            {photo.title}
          </p>
          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {photo.note}
          </p>
        </div>
      </div>
    </div>
  );
}
