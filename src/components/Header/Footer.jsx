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
    <footer className="flex justify-center bg-[#f1f0fc]">
      <div className="container px-4 py-10">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
          <div className="flex flex-col items-center sm:items-start gap-10">
            <Link href="/" className="relative w-38 h-20">
              <Image
                src="/images/logo.png"
                fill
                alt="logo"
                className="w-auto h-auto"
              />
            </Link>
            <p className="text-center sm:text-left">
              Mongolian Nuclear Professional Association
            </p>
          </div>
          <div className="grid grid-cols- sm:grid-cols-3 gap-10 sm:gap-5 text-start">
            {navigations.map((nav, i) => (
              <Link
                key={`footer nav ${i}`}
                className={`nav-link ${
                  i % 2 === 0 ? "sm:text-left" : "sm:text-center"
                }`}
                href={nav.href}
              >
                {nav.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-center sm:text-left">Холбоо барих</h1>

            <div className="flex gap-2 items-center justify-center sm:justify-start">
              <PhoneOutlined />
              <p>+976 88112233</p>
            </div>
            <div className="flex gap-2 items-center justify-center sm:justify-start">
              <MailOutlined />
              <p>+976 88112233</p>
            </div>

            <div className="flex gap-2 items-center justify-center sm:justify-start">
              <FacebookOutlined />
              <p>Mongolian Nuclear Professional Association</p>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-gray-400 my-10 p-5 text-center ">
          © 2025 Монголын Цөмийн Мэргэжлийн Холбоо
        </div>
      </div>
    </footer>
  );
};

export default Footer;
