import React from "react";
import { Upload } from "lucide-react";
const Hakkinda = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <form action="" className="flex flex-col ">
      <p className="text-gray-700 font-bold mb-4">Fotoğraf *</p>
      <div className="flex items-center gap-5">
        <img
          src="/images/person.svg"
          alt="person"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <input id="file" type="file" className="hidden" />
          <label
            htmlFor="file"
            className=" text-gray-600 border-2 rounded-lg border-gray-300 p-2 cursor-pointer flex items-center gap-4 px-10 hover:bg-gray-100 transition-all duration-300"
          >
            <Upload className="w-4 h-4" />
            Dosya Seç
          </label>
        </div>
      </div>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" gap-4 ">
          <p className="text-gray-600 font-bold mb-2">Adınız *</p>
          <input
            type="text"
            className="w-full p-2 rounded-lg border-2 border-gray-300"
          />
        </div>
        <div className=" gap-4 ">
          <p className="text-gray-600 font-bold mb-2">Soyadınız *</p>
          <input
            type="text"
            className="w-full p-2 rounded-lg border-2 border-gray-300"
          />
        </div>
        <div className=" gap-4 ">
          <p className="text-gray-600 font-bold mb-2">Email Adresiniz *</p>
          <input
            type="text"
            className="w-full p-2 rounded-lg border-2 border-gray-300"
          />
        </div>
        <div className=" gap-4 ">
          <p className="text-gray-600 font-bold mb-2">Şifrenizi Giriniz *</p>
          <input
            type="password"
            className="w-full p-2 rounded-lg border-2 border-gray-300"
          />
        </div>
        <div className=" gap-4 ">
          <p className="text-gray-600 font-bold mb-2">
            Şifrenizi Tekrar Giriniz *
          </p>
          <input
            type="password"
            className="w-full p-2 rounded-lg border-2 border-gray-300"
          />
        </div>
        <div className=" gap-4 ">
          <p className="text-gray-600 font-bold mb-2">Mesleğiniz *</p>
          <input
            type="text"
            className="w-full p-2 rounded-lg border-2 border-gray-300"
          />
        </div>
        <div className=" gap-4 ">
          <p className="text-gray-600 font-bold mb-2">
            Çalıştığınız Şirket (Opsiyonel)
          </p>
          <input
            type="text"
            className="w-full p-2 rounded-lg border-2 border-gray-300"
          />
        </div>
      </div>
      <button
        className="btn-main-sm ml-auto"
        type="button"
        onClick={() => setActiveStep(2)}
      >
        Devam Et
      </button>
    </form>
  );
};

export default Hakkinda;
