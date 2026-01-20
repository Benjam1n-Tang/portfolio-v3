import Link from "next/link";

const SwapText: React.FC<{ text: string }> = ({ text }) => {
  const chars = Array.from(text);

  const easeForIndex = (i: number, total: number) => {
    const t = i / Math.max(total - 1, 1);

    // interpolate between two premium easing curves
    const start = [0.19, 1, 0.22, 1]; // heavier
    const end = [0.16, 1.2, 0.24, 1]; // lighter

    const lerp = (a: number, b: number) => a + (b - a) * t;

    return `cubic-bezier(
    ${lerp(start[0], end[0])},
    ${lerp(start[1], end[1])},
    ${lerp(start[2], end[2])},
    ${lerp(start[3], end[3])}
  )`;
  };
  
  return (
    <span className="text-white font-neue-montreal uppercase font-medium relative block text-lg overflow-hidden whitespace-nowrap leading-[0.9]">
      {/* top */}
      <span className="block">
        {chars.map((char, i) => (
          <span
            key={`top-${i}`}
            className="inline-block will-change-transform transition-transform group-hover:-translate-y-[95%]"
            style={{
              transitionDuration: "600ms",
              transitionTimingFunction: easeForIndex(i, chars.length),
            }}
          >
            {char}
          </span>
        ))}
      </span>

      {/* bottom */}
      <span className="absolute inset-0">
        {chars.map((char, i) => (
          <span
            key={`bottom-${i}`}
            className="inline-block will-change-transform transition-transform translate-y-[95%] group-hover:translate-y-0"
            style={{
              transitionDuration: "600ms",
              transitionTimingFunction: easeForIndex(i, chars.length),
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};
const Navbar = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Works", link: "/works" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <nav className="w-full py-[3rem] md:px-[2.5rem] px-5 flex justify-between items-center">
      <h1> LOGO HERE </h1>
      <div>
        <div className="flex flex-row gap-[2.5rem]">
          {menuItems.slice(1).map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className="group text-lg hover:opacity-70 transition-opacity duration-300"
            >
              <SwapText text={item.label} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
