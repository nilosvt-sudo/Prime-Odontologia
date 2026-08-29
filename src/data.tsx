import type { ReactNode } from "react";
import { IMG, waLink } from "./config";
import { FaceIcon, ImplantIcon, KidToothIcon, SparkIcon } from "./components/Icons";

/* ---------------- Serviços ---------------- */

export type Service = {
  id: string;
  num: string;
  name: string;
  tag: string;
  short: string;
  description: string;
  bullets: string[];
  img: string;
  icon: ReactNode;
  meta: [string, string];
};

export const SERVICES: Service[] = [
  {
    id: "implantes",
    num: "01",
    name: "Implantes Dentários",
    tag: "Reabilitação oral",
    short: "Volte a sorrir, falar e mastigar com segurança.",
    description:
      "O implante de titânio substitui a raiz do dente perdido e devolve função e estética de forma definitiva. Na Prime, cada caso é planejado digitalmente para um resultado natural, estável e confortável — do início ao fim.",
    bullets: [
      "Planejamento digital guiado",
      "Cirurgia minimamente invasiva",
      "Materiais de alta performance",
      "Possibilidade de carga imediata",
      "Acompanhamento em todas as fases",
      "Resultado estético natural",
    ],
    img: IMG.implantes,
    icon: <ImplantIcon className="h-7 w-7" />,
    meta: ["Anestesia local", "1–2 sessões cirúrgicas"],
  },
  {
    id: "clareamento",
    num: "02",
    name: "Clareamento Dental",
    tag: "Estética do sorriso",
    short: "Dentes visivelmente mais brancos, com segurança.",
    description:
      "Protocolo supervisionado por dentista, combinando sessões em consultório e moldeiras personalizadas para uso em casa. O resultado? Um sorriso mais branco e luminoso — sem sensibilidade e sem riscos ao esmalte.",
    bullets: [
      "Supervisão profissional completa",
      "Moldeiras sob medida para você",
      "Tecnologia LED de última geração",
      "Protocolo anti-sensibilidade",
      "Resultados visíveis em poucas sessões",
      "Kit de manutenção domiciliar",
    ],
    img: IMG.clareamento,
    icon: <SparkIcon className="h-7 w-7" />,
    meta: ["Sessões de ~45 min", "Resultado em 2–3 semanas"],
  },
  {
    id: "harmonizacao",
    num: "03",
    name: "Harmonização Facial",
    tag: "Estética avançada",
    short: "Realce seus traços com naturalidade.",
    description:
      "Procedimentos minimamente invasivos que equilibram os traços do rosto e suavizam sinais do tempo. A avaliação facial é individualizada: o objetivo é realçar a sua beleza — nunca descaracterizar quem você é.",
    bullets: [
      "Toxina botulínica",
      "Preenchimento labial e facial",
      "Bioestimuladores de colágeno",
      "Avaliação facial individualizada",
      "Resultados sutis e naturais",
      "Profissionais habilitados pelo CRO",
    ],
    img: IMG.harmonizacao,
    icon: <FaceIcon className="h-7 w-7" />,
    meta: ["Procedimento em consultório", "Retorno incluso"],
  },
  {
    id: "odontopediatria",
    num: "04",
    name: "Odontopediatria",
    tag: "Saúde desde cedo",
    short: "Cuidado lúdico para os primeiros sorrisos.",
    description:
      "A primeira infância define a saúde bucal de toda a vida. Aqui, a consulta é leve, lúdica e sem medo: prevenimos cáries, acompanhamos o crescimento e criamos uma relação de carinho das crianças com o dentista.",
    bullets: [
      "Primeira consulta do bebê",
      "Aplicação de flúor e selantes",
      "Atendimento lúdico, sem trauma",
      "Orientação de higiene para os pais",
      "Acompanhamento da troca dentária",
      "Ambiente acolhedor para os pequenos",
    ],
    img: IMG.odonto,
    icon: <KidToothIcon className="h-7 w-7" />,
    meta: ["A partir dos 6 meses", "Consultas preventivas"],
  },
];

export const serviceWa = (name: string) =>
  waLink(`Olá! Gostaria de agendar uma avaliação de *${name}* na Prime Odontologia. 🙂`);

/* ---------------- Públicos ---------------- */

export type Audience = {
  eyebrow: string;
  title: string;
  copy: string;
  points: string[];
  img: string;
  imgAlt: string;
  cta: string;
  theme: "mint" | "pine" | "blush";
};

export const AUDIENCES: Audience[] = [
  {
    eyebrow: "Para famílias",
    title: "Um só lugar para todas as idades da casa",
    copy: "Do primeiro dentinho do bebê ao sorriso dos avós: a Prime reúne as especialidades que a sua família precisa em um ambiente acolhedor, no coração de Bicas. Menos deslocamento, mais cuidado contínuo.",
    points: [
      "Odontopediatria com atendimento lúdico",
      "Prevenção e limpeza para adultos",
      "Histórico de toda a família em um só lugar",
    ],
    img: IMG.familia,
    imgAlt: "Família de três gerações sorrindo junta",
    cta: "Agendar para minha família",
    theme: "mint",
  },
  {
    eyebrow: "Para jovens & estética",
    title: "A primeira impressão que você escolhe deixar",
    copy: "Clareamento dental e harmonização facial com planejamento individualizado. Resultados reais e naturais para fotos, entrevistas, festas e para a sua autoestima — todos os dias.",
    points: [
      "Clareamento supervisionado e seguro",
      "Harmonização facial com resultado sutil",
      "Avaliação estética personalizada",
    ],
    img: IMG.harmonizacao,
    imgAlt: "Procedimento de harmonização facial em clínica",
    cta: "Quero uma avaliação estética",
    theme: "pine",
  },
  {
    eyebrow: "Para 60+ & reabilitação",
    title: "Voltar a mastigar, sorrir e viver sem limites",
    copy: "Implantes e reabilitação oral devolvem a segurança para comer o que você gosta e sorrir sem medo. Atendimento paciente, no seu ritmo, com todo o conforto que você merece.",
    points: [
      "Implantes com planejamento digital",
      "Próteses fixas e confortáveis",
      "Acompanhamento próximo em cada etapa",
    ],
    img: IMG.reabilitacao,
    imgAlt: "Paciente sênior sorrindo após tratamento de implante na clínica Prime Odontologia",
    cta: "Agendar avaliação de implante",
    theme: "blush",
  },
];

/* ---------------- Depoimentos ---------------- */

export type Testimonial = {
  quote: string;
  name: string;
  treatment: string;
  avatar: string;
  rating?: number;
  timeAgo?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Eu tinha vergonha de sorrir nas fotos. Fiz o clareamento na Prime e o resultado superou o que eu imaginava — sem nenhuma sensibilidade. Hoje sorrio em todas as fotos!",
    name: "Mariana Rezende",
    treatment: "Clareamento dental",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    timeAgo: "há 2 semanas",
  },
  {
    quote:
      "Depois de anos adiando, fiz meus implantes na Prime. Fui acolhido do início ao fim, a cirurgia foi tranquila e voltei a comer de tudo. Só me arrependo de não ter feito antes.",
    name: "Carlos Eduardo",
    treatment: "Implantes dentários",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    timeAgo: "há 1 mês",
  },
  {
    quote:
      "Meu filho de 5 anos pede para ir ao dentista. Pede! O atendimento com as crianças é encantador, cheio de paciência e carinho. A Prime virou a clínica da nossa família.",
    name: "Fernanda & Theo",
    treatment: "Odontopediatria",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    timeAgo: "há 3 semanas",
  },
  {
    quote:
      "Aos 67 anos voltei a sorrir com confiança. Fui tratada com um respeito e uma paciência que não se vê em todo lugar. Recomendo de olhos fechados para quem tem mais idade.",
    name: "Zélia Monteiro",
    treatment: "Reabilitação oral",
    avatar: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    timeAgo: "há 2 meses",
  },
  {
    quote:
      "Fiz harmonização facial e o resultado ficou tão natural que todo mundo perguntou se eu tinha descansado. Profissionalismo e bom gosto do começo ao fim.",
    name: "Juliana Castro",
    treatment: "Harmonização facial",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    timeAgo: "há 1 mês",
  },
];

/* ---------------- Casos Clínicos (Antes & Depois) ---------------- */

export type ClinicalCase = {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  duration: string;
  tag: string;
};

export const BEFORE_AFTER_CASES: ClinicalCase[] = [
  {
    id: "clareamento-case",
    title: "Clareamento Dental Supervisionado",
    category: "Estética & Luminosidade",
    description: "Remoção de pigmentos profundos e clareamento expressivo com preservação total do esmalte e conforto durante todo o protocolo.",
    beforeImg: "/images/clareamento-antes.jpg",
    afterImg: "/images/clareamento-depois.jpg",
    duration: "Protocolo Prime",
    tag: "Resultado Real",
  },
  {
    id: "alinhamento-case",
    title: "Alinhamento & Lentes Cerâmicas",
    category: "Harmonia & Simetria",
    description: "Fechamento de diastema e reanatomização dos dentes anteriores proporcionando um sorriso simétrico e radiante.",
    beforeImg: "/images/lentes-antes.jpg",
    afterImg: "/images/lentes-depois.jpg",
    duration: "3 semanas",
    tag: "Design Digital",
  },
  {
    id: "implante-case",
    title: "Implante & Reabilitação Oral",
    category: "Função & Estética",
    description: "Substituição de elemento ausente por implante com guia cirúrgica digital e coroa em porcelana pura.",
    beforeImg: "/images/implante-antes.jpg",
    afterImg: "/images/implante-depois.jpg",
    duration: "Carga Imediata",
    tag: "Cirurgia Guiada",
  },
];

/* ---------------- FAQ ---------------- */

export const FAQS = [
  {
    q: "Colocar implante dói?",
    a: "Não. O procedimento é feito com anestesia local e técnicas minimamente invasivas, então você não sente dor durante a cirurgia. No pós-operatório, o desconforto é leve e controlado com medicação comum — a maioria dos pacientes retorna à rotina já no dia seguinte.",
  },
  {
    q: "A partir de que idade meu filho deve ir ao dentista?",
    a: "A primeira visita é recomendada já no primeiro ano de vida, quando nasce o primeiro dentinho. Além de prevenir cáries precoces, essa consulta orienta os pais sobre higiene, alimentação e hábitos como chupeta e mamadeira.",
  },
  {
    q: "Clareamento dental estraga o esmalte?",
    a: "Quando supervisionado por um dentista, não. Usamos géis em concentrações seguras e protocolos anti-sensibilidade. O risco aparece em produtos caseiros sem orientação — por isso a supervisão profissional faz toda a diferença.",
  },
  {
    q: "Harmonização facial fica artificial?",
    a: "O segredo está na avaliação e na dose. Nosso objetivo é realçar os seus traços com sutileza: suavizar rugas, equilibrar proporções e devolver viço — sem mudar quem você é. Os resultados são progressivos e naturais.",
  },
  {
    q: "Vocês atendem convênios ou só particular?",
    a: "Atendemos particular e alguns convênios odontológicos. Entre em contato pelo WhatsApp com o nome do seu plano e confirmamos rapidinho se há cobertura para o tratamento que você procura.",
  },
  {
    q: "Como faço para agendar uma avaliação?",
    a: "É simples: clique em qualquer botão \"Agendar\" do site e fale direto com a nossa equipe no WhatsApp, ou chame @clinica.primeodonto no Instagram. Respondemos rápido e já sugerimos os horários disponíveis.",
  },
];

/* ---------------- Números ---------------- */

export const STATS = [
  { value: 10, suffix: "+", decimals: 0, label: "anos cuidando de sorrisos" },
  { value: 1500, suffix: "+", decimals: 0, label: "sorrisos transformados" },
  { value: 4, suffix: "", decimals: 0, label: "especialidades reunidas" },
  { value: 5, suffix: "", decimals: 1, label: "avaliação dos pacientes" },
];

export const MARQUEE_ITEMS = [
  "Implantes dentários",
  "Clareamento dental",
  "Harmonização facial",
  "Odontopediatria",
  "Próteses & reabilitação",
  "Avaliação personalizada",
];

export const HASHTAGS = [
  "#PrimeOdontologia",
  "#BicasMG",
  "#HarmonizacaoFacial",
  "#Odontopediatria",
  "#ImplantesDentarios",
  "#ClareamentoDental",
  "#SorrisoPrime",
];
