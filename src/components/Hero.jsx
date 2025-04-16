"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = ["/images/img1.jpeg", "/images/img2.jpeg", "/images/img3.jpeg"];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

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

        <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:h-full z-0 rounded-lg">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              fill
              alt={`Image ${index + 1}`}
              className={`absolute object-cover transition-all duration-500 ease-in-out rounded-lg ${
                index === currentIndex
                  ? "opacity-100 cursor-pointer pointer-events-auto"
                  : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute left-0 right-0 z-10 flex justify-between top-1/2">
            <button
              onClick={handlePrev}
              className="p-2 text-white bg-gray-300 rounded-full bg-garay-500"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="p-2 text-white bg-blue-500 bg-opacity-50 rounded-full"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
