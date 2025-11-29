import React from "react";
import { StarIcon, User } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toSlug } from "@/lib/utils";
import { sampleMentors } from "@/constants";
import type { Mentor } from "@/constants";

const BrowseMentorsSection = () => {
  const searchParams = useSearchParams();
  const yetenek = searchParams?.get("yetenek");
  const unvan = searchParams?.get("unvan");
  const sirket = searchParams?.get("sirket");
  const search = searchParams?.get("search");
  const filteredMentors = sampleMentors.filter((mentor) => {
    const matchesYetenek =
      !yetenek ||
      mentor.skills.some((skill) =>
        skill.toLowerCase().includes(yetenek.toLowerCase())
      );
    const matchesUnvan =
      !unvan || mentor.title.toLowerCase().includes(unvan.toLowerCase());
    const matchesSirket =
      !sirket || mentor.company.toLowerCase().includes(sirket.toLowerCase());
    const matchesSearch =
      !search ||
      mentor.name.toLowerCase().includes(search.toLowerCase()) ||
      mentor.title.toLowerCase().includes(search.toLowerCase()) ||
      mentor.company.toLowerCase().includes(search.toLowerCase());

    return matchesYetenek && matchesUnvan && matchesSirket && matchesSearch; // returns true or false for every mentor. if any criteria is not met, it will return false. so mentor will not be shown.
  });
  return (
    <div className="flex flex-col items-center gap-12 w-full flex-[2.8]">
      <ul className="flex flex-col gap-12">
        {filteredMentors.map((mentor) => (
          <li key={mentor.name}>
            <MentorCard mentor={mentor} />
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
            1
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer ">
            2
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer">
            3
          </button>
        </div>
      </div>
    </div>
  );
};

const MentorCard = ({ mentor }: { mentor: Mentor }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/mentor/${toSlug(mentor.name, mentor.id)}`);
  };

  return (
    <div
      className="w-full flex-[2.8] border border-gray-200 rounded-lg p-8 cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={handleClick}
    >
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="w-[200px] h-[200px] min-w-[200px] min-h-[200px] flex-shrink-0 rounded-lg bg-gray-100 flex items-center justify-center border-2 border-gray-200">
          <User className="w-24 h-24 text-gray-400" />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-xl font-bold">{mentor.name}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
              <StarIcon className="w-4 h-4 text-blue-500 fill-blue-500" />
              <span className="text-gray-900 font-semibold">
                {mentor.rating} ({mentor.reviews.length} reviews)
              </span>
            </p>
          </div>
          <p className="text-sm text-gray-700 my-3">
            {mentor.title} at{" "}
            <span className="font-bold text-gray-900">{mentor.company}</span>
          </p>
          <p className="text-sm text-gray-500">{mentor.description}</p>
          <ul className="flex gap-2 flex-wrap mt-4">
            {mentor.skills.map((skill) => (
              <li
                key={skill}
                className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md"
              >
                {skill}
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-8">
            <p>
              <span className="text-3xl font-bold text-black mr-1">
                ₺{mentor.price}
              </span>
              / saat
            </p>
            <button
              className="btn-main-sm lg:!px-12 !px-6"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/mentor/${toSlug(mentor.name, mentor.id)}`);
              }}
            >
              Profili Gör
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseMentorsSection;
