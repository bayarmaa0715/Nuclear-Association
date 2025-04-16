"use client";
import { Carousel } from "antd";
import Image from "next/image";
import { useState, useEffect } from "react";

// Image sources for the carousel
const images = ["/images/img1.jpeg", "/images/img2.jpeg", "/images/img3.jpeg"];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container grid items-center gap-2 px-4 mx-auto md:gap-12 lg:grid-cols-2">
        <div className="relative z-10">
          <p className="mb-3 text-xs font-bold tracking-wider sm:text-sm md:text-base text-carolina-blue">
            Сайн байна уу?
          </p>
          <h1 className="mb-5 text-2xl font-extrabold leading-tight sm:text-3xl md:text-5xl lg:text-6xl text-alice-blue">
            Монголын Цөмийн Мэргэжлийн Холбоо
          </h1>
          <p className="max-w-md mb-6 text-xs sm:max-w-lg sm:text-sm md:text-lg text-wild-blue-yonder">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum modi
            delectus minus culpa reprehenderit? Accusamus eveniet corrupti
            deserunt repudiandae in, numquam optio eum exercitationem voluptates
            praesentium rem? Consequatur nostrum laudantium dolores cumque autem
            nam commodi ullam rem error mollitia! Earum?
          </p>
        </div>

        <Carousel autoplay className="custom-carousel">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:h-full z-0 rounded-lg "
            >
              <Image
                src={src}
                fill={true}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <style jsx global>{`
        .ant-carousel .slick-dots li {
          width: 16px;
          height: 16px;
          margin: 0 6px;
        }

        .ant-carousel .slick-dots li button {
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          background: #d1d5db; /* Tailwind-ийн gray-300 */
          transition: background 0.3s ease;
        }

        .ant-carousel .slick-dots li.slick-active button {
          background: #1677ff; /* Active dot өнгө - Ant Design primary */
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
