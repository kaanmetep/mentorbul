"use client";
import React from "react";
import { Search } from "lucide-react";
import { sampleMentors } from "@/constants";
import { useRouter } from "next/navigation";
import { toSlug } from "@/lib/utils";

const MentorCard = ({ mentor }) => {
  const router = useRouter();
  return (
    <div className=" py-4  overflow-hidden">
      <img
        src={mentor.image}
        alt={mentor.name}
        className="w-full cursor-pointer  object-cover rounded-lg hover:opacity-80 transition-all duration-300"
        onClick={() => router.push(`/mentor/${toSlug(mentor.name, mentor.id)}`)}
      />
      <h3 className="text-lg lg:text-xl font-bold mt-2">{mentor.name}</h3>
      <p className="text-sm lg:text-base text-gray-500">{mentor.title}</p>
      <ul className="flex flex-wrap items-center gap-2 mt-4">
        {mentor.skills.map((skill) => (
          <li
            key={skill}
            className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-lg"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SearchMentorsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 relative">
        <Search className="w-6 h-6 text-blue-600 absolute  top-4 left-4" />
        <input
          type="text"
          placeholder="Mentorleri Ara..."
          className="w-full lg:w-1/2 p-4 px-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="btn-main-sm mt-3 lg:mt-0">
          Tüm Mentorleri Keşfet
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 mt-8">
        {sampleMentors.map((mentor) => (
          <MentorCard key={mentor.name} mentor={mentor} />
        ))}
      </div>
      <button className="btn-main-sm mt-8 mx-auto">
        Daha fazla mentor arayın
      </button>
    </div>
  );
};

export default SearchMentorsSection;
