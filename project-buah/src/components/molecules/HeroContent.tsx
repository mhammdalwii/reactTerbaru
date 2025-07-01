import React from "react";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import SocialIcon from "../atoms/SocialIcon";
import { Instagram, MessageCircle } from "lucide-react";

const HeroContent: React.FC = () => (
  <div className="max-w-xl">
    <Heading title="BUAHTA MAKASSAR" subtitle="Hello, Buahta Makassar" />
    <Paragraph text="Buahta Makassar hadir sebagai solusi kebutuhan buah segar Anda, dengan pilihan buah lokal dan impor yang berkualitas, harga bersahabat, dan pelayanan ramah. Lengkap untuk konsumsi harian, parcel, atau acara spesial." />
    <div className="mt-6 flex items-center">
      <span className="text-white mr-3">Find Me On</span>
      <SocialIcon icon={<Instagram />} href="#" />
      <SocialIcon icon={<MessageCircle />} href="#" />
    </div>
  </div>
);

export default HeroContent;
