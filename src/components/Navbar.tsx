import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { logoNav } from "@/assets";
import SwapText from "./SwapText";
import RippleButton from "./ui/RippleButton";
import RippleLogo from "./ui/RippleLogo";
import next from "next";
import { useState } from "react";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

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
          <Link href="/works" className="flex items-center px-4">
            {" "}
            <RippleLogo
              src={logoNav}
              alt="Logo"
              height={54}
              width={54}
              hoverFilterColor="brightness(0)"
            />{" "}
          </Link>
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
                showDownloadIcon
              >
                Download CV
              </RippleButton>
            </div>
          </aside>
        </nav>
      </header>

      {/* Mobile Navbar */}
      <header className="top-0 w-full z-20 text-white flex xl:hidden">
        <nav className="relative w-full py-[2rem] md:px-[2.5rem] px-4 flex justify-end items-center">
          <aside className="flex items-center px-4 text-white absolute z left-2 mix-blend-difference">
            <RippleLogo
              src={logoNav}
              alt="Logo"
              height={48}
              width={48}
              hoverFilterColor="brightness(0)"
            />
          </aside>
          <aside className="bg-[#141D22] p-[0.25rem] rounded-lg">
            <svg
              className={`ham hamRotate ham7 ${isMenuActive ? "active" : ""}`}
              viewBox="0 0 100 100"
              width="48"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              <path
                className="line top"
                d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
              />
              <path className="line middle" d="m 70,50 h -40" />
              <path
                className="line bottom"
                d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
              />
            </svg>
          </aside>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
