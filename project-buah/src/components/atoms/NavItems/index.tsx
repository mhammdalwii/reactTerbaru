import React from "react";

interface NavItemProps {
  label: string;
  href: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, isActive = false }) => (
  <a href={href} className={`text-white font-semibold px-4 hover:text-gray-200 ${isActive ? "text-white underline underline-offset-4" : ""}`}>
    {label}
  </a>
);

export default NavItem;
