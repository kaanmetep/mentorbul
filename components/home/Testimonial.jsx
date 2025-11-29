import React from "react";
import { Star, UserCircle } from "lucide-react";

const Testimonial = ({ name, image, rating, comment, title }) => {
  return (
    <div className="flex flex-col  gap-6 justify-center">
      <ul className="flex gap-1 ">
        {rating &&
          Array.from({ length: rating }).map((_, index) => (
            <Star
              className="w-6 h-6 text-yellow-500 fill-yellow-500"
              key={index}
            />
          ))}
      </ul>
      <p className="text-lg lg:text-xl font-extrabold leading-9">"{comment}"</p>
      <div className="flex items-center gap-3 ">
        <UserCircle className="w-14 h-14 text-gray-400" />
        <div>
          <p className="text-lg lg:text-xl font-bold">{name}</p>
          <p className="text-sm lg:text-base text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
