import { CLINIC, IMG } from "../config";
import { HASHTAGS } from "../data";
import { Reveal } from "../hooks";
import { ChatIcon, HeartIcon, InstaIcon, ToothIcon } from "./Icons";
import Marquee from "./Marquee";

const TILES = [
  { img: IMG.harmonizacao, label: "Harmonização facial", likes: 132, comments: 18 },
  { img: IMG.odonto, label: "Odontopediatria", likes: 156, comments: 24 },
  { img: IMG.implantes, label: "Implantes", likes: 98, comments: 11 },
  { img: IMG.clareamento, label: "Clareamento", likes: 143, comments: 19 },
  { img: IMG.familia, label: "Família Prime", likes: 171, comments: 26 },
];

export default function Instagram() {
  return (
    <section id="instagram" className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* cabeçalho estilo perfil */}
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal>
            <div className="flex items-center gap-5">
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-pine-900 text-mint-300 ring-4 ring-coral-500/70 ring-offset-4 ring-offset-paper">
                <ToothIcon className="h-10 w-10" strokeWidth={2} />
                <span className="absolute -right-1 -bottom-1 flex h-7 w-7 items-center justify-center rounded-full bg-coral-500 text-[#fff4ef] ring-2 ring-paper">
                  <InstaIcon className="h-4 w-4" />
                </span>
              </span>
              <div>
                <p className="font-display text-2xl font-semibold text-pine-950 sm:text-3xl">
                  {CLINIC.instagramHandle}
                </p>
                <div className="mt-1.5 flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink/65">
                  <span>
                    <strong className="text-pine-900">{CLINIC.instagram.posts}</strong> publicações
                  </span>
                  <span>
                    <strong className="text-pine-900">{CLINIC.instagram.followers}</strong>{" "}
                    seguidores
                  </span>
                  <span>
                    <strong className="text-pine-900">{CLINIC.instagram.following}</strong>{" "}
                    seguindo
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-ink/65">
              Bastidores, antes e depois (com autorização dos pacientes), dicas de saúde bucal
              e o dia a dia da clínica.{" "}
              <strong className="font-semibold text-pine-900">
                Harmonização facial · Odontopediatria · Implantes
              </strong>
              .
            </p>
          </Reveal>

          <Reveal delay={140}>
            <a
              href={CLINIC.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-coral px-7 py-3.5 text-sm"
            >
              <InstaIcon className="h-4.5 w-4.5" />
              Seguir a Prime
            </a>
          </Reveal>
        </div>

        {/* mosaico */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {TILES.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 80} className={i === 4 ? "col-span-2 sm:col-span-1" : ""}>
              <a
                href={CLINIC.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-3xl"
              >
                <img
                  src={tile.img}
                  alt={tile.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-pine-950/85 via-pine-950/20 to-transparent p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <span className="flex items-center gap-4 text-xs font-bold text-mint-100">
                    <span className="flex items-center gap-1.5">
                      <HeartIcon className="h-4 w-4 text-coral-400" /> {tile.likes}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ChatIcon className="h-4 w-4" /> {tile.comments}
                    </span>
                  </span>
                  <span className="font-display mt-1.5 text-sm font-medium text-mint-100 italic">
                    {tile.label}
                  </span>
                  <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-snow/15 text-mint-100 backdrop-blur-sm">
                    <InstaIcon className="h-4.5 w-4.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-14 -rotate-1 scale-[1.02]">
        <Marquee items={HASHTAGS} reverse tone="mint" />
      </div>
    </section>
  );
}
