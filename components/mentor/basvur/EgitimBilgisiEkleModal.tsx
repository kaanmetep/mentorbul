import React, { useRef } from "react";
import { X } from "lucide-react";
import useClickOutside from "@/hooks/useClickOutside";
import { EducationInfo } from "@/constants";
const EgitimBilgisiEkleModal = ({
  setShowEgitimBilgisiEkleModal,
  handleEducationInfoChange,
  educationInfo,
  handleAddNewEducationInfo,
}: {
  setShowEgitimBilgisiEkleModal: (value: boolean) => void;
  handleEducationInfoChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  educationInfo: EducationInfo;
  handleAddNewEducationInfo: () => void;
}) => {
  const modalRef = useRef<HTMLElement>(null);
  useClickOutside(modalRef, () => setShowEgitimBilgisiEkleModal(false));
  return (
    <div className="fixed inset-0  backdrop-blur-xs bg-opacity-50 flex justify-center items-center">
      <div
        ref={modalRef as React.RefObject<HTMLDivElement>}
        className="bg-white p-8 rounded-lg relative sm:min-w-[500px] sm:w-fit w-full sm:mx-0 mx-4"
      >
        <h2 className="text-2xl font-bold mb-4">Eğitim Bilgisi Ekle</h2>
        <X
          className="w-7 h-7 cursor-pointer absolute top-2 right-2 hover:bg-gray-100 rounded-full p-1 transition-all duration-200"
          onClick={() => setShowEgitimBilgisiEkleModal(false)}
        />
        <form className="flex flex-col gap-4 mt-2 ">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Okul İsmi *
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Okul ismini giriniz"
              value={educationInfo.schoolName}
              onChange={handleEducationInfoChange}
              name="schoolName"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Bölüm *
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Bölümünüzü Giriniz"
              value={educationInfo.major}
              onChange={handleEducationInfoChange}
              name="major"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Tarih Aralığı *
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                className=" p-2 border border-gray-300 rounded-md w-full"
                placeholder="Başlangıç Yılı"
                value={educationInfo.startDate}
                onChange={handleEducationInfoChange}
                name="startDate"
                min="1900"
                max="2099"
              />
              <span className="flex items-center px-2">-</span>
              <input
                type="number"
                className="p-2 border border-gray-300 rounded-md w-full"
                placeholder="Bitiş Yılı"
                value={educationInfo.endDate}
                onChange={handleEducationInfoChange}
                name="endDate"
                min="1900"
                max="2099"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Derece Türü *
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={educationInfo.degreeType}
              onChange={handleEducationInfoChange}
              name="degreeType"
            >
              <option value="">Seçiniz</option>
              <option value="lisans">Lisans</option>
              <option value="yuksek-lisans">Yüksek Lisans</option>
              <option value="doktora">Doktora</option>
            </select>
          </div>
          <button
            type="button"
            className="bg-blue-600 text-white rounded-md py-2 font-semibold hover:bg-blue-700 transition cursor-pointer"
            onClick={handleAddNewEducationInfo}
          >
            Ekle
          </button>
        </form>
      </div>
    </div>
  );
};

export default EgitimBilgisiEkleModal;
