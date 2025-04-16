"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import navigations from "@/data/navigation";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const renderMenuItems = (children) => {
    return children.map((child, index) => (
      <li
        key={`${child.key || child.label}-${index}`}
        className="px-4 py-2 hover:text-[#334EAC]"
      >
        <Link href={child.href || "#"}>{child.label}</Link>
      </li>
    ));
  };
  return (
    <nav className="relative z-50 shadow-lg">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <Link
          href="/"
          className="relative flex-shrink-0 h-10 w-18 lg:w-38 lg:h-20"
        >
          <Image
            src="/images/logo.png"
            fill
            alt="logo"
            className="w-auto h-auto"
          />
        </Link>

        {/* Main Navigation */}
        <div className="hidden w-auto 2xl:flex">
          <ul className="flex space-x-8 text-lg font-semibold">
            {navigations.map((nav) => (
              <li key={nav.key} className="relative group">
                <Link href={nav.href || "#"} className="hover:text-[#334EAC]">
                  {nav.label}
                </Link>
                {nav.children && (
                  <ul className="absolute left-0 hidden space-y-4 bg-white shadow-lg group-hover:block max-h-[300px] overflow-auto">
                    {renderMenuItems(nav.children)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl text-gray-700 2xl:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          ☰
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`2xl:hidden fixed inset-0 z-40 bg-opacity-50 transition-transform ${
            isNavOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={() => setIsNavOpen(false)}
        >
          <div className="flex flex-col h-full p-6 bg-white">
            <button
              className="self-end text-3xl text-gray-700"
              onClick={() => setIsNavOpen(false)}
            >
              ×
            </button>
            <nav className="flex flex-col flex-1 gap-6 overflow-scroll">
              {navigations.map((item) => (
                <div key={item.key}>
                  <Link
                    href={item.href || "#"}
                    className="py-2 px-4 hover:text-[#334EAC]"
                    onClick={() => setIsNavOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="pl-4 max-h-[300px] overflow-auto">
                      {renderMenuItems(item.children)}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
