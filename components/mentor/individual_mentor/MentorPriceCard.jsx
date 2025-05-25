"use client";
import React, { useState, useEffect } from "react";
import { CalendarHeart, Clock, Star } from "lucide-react";

const MentorPriceCard = ({ mentor }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-[390px]">
      <div
        className={`block xl:fixed transition-all duration-300 ${
          scrolled ? "top-4" : "top-44"
        } bg-white shadow-md rounded-lg border border-gray-200 w-[390px]`}
      >
        <div className=" border-b border-blue-300 py-4 flex gap-4 justify-center items-center">
          <h3 className="text-gray-900 font-semibold text-xl text-center">
            {mentor?.name} ile Görüşme Planla
          </h3>
          <CalendarHeart className="w-6 h-6 text-blue-500" />
        </div>
        <div className="p-6 ">
          <p className="text-gray-950 font-semibold text-xl">
            <span className="text-4xl font-extrabold">{mentor?.price}₺/</span>
            saat
          </p>
          <p className="mt-3 text-gray-600">
            Bir mühendis olarak profesyonel anlamda nasıl gelişileceği konusunda
            harika tavsiyeler ve öneriler sunmak için.
          </p>
          <ul className="mt-6  flex flex-col gap-5">
            <li className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-500 shrink-0" />
              <span className="text-gray-600 font-bold ">
                Satın aldıktan{" "}
                <span className="underline">24 saat veya daha az</span> zaman
                içerisinde geri dönüş yapıyor.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-6 h-6 text-blue-500 shrink-0" />
              <span className="text-gray-600 font-bold ">
                {mentor?.rating} (
                <span className="underline cursor-pointer">
                  {mentor?.reviews.length} değerlendirme
                </span>
                )
              </span>
            </li>
          </ul>
          <button className="btn-main-sm mt-6 w-full">
            Hemen Görüşme Planla
          </button>
          <p className="text-gray-500 text-sm mt-6 text-center">
            Satın almadan önce aklında bazı sorular mı var?{" "}
            <span className="underline">Sıkça Sorulan Sorular</span>
            &apos;da cevaplarını bulabilirsin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorPriceCard;
