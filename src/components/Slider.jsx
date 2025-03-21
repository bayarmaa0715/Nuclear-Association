"use client";
import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";

const topics = [
  {
    src: "/assets/images/topic-1.png",
    alt: "Sport",
    title: "Sport",
    articles: 38,
  },
  {
    src: "/assets/images/topic-2.png",
    alt: "Travel",
    title: "Travel",
    articles: 63,
  },
  {
    src: "/assets/images/topic-3.png",
    alt: "Design",
    title: "Design",
    articles: 78,
  },
  {
    src: "/assets/images/topic-4.png",
    alt: "Movie",
    title: "Movie",
    articles: 125,
  },
  {
    src: "/assets/images/topic-5.png",
    alt: "Lifestyle",
    title: "Lifestyle",
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
    <section
      className="py-16  text-black bord flex justify-center "
      id="topics"
    >
      <div className="container mx-auto px-4 border-2 rounded-lg border-[#dae3ff] ">
        <div className=" p-6 rounded-lg md:flex">
          <div className="flex items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Танин мэдэхүй</h2>
              <p className="text-gray-400 mb-6">
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
          <div className="overflow-hidden relative mt-6 ">
            <ul
              style={{ transform: `translateX(-${index * 100}%)` }}
              className="flex md:gap-5 transition-transform duration-500  md:overflow-x-scroll md:scrollbar-hide no-scrollbar"
            >
              {topics.map((topic, i) => (
                <li
                  key={i}
                  className="w-full flex-shrink-0 md:w-[307px] md:flex-grow md:flex md:flex-col group"
                >
                  <a href="#" className="block relative">
                    <div className="relative w-[307px] h-[418px]  rounded-lg overflow-hidden">
                      <Image
                        src={topic.src}
                        alt={topic.alt}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                    </div>
                    <div className="absolute bottom-4 left-4">
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
