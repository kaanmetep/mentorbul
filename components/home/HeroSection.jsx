"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const words = [
  "Python",
  "Yapay Zeka",
  "TYT/AYT",
  "Girişimcilik",
  "IELS/TOEFL",
  "Veri Bilimi",
  "SaaS",
  "Kariyer",
];

const persons = [
  {
    image: "https://thispersondoesnotexist.com/",
    name: "Kaan Peksen",
    description: "Founder, Programmer",
    star: 4.8,
    talents: ["JavaScript", "TypeScript", "React", "Full Stack Development"],
  },
  {
    image: "https://thispersondoesnotexist.com/",
    name: "John F.",
    description: "Senior UX Design",
    star: 4.8,
    talents: ["UX", "Figma", "Photoshop", "Best UX Design Principles"],
  },
  {
    image: "https://thispersondoesnotexist.com/",
    name: "Seth C.",
    description: "Product Manager",
    star: 4.8,
    talents: ["UX", "Figma", "Photoshop", "Best UX Design Principles"],
  },
  {
    image: "https://thispersondoesnotexist.com/",
    name: "Emma D.",
    description: "Data Scientist",
    star: 4.9,
    talents: ["Python", "Machine Learning", "Data Analysis", "Statistics"],
  },
  {
    image: "https://thispersondoesnotexist.com/",
    name: "Maria S.",
    description: "Mobile Developer",
    star: 4.7,
    talents: ["Flutter", "React Native", "UI Design", "App Architecture"],
  },
];

const MentorCard = ({ image, name, description, star, talents }) => {
  return (
    <div className="border border-gray-300 w-[380px] pb-10 pt-4 pl-4 rounded-lg bg-white mb-6">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt="Person"
          className="w-20 h-20 rounded-lg border-2 border-gray-200"
        />

        <div className="flex flex-col gap-1">
          <div className="flex gap-4">
            <p className="font-extrabold">{name}</p>
            <p className="flex items-center gap-1 font-bold">
              <Star size={18} className="text-blue-600 fill-blue-600" />
              {star}
            </p>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <ul className="flex gap-3 flex-wrap gap-y-3 mt-5">
        {talents.map((talent, index) => (
          <li
            key={index}
            className="bg-gray-100 px-3 py-[1px] rounded-lg text-gray-800 font-medium"
          >
            {talent}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MentorSlider = () => {
  // This creates a duplicate array of persons for continuous scrolling effect
  const duplicatedPersons = [...persons, ...persons];

  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="animate-slide-up">
        {duplicatedPersons.map((person, index) => (
          <div key={index} className="my-5">
            <MentorCard
              image={person.image}
              name={person.name}
              description={person.description}
              star={person.star}
              talents={person.talents}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing, waiting, deleting
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const targetWord = words[currentIndex];

    // Typing phase - harfler tek tek ekleniyor
    if (phase === "typing") {
      if (currentWord.length < targetWord.length) {
        const timeoutId = setTimeout(() => {
          setCurrentWord(targetWord.substring(0, currentWord.length + 1));
        }, 150);
        return () => clearTimeout(timeoutId);
      } else {
        setPhase("waiting");
      }
    }

    // Waiting phase - kelime ekranda bekliyor
    else if (phase === "waiting") {
      const timeoutId = setTimeout(() => {
        setPhase("deleting");
      }, 3000);
      return () => clearTimeout(timeoutId);
    }

    // Deleting phase - harfler tek tek siliniyor
    else if (phase === "deleting") {
      if (currentWord.length > 0) {
        const timeoutId = setTimeout(() => {
          setCurrentWord(currentWord.substring(0, currentWord.length - 1));
        }, 100);
        return () => clearTimeout(timeoutId);
      } else {
        // Bir sonraki kelimeye geç
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [currentWord, currentIndex, phase]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Handle search submission here
    console.log("Searching for:", searchValue);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 mx-auto px-4 py-16">
      {/*LEFT SECTION*/}
      <div className="py-8">
        <p className="text-gray-700 font-semibold text-xs lg:text-sm">
          Yeni bir beceri öğren, sınavlara daha iyi hazırlan, hayalindeki
          kariyere yerleş.
        </p>

        <div className="flex items-center text-4xl lg:text-7xl mt-4 font-extrabold tracking-tight">
          <p>
            1'e 1{" "}
            <span className="font-extrabold text-blue-600">
              {currentWord}
              <span className="animate-pulse">|</span>
            </span>{" "}
            <br />
            <span className="mt-1 block">Mentorluk</span>
          </p>
        </div>
        <form className="mt-8 lg:mt-12 w-fit relative">
          <input
            type="text"
            className="border border-gray-300 rounded-lg h-12 lg:h-14 w-full lg:w-[600px] px-4 text-gray-600 outline-none
            transition-all duration-200 ease-in-out
            focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
            hover:border-gray-400"
            placeholder="Hangi alanda mentorluk arıyorsun?"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button
            onClick={handleSearchSubmit}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer bg-blue-600 text-white rounded-md px-4 py-2 text-sm"
          >
            Mentorleri Bul
          </button>
        </form>
        <ul className="flex mt-6 flex-wrap gap-y-2 gap-x-3 lg:gap-5 text-sm w-[70%]">
          {words.map((word, index) => (
            <li
              key={index}
              className="text-gray-800 bg-gray-100 px-3 py-[1px] rounded-lg font-semibold"
            >
              {word}
            </li>
          ))}
        </ul>
        <div className="w-fit mt-8 lg:mt-16 flex flex-wrap gap-6 lg:gap-16">
          <p>
            <span className="block mb-1 text-2xl lg:text-3xl font-bold">
              100+
            </span>{" "}
            <span className="text-gray-700 font-semibold text-sm">
              Kayıtlı Mentor
            </span>
          </p>
          <p>
            <span className="block mb-1 text-2xl lg:text-3xl font-bold">
              1.000+
            </span>{" "}
            <span className="text-gray-700 font-semibold text-sm">
              Yapılan Eşleşme
            </span>
          </p>
          <p>
            <span className="block mb-1 text-2xl lg:text-3xl font-bold">
              600+
            </span>{" "}
            <span className="text-gray-700 font-semibold text-sm">
              Mutlu Mentee
            </span>
          </p>
        </div>
      </div>

      {/*RIGHT SECTION - Animated Cards*/}
      <div>
        <MentorSlider />
      </div>
    </div>
  );
};

export default HeroSection;
