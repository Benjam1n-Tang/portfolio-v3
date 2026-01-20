import Link from "next/link";

const SwapText: React.FC<{ text: string }> = ({ text }) => {
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
              className="group text-lg transition-colors duration-200"
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
