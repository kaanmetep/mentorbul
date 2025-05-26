"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Mail } from "lucide-react";
import { faqData } from "@/constants";
import Link from "next/link";
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
      <div className="flex-1 mt-4">
        <h3 className="text-2xl lg:text-4xl font-bold">
          Aklında bir soru mu var?
        </h3>
        <p className="text-gray-600 mt-4 lg:w-[70%] w-full">
          Sıkça sorulan soruları burada bulabilirsin. Eğer sorunu burada
          bulamadıysan, lütfen{" "}
          <Link
            href="/sorular"
            className="text-blue-600 cursor-pointer underline"
          >
            Sıkça Sorulan Sorular Sayfasına
          </Link>{" "}
          göz at veya bize ulaş.
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Mail className="w-6 h-6 text-blue-600" />
          <p className="text-gray-600">
            <a href="mailto:info@mentorbul.com">help@mentorbul.com</a>
          </p>
        </div>
      </div>
      <div className="flex-[1.6]">
        <ul className="flex flex-col gap-8">
          {faqData.map((faq) => (
            <li key={faq.id} className="flex flex-col">
              <div
                onClick={() => toggleAnswer(faq.id)}
                className="text-base md:text-lg lg:text-xl font-bold cursor-pointer flex items-center justify-between mb-2 hover:text-blue-600 transition-all duration-300 hover:bg-gray-100 p-4 rounded-lg"
              >
                {faq.question}
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 ${
                    activeIndex === faq.id ? "rotate-180" : ""
                  } transition-transform duration-300`}
                />
              </div>
              <div
                className={`text-base lg:text-lg text-gray-600 p-4 py-0 ${
                  activeIndex === faq.id ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQSection;
