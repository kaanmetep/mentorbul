import HeroSection from "@/components/home/HeroSection";
import Banner from "@/components/home/Banner";
import MentorshipPromoSection from "@/components/home/MentorshipPromoSection";
import Testimonial from "@/components/home/Testimonial";
import SearchMentorsSection from "@/components/home/SearchMentorsSection";
import FAQSection from "@/components/home/FAQSection";
import MentorCardsHighlightSection from "@/components/home/MentorCardsHighlightSection";
import {
  GraduationCap,
  BookOpen,
  Pencil,
  Users,
  Lightbulb,
  Target,
  Award,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Compass,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12">
        <HeroSection />
      </div>
      <Banner />

      {/* Decorative background section with icons */}
      <div className="relative">
        {/* Decorative icons scattered throughout - positioned in margins, behind content */}
        <GraduationCap className="hidden lg:block absolute top-[50px] left-[3%] w-9 h-9 text-blue-300 opacity-25 -z-10" />
        <BookOpen className="hidden lg:block absolute top-[150px] right-[2%] w-7 h-7 text-indigo-300 opacity-20 rotate-12 -z-10" />
        <Star className="hidden lg:block absolute top-[250px] left-[4%] w-6 h-6 text-cyan-300 opacity-30 rotate-45 -z-10" />
        <Pencil className="hidden lg:block absolute top-[350px] right-[3%] w-7 h-7 text-sky-300 opacity-25 -rotate-45 -z-10" />
        <Lightbulb className="hidden lg:block absolute top-[450px] left-[2%] w-8 h-8 text-blue-200 opacity-30 -z-10" />
        <Users className="hidden lg:block absolute top-[550px] right-[4%] w-9 h-9 text-indigo-200 opacity-25 -z-10" />
        <Target className="hidden lg:block absolute top-[650px] left-[3%] w-7 h-7 text-cyan-200 opacity-30 rotate-45 -z-10" />
        <MessageCircle className="hidden lg:block absolute top-[750px] right-[2%] w-8 h-8 text-blue-300 opacity-25 -z-10" />
        <Award className="hidden lg:block absolute top-[850px] left-[4%] w-8 h-8 text-sky-200 opacity-30 -z-10" />
        <Sparkles className="hidden lg:block absolute top-[950px] right-[3%] w-7 h-7 text-indigo-300 opacity-25 -z-10" />
        <Compass className="hidden lg:block absolute top-[1050px] left-[2%] w-8 h-8 text-cyan-300 opacity-30 -z-10" />
        <TrendingUp className="hidden lg:block absolute top-[1150px] right-[4%] w-7 h-7 text-blue-200 opacity-25 rotate-12 -z-10" />
        <BookOpen className="hidden lg:block absolute top-[1250px] left-[3%] w-7 h-7 text-sky-300 opacity-30 -rotate-12 -z-10" />
        <Star className="hidden lg:block absolute top-[1350px] right-[2%] w-6 h-6 text-indigo-200 opacity-25 -rotate-45 -z-10" />
        <Pencil className="hidden lg:block absolute top-[1450px] left-[4%] w-7 h-7 text-cyan-200 opacity-30 rotate-90 -z-10" />
        <Lightbulb className="hidden lg:block absolute top-[1550px] right-[3%] w-8 h-8 text-blue-300 opacity-25 -z-10" />
        <Award className="hidden lg:block absolute top-[1650px] left-[2%] w-8 h-8 text-sky-200 opacity-30 rotate-45 -z-10" />
        <Users className="hidden lg:block absolute top-[1750px] right-[4%] w-7 h-7 text-indigo-300 opacity-25 -z-10" />
        <GraduationCap className="hidden lg:block absolute top-[1850px] left-[3%] w-8 h-8 text-cyan-300 opacity-30 rotate-12 -z-10" />
        <Target className="hidden lg:block absolute top-[1950px] right-[2%] w-7 h-7 text-blue-200 opacity-25 -rotate-45 -z-10" />
        <MessageCircle className="hidden lg:block absolute top-[2050px] left-[4%] w-8 h-8 text-sky-300 opacity-30 -z-10" />
        <Compass className="hidden lg:block absolute top-[2150px] right-[3%] w-7 h-7 text-indigo-200 opacity-25 rotate-45 -z-10" />
        <BookOpen className="hidden lg:block absolute top-[2250px] left-[2%] w-7 h-7 text-cyan-200 opacity-30 -rotate-12 -z-10" />
        <Sparkles className="hidden lg:block absolute top-[2350px] right-[4%] w-6 h-6 text-blue-300 opacity-25 -z-10" />
        <Pencil className="hidden lg:block absolute top-[2450px] left-[3%] w-7 h-7 text-sky-200 opacity-30 rotate-90 -z-10" />
        <Star className="hidden lg:block absolute top-[2550px] right-[2%] w-6 h-6 text-indigo-300 opacity-25 rotate-45 -z-10" />
        <Award className="hidden lg:block absolute top-[2650px] left-[4%] w-8 h-8 text-cyan-300 opacity-30 -z-10" />
        <Lightbulb className="hidden lg:block absolute top-[2750px] right-[3%] w-8 h-8 text-blue-200 opacity-25 -z-10" />
        <TrendingUp className="hidden lg:block absolute top-[2850px] left-[2%] w-7 h-7 text-sky-300 opacity-30 rotate-12 -z-10" />
        <Users className="hidden lg:block absolute top-[2950px] right-[4%] w-8 h-8 text-indigo-200 opacity-25 -z-10" />
        <Target className="hidden lg:block absolute top-[3050px] left-[3%] w-7 h-7 text-cyan-200 opacity-30 -rotate-45 -z-10" />
        <GraduationCap className="hidden lg:block absolute top-[3150px] right-[2%] w-9 h-9 text-blue-300 opacity-25 rotate-12 -z-10" />
        <MessageCircle className="hidden lg:block absolute top-[3250px] left-[4%] w-8 h-8 text-sky-200 opacity-30 -z-10" />
        <BookOpen className="hidden lg:block absolute top-[3350px] right-[3%] w-7 h-7 text-indigo-300 opacity-25 -rotate-12 -z-10" />
        <Compass className="hidden lg:block absolute top-[3450px] left-[2%] w-8 h-8 text-cyan-300 opacity-30 -z-10" />
        <Star className="hidden lg:block absolute top-[3550px] right-[4%] w-6 h-6 text-blue-200 opacity-25 rotate-45 -z-10" />
        <Pencil className="hidden lg:block absolute top-[3650px] left-[3%] w-7 h-7 text-sky-300 opacity-30 rotate-90 -z-10" />
        <Award className="hidden lg:block absolute top-[3750px] right-[2%] w-8 h-8 text-indigo-200 opacity-25 -z-10" />
        <Lightbulb className="hidden lg:block absolute top-[3850px] left-[4%] w-8 h-8 text-cyan-200 opacity-30 -z-10" />
        <TrendingUp className="hidden lg:block absolute top-[3950px] right-[3%] w-7 h-7 text-blue-300 opacity-25 rotate-12 -z-10" />
        <Users className="hidden lg:block absolute top-[4050px] left-[2%] w-9 h-9 text-sky-200 opacity-30 -z-10" />
        <Target className="hidden lg:block absolute top-[4150px] right-[4%] w-7 h-7 text-indigo-300 opacity-25 -rotate-45 -z-10" />
        <Sparkles className="hidden lg:block absolute top-[4250px] left-[3%] w-7 h-7 text-cyan-300 opacity-30 -z-10" />
        <BookOpen className="hidden lg:block absolute top-[4350px] right-[2%] w-7 h-7 text-blue-200 opacity-25 rotate-12 -z-10" />
        <MessageCircle className="hidden lg:block absolute top-[4450px] left-[4%] w-8 h-8 text-sky-300 opacity-30 -z-10" />
        <Star className="hidden lg:block absolute top-[4550px] right-[3%] w-6 h-6 text-indigo-200 opacity-25 -rotate-45 -z-10" />
        <Award className="hidden lg:block absolute top-[4650px] left-[2%] w-8 h-8 text-cyan-200 opacity-30 rotate-45 -z-10" />
        <Pencil className="hidden lg:block absolute top-[4750px] right-[4%] w-7 h-7 text-blue-300 opacity-25 rotate-90 -z-10" />
        <Compass className="hidden lg:block absolute top-[4850px] left-[3%] w-8 h-8 text-sky-200 opacity-30 -z-10" />

        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12 my-20 lg:my-30">
          <MentorshipPromoSection />
        </div>
        <div className="mx-auto max-w-[800px] px-4 sm:px-8 lg:px-10 xl:px-12 my-30 lg:my-40">
          <Testimonial
            name="Kaan Peksen"
            image="https://thispersondoesnotexist.com/"
            rating={5}
            comment="Mentorbul sayesinde hayalimdeki kariyer yolculuğuna emin adımlarla başladım. Alanında uzman bir mentorla birebir görüşmek bana özgüven kazandırdı. Herkese gönül rahatlığıyla tavsiye ediyorum!"
            title="Software Engineer"
          />
        </div>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12 my-20 lg:my-52">
          <SearchMentorsSection />
        </div>

        <div className="mx-auto max-w-[800px] px-4 sm:px-8 lg:px-10 xl:px-12 my-30 lg:my-40">
          <Testimonial
            name="Melisa Yücel"
            image="https://thispersondoesnotexist.com/"
            rating={5}
            comment="MentorBul'u keşfettikten sonra yalnız olmadığımı fark ettim. Sorularımı içtenlikle yanıtlayan bir mentorla eşleşmek bana güven verdi. Kısa sürede hem kişisel hem de profesyonel gelişimimde ilerleme kaydettim. Gerçekten değerli bir platform."
            title="Frontend Developer"
          />
        </div>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12 my-20 lg:my-30">
          <FAQSection />
        </div>
      </div>

      <div className="my-20 lg:my-30">
        <MentorCardsHighlightSection />
      </div>
    </>
  );
}
