import React from "react";
import { CheckCircle } from "lucide-react";
import { ArrowRight } from "lucide-react";
const MentorshipPromoSection = () => {
  return (
    <div className="flex flex-col items-center xl:items-start xl:flex-row gap-24 bg-gray-100 py-16 p-8 sm:p-16 lg:p-28 rounded-lg">
      {/* CARD SECTION */}
      <div className="relative w-[260px] sm:w-[350px] h-96 hover:scale-105 transition-all duration-300 cursor-pointer ">
        {/* Background rotated card */}
        <div className="absolute top-0 left-2 sm:left-5 bg-white rotate-6 w-full h-full shadow-md rounded-lg"></div>
        {/* Main front card */}
        <div className="absolute top-0 left-0 bg-white w-full h-full shadow-md rounded-lg z-10 p-6">
          <div className="flex gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Kaan Peksen</h3>
              <p className="text-gray-500 text-xs lg:text-sm">
                Software Engineer at Google
              </p>
            </div>
            <div>
              <img
                src="https://thispersondoesnotexist.com/"
                alt="Kaan Peksen"
                className="w-14 h-14 xl:w-16 xl:h-16 rounded-full"
              />
            </div>
          </div>

          <div className="text-gray-800 mt-4 w-full font-bold bg-gray-100 rounded-lg p-2 px-4 text-sm flex justify-between items-center">
            <p>Mentorship</p>
            <p className="text-blue-600 font-extrabold">800₺/saat</p>
          </div>

          <ul className="border-t border-gray-200 mt-3 pt-6 flex flex-col gap-6">
            <li className="w-full bg-gray-100 rounded-lg p-2 px-4 text-sm flex gap-2 items-center font-bold">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <p>1'e 1 Görüşme</p>
            </li>
            <li className="w-full bg-gray-100 rounded-lg p-2 px-4 text-sm flex gap-2 items-center font-bold">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <p>Ilk Görüşme Ücretsiz</p>
            </li>
            <li className="w-full bg-gray-100 rounded-lg p-2 px-4 text-sm flex gap-2 items-center font-bold">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <p>Uzman tavsiyeler</p>
            </li>
          </ul>
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="flex-1 ">
        <h2 className="text-2xl lg:text-4xl font-extrabold mb-4">
          Sana en uygun mentoru bul
        </h2>
        <p className="mb-4 font-medium leading-8 text-base xl:text-lg text-gray-700">
          Hayalindeki kariyere adım atmak mı istiyorsun? Kendi girişimini kurma
          hayalin mi var? Ya da geleceği şekillendiren yetenekleri öğrenmek için
          sabırsızlanıyor musun? Yanında seni gerçekten anlayan bir mentor
          olduğunda, bu yolculuk çok daha kolay ve etkili olabilir.{" "}
          <span className="font-extrabold text-blue-600">Mentorbul</span> ile
          deneyimli mentorlarla ile deneyimli mentorlarla tanış, sorularına
          yanıt al, hedeflerine daha hızlı ulaş.
        </p>
        <p className="text-base xl:text-lg font-medium text-gray-700">
          Başarıya giden yolda mentorun yanında!
        </p>
        <button className="btn-main flex items-center gap-2 mt-8">
          Mentor Bul
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default MentorshipPromoSection;
