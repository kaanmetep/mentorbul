"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

type FilterSectionProps = {
  title: string;
  items: { name: string; count: number }[];
  showMore: boolean;
  setShowMore: (show: boolean) => void;
  placeholder: string;
  checkedItems: string[];
  setCheckedItems: (items: string[]) => void;
};

type FilterItemProps = {
  name: string;
  count: number;
  isChecked: boolean;
  onCheck: (checked: boolean) => void;
};

const skills = [
  { name: "Liderlik", count: 91 },
  { name: "Proje Yönetimi", count: 16 },
  { name: "Kariyer Planlama", count: 12 },
  { name: "Yazılım Geliştirme", count: 43 },
  { name: "TYT/AYT", count: 184 },
  { name: "IELTS/TOEFL", count: 126 },
  { name: "Mülakat", count: 126 },
  { name: "UX Design", count: 126 },
];

const titles = [
  { name: "Yazılım Mühendisi", count: 91 },
  { name: "CTO", count: 16 },
  { name: "Mühendis", count: 12 },
  { name: "Öğretmen", count: 43 },
  { name: "TYT/AYT Mentor", count: 184 },
  { name: "IELTS/TOEFL Mentor", count: 126 },
  { name: "UX Designer", count: 126 },
  { name: "Girişimci", count: 126 },
  { name: "Yapay Zeka Mühendisi", count: 126 },
  { name: "Kariyer Mentor", count: 126 },
];

const companies = [
  { name: "Google", count: 191 },
  { name: "Apple", count: 162 },
  { name: "Microsoft", count: 122 },
  { name: "Amazon", count: 32 },
  { name: "Tübitak", count: 24 },
  { name: "Trendyol", count: 12 },
  { name: "Sahibinden", count: 126 },
];

const FilterSection = ({
  title,
  items,
  showMore,
  setShowMore,
  placeholder,
  checkedItems,
  setCheckedItems,
}: FilterSectionProps) => {
  const sortedItems = [...items].sort((a, b) => {
    const aChecked = checkedItems.includes(a.name);
    const bChecked = checkedItems.includes(b.name);
    if (aChecked && !bChecked) return -1;
    if (!aChecked && bChecked) return 1;
    return 0;
  });

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-gray-700 font-bold">{title}</h3>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-3 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />
      <div className="flex flex-col gap-3 mt-2 text-gray-700 font-semibold text-sm">
        {sortedItems
          .slice(0, showMore ? sortedItems.length : 5)
          .map((item, index) => (
            <FilterItem
              key={index}
              name={item.name}
              count={item.count}
              isChecked={checkedItems.includes(item.name)}
              onCheck={(checked) => {
                if (checked) {
                  setCheckedItems([...checkedItems, item.name]);
                } else {
                  setCheckedItems(
                    checkedItems.filter((name) => name !== item.name)
                  );
                }
              }}
            />
          ))}
        {items.length > 5 && (
          <p
            className="text-gray-500 font-semibold text-sm mt-1 cursor-pointer hover:text-gray-700 transition-all duration-[75ms] w-fit"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Daha az göster" : "Daha fazla göster"}
          </p>
        )}
      </div>
    </div>
  );
};

const FilterItem = ({ name, count, isChecked, onCheck }: FilterItemProps) => (
  <div className="flex items-center justify-between gap-2">
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onCheck(e.target.checked)}
        className="h-4 w-4 cursor-pointer rounded border border-gray-300 transition-all checked:border-blue-600 checked:bg-blue-600 hover:border-blue-600"
      />
      <p>{name}</p>
    </div>
    <p>{count}</p>
  </div>
);

const BrowseFiltersSection = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const [showMoreSkills, setShowMoreSkills] = useState(false);
  const [showMoreTitles, setShowMoreTitles] = useState(false);
  const [showMoreCompanies, setShowMoreCompanies] = useState(false);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [checkedSkills, setCheckedSkills] = useState<string[]>(
    searchParams.get("yetenek")?.split(",") || []
  );
  const [checkedTitles, setCheckedTitles] = useState<string[]>(
    searchParams.get("unvan")?.split(",") || []
  );
  const [checkedCompanies, setCheckedCompanies] = useState<string[]>(
    searchParams.get("sirket")?.split(",") || []
  );
  const isInitialMount = useRef(true);

  useEffect(() => {
    const search = searchParams.get("search") || "";
    const yetenek = searchParams.get("yetenek")?.split(",") || [];
    const unvan = searchParams.get("unvan")?.split(",") || [];
    const sirket = searchParams.get("sirket")?.split(",") || [];

    setSearchQuery(search);
    setCheckedSkills(yetenek);
    setCheckedTitles(unvan);
    setCheckedCompanies(sirket);
  }, [searchParams]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const params = new URLSearchParams();
    if (checkedSkills.length > 0)
      params.set("yetenek", checkedSkills.join(","));
    if (checkedTitles.length > 0) params.set("unvan", checkedTitles.join(","));
    if (checkedCompanies.length > 0)
      params.set("sirket", checkedCompanies.join(","));
    if (searchQuery) params.set("search", searchQuery);
    router.push(`/mentor/kesfet?${params.toString()}`, { scroll: false });
  }, [checkedSkills, checkedTitles, checkedCompanies, searchQuery]);

  return (
    <div className="w-full flex-1">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Mentorleri Ara (Yetenek, Şirket, Pozisyon)"
          className="w-full p-3 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <p className="text-sm text-gray-500 font-semibold">
          500+ Mentor Bulundu
        </p>
      </div>
      <button
        className="text-gray-500 font-semibold text-sm mt-3 cursor-pointer hover:text-gray-800 transition-all duration-[75ms] bg-gray-100 p-3 rounded-md flex items-center gap-1 w-full justify-between hover:bg-gray-200 lg:hidden"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? "Filtreleri Gizle" : "Filtreleri Gör"}
        {showFilters ? (
          <ChevronUp className="text-blue-600" />
        ) : (
          <ChevronDown className="text-blue-600" />
        )}
      </button>
      <div
        className={`lg:flex flex-col gap-12 lg:mt-10 mt-6 ${
          showFilters ? "flex" : "hidden"
        }`}
      >
        <FilterSection
          title="Yetenekler"
          items={skills}
          showMore={showMoreSkills}
          setShowMore={setShowMoreSkills}
          placeholder="Yeteneğe göre ara"
          checkedItems={checkedSkills}
          setCheckedItems={setCheckedSkills}
        />

        <FilterSection
          title="Ünvan"
          items={titles}
          showMore={showMoreTitles}
          setShowMore={setShowMoreTitles}
          placeholder="Ünvana göre ara"
          checkedItems={checkedTitles}
          setCheckedItems={setCheckedTitles}
        />

        <FilterSection
          title="Şirket"
          items={companies}
          showMore={showMoreCompanies}
          setShowMore={setShowMoreCompanies}
          placeholder="Şirkete göre ara"
          checkedItems={checkedCompanies}
          setCheckedItems={setCheckedCompanies}
        />
      </div>
    </div>
  );
};

export default BrowseFiltersSection;
