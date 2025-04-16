"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  PhoneOutlined,
  FacebookOutlined,
  MailOutlined,
} from "@ant-design/icons";
import navigations from "@/data/navigation";

const Footer = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="flex justify-center bg-[#f1f0fc] text-[#1e1e1e]">
      <div className="container px-4 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          {/* Logo + Description */}
          <div className="flex flex-col items-center gap-6 sm:items-start">
            <Link href="/" className="relative h-16 w-36">
              <Image
                src="/images/logo.png"
                fill
                alt="logo"
                className="object-contain w-auto h-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-center text-gray-700 sm:text-base sm:text-left">
              Mongolian Nuclear Professional Association
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 sm:grid-cols-3 sm:gap-6 sm:text-base">
            {navigations.map((nav, i) => (
              <Link
                key={`footer nav ${i}`}
                href={nav.href}
                className={`relative inline-block group transition-colors duration-200 hover:text-[#334EAC] ${
                  i % 2 === 0 ? "sm:text-left" : "sm:text-start"
                }`}
              >
                {nav.label}
                {/* Underline effect */}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#334EAC] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 text-sm text-gray-700 sm:text-base">
            <h1 className="text-center sm:text-left font-semibold text-[#334EAC]">
              Холбоо барих
            </h1>

            <div className="flex gap-2 items-center justify-center sm:justify-start hover:text-[#334EAC] transition">
              <PhoneOutlined />
              <p>+976 88112233</p>
            </div>
            <div className="flex gap-2 items-center justify-center sm:justify-start hover:text-[#334EAC] transition">
              <MailOutlined />
              <p>info@nuclear.mn</p>
            </div>
            <div className="flex gap-2 items-center justify-center sm:justify-start hover:text-[#334EAC] transition">
              <FacebookOutlined />
              <p>Mongolian Nuclear Professional Association</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 mt-10 text-sm text-center text-gray-500 border-t border-gray-300">
          © 2025 Монголын Цөмийн Мэргэжлийн Холбоо
        </div>
      </div>
    </footer>

    // <footer className="flex justify-center bg-[#f1f0fc]">
    //   <div className="container px-4 py-10">
    //     <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
    //       <div className="flex flex-col items-center gap-10 sm:items-start">
    //         <Link href="/" className="relative h-20 w-38">
    //           <Image
    //             src="/images/logo.png"
    //             fill
    //             alt="logo"
    //             className="w-auto h-auto"
    //           />
    //         </Link>
    //         <p className="text-center sm:text-left">
    //           Mongolian Nuclear Professional Association
    //         </p>
    //       </div>
    //       <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-5 text-start">
    //         {navigations.map((nav, i) => (
    //           <Link
    //             key={`footer nav ${i}`}
    //             className={`nav-link ${
    //               i % 2 === 0 ? "sm:text-left" : "sm:text-center"
    //             }`}
    //             href={nav.href}
    //           >
    //             {nav.label}
    //           </Link>
    //         ))}
    //       </div>
    //       <div className="flex flex-col gap-5">
    //         <h1 className="text-center sm:text-left">Холбоо барих</h1>

    //         <div className="flex items-center justify-center gap-2 sm:justify-start">
    //           <PhoneOutlined />
    //           <p>+976 88112233</p>
    //         </div>
    //         <div className="flex items-center justify-center gap-2 sm:justify-start">
    //           <MailOutlined />
    //           <p>+976 88112233</p>
    //         </div>

    //         <div className="flex items-center justify-center gap-2 sm:justify-start">
    //           <FacebookOutlined />
    //           <p>Mongolian Nuclear Professional Association</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="border-t-[1px] border-gray-400 my-10 p-5 text-center ">
    //       © 2025 Монголын Цөмийн Мэргэжлийн Холбоо
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
