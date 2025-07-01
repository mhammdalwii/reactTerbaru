import React from "react";

const Paragraph: React.FC<{ text: string }> = ({ text }) => <p className="text-white mt-4 text-base leading-relaxed">{text}</p>;

export default Paragraph;
