"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "antd";
import navigations from "@/data/navigation";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [menuKey, setMenuKey] = useState(Date.now());

  const handleMenuClick = (key) => {
    setActiveMenu(activeMenu === key ? null : key);
  };

  const items = navigations.map((nav) => ({
    key: nav.key,
    label: nav.href ? (
      <Link className="nav-link " href={nav.href}>
        {nav.label}
      </Link>
    ) : (
      nav.label
    ),
    children: nav.children
      ? nav.children.map((child) => ({
          key: child.key,
          label: child.label,
        }))
      : undefined,
  }));

  const renderMenuItems = (children) => {
    return children.map((child) => (
      <li key={child.key} className="py-2 px-4 hover:text-gray-700">
        <Link href={child.href || "#"}>{child.label}</Link>
      </li>
    ));
  };
  useEffect(() => {
    const handleResize = () => {
      setIsNavOpen(false);
      setMenuKey(Date.now());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className="shadow-lg ">
      <div className=" container mx-auto flex  justify-between items-center p-4  ">
        <Link
          href="/"
          className="relative w-18 h-10 lg:w-38 lg:h-20 flex-shrink-0  "
        >
          <Image
            src="/images/logo.png"
            fill
            alt="logo"
            className="w-auto h-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-grow justify-center ">
          <Menu
            key={menuKey}
            mode="horizontal"
            items={items}
            // selectedKeys={[current]}
            className=" text-lg custom-menu font-semibold"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-gray-700"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          ☰
        </button>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 z-40 bg-opacity-50 transition-transform ${
            isNavOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={() => setIsNavOpen(false)}
        >
          <div className="flex flex-col h-full p-6 bg-white">
            <button
              className="text-3xl text-gray-700 self-end"
              onClick={() => setIsNavOpen(false)}
            >
              ×
            </button>
            <nav className="flex flex-col flex-1 gap-6">
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
                    <ul className="pl-4">{renderMenuItems(item.children)}</ul>
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
