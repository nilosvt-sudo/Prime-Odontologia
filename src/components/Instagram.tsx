import { CLINIC } from "../config";
import { SERVICES } from "../data";
import { formatPt, Reveal, useCountUp, useInView } from "../hooks";
import { HeartIcon, InstaIcon, StarIcon } from "./Icons";

function Stat({ value, label, start }: { value: number; label: string; start: boolean }) {
  const v = useCountUp(value, start, 1600);
  return (
    <div>
      <p className="font-display text-3xl font-semibold text-snow">{formatPt(v)}</p>
      <p className="mt-1 text-[0.66rem] font-bold tracking-[0.18em] text-snow/50 uppercase">{label}</p>
    </div>
  );
}

export default function Instagram() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section id="instagram" className="relative bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
          {/* perfil */}
          <Reveal>
            <p className="flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.26em] text-gold-600 uppercase">
              <span className="h-px w-12 bg-gold-500" />
              Nas redes
            </p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.06] font-semibold tracking-tight text-coal-950">
              Acompanhe o dia a dia
              <em className="font-medium text-gold-600 italic"> no Instagram</em>.
            </h2>
            <p className="mt-4 max-w-md font-light text-ink/65">
              Bastidores da clínica, resultados reais, dicas de saúde bucal para todas as
              idades e novidades de harmonização facial.
            </p>

            <div
              ref={ref}
              className="mt-8 flex flex-col gap-8 rounded-[2rem] bg-coal-950 p-8 shadow-[0_45px_90px_-45px_rgba(15,17,19,0.7)]"
            >
              <div className="flex items-center gap-5">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 ring-2 ring-gold-300 ring-offset-4 ring-offset-coal-950">
                  <span className="font-display text-2xl font-bold text-coal-950">P</span>
                </span>
                <div>
                  <p className="font-display text-xl font-semibold text-snow">Prime Odontologia</p>
                  <p className="text-sm font-light text-gold-300">{CLINIC.instagramHandle}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-snow/10 pt-7">
                <Stat value={102} label="Publicações" start={inView} />
                <Stat value={1516} label="Seguidores" start={inView} />
                <Stat value={784} label="Seguindo" start={inView} />
              </div>

              <a
                href={CLINIC.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold w-full px-6 py-3.5 text-sm"
              >
                <InstaIcon className="h-4.5 w-4.5" />
                Seguir {CLINIC.instagramHandle}
              </a>
            </div>
          </Reveal>

          {/* mosaico do feed */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 100} className={i === 0 ? "col-span-2 sm:col-span-1" : ""}>
                <a
                  href={CLINIC.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver publicação sobre ${s.name} no Instagram`}
                  className={`group relative block overflow-hidden rounded-2xl bg-snow p-2.5 ring-1 ring-coal-900/10 transition-all duration-500 hover:-translate-y-1.5 hover:ring-gold-500/70 hover:shadow-[0_30px_60px_-30px_rgba(15,17,19,0.5)] ${
                    i === 0 ? "aspect-[2.15/1] sm:aspect-[4/5]" : "aspect-[4/5]"
                  }`}
                >
                  <img
                    src={s.img}
                    alt=""
                    loading="lazy"
                    className="absolute inset-2.5 h-[calc(100%-1.25rem)] w-[calc(100%-1.25rem)] rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-2.5 flex items-end rounded-xl bg-gradient-to-t from-coal-950/80 via-coal-950/10 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="flex items-center gap-2 text-[0.8rem] font-semibold text-snow">
                      <span className="flex gap-2.5">
                        <span className="flex items-center gap-1">
                          <HeartIcon className="h-4 w-4 text-gold-300" /> 240+
                        </span>
                        <span className="flex items-center gap-1">
                          <StarIcon className="h-3.5 w-3.5 text-gold-300" /> {s.name}
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-coal-900/60 bg-snow text-gold-600 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <InstaIcon className="h-4 w-4" />
                  </span>
                </a>
              </Reveal>
            ))}

            {/* tile dourado — convite */}
            <Reveal delay={420}>
              <a
                href={CLINIC.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex aspect-[4/5] flex-col items-center justify-center gap-4 rounded-2xl bg-coal-950 p-6 text-center ring-1 ring-gold-500/30 transition-all duration-500 hover:-translate-y-1.5 hover:ring-gold-500/80"
              >
                <InstaIcon className="h-9 w-9 text-gold-400 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
                <span className="font-display text-lg leading-snug font-medium text-snow italic">
                  +100 posts com resultados reais
                </span>
                <span className="rounded-full border border-gold-500/50 px-4 py-1.5 text-[0.68rem] font-bold tracking-[0.16em] text-gold-300 uppercase">
                  Ver o feed completo
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
