import React, { useState } from "react";
import Logo from "../atoms/Logo";
import NavMenu from "../molecules/NavMenu";
import CartIcon from "../atoms/CartIcon";
import { Menu } from "lucide-react";
import SidebarDrawer from "../molecules/SidebarDrawer";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-yellow-400 py-4 relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <NavMenu />
          <CartIcon />
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Drawer */}
      <SidebarDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Navbar;
