"use client";
import React, { useState } from "react";
import Hakkinda from "@/components/mentor/basvur/Hakkinda";
import Profil from "@/components/mentor/basvur/Profil";
import Diger from "@/components/mentor/basvur/Diger";
import { Info, Check } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    name: "Hakkında",
  },
  {
    id: 2,
    name: "Profil",
  },
  {
    id: 3,
    name: "Diğer",
  },
];
export type MentorFormData = {
  // bunu types klasoruna aktaricaz sonra da constanstaki MentorFormData ile degistirecez.
  image: File | null;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  occupation: string;
  currentCompany: string;
  exCompanies: string;
  ornek: string;
};
const MentorBasvurPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [mentorFormData, setMentorFormData] = useState<MentorFormData>({
    image: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    occupation: "",
    currentCompany: "",
    exCompanies: "",
    ornek: "",
  });

  const handleMentorFormDataChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, files } = event.target;

    const newValue = type === "file" ? files?.[0] || null : value;

    setMentorFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleActiveStep = (step: number) => {
    if (window.scrollY > 650) {
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
    setActiveStep(step);
  };
  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12 py-10 ">
      <div className="flex flex-col items-center justify-center  w-full">
        <h2 className="text-2xl lg:text-3xl text-center font-extrabold text-slate-900 self-start mb-12 w-full">
          Mentor Olmak İçin Başvurun
        </h2>
        <div className="relative ">
          <ul className=" flex gap-12 sm:gap-24 md:gap-28 lg:gap-44 xl:gap-52 w-full text-xl justify-center">
            {steps.map((step) => (
              <li
                key={step.id}
                className={`${
                  step.id === activeStep || step.id < activeStep
                    ? "font-extrabold text-blue-600"
                    : "text-gray-400"
                }`}
              >
                <p
                  className={`text-center bg-blue-50 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold ${
                    step.id === activeStep || step.id < activeStep
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {step.id < activeStep ? <Check /> : step.id}
                </p>
                <p>{step.name}</p>
              </li>
            ))}
          </ul>
          <hr className=" md:w-[60%] xl:w-[88%] lg:w-[80%] border-t-2  border-gray-200 absolute top-5 -z-10 left-1/2 -translate-x-1/2  " />
          <div className="max-w-[600px] my-8 mb-2 bg-blue-50 rounded-lg p-4 mx-auto">
            <div className="flex items-center gap-2 my-3">
              <Info className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold">
                Seni aramızda mentor olarak görmekten çok mutluyuz!
              </h3>
            </div>
            <p className="w-fit">
              Kayıt toplamda 3 aşamadan oluşacak ve yaklaşık 7 dakikanı alacak.
              Eğer kafana takılan bir soru varsa{" "}
              <span className="text-blue-600 underline">
                <Link href="/sorular" target="_blank" rel="noopener noreferrer">
                  Sıkça Sorulan Sorular Sayfası
                </Link>
              </span>
              &apos;na göz atabilir veya{" "}
              <span className="font-semibold">
                <a href="mailto:info@mentor.com">help@mentor.com</a>
              </span>{" "}
              adresine mail atabilirsin.
            </p>
          </div>
        </div>

        <div className="my-8 w-[90%] md:w-[75%] lg:w-[65%] xl:w-[60%] mx-auto">
          {activeStep === 1 && (
            <Hakkinda
              mentorFormData={mentorFormData}
              handleMentorFormDataChange={handleMentorFormDataChange}
              handleActiveStep={handleActiveStep}
            />
          )}
          {activeStep === 2 && <Profil handleActiveStep={handleActiveStep} />}
          {activeStep === 3 && <Diger handleActiveStep={handleActiveStep} />}
        </div>
      </div>
    </div>
  );
};

export default MentorBasvurPage;
