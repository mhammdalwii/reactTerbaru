import React from "react";
import NavItem from "../atoms/NavItems";

interface NavMenuProps {
  direction?: "vertical" | "horizontal";
}

const NavMenu: React.FC<NavMenuProps> = ({ direction = "horizontal" }) => {
  const className = direction === "horizontal" ? "flex items-center space-x-6" : "flex flex-col space-y-4";

  return (
    <nav className={className}>
      <NavItem label="Home" href="#" isActive />
      <NavItem label="About" href="#" />
      <NavItem label="Blog" href="#" />
      <NavItem label="Review" href="#" />
      <NavItem label="Contact Me" href="#" />
    </nav>
  );
};

export default NavMenu;
