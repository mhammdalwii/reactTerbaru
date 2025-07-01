import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => (
  <div>
    {subtitle && <p className="text-sm text-white mb-2">{subtitle}</p>}
    <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 leading-tight">{title}</h1>
  </div>
);

export default Heading;
