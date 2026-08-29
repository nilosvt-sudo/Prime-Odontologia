/* ------------------------------------------------------------------
   Dados da clínica — edite aqui para atualizar o site inteiro.
------------------------------------------------------------------- */

export const CLINIC = {
  name: "Prime Odontologia",
  brand: { theme: "ouro-grafite", version: "2026.02" },
  city: "Bicas/MG",
  address: "Praça Dr. Vicente Bianco, nº 71 — Centro, Bicas/MG",
  epao: "EPAO 14184",
  rt: "RT: CRO-MG 55084",
  phoneDisplay: "(32) 99840-1535",
  instagramUrl: "https://www.instagram.com/clinica.primeodonto/",
  instagramHandle: "@clinica.primeodonto",
  instagram: { posts: 102, followers: "1.516", following: 784 },
};

/* Número real do WhatsApp da clínica */
export const WHATSAPP_NUMBER = "5532998401535";

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const WA_DEFAULT = waLink(
  "Olá! Vim pelo site da Prime Odontologia e gostaria de agendar uma avaliação. 🙂"
);

export const MAPS_EMBED =
  "https://www.google.com/maps?q=Pra%C3%A7a+Dr.+Vicente+Bianco,+71+-+Bicas%2FMG&output=embed";

export const MAPS_DIR =
  "https://www.google.com/maps/dir/?api=1&destination=Pra%C3%A7a+Dr.+Vicente+Bianco,+71+-+Bicas%2FMG";

export const WAZE_DIR =
  "https://waze.com/ul?q=Pra%C3%A7a+Dr.+Vicente+Bianco,+71+-+Bicas+MG&navigate=yes";

export const HOURS = [
  { day: "Segunda a sexta", time: "08h — 18h" },
  { day: "Sábado", time: "08h — 12h (sob agendamento)" },
  { day: "Domingo", time: "Fechado" },
];

export const IMG = {
  heroSmile: "/hero-image.jpg",
  implantes: "/images/especialidades.jpg",
  clareamento: "/images/clareamento.jpg",
  especialidades: "/images/especialidades.jpg",
  reabilitacao: "/images/reabilitacao-60.jpg",
  harmonizacao:
    "https://image.qwenlm.ai/generated-images/e45836e5-ecc9-4b86-8f81-767ed6f9ef8a/_result.png",
  odonto:
    "https://image.qwenlm.ai/generated-images/6eaddfd0-6dca-46b4-b9f7-a4adba19e621/_result.png",
  clinica:
    "https://image.qwenlm.ai/generated-images/31270cc3-e5bd-49da-9fde-76df8fb0ad26/_result.png",
  familia:
    "https://image.qwenlm.ai/generated-images/e2c5329d-c60f-45b1-96be-8c2acc1d1fff/_result.png",
};
