"use client";
import React, { useState } from "react";
import { faqData } from "@/constants";
import { ChevronDown, Mail, HelpCircle } from "lucide-react";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12 py-10">
      <div className="mt-2 mb-16 text-center">
        <h2 className="text-4xl font-extrabold mb-3 text-gray-900">
          Sıkça Sorulan Sorular
        </h2>
        <p className="text-gray-500">Aradığın soruyu burada bulamıyor musun?</p>
        <div className="flex flex-col items-center gap-2 justify-center mt-2">
          <p className="text-gray-600 ">Bize hemen ulaş!</p>
          <div className="flex items-center gap-2">
            <Mail className="w-6 h-6 text-blue-600" />
            <p className="text-gray-600">
              <a
                href="mailto:info@mentorbul.com"
                className="hover:underline text-blue-600"
              >
                help@mentorbul.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-x-10 gap-y-6">
        {faqData.map((faq) => (
          <li
            key={faq.id}
            className="bg-white border border-gray-200 shadow-md rounded-xl transition hover:shadow-lg"
          >
            <div
              onClick={() => toggleAnswer(faq.id)}
              className={`cursor-pointer flex items-center justify-between p-5 rounded-t-xl transition-colors ${
                activeIndex === faq.id
                  ? "bg-blue-50 text-blue-700"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-2 text-sm md:text-base lg:text-lg font-semibold">
                <HelpCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-600" />
                {faq.question}
              </div>
              <ChevronDown
                className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-600 transition-transform duration-300 ${
                  activeIndex === faq.id ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out px-5 ${
                activeIndex === faq.id ? "max-h-[300px] py-4" : "max-h-0 py-0"
              } text-gray-700 text-base leading-relaxed`}
            >
              {faq.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;
