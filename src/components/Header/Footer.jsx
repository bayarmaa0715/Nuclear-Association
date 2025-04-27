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
    <footer className="flex justify-center bg-white border-t-[1px] border-[#dae3ff] rounded-t-4xl ">
      <div className="container px-4 py-5 mx-auto md:py-12">
        <div className="flex flex-col items-center gap-6 md:justify-between md:flex-row">
          {/* Logo + Description */}
          <div className="flex flex-col items-center justify-start gap-6 sm:items-start md:items-start">
            <Link href="/" className="relative w-40 h-24 ">
              <Image
                src="/images/logo.png"
                fill
                alt="logo"
                className="w-auto h-auto "
              />
            </Link>
            <p className="leading-relaxed text-center uppercase sm:text-left">
              Mongolian Nuclear Professional Association
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-5 md:gap-10 md:grid-cols-3">
            {navigations.map((nav, i) => (
              <Link
                key={`footer nav ${i}`}
                href={nav.href}
                className={`relative inline-block group transition-colors w-full md:uppercase duration-200 hover:text-[#334EAC] ${
                  i % 2 === 0 ? "sm:text-left" : "sm:text-start"
                }`}
              >
                {nav.label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#334EAC] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 text-sm sm:text-base">
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
        <div className="pt-5 mt-5 text-center text-gray-500 border-t border-gray-300 md:mt-10">
          © 2025 Монголын Цөмийн Мэргэжлийн Холбоо
        </div>
      </div>
    </footer>
  );
};

export default Footer;
