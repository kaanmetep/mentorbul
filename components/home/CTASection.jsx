import React from "react";
import { ArrowRight } from "lucide-react";
const CTASection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white p-10 lg:p-20 rounded-lg flex flex-col items-center overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-64 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>

      <h2 className="text-4xl lg:text-5xl font-extrabold text-center relative z-10">
        Mentorbul'a katıl ve hayallerine ulaş!
      </h2>
      <p className="text-center text-lg lg:text-xl mt-8 w-full lg:w-1/2 mx-auto font-semibold leading-9 relative z-10">
        Destek arayan bir mentee misin? Yoksa deneyimlerini paylaşmak isteyen
        bir mentorsan mı? O halde doğru yerdesin! Hemen aramıza katıl ve tamamen
        ücretsiz bir şekilde profilini oluştur.
      </p>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 mt-8 relative z-10">
        <button className="btn-main mt-8 flex items-center gap-2">
          Mentor Ol
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="btn-main mt-8 flex items-center gap-2">
          Mentee Ol
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CTASection;
