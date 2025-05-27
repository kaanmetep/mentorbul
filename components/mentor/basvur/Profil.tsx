import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
const Profil = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <form action="" className="flex flex-col ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className=" gap-4 col-span-2 lg:col-span-1">
          <p className="text-gray-600 font-bold mb-2">
            Mentorluk Vermek İstediğiniz Alan *
          </p>
          <div className="relative">
            <select
              name="category"
              id="category"
              className="w-full  p-2 rounded-lg border-2 border-gray-300 appearance-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="yapay-zeka">Yapay Zeka</option>
              <option value="tyt-ayt">YKS (TYT-AYT)</option>
              <option value="yazilim-muhendisligi">Yazılım Mühendisliği</option>
              <option value="muhendislik">Mühendislik</option>
              <option value="diger">Diğer</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          {selectedCategory === "diger" && (
            <div className=" gap-4 mt-4 col-span-2 lg:col-span-1">
              <p className="text-gray-600 font-bold mb-2 text-sm">
                Lütfen Mentorluk Vermek İstediğiniz Alanı Belirtiniz
              </p>
              <input
                type="text"
                className="w-full p-2 rounded-lg border-2 border-gray-300"
              />
            </div>
          )}
        </div>
        <div className=" gap-4 col-span-2">
          <p className="text-gray-600 font-bold mb-2 ">Yetenekler *</p>
          <input
            type="text"
            className="w-full p-5 rounded-lg border-2 border-gray-300"
            placeholder="Yeni bir yetenek ekleyin..."
          />
          <p className="mt-1 text-sm text-gray-500">
            Benzer ilgi alanlarına sahip menteelerle kolayca bağlantı kurabilmen
            için, uzmanlık alanlarını buraya yazabilirsin. (En fazla 10 adet
            olacak şekilde, virgülle ayırarak belirt.)
          </p>
        </div>
        <div className=" gap-4 col-span-2">
          <p className="text-gray-600 font-bold mb-2 ">Biyografi *</p>
          <textarea className="w-full p-2  rounded-lg border-2 border-gray-300 min-h-[150px]" />
          <p className="mt-1 text-sm text-gray-500">
            Kendini menteelerine tanıtmak ister misin? Sanki onlarla birebir
            sohbet ediyormuş gibi, birinci tekil şahısla kendinden bahset. Bu
            yazdıkların profilinde herkes tarafından görülebilecek.
          </p>
        </div>
        <div className=" gap-4 col-span-2 lg:col-span-1">
          <p className="text-gray-600 font-bold mb-2">
            LinkedIn URL (Opsiyonel)
          </p>
          <input
            type="text"
            className="w-full p-2 rounded-lg border-2 border-gray-300"
          />
        </div>
        <div className=" gap-4 col-span-2 lg:col-span-1">
          <p className="text-gray-600 font-bold mb-2">X URL (Opsiyonel)</p>
          <input
            type="text"
            className="w-full p-2 rounded-lg border-2 border-gray-300"
          />
        </div>
        <div className=" gap-4 col-span-2 lg:col-span-1">
          <p className="text-gray-600 font-bold mb-2">
            Kişisel Web Sitesi URL (Opsiyonel)
          </p>
          <input
            type="text"
            className="w-full p-2 rounded-lg border-2 border-gray-300"
          />
        </div>
        <div className="flex justify-between  col-span-2">
          <button
            className="btn-main-sm "
            type="button"
            onClick={() => setActiveStep(1)}
          >
            Geri Dön
          </button>
          <button
            className="btn-main-sm "
            type="button"
            onClick={() => setActiveStep(3)}
          >
            Devam Et
          </button>
        </div>
      </div>
    </form>
  );
};

export default Profil;
