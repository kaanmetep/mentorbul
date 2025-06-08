import React, { useState } from "react";
import { Upload, Plus, X } from "lucide-react";
import EgitimBilgisiEkleModal from "./EgitimBilgisiEkleModal";
import { EducationInfo } from "@/constants";
import { mentorSchemaAbout } from "@/lib/zodSchema";
import { MentorFormData } from "@/app/(mentor)/mentor/basvur/page";

type HakkindaProps = {
  handleActiveStep: (step: number) => void;
  mentorFormData: Pick<
    MentorFormData,
    | "image"
    | "firstName"
    | "lastName"
    | "email"
    | "password"
    | "passwordConfirmation"
    | "occupation"
    | "currentCompany"
    | "exCompanies"
  >;
  handleMentorFormDataChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const Hakkinda = ({
  handleActiveStep,
  mentorFormData,
  handleMentorFormDataChange,
}: HakkindaProps) => {
  const [showEgitimBilgisiEkleModal, setShowEgitimBilgisiEkleModal] =
    useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [educationInfo, setEducationInfo] = useState<EducationInfo>({
    schoolName: "",
    startDate: "",
    endDate: "",
    degreeType: "",
    major: "",
  });
  const [educationInfos, setEducationInfos] = useState<EducationInfo[]>([]);
  const handleEducationInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEducationInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddNewEducationInfo = () => {
    setEducationInfos((prev) => [...prev, educationInfo]);
    setShowEgitimBilgisiEkleModal(false);
    setEducationInfo({
      schoolName: "",
      startDate: "",
      endDate: "",
      degreeType: "",
      major: "",
    });
  };
  const handleDeleteEducationInfo = (index: number) => {
    setEducationInfos((prev) => prev.filter((_, i) => i !== index));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      mentorSchemaAbout.parse(mentorFormData);
      setErrors({});
      handleActiveStep(2);
    } catch (error) {
      const formattedErrors: Record<string, string> = {};
      error.issues.forEach(
        (err: { path: (string | number)[]; message: string }) => {
          formattedErrors[String(err.path[0])] = err.message;
        }
      );
      setErrors(formattedErrors);
      console.log(formattedErrors);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      handleMentorFormDataChange(e);
    }
  };

  return (
    <>
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        <p className="text-gray-700 font-bold mb-4">Fotoğraf *</p>
        <div className="flex items-center gap-5">
          <img
            src={previewUrl || "/images/person.svg"}
            alt="person"
            className="w-24 h-24 rounded-full"
          />
          <div className="flex flex-col">
            <input
              id="file"
              type="file"
              className="hidden"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
            />
            <label
              htmlFor="file"
              className=" text-gray-600 border-2 rounded-lg border-gray-300 p-2 cursor-pointer flex items-center gap-4 px-10 hover:bg-gray-100 transition-all duration-300 self-start mb-[2px]"
            >
              <Upload className="w-4 h-4" />
              Dosya Seç
            </label>
            {errors.image && (
              <span className="text-sm font-semibold text-red-500">
                {errors.image}
              </span>
            )}
          </div>
        </div>
        <div className="my-8 grid grid-cols-2 gap-8">
          <div className=" gap-4 col-span-2 sm:col-span-1">
            <p className="text-gray-600 font-bold mb-2">Adınız *</p>
            <input
              type="text"
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              name="firstName"
              value={mentorFormData.firstName}
              onChange={handleMentorFormDataChange}
            />
            {errors.firstName && (
              <span className="text-sm font-semibold text-red-500">
                {errors.firstName}
              </span>
            )}
          </div>
          <div className=" gap-4 col-span-2 sm:col-span-1">
            <p className="text-gray-600 font-bold mb-2">Soyadınız *</p>
            <input
              type="text"
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              name="lastName"
              value={mentorFormData.lastName}
              onChange={handleMentorFormDataChange}
            />
            {errors.lastName && (
              <span className="text-sm font-semibold text-red-500">
                {errors.lastName}
              </span>
            )}
          </div>
          <div className=" gap-4 col-span-2 sm:col-span-1">
            <p className="text-gray-600 font-bold mb-2">Email Adresiniz *</p>
            <input
              type="text"
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              name="email"
              placeholder="ornek@email.com"
              value={mentorFormData.email}
              onChange={handleMentorFormDataChange}
            />
            {errors.email && (
              <span className="text-sm font-semibold text-red-500">
                {errors.email}
              </span>
            )}
          </div>
          <div className=" gap-4 col-span-2 sm:col-span-1">
            <p className="text-gray-600 font-bold mb-2">Şifrenizi Giriniz *</p>
            <input
              type="password"
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              name="password"
              value={mentorFormData.password}
              onChange={handleMentorFormDataChange}
            />
            {errors.password && (
              <span className="text-sm font-semibold text-red-500">
                {errors.password}
              </span>
            )}
          </div>
          <div className=" gap-4 col-span-2 sm:col-span-1">
            <p className="text-gray-600 font-bold mb-2">
              Şifrenizi Tekrar Giriniz *
            </p>
            <input
              type="password"
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              name="passwordConfirmation"
              value={mentorFormData.passwordConfirmation}
              onChange={handleMentorFormDataChange}
            />
            {errors.passwordConfirmation && (
              <span className="text-sm font-semibold text-red-500">
                {errors.passwordConfirmation}
              </span>
            )}
          </div>

          <div className=" gap-4 col-span-2 sm:col-span-1">
            <p className="text-gray-600 font-bold mb-2">Mesleğiniz *</p>
            <input
              type="text"
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              name="occupation"
              value={mentorFormData.occupation}
              onChange={handleMentorFormDataChange}
            />
            {errors.occupation && (
              <span className="text-sm font-semibold text-red-500">
                {errors.occupation}
              </span>
            )}
            <span className="text-gray-600 text-sm">
              DevOps Mühendisi, Girişimci, Öğrenci, ...
            </span>
          </div>
          <div className=" gap-4 col-span-2 sm:col-span-1">
            <p className="text-gray-600 font-bold mb-2">
              Aktif Olarak Çalıştığınız Şirket (Opsiyonel)
            </p>
            <input
              type="text"
              className="w-full p-2 rounded-lg border-2 border-gray-300"
              name="currentCompany"
              value={mentorFormData.currentCompany}
              onChange={handleMentorFormDataChange}
            />
          </div>
          <div className=" gap-4 col-span-2">
            <p className="text-gray-600 font-bold mb-2">
              Daha önce çalıştığınız şirket(ler) (Opsiyonel)
            </p>
            <input
              type="text"
              className="w-full p-4 rounded-lg border-2 border-gray-300"
              name="exCompanies"
              value={mentorFormData.exCompanies}
              onChange={handleMentorFormDataChange}
            />
            <span className="text-gray-600 text-sm">
              Lütfen virgülle ayırarak ekleyiniz.
            </span>
          </div>
          <div
            className="col-span-2 bg-gray-50 p-6 rounded-lg flex items-center gap-4 cursor-pointer hover:bg-gray-100 transition-all duration-200"
            onClick={() => setShowEgitimBilgisiEkleModal(true)}
          >
            <p className="text-gray-600 font-bold">
              Eğitim Bilgisi Ekle (Opsiyonel)
            </p>
            <Plus className="w-5 h-5" />
          </div>
        </div>
        <ul className="p-4 flex flex-col gap-6 mb-6">
          {educationInfos.map((educationInfo, i) => (
            <li
              key={i}
              className=" p-6 rounded-lg shadow-sm border border-gray-100 relative"
            >
              <h3 className="mb-4 font-semibold text-lg">
                {educationInfo.degreeType.at(0)?.toUpperCase() +
                  educationInfo.degreeType.slice(1)}
              </h3>
              <div className="flex justify-between items-center">
                <p>
                  {educationInfo.schoolName} - {educationInfo.major}
                </p>
                <p>
                  {educationInfo.startDate} - {educationInfo.endDate}
                </p>
              </div>
              <div className="flex gap-3 absolute top-4 right-4">
                <X
                  width={28}
                  height={28}
                  className="w-7 h-7 cursor-pointer hover:bg-gray-100 rounded-full p-1 transition-all duration-200 hover:text-red-500"
                  onClick={() => handleDeleteEducationInfo(i)}
                />
              </div>
            </li>
          ))}
        </ul>
        <button className="btn-main-sm ml-auto" type="submit">
          Devam Et
        </button>
      </form>
      {showEgitimBilgisiEkleModal && (
        <EgitimBilgisiEkleModal
          setShowEgitimBilgisiEkleModal={setShowEgitimBilgisiEkleModal}
          handleEducationInfoChange={handleEducationInfoChange}
          educationInfo={educationInfo}
          handleAddNewEducationInfo={handleAddNewEducationInfo}
        />
      )}
    </>
  );
};

export default Hakkinda;
