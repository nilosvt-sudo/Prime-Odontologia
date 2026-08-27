import { SparkIcon } from "./Icons";

export default function Marquee({
  items,
  reverse = false,
  tone = "pine",
}: {
  items: string[];
  reverse?: boolean;
  tone?: "pine" | "coral" | "mint";
}) {
  const tones = {
    pine: "bg-pine-900 text-mint-200",
    coral: "bg-coral-500 text-[#fff4ef]",
    mint: "bg-mint-200 text-pine-800",
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
