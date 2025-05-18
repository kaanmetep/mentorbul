import HeroSection from "@/components/home/HeroSection";
import Banner from "@/components/home/Banner";
import MentorshipPromoSection from "@/components/home/MentorshipPromoSection";
import Testimonial from "@/components/home/Testimonial";
import SearchMentorsSection from "@/components/home/SearchMentorsSection";
import FAQSection from "@/components/home/FAQSection";
import MentorCardsHighlightSection from "@/components/home/MentorCardsHighlightSection";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12">
        <HeroSection />
      </div>
      <Banner />
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
          comment="MentorBul’u keşfettikten sonra yalnız olmadığımı fark ettim. Sorularımı içtenlikle yanıtlayan bir mentorla eşleşmek bana güven verdi. Kısa sürede hem kişisel hem de profesyonel gelişimimde ilerleme kaydettim. Gerçekten değerli bir platform."
          title="Frontend Developer"
        />
      </div>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12 my-20 lg:my-30">
        <FAQSection />
      </div>
      <div className="my-20 lg:my-30">
        <MentorCardsHighlightSection />
      </div>
    </>
  );
}
