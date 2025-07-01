import React from "react";

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-500 text-2xl mr-4">
    {icon}
  </a>
);

export default SocialIcon;
