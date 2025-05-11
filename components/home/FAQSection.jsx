"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Mail } from "lucide-react";
const faqData = [
  {
    id: 1,
    question: "MentorBul nedir?",
    answer:
      "MentorBul, mentor ve mentee’leri bir araya getiren ücretsiz bir eşleşme platformudur.",
  },
  {
    id: 2,
    question: "Mentor olmak için ne yapmalıyım?",
    answer:
      "Mentor olmak için kayıt formunu doldurup uzmanlık alanlarınızı belirtmeniz yeterlidir.",
  },
  {
    id: 3,
    question: "Mentee olarak nasıl destek alabilirim?",
    answer:
      "Profil oluşturduktan sonra ilgilendiğiniz alandaki mentorlarla eşleşebilir ve destek talebinde bulunabilirsiniz.",
  },
  {
    id: 4,
    question: "Mentorluk görüşmeleri nerede gerçekleşiyor?",
    answer:
      "Görüşmeler genellikle Zoom, Google Meet veya platform üzerinden planlanan diğer iletişim araçlarıyla gerçekleştirilir.",
  },
  {
    id: 5,
    question: "MentorBul tamamen ücretsiz mi?",
    answer:
      "Evet, MentorBul hem mentorlar hem de menteeler için tamamen ücretsizdir.",
  },
  {
    id: 6,
    question: "Gönüllü mentorlar kimlerden oluşuyor?",
    answer:
      "Mentorlarımız, farklı sektörlerden deneyimli profesyoneller, akademisyenler ve alanında uzman bireylerden oluşur.",
  },
  {
    id: 7,
    question: "Birden fazla mentorla görüşebilir miyim?",
    answer:
      "Evet, farklı alanlarda destek almak üzere birden fazla mentorla eşleşebilirsiniz.",
  },
  {
    id: 8,
    question: "Mentorlar menteelere nasıl yardımcı olur?",
    answer:
      "Mentorlar, kariyer planlama, teknik bilgi paylaşımı, kişisel gelişim gibi konularda menteelere rehberlik eder.",
  },
  {
    id: 9,
    question: "Platformda ne kadar sürede eşleşme gerçekleşir?",
    answer:
      "Eşleşme süresi, tercih ettiğiniz alan ve mentor yoğunluğuna bağlı olarak birkaç gün sürebilir.",
  },
  {
    id: 10,
    question: "Görüşmeler gizli midir?",
    answer:
      "Evet, tüm görüşmeler gizlilik esasına göre gerçekleşir ve kişisel bilgiler korunur.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex">
      <div className="flex-1 mt-4">
        <h3 className="text-2xl lg:text-4xl font-bold">
          Aklında bir soru mu var?
        </h3>
        <p className="text-gray-600 mt-4 w-[70%]">
          Sıkça sorulan soruları burada bulabilirsin. Eğer sorunu burada
          bulamadıysanız, lütfen bize ulaş.
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
                className="text-lg lg:text-xl font-bold cursor-pointer flex items-center justify-between mb-2 hover:text-blue-600 transition-all duration-300 hover:bg-gray-100 p-4 rounded-lg"
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
