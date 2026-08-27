import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

/* Dente molar */
export const ToothIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M8.2 3.4c-2.9 0-4.5 2.3-4.5 5.2 0 5 2.3 12 4.7 12 2.1 0 1.5-6.4 3.6-6.4s1.5 6.4 3.6 6.4c2.4 0 4.7-7 4.7-12 0-2.9-1.6-5.2-4.5-5.2-1.6 0-2.7 1-3.8 1s-2.2-1-3.8-1Z" />
  </svg>
);

/* Implante: coroa + parafuso */
export const ImplantIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M8.5 3h7c.4 1.8-.8 3.4-3.5 3.4S8.1 4.8 8.5 3Z" />
    <path d="M9 6.6h6l-1 3H10l-1-3Z" />
    <path d="M9.6 10.4h4.8M10 13.4h4M10.4 16.4h3.2" />
    <path d="M10 9.6c.3 4 .7 8.4 2 10.9 1.3-2.5 1.7-6.9 2-10.9" />
  </svg>
);

/* Brilho / clareamento */
export const SparkIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3.5c.7 4.2 2.3 5.8 6.5 6.5-4.2.7-5.8 2.3-6.5 6.5-.7-4.2-2.3-5.8-6.5-6.5 4.2-.7 5.8-2.3 6.5-6.5Z" />
    <path d="M18.5 15.5c.3 1.9 1 2.7 3 3-2 .3-2.7 1.1-3 3-.3-1.9-1-2.7-3-3 2-.3 2.7-1.1 3-3Z" />
  </svg>
);

/* Perfil com pontos de harmonização */
export const FaceIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M14.5 3.5c3.6 1 5.5 4 5.5 7.6 0 2.6-1 4.4-1 6.4 0 .8-.6 1.5-1.5 1.5H15c-.6 2-1.7 2.5-3.5 2.5-1 0-1.4-.7-1.2-1.6-1.6 0-2.5-.6-2.3-2-.9-.1-1.3-.7-1-1.5-1-.3-1.4-1-.9-1.9L5 12.6c-.7-.9-.3-1.7.6-2.1L7 5.8C8.6 4 11.4 2.7 14.5 3.5Z" />
    <circle cx="13.4" cy="9.2" r="0.4" fill="currentColor" />
    <circle cx="15.8" cy="12.4" r="0.4" fill="currentColor" />
    <circle cx="13" cy="14.8" r="0.4" fill="currentColor" />
  </svg>
);

/* Dentinho feliz — odontopediatria */
export const KidToothIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M9 5.2c-2.3 0-3.6 1.9-3.6 4.2 0 4 1.8 9.4 3.7 9.4 1.7 0 1.2-5 2.9-5s1.2 5 2.9 5c1.9 0 3.7-5.4 3.7-9.4 0-2.3-1.3-4.2-3.6-4.2-1.3 0-2.1.8-3 .8s-1.7-.8-3-.8Z" />
    <circle cx="9.6" cy="9.5" r="0.45" fill="currentColor" />
    <circle cx="14.4" cy="9.5" r="0.45" fill="currentColor" />
    <path d="M10.2 11.6c.6.9 1.2 1.3 1.8 1.3s1.2-.4 1.8-1.3" />
    <path d="M17.5 3.2v2.2M16.4 4.3h2.2" />
  </svg>
);

export const StarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.8l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.1l6.1-.7L12 2.8Z" />
  </svg>
);

export const PinIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s-6.5-5.6-6.5-10.4A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.6C18.5 15.4 12 21 12 21Z" />
    <circle cx="12" cy="10.5" r="2.3" />
  </svg>
);

export const ClockIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const PhoneIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M7.2 3.8 9 3.2c.6-.2 1.2.1 1.5.7l1.2 2.6c.2.5.1 1.1-.3 1.5L9.9 9.4a12.6 12.6 0 0 0 4.7 4.7l1.4-1.5c.4-.4 1-.5 1.5-.3l2.6 1.2c.6.3.9.9.7 1.5l-.6 1.8c-.3 1-1.3 1.7-2.3 1.5-6-1-10.6-5.6-11.6-11.6-.2-1 .5-2 1.5-2.3Z" />
  </svg>
);

export const WhatsIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export const InstaIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const ArrowIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 12h15M13.5 6.5 19 12l-5.5 5.5" />
  </svg>
);

export const PlusIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const ShieldIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3.5 5 6v5.3c0 4.5 2.9 7.6 7 9.2 4.1-1.6 7-4.7 7-9.2V6l-7-2.5Z" />
    <path d="M9 11.8l2.2 2.2L15.4 9.6" />
  </svg>
);

export const CalendarIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="4" y="5.5" width="16" height="14.5" rx="2.5" />
    <path d="M4 10h16M8.5 3.5v3.5M15.5 3.5v3.5" />
    <path d="M8.5 14h2M13.5 14h2M8.5 17h2" />
  </svg>
);

export const HeartIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 20s-7.5-4.6-7.5-10A4.4 4.4 0 0 1 12 7.3 4.4 4.4 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />
  </svg>
);

export const ChatIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.4 3.6c-.6.5-1.6.1-1.6-.8V6.5Z" />
    <path d="M8 9h8M8 12h5" />
  </svg>
);

/* Logotipo: dente sobre disco */
export const LogoMark = ({ className = "" }: { className?: string }) => (
  <span
    className={`inline-flex items-center justify-center rounded-full bg-pine-900 text-mint-300 ${className}`}
  >
    <ToothIcon className="h-[58%] w-[58%]" strokeWidth={2} />
  </span>
);
