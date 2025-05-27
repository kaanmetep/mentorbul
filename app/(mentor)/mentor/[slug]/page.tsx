import React from "react";
import { sampleMentors } from "@/constants";
import { HomeIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { toSlug, formatDate } from "@/lib/utils";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import MentorPriceCard from "@/components/mentor/individual_mentor/MentorPriceCard";
import { Star } from "lucide-react";
import { Globe } from "lucide-react";
const MentorPage = async ({ params }: { params: { slug: string } }) => {
  const slug = (await params).slug;
  const mentorId = slug.split("-").pop();
  const mentor = sampleMentors.find(
    (mentor) => mentor.id.toString() === mentorId
  );

  return (
    <>
      <div className="bg-blue-900 pt-18 pb-54  ">
        <div className="mx-auto max-w-[1400px] relative px-2 lg:px-4 xl:px-8">
          {/* BREADCRUMB */}
          <nav className=" text-gray-200 font-semibold ml-6">
            <ul className="flex items-center gap-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  <HomeIcon className="w-5 h-5" />
                </Link>
              </li>
              <li>
                <ChevronRight className="w-5 h-5" />
              </li>
              <li className="hover:text-gray-300">
                <Link href="/mentor/kesfet">
                  <p>Mentors</p>
                </Link>
              </li>
              <li>
                <ChevronRight className="w-5 h-5" />
              </li>
              <li className="hover:text-gray-300">
                {mentor && (
                  <Link href={`/mentor/${toSlug(mentor.name, mentor.id)}`}>
                    <p>{mentor.name}</p>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            {/* MENTOR PROFILE */}
            <div className="flex-1">
              <div className="w-48 h-48 absolute top-24 ">
                <img
                  src={mentor?.image}
                  alt={mentor?.name}
                  className="w-full h-full rounded-full border-3 border-white"
                />
                <div className="absolute top-5 left-40 w-full h-full flex items-center justify-center  gap-3">
                  <FaLinkedinIn className="w-6 h-6 text-black bg-white rounded-sm p-[2px] cursor-pointer" />
                  <FaXTwitter className="w-6 h-6 text-black bg-white rounded-sm p-[2px] cursor-pointer" />
                  <Globe className="w-6 h-6 text-black bg-white rounded-sm p-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
            {/* MENTOR SERVICES CARD */}
            <div className="xl:block hidden">
              <MentorPriceCard mentor={mentor} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] px-2 lg:px-4 xl:px-8  mt-16   mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-20 xl:max-w-[840px] ">
          <div className="flex-2">
            <p className="text-3xl font-bold mb-1">{mentor?.name}</p>
            <p className="text-gray-700 text-xl mb-3 font-bold">
              {mentor?.title} @ {mentor?.company} | Ex-Google, Ex-Apple,
              Ex-Microsoft,Ex-Amazon
            </p>
            <p className="text-gray-700">{mentor?.description}</p>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3">Yetenekler</h3>
            <div className="flex gap-4 flex-wrap">
              {mentor?.skills.map((skill) => (
                <p
                  key={skill}
                  className="text-gray-700 bg-gray-100 px-2 py-1 rounded-xl font-semibold"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ul>
            <li className="flex items-center gap-2 text-gray-700">
              <Star className="w-4 h-4 text-blue-500 mb-[1px] fill-blue-500" />
              <p>
                <span className="font-extrabold text-gray-900">
                  {mentor?.rating}
                </span>{" "}
                (
                <span className="underline cursor-pointer">
                  6 değerlendirme
                </span>
                )
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-12 border-gray-300" />
      <div className="max-w-[1400px] px-2 lg:px-4 xl:px-8  mt-16   mx-auto">
        <div className="xl:hidden mt-8">
          <MentorPriceCard mentor={mentor} />
        </div>
        <div className="mt-16 xl:max-w-[840px]">
          <div>
            <h3 className="text-2xl font-bold mb-3">Hakkında</h3>
            <p>
              {mentor?.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iure a excepturi ducimus earum soluta
              perspiciatis vel, at quod fuga iste corrupti sit, odit laboriosam
              alias! Quae vitae earum pariatur ex in? Nostrum error, ad sapiente
              ab doloribus illum reiciendis modi ipsum commodi distinctio
              cumque, itaque illo corrupti dolor, harum eveniet?
            </p>
            <p className="mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              aliquam rerum accusamus voluptatibus ab eius nihil quisquam minus
              sed expedita. Neque quibusdam, qui maiores obcaec ati dolorem
              ullam facilis velit voluptates.
            </p>
          </div>
          <hr className="my-12 border-gray-300" />
          <h3 className="text-2xl font-bold mb-8">
            Mentee&apos;ler neler söylüyor?
          </h3>
          <div className="flex flex-col gap-12">
            {mentor?.reviews.map((review) => (
              <div key={review.id}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/person.svg"
                      alt="person"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                      <p>{review.name}</p>
                      <div className="flex items-center gap-2">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Star
                              key={index}
                              className="w-4 h-4 text-blue-500 fill-blue-500"
                            />
                          )
                        )}
                        <p className="text-gray-500 font-semibold">
                          {formatDate(review.date)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className=" text-gray-700">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-12 border-gray-300" />
          <h3 className="text-2xl font-bold mb-8">Yetenekler</h3>
          <div className="flex flex-wrap gap-4">
            {mentor?.skills.map((skill) => (
              <p
                key={skill}
                className="text-gray-700 bg-gray-100 px-3 py-1 rounded-xl font-semibold"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorPage;
