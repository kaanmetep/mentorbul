"use client";
import React, { useState, useEffect } from "react";
import { Star, PersonStanding, HeartHandshake, Smile } from "lucide-react";
import { useRouter } from "next/navigation";
import { toSlug } from "@/lib/utils";
import { sampleMentors } from "@/constants";

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

// Use first 5 mentors from sampleMentors
const persons = sampleMentors.slice(0, 5).map((mentor) => ({
  id: mentor.id,
  image: mentor.image,
  name: mentor.name,
  description: mentor.title,
  star: mentor.rating,
  talents: mentor.skills.slice(0, 4),
}));

const MentorCard = ({ id, image, name, description, star, talents }) => {
  const router = useRouter();

  return (
    <div
      className="border border-gray-300 w-[370px] md:w-[520px] lg:w-[460px] pb-6 pt-4 pl-4 rounded-lg bg-white shadow-sm cursor-pointer transition-all delay-[50ms] hover:shadow-lg"
      onClick={() => router.push(`/mentor/${toSlug(name, id)}`)}
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg border-2 border-gray-200 bg-gray-100 flex items-center justify-center">
          <PersonStanding className="w-10 h-10 md:w-12 md:h-12 text-gray-400" />
        </div>

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
      <ul className="flex gap-3 flex-wrap gap-y-3 mt-5 text-sm">
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

const MobileSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % persons.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[300px] w-full block lg:hidden overflow-hidden">
      <div className="w-[370px] md:w-[520px] mx-auto relative">
        {persons.map((person, index) => (
          <div
            key={person.id}
            className={`absolute top-0 left-0 transition-all duration-700 
              ${
                index === currentIndex
                  ? "opacity-100 translate-x-0 z-10"
                  : "opacity-0 -translate-x-full z-0"
              }`}
          >
            <MentorCard {...person} />
          </div>
        ))}
      </div>
    </div>
  );
};

const MentorSlider = () => {
  // This creates a duplicate array of persons for continuous scrolling effect
  const duplicatedPersons = [...persons, ...persons];

  return (
    <div className="relative h-[700px] w-[800px] hidden lg:block lg:w-full overflow-hidden">
      <div className="animate-slide-up flex flex-col">
        {duplicatedPersons.map((person, index) => (
          <div key={`${person.id}-${index}`} className="my-2">
            <MentorCard {...person} />
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
        }, 70);
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
    <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-16 mx-auto lg:px-4">
      {/*LEFT SECTION*/}
      <div className="py-16">
        <p className="text-gray-700 font-semibold text-xs lg:text-sm">
          Yeni bir beceri öğren, sınavlara daha iyi hazırlan, hayalindeki
          kariyere yerleş.
        </p>

        <div className="flex items-center text-3xl md:text-5xl lg:text-7xl mt-4 font-extrabold tracking-tight">
          <p>
            1'e 1{" "}
            <span className="font-extrabold text-blue-600">
              {currentWord}
              <span className="animate-pulse">|</span>
            </span>{" "}
            <br />
            <span className="mt-1 block">Mentorluk Desteği</span>
          </p>
        </div>
        <form className="mt-6 lg:mt-10 relative max-w-[650px] flex flex-col">
          <input
            type="text"
            className="border border-gray-300 rounded-lg h-24 pb-12 md:pb-0  md:h-14 w-full px-4 text-gray-600 outline-none
            transition-all duration-200 ease-in-out
            focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
            hover:border-gray-400 placeholder:text-sm"
            placeholder="Hangi alanda mentorluk arıyorsun?"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button
            onClick={handleSearchSubmit}
            className="md:absolute w-[98%] mx-auto md:w-fit right-2 top-1/2 transform -translate-y-10       md:-translate-y-1/2 cursor-pointer bg-blue-600 text-white rounded-md px-4 py-2 text-sm"
          >
            Mentorleri Bul
          </button>
        </form>
        <ul className="mt-4 lg:mt-5 flex-wrap gap-y-4 lg:gap-y-3 gap-x-3 lg:gap-5 text-sm lg:w-[70%] hidden md:flex">
          {words.map((word, index) => (
            <li
              key={index}
              className="text-gray-800 bg-gray-100 px-3 py-[1px] rounded-lg font-semibold"
            >
              {word}
            </li>
          ))}
        </ul>
        <div className="w-fit mt-10 lg:mt-12 flex flex-wrap mx-auto lg:mx-0 gap-12 lg:gap-16">
          <p>
            <PersonStanding className="mb-1" />
            <span className="block mb-1 text-xl lg:text-3xl font-bold">
              100+
            </span>{" "}
            <span className="text-gray-700 font-semibold text-sm">
              Kayıtlı Mentor
            </span>
          </p>
          <p>
            <HeartHandshake className="mb-1" />
            <span className="block mb-1 text-xl lg:text-3xl font-bold">
              1.000+
            </span>{" "}
            <span className="text-gray-700 font-semibold text-sm">
              Yapılan Eşleşme
            </span>
          </p>
          <p>
            <Smile className="mb-1" />
            <span className="block mb-1 text-xl lg:text-3xl font-bold">
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
        <div className="block lg:hidden">
          <MobileSlider />
        </div>
        <MentorSlider />
      </div>
    </div>
  );
};

export default HeroSection;
