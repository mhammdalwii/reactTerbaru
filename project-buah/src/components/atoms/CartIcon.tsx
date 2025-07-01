import React from "react";
import { ShoppingCart } from "lucide-react";

const CartIcon: React.FC = () => (
  <div className="flex flex-col items-center text-white">
    <ShoppingCart size={20} />
    <span className="text-xs font-semibold mt-1">My Cart</span>
  </div>
);

export default CartIcon;
