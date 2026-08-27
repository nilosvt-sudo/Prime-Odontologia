import { SparkIcon } from "./Icons";

export default function Marquee({
  items,
  reverse = false,
  tone = "coal",
}: {
  items: string[];
  reverse?: boolean;
  tone?: "coal" | "gold" | "light";
}) {
  const tones = {
    coal: "bg-coal-950 text-gold-300",
    gold: "bg-gold-500 text-coal-950",
    light: "bg-gold-100 text-coal-800",
  } as const;

  const Row = ({ hidden = false }: { hidden?: boolean }) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display px-6 text-lg font-medium tracking-wide italic sm:px-8 sm:text-xl">
            {item}
          </span>
          <SparkIcon className="h-5 w-5 opacity-70" />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden py-4 ${tones[tone]}`}>
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
