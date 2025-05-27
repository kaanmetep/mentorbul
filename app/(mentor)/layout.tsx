import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className=" border-b border-gray-200 shadow-sm">
        <Header />
      </div>
      {children}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12 my-20 lg:my-30">
        <Footer />
      </div>
    </div>
  );
}
