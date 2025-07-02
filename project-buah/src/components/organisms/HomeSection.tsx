import React from "react";
import HeroContent from "../molecules/HeroContent";
import farmerImage from "../../assets/farmer.png";

const HomeSection: React.FC = () => (
  <section className="bg-[#7E181B] py-12 md:py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
    <HeroContent />
    <div className="relative mt-20 md:mt-0 md:-ml-24">
      <img src={farmerImage} alt="Farmer Holding Fruit" className="w-72 md:w-[400px] object-cover" />
    </div>
  </section>
);

export default HomeSection;
