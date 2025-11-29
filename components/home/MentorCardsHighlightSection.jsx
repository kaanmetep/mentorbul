import React from "react";
import { CheckCircle, UserCircle } from "lucide-react";

const mentors = [
  {
    name: "Kaan Peksen",
    title: "Software Engineer at Google",
    price: "800₺/saat",
    img: "https://thispersondoesnotexist.com/",
  },
  {
    name: "Ayla S.",
    title: "Product Manager at Trendyol",
    price: "600₺/saat",
    img: "https://thispersondoesnotexist.com/",
  },
  {
    name: "Mert T.",
    title: "UX Designer at Getir",
    price: "500₺/saat",
    img: "https://thispersondoesnotexist.com/",
  },
];

const MentorCardsHighlightSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white via-blue-200 to-blue-300" />

      {/* Decorative shapes */}
      <svg
        className="hidden lg:block absolute top-10 left-10 w-8 h-8 opacity-30 z-0"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="50" fill="#60A5FA" />
      </svg>
      <svg
        className="hidden lg:block absolute bottom-16 right-24 w-10 h-10 opacity-20 z-0"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon points="0,100 100,100 50,0" fill="#2563EB" />
      </svg>

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center py-36">
        <h3 className="w-[80%]  lg:w-[55%] text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-4">
          Sektörün deneyimli isimleri ve esnek fiyatlı mentorluk paketleri bir
          arada.
        </h3>
        <p className="w-[80%]  lg:w-[55%] text-center text-gray-600  text-sm md:text-base lg:text-lg xl:text-xl mb-8">
          Mentorlar ve hizmetlerden oluşan özenle seçilmiş koleksiyonumuza göz
          at. Sözleşme yok, gizli ücret yok – sadece hızlandırılmış profesyonel
          gelişim. Farklı sektörlerden uzman mentorlar tek bir platformda.
        </p>
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              className="bg-white w-full md:w-72 lg:w-80 shadow-md rounded-lg p-4 md:p-6 flex-1"
            >
              <div className="flex justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {mentor.name}
                  </h3>
                  <p className="text-gray-500 text-sm lg:text-base">
                    {mentor.title}
                  </p>
                </div>
                <div>
                  <UserCircle className="w-12 h-12 xl:w-14 xl:h-14 text-gray-400" />
                </div>
              </div>

              <div className="text-gray-800 mt-4 w-full font-bold bg-gray-100 rounded-lg p-3 px-4 text-sm flex justify-between items-center">
                <p>Mentorship</p>
                <p className="text-blue-600 font-extrabold">{mentor.price}</p>
              </div>

              <ul className="border-t border-gray-200 mt-4 pt-4 flex flex-col gap-3">
                <li className="w-full bg-gray-100 rounded-lg p-3 px-4 text-sm flex gap-2 items-center font-bold">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <p>1'e 1 Görüşme</p>
                </li>
                <li className="w-full bg-gray-100 rounded-lg p-3 px-4 text-sm flex gap-2 items-center font-bold">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <p>Ilk Görüşme Ücretsiz</p>
                </li>
                <li className="w-full bg-gray-100 rounded-lg p-3 px-4 text-sm flex gap-2 items-center font-bold">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <p>Uzman tavsiyeler</p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorCardsHighlightSection;
