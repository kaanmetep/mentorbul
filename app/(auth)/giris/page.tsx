"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Home } from "lucide-react";
const KayitPage = () => {
  const [loginType, setLoginType] = useState("mentee");

  return (
    <div className="bg-gray-50 flex min-h-screen">
      <div className="md:flex flex-col h-screen w-[40%] bg-gray-50 shadow-sm hidden">
        <img
          src="/images/mentorbullogo.svg"
          alt="Mentorbul Logo"
          className="w-32 h-32 my-auto mx-auto"
        />
      </div>
      <div className="flex items-center justify-center  w-full mx-auto relative">
        <Link href="/" className="absolute left-4 top-4 ">
          <Home size={24} className="text-blue-500" />
        </Link>
        <div className="w-[400px]">
          <h3 className="text-3xl font-extrabold mb-6 text-gray-800">
            Giriş Yap
          </h3>
          <div className="flex gap-16 font-bold">
            <div className="flex gap-16 border-b border-gray-300 w-full">
              <div
                className={`flex-1 p-5 cursor-pointer hover:text-gray-600 ${
                  loginType === "mentee"
                    ? "text-gray-800 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setLoginType("mentee")}
              >
                Mentee Girişi
              </div>
              <div
                className={`flex-1 p-5 cursor-pointer hover:text-gray-600 ${
                  loginType === "mentor"
                    ? "text-gray-800 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setLoginType("mentor")}
              >
                Mentor Girişi
              </div>
            </div>
          </div>

          <form className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-[5px]"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Email Adresinizi Girin"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-[5px]"
              >
                Şifre
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Şifre"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 font-medium cursor-pointer"
            >
              Giriş Yap
            </button>

            {loginType === "mentee" && (
              <>
                {" "}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-50 text-gray-500">veya</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition duration-200 font-medium"
                >
                  <FcGoogle className="w-5 h-5" />
                  Google ile giriş yap
                </button>
              </>
            )}

            <div className="mt-4 text-center">
              <Link
                href="/forgot-password"
                className="text-blue-500 hover:text-blue-600 text-sm"
              >
                Şifreni mi unuttun?
              </Link>
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p className="mb-3">Hesabın yok mu? </p>
              <div>
                <Link
                  href="/signup-mentee"
                  className="text-blue-500 hover:text-blue-600 font-medium underline"
                >
                  Mentee olarak kaydol
                </Link>
                <span className="mx-2">veya</span>
                <Link
                  href="/mentor/basvur"
                  className="text-blue-500 hover:text-blue-600 font-medium underline"
                >
                  Mentor olmak için başvur
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KayitPage;
