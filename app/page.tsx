import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
import Banner from "@/components/home/Banner";
import MentorshipPromoSection from "@/components/home/MentorshipPromoSection";
import Testimonial from "@/components/home/Testimonial";
import SearchMentorsSection from "@/components/home/SearchMentorsSection";
import CTASection from "@/components/home/CTASection";
export default function Home() {
  return (
    <>
      <div className=" border-b border-gray-200 shadow-sm">
        <Header />
      </div>
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
      <div className="mx-auto max-w-[800px] px-4 sm:px-8 lg:px-10 xl:px-12 my-30 lg:my-52">
        <Testimonial
          name="Fatma Karalar"
          image="https://thispersondoesnotexist.com/"
          rating={5}
          comment="MentorBul sayesinde kariyerimde yönümü buldum. Alanında uzman mentorum, sorularımı sabırla yanıtladı ve bana yol gösterdi. Bu platform, gerçekten destek arayan herkes için harika bir kaynak. İyi ki denemişim!"
          title="UX Designer"
        />
      </div>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12 my-20 lg:my-30">
        <CTASection />
      </div>
    </>
  );
}
