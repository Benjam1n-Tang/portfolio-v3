import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { logoPrimary } from "@/assets";
import SwapText from "./SwapText";
import RippleButton from "./ui/RippleButton";

const Navbar = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Works", link: "/works" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header className="absolute top-0 w-full z-20 text-white mix-blend-difference hidden xl:flex">
        <nav className="w-full py-[3rem] md:px-[2.5rem] px-5 flex justify-between items-center ">
          <aside className="flex items-center px-4">
            {" "}
            <Image
              src={logoPrimary}
              alt="Logo"
              height="48"
              className="cursor-pointer"
            />{" "}
          </aside>
          <aside className="flex flex-row gap-[3rem] items-center justify-between">
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
            <div>
              {/* <Button className="uppercase px-6 py-6 rounded-full font-lg font-neue-montreal bg-[#B8DBD9] text-black font-medium tracking-wide">
                {" "}
                Download CV{" "}
              </Button> */}
              <RippleButton
                className="uppercase px-6 rounded-full font-lg font-neue-montreal bg-[#839B9A] text-black font-medium tracking-wide"
                rippleColor1="#A7C7C5"
                rippleColor2="#B8DBD9"
              >
                Download CV
              </RippleButton>
            </div>
          </aside>
        </nav>
      </header>

      {/* Mobile Navbar */}
      <header className="absolute top-0 w-full z-20 text-white flex xl:hidden">
        <nav className="w-full py-[3rem] md:px-[2.5rem] px-5 flex justify-between items-center">
          <aside className="flex items-center px-4 text-white">
            <Image
              src={logoPrimary}
              alt="Logo"
              height="48"
              className="cursor-pointer mix-blend-difference"
            />
          </aside>
          <aside>hello world</aside>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
