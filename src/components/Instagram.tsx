import { motion } from "motion/react";
import { CLINIC } from "../config";
import { SERVICES } from "../data";
import { formatPt, Reveal, useCountUp, useInView, usePrefersReducedMotion } from "../hooks";
import { HeartIcon, InstaIcon, StarIcon } from "./Icons";
import Magnetic from "./Magnetic";
import SpotlightCard from "./SpotlightCard";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl sm:text-3xl font-semibold text-snow">{value}</p>
      <p className="mt-1 text-[0.66rem] font-bold tracking-[0.18em] text-snow/50 uppercase">{label}</p>
    </div>
  );
}

const INSTA_POSTS = [
  {
    id: "dra-rafaela",
    img: "/images/insta-1.jpg",
    title: "Dra. Rafaela Martins",
    subtitle: "Clínico Adulto · Cirurgia · Canal · Prótese",
    likes: "280+",
  },
  {
    id: "dra-barbara",
    img: "/images/insta-2.jpg",
    title: "Dra. Bárbara Azzi",
    subtitle: "Ortodontia · Atendimento Infantil · Cirurgia",
    likes: "340+",
  },
  {
    id: "dra-marcileia",
    img: "/images/insta-3.jpg",
    title: "Dra. Marciléia Ribeiro",
    subtitle: "Bucomaxilofacial · Implantodontia · Prótese",
    likes: "410+",
  },
  {
    id: "equipe-prime",
    img: "/images/insta-4.jpg",
    title: "Equipe Prime Odontologia",
    subtitle: "Dia do Amigo · Cuidado e Alegria no Atendimento",
    likes: "520+",
  },
];

export default function Instagram() {
  const reduced = usePrefersReducedMotion();

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
              Acompanhe o dia a dia{" "}
              <em className="font-medium text-gold-600 italic">no Instagram.</em>
            </h2>
            <p className="mt-4 max-w-md font-light text-ink/65">
              Conheça nossas especialistas, bastidores da clínica, resultados reais e dicas de saúde bucal para toda a sua família.
            </p>

            <SpotlightCard
              spotlightColor="rgba(194, 154, 71, 0.22)"
              className="mt-8 rounded-[2rem] bg-coal-950 p-8 shadow-[0_45px_90px_-45px_rgba(15,17,19,0.7)]"
            >
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-5">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 ring-2 ring-gold-300 ring-offset-4 ring-offset-coal-950">
                    <span className="font-display text-2xl font-bold text-coal-950">P</span>
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold text-snow">Prime Odontologia</p>
                    <p className="text-sm font-light text-gold-300">{CLINIC.instagramHandle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-snow/10 pt-7 text-center">
                  <Stat value="102" label="Publicações" />
                  <Stat value="1.516" label="Seguidores" />
                  <Stat value="784" label="Seguindo" />
                </div>

                <Magnetic className="w-full">
                  <motion.a
                    whileHover={reduced ? undefined : { scale: 1.02 }}
                    whileTap={reduced ? undefined : { scale: 0.98 }}
                    href={CLINIC.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-gold w-full px-6 py-3.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <InstaIcon className="h-4.5 w-4.5" />
                    Seguir {CLINIC.instagramHandle}
                  </motion.a>
                </Magnetic>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* mosaico do feed com os 4 posts reais */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {INSTA_POSTS.map((post, i) => (
              <Reveal key={post.id} delay={i * 100}>
                <a
                  href={CLINIC.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver publicação de ${post.title} no Instagram`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-snow p-2 ring-1 ring-coal-900/10 shadow-[0_20px_45px_-20px_rgba(15,17,19,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:ring-gold-500/70 hover:shadow-[0_30px_60px_-25px_rgba(15,17,19,0.5)]"
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-2 flex flex-col justify-end rounded-xl bg-gradient-to-t from-coal-950/85 via-coal-950/20 to-transparent p-3.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="font-display text-sm font-semibold text-snow">
                      {post.title}
                    </span>
                    <span className="text-[0.68rem] text-gold-300 font-light line-clamp-1">
                      {post.subtitle}
                    </span>
                    <span className="mt-1.5 flex items-center gap-1.5 text-[0.72rem] font-semibold text-snow/90">
                      <HeartIcon className="h-3.5 w-3.5 text-gold-400" /> {post.likes}
                    </span>
                  </span>
                  <span className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full border border-coal-900/60 bg-snow text-gold-600 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <InstaIcon className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
