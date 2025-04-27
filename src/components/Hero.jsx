"use client";
import { Carousel } from "antd";
import Image from "next/image";
import { useState, useEffect } from "react";

export const images = [
  "/images/img1.jpg",
  "/images/img2.webp",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
];
export const carouselDotStyle = `
  .ant-carousel .slick-dots li button {
    background-color: #dae3ff !important;
  }
  .ant-carousel .slick-dots li.slick-active button {
    background-color: #334EAC !important;
  }
  @media (max-width: 768px) {
    .ant-carousel .slick-dots {
      bottom: 20px !important;
    }
  }
`;

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container grid items-center grid-cols-1 gap-2 px-4 mx-auto md:gap-12 lg:grid-cols-2">
        <div className="relative z-10">
          <p className="mb-3 text-xs font-bold tracking-wider sm:text-sm md:text-base ">
            Сайн байна уу?
          </p>
          <h1 className="mb-12 text-3xl font-bold text-center md:text-start text-prussian-blue">
            Монголын Цөмийн Мэргэжлийн Холбоо
          </h1>
          <p className="text-base text-justify md:text-lg text-slate-700 ">
            “Цөмийн Шинжлэх Ухаан, Технологи, Инновацын Холбоо” ТББ нь Монгол
            Улсын хууль тогтоомжийн хүрээнд үйл ажиллагаа явуулдаг, цөмийн
            салбарын мэргэжлийн төрийн бус байгууллага юм. Тус Холбоо нь цөмийн
            технологийн аюулгүй, үр ашигтай хөгжлийг дэмжих, салбарын
            мэргэжилтнүүдийн чадавхийг бэхжүүлэх, олон нийтийн мэдлэг ойлголтыг
            нэмэгдүүлэхэд чиглэсэн үйл ажиллагааг тэргүүлэх зорилготой. Холбоо
            нь Цөмийн энерги ба цөмийн аж үйлдвэрийн олон улсын ахмадын холбооны
            гишүүн бөгөөд олон улсын түвшинд салбарын хамтын ажиллагааг
            хөгжүүлэхэд идэвхтэй оролцож байна
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
      <style jsx global>
        {carouselDotStyle}
      </style>
    </section>
  );
};

export default HeroSection;
