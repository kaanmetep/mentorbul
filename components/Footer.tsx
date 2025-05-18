import React from "react";
import Image from "next/image";
import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex flex-col items-start gap-4 min-w-[220px]">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/images/mentorbullogo.svg"
              alt="Mentor Bul Logo"
              width={40}
              height={40}
            />
            <h1 className="text-2xl tracking-tight">
              <span className="text-blue-600 font-bold pr-[1px]">mentor</span>
              bul
            </h1>
          </div>
          <p className="text-gray-500 text-base max-w-xs">
            Başarıya giden yolda mentorun yanında.
          </p>
          <div className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition">
            <MdEmail size={20} />
            <a href="mailto:help@mentorbul.com" className="text-base">
              help@mentorbul.com
            </a>
          </div>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="X"
              className="text-gray-400 hover:text-black transition"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-700 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
        {/* Sağ: Linkler */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-30">
          <div>
            <h4 className="text-sm font-bold text-gray-500 mb-3 tracking-widest">
              PLATFORM
            </h4>
            <ul className="flex flex-col gap-2 text-base">
              <li>
                <a href="#" className="hover:underline">
                  Mentorları Bul
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mentor Ol
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mentee Ol
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hizmetlerimiz
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-500 mb-3 tracking-widest">
              DESTEK
            </h4>
            <ul className="flex flex-col gap-2 text-base">
              <li>
                <a href="#" className="hover:underline">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-500 mb-3 tracking-widest">
              YASAL
            </h4>
            <ul className="flex flex-col gap-2 text-base">
              <li>
                <a href="#" className="hover:underline">
                  KVKK
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hizmet Koşulları
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gizlilik Politikası
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-sm text-gray-400 mt-20">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-900">Mentorbul</span>. Tüm
        hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
