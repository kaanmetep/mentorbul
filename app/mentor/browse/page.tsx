"use client";
import React from "react";
import BrowseFiltersSection from "@/components/mentor/browse/BrowseFiltersSection";
import BrowseMentorsSection from "@/components/mentor/browse/BrowseMentorsSection";
const BrowseMentors = () => {
  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12 py-10">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* LEFT SIDE - FILTERS */}
        <BrowseFiltersSection />
        {/* RIGHT SIDE - MENTORS */}
        <BrowseMentorsSection />
      </div>
    </div>
  );
};

export default BrowseMentors;
