import React from "react";
import logo from "../../../assets/logo.png";

const Logo: React.FC = () => (
  <div className="flex items-center space-x-12">
    <img src={logo} alt="Logo" className="h-12" />
  </div>
);

export default Logo;
