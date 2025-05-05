"use client";
import Image from "next/image";
import { UserPlus, Menu, X, Mail } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Mentorleri Keşfet", path: "/mentorler" },
  { name: "Hizmetlerimiz", path: "/hizmetler" },
];

const mentorServices = [
  { name: "Yazilim Mentorleri" },
  { name: "YKS Mentorleri" },
  { name: "Muhendislik Mentorleri" },
  { name: "IELTS/TOEFL Mentorleri" },
  { name: "Girisimcilik Mentorleri" },
  { name: "Yapay Zeka Mentorleri" },
  { name: "Kariyer Mentorleri" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12">
        <div className="py-2 lg:py-4 xl:py-5 flex justify-between items-center border-b border-gray-100  ">
          <Link href="/" aria-label="Ana Sayfa">
            <div className="flex gap-2 items-center cursor-pointer">
              <Image
                src="/images/mentorbullogo.svg"
                alt="Mentor Bul Logo"
                width={40}
                height={40}
              />
              <h1 className="text-4xl tracking-tight">
                <span className="text-blue-600 font-bold pr-[1px]">mentor</span>
                bul
              </h1>
            </div>
          </Link>

          <nav className="hidden xl:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`cursor-pointer font-extrabold hover:text-blue-600 border-b-2 pb-[2px] 
                      ${
                        isActive
                          ? "border-blue-600 text-blue-600"
                          : "border-transparent"
                      } 
                      hover:border-blue-600 transition-all delay-[50ms] text-base mt-1`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-8">
            <Link href="/kayit" className="hidden sm:block">
              <button className="btn-main flex items-center gap-3">
                <span>Kayıt Ol</span>
                <UserPlus size={22} />
              </button>
            </Link>

            {/* MOBILE NAVIGATION MENU ICON */}
            <Menu
              className="cursor-pointer xl:hidden"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>
        </div>
        <div className="py-2 lg:py-4 xl:py-5 hidden xl:block">
          <ul className="flex justify-between">
            {mentorServices.map((mentorService) => (
              <li
                key={mentorService.name}
                className="cursor-pointer text-gray-800 hover:bg-gray-100 transition-all delay-[50ms] px-4 py-1 rounded-md font-medium"
              >
                {mentorService.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* SLIDE-IN MENU - MOBILE*/}
      <div className={`fixed inset-0 z-50 ${isMenuOpen ? "block" : "hidden"}`}>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu */}
        <div className="flex flex-col fixed right-0 top-0 h-full w-80 bg-white transform transition-transform duration-300 ease-in-out">
          <div className="p-4 flex justify-between items-center border-b border-gray-200">
            <h2 className="text-xl font-bold">Menü</h2>
            <X
              className="cursor-pointer hover:text-blue-600 transition-all delay-[50ms]"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <nav className="p-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path} className="w-fit">
                    <Link
                      href={item.path}
                      className={`block font-extrabold hover:text-blue-600
                        ${isActive ? "text-blue-600" : ""}
                        transition-all delay-[50ms] text-base`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}

              <li>
                <button className="btn-main flex items-center mx-auto mt-4 gap-3">
                  <span>Kayıt Ol</span>
                  <UserPlus size={22} />
                </button>
              </li>
            </ul>
          </nav>
          {/* SLIDE-IN MENU FOOTER SECTION */}
          <footer className="mt-auto border-t border-gray-300 py-3 px-2">
            <div className="flex flex-col items-center gap-2 text-gray-600 text-xs">
              <div className="flex flex-col items-center mb-3">
                <a
                  className="text-lg text-blue-600"
                  href="https://mentorbul.com/"
                >
                  mentorbul.com
                </a>
                <p>Başarıya giden yolda mentorun yanında</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>help@mentorbul.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm ">
                <Link href={"/"}>
                  <FaInstagram />
                </Link>
                <Link href={"/"}>
                  <FaXTwitter />
                </Link>

                <Link href={"/"}>
                  <FaLinkedin />
                </Link>
              </div>
              <p>
                © {new Date().getFullYear()} MentorBul. Tüm hakları saklıdır.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Header;
