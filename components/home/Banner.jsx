import React from "react";
import { GraduationCap } from "lucide-react";

const Banner = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-white via-blue-50 to-blue-100 py-10 ">
      <div className="flex items-center gap-3">
        <GraduationCap className="w-10 h-10 text-blue-600" />
        <p className="text-center text-3xl font-bold">
          Başarıya giden yolda <span className="text-blue-600">mentorun</span>{" "}
          yanında!
        </p>
      </div>
    </div>
  );
};

export default Banner;
