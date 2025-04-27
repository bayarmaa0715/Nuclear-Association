"use client";
import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";

const topics = [
  {
    src: "/assets/images/topic-1.png",
    alt: "Sport",
    title: "Цөмийн эрчим хүч",
    articles: 38,
  },
  {
    src: "/assets/images/topic-2.png",
    alt: "Travel",
    title: "Цацрагийн хамгаалалт",
    articles: 63,
  },
  {
    src: "/assets/images/topic-3.png",
    alt: "Design",
    title: "Цөмийн анагаах ухаан",
    articles: 78,
  },
  {
    src: "/assets/images/topic-4.png",
    alt: "Movie",
    title: "Цөмийн судалгаа",
    articles: 125,
  },
  {
    src: "/assets/images/topic-5.png",
    alt: "Lifestyle",
    title: "Цөмийн аюулгүй байдал",
    articles: 78,
  },
];

export default function TopicsSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? topics.length - 1 : prev - 1));
  const nextSlide = () =>
    setIndex((prev) => (prev === topics.length - 1 ? 0 : prev + 1));

  return (
    <section className="px-4">
      <div className="container mx-auto md:px-4 border-2 rounded-lg border-[#dae3ff] ">
        <div className="p-6 rounded-lg md:flex">
          <div className="flex items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Танин мэдэхүй</h2>
              <p className="mb-6 text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
                nostrum.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 flex items-center justify-center bg-[#dae3ff] rounded-full"
                >
                  <ArrowLeftOutlined className="text-black" size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 flex items-center justify-center bg-[#dae3ff] rounded-full"
                >
                  <ArrowRightOutlined className="text-black" size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="relative mt-6 overflow-hidden ">
            <ul
              style={{ transform: `translateX(-${index * 100}%)` }}
              className="flex transition-transform duration-500 md:gap-5 md:overflow-x-scroll md:scrollbar-hide no-scrollbar"
            >
              {topics.map((topic, i) => (
                <li
                  key={i}
                  className="w-full flex-shrink-0 md:w-[307px] md:flex-grow md:flex md:flex-col group"
                >
                  <a href="#" className="relative block">
                    <div className="relative w-[307px] h-[418px]  rounded-lg overflow-hidden">
                      <Image
                        src={topic.src}
                        alt={topic.alt}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-start">
                      <span className="text-lg font-bold text-blue-300 group-hover:text-white">
                        {topic.title}
                      </span>
                      <p className="text-sm text-gray-400">
                        {topic.articles} Articles
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
