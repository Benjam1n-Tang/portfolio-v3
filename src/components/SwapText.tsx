
interface SwapTextProps {
  text: string;
}

const SwapText = ({ text }: SwapTextProps) => {
  const chars = Array.from(text);

  return (
    <span className="text-white font-neue-montreal uppercase font-medium relative block text-lg overflow-hidden whitespace-nowrap leading-[0.9]">
      {/* top */}
      <span className="block">
        {chars.map((char, i) => (
          <span
            key={`top-${i}`}
            className="inline-block will-change-transform transition-transform group-hover:-translate-y-[110%]"
            style={{
              transitionDuration: "250ms",
              transitionDelay: `${i * 25}ms`,
              transitionTimingFunction: "ease-in-out",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      {/* bottom */}
      <span className="absolute inset-0">
        {chars.map((char, i) => (
          <span
            key={`bottom-${i}`}
            className="inline-block will-change-transform transition-transform translate-y-[110%] group-hover:translate-y-0"
            style={{
              transitionDuration: "250ms",
              transitionDelay: `${i * 25}ms`,
              transitionTimingFunction: "ease-in-out",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  );
};

export default SwapText;
