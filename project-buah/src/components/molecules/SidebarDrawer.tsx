import React from "react";
import { X } from "lucide-react";
import NavMenu from "./NavMenu";
import CartIcon from "../atoms/CartIcon";

interface SidebarDrawerProps {
  open: boolean;
  onClose: () => void;
}

const SidebarDrawer: React.FC<SidebarDrawerProps> = ({ open, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-yellow-400 p-6 shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
      <div className="flex justify-between items-center mb-6">
        <span className="text-xl font-bold text-white">Menu</span>
        <button onClick={onClose} className="text-white">
          <X size={24} />
        </button>
      </div>

      <NavMenu direction="vertical" />
      <div className="mt-6">
        <CartIcon />
      </div>
    </div>
  );
};

export default SidebarDrawer;
