import Link from "next/link";
import Shuffle from "./Shuffle";


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
        <div className="flex flex-row gap-8">
          {menuItems.slice(1).map((item) => (
            <Link key={item.label} href={item.link}>
              <label className="font-medium cursor-pointer">
                {item.label}
              </label>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
