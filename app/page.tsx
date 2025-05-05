import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
export default function Home() {
  return (
    <>
      <div className="border-b border-gray-200 shadow-sm">
        <Header />
      </div>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12">
        <HeroSection />
      </div>
    </>
  );
}
