import { AUDIENCES, type Audience } from "../data";
import { waLink } from "../config";
import { Reveal } from "../hooks";
import { ArrowIcon, CheckIcon } from "./Icons";

const THEMES: Record<
  Audience["theme"],
  { card: string; chip: string; title: string; copy: string; point: string; check: string }
> = {
  mint: {
    card: "bg-mint-100 ring-pine-900/10",
    chip: "bg-pine-900 text-mint-100",
    title: "text-pine-950",
    copy: "text-ink/70",
    point: "text-pine-900",
    check: "bg-pine-900 text-mint-300",
  },
  pine: {
    card: "bg-pine-900 ring-pine-950/40",
    chip: "bg-coral-500 text-[#fff4ef]",
    title: "text-mint-100",
    copy: "text-mint-200/80",
    point: "text-mint-100",
    check: "bg-coral-500 text-[#fff4ef]",
  },
  blush: {
    card: "bg-coral-100 ring-coral-500/15",
    chip: "bg-coral-500 text-[#fff4ef]",
    title: "text-pine-950",
    copy: "text-ink/70",
    point: "text-pine-900",
    check: "bg-coral-500 text-[#fff4ef]",
  },
};

export default function Audiences() {
  return (
    <section id="publico" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.24em] text-coral-600 uppercase">
            <span className="h-px w-10 bg-coral-500" />
            Feita para você
          </p>
          <h2 className="font-display mt-4 text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.05] font-semibold tracking-tight text-pine-950">
            Uma clínica, <em className="font-light text-pine-700 italic">todas as fases</em> da
            sua vida.
          </h2>
          <p className="mt-4 text-ink/65">
            Famílias, jovens em busca de estética e pacientes 60+ encontram aqui um
            cuidado pensado para cada momento. Role e descubra o seu.
          </p>
        </Reveal>

        {/* cartões empilhados com fixação no scroll */}
        <div className="mt-14 lg:mt-20">
          {AUDIENCES.map((a, i) => {
            const t = THEMES[a.theme];
            return (
              <div key={a.title} className="sticky" style={{ top: `${100 + i * 26}px` }}>
                <article
                  className={`mb-8 grid overflow-hidden rounded-[2.4rem] shadow-[0_45px_90px_-45px_rgba(5,32,29,0.55)] ring-1 md:grid-cols-2 ${t.card}`}
                >
                  <div className="flex flex-col p-8 sm:p-12">
                    <div className="flex items-center justify-between">
                      <span
                        className={`rounded-full px-4 py-1.5 text-[0.68rem] font-bold tracking-[0.16em] uppercase ${t.chip}`}
                      >
                        {a.eyebrow}
                      </span>
                      <span className={`font-display text-lg italic ${t.copy}`}>
                        {String(i + 1).padStart(2, "0")} / 03
                      </span>
                    </div>

                    <h3
                      className={`font-display mt-6 text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[1.08] font-semibold tracking-tight ${t.title}`}
                    >
                      {a.title}
                    </h3>
                    <p className={`mt-4 max-w-md leading-relaxed ${t.copy}`}>{a.copy}</p>

                    <ul className="mt-6 space-y-2.5">
                      {a.points.map((p) => (
                        <li key={p} className={`flex items-center gap-2.5 text-sm font-semibold ${t.point}`}>
                          <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${t.check}`}>
                            <CheckIcon className="h-3 w-3" strokeWidth={2.6} />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={waLink(`Olá! Vim pelo site da Prime Odontologia: ${a.cta.toLowerCase()}. 🙂`)}
                      target="_blank"
                      rel="noreferrer"
                      className={`group mt-8 inline-flex items-center gap-3 text-sm font-bold ${t.title}`}
                    >
                      <span className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 group-hover:gap-4 ${t.chip}`}>
                        <ArrowIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                      <span className="underline-offset-4 group-hover:underline">{a.cta}</span>
                    </a>
                  </div>

                  <div className="relative min-h-[280px] overflow-hidden md:min-h-[460px]">
                    <img
                      src={a.img}
                      alt={a.imgAlt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-pine-950/25 via-transparent to-transparent" />
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
