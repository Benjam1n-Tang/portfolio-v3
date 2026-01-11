import React from "react";
import { StaggeredMenu } from "./StaggeredMenu";

const Navbar = () => {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },

    { label: "About", ariaLabel: "Learn about us", link: "/about" },

    { label: "Services", ariaLabel: "View our services", link: "/services" },

    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },

    { label: "GitHub", link: "https://github.com" },

    { label: "LinkedIn", link: "https://linkedin.com" },
  ];
  return (
    <div className="height-[100dvh]">
      <StaggeredMenu isFixed accentColor="#0000ff" />
    </div>
  );
};

export default Navbar;
