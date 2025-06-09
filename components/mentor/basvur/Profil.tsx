import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";
const Profil = ({
  handleActiveStep,
}: {
  handleActiveStep: (step: number) => void;
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [skillsInput, setSkillsInput] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && skillsInput.trim()) {
      if (skills.length > 10) return;
      e.preventDefault();
      setSkills([...skills, skillsInput.trim()]);
      setSkillsInput("");
    }
    if (e.key === "Backspace") {
      e.preventDefault();

      setSkills((prev) => prev.slice(0, -1));
    }
  };
  const handleSkillDelete = (index: number) => {
    setSkills((prev) => prev.filter((_, i) => i !== index));
  };
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
              <option value="">Seçiniz</option>
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
          <div className="flex flex-wrap items-center gap-2 p-2 border-2 border-gray-300 rounded-lg">
            {skills?.map((skill, i) => (
              <span
                key={i}
                className="bg-gray-100 px-5 py-2 rounded-lg text-gray-700 text-sm relative font-semibold"
              >
                {skill}
                <X
                  className="absolute right-[3] top-[3] w-[10px] h-[10px] cursor-pointer hover:text-gray-600 text-gray-800 delay-[50ms] transition-all"
                  onClick={() => handleSkillDelete(i)}
                />
              </span>
            ))}

            <input
              type="text"
              value={skillsInput}
              onChange={(e) =>
                setSkillsInput(skills.length < 10 ? e.target.value : "")
              }
              onKeyDown={handleKeyDown}
              className={`flex-1 min-w-[120px] p-3 outline-none`}
              placeholder={
                skills?.length === 0 ? "Yeni bir yetenek ekleyin..." : ""
              }
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Benzer ilgi alanlarına sahip menteelerle kolayca bağlantı kurabilmen
            için, uzmanlık alanlarını buraya yazabilirsin. (En fazla 10 adet
            olacak şekilde, virgülle ayırarak belirt.)
          </p>
        </div>
        <div className=" gap-4 col-span-2">
          <p className="text-gray-600 font-bold mb-2 ">Biyografi *</p>
          <textarea
            className="w-full p-2  rounded-lg border-2 border-gray-300 min-h-[150px]"
            name="biography"
          />
          <p className="mt-1 text-sm text-gray-500">
            Kendini menteelerine tanıtmak ister misin? Sanki onlarla birebir
            sohbet ediyormuş gibi, birinci tekil şahısla kendinden bahset. Bu
            yazdıkların profilinde herkes tarafından görülebilecek.
          </p>
        </div>
        <div className=" gap-4 col-span-2">
          <p className="text-gray-600 font-bold mb-2">
            1 Saat Görüşme İçin Mentor Ücretiniz (₺) *
          </p>

          <input
            type="number"
            className="w-full p-2 rounded-lg border-2 border-gray-300 text-xs sm:text-lg"
            min={100}
            max={9999}
            placeholder="Lütfen TL olarak 1 saatlik mentorluk ücretinizi giriniz."
            name="price"
          />
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
            onClick={() => handleActiveStep(1)}
          >
            Geri Dön
          </button>
          <button
            className="btn-main-sm "
            type="button"
            onClick={() => handleActiveStep(3)}
          >
            Devam Et
          </button>
        </div>
      </div>
    </form>
  );
};

export default Profil;
