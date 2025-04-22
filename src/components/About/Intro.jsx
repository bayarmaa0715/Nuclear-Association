"use client";
import { Carousel } from "antd";
import { carouselDotStyle, images } from "../Hero";
import Image from "next/image";

export const Intro = () => {
  return (
    <div className="flex justify-center bg-white ">
      <div className="container relative flex flex-col items-center justify-center min-h-screen gap-5 p-4 md:gap-10">
        <h2 className="text-2xl font-bold md:text-4xl text-prussian-blue">
          Холбооны танилцуулга
        </h2>
        <div className="grid items-center gap-5 md:gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-5 md:gap-10">
            <h2 className="text-sm font-bold tracking-wider md:text-2xl ">
              Монголын Цөмийн Мэргэжлийн Холбоо
            </h2>
            <p className="text-base text-justify md:text-lg text-slate-700">
              Цөмийн Шинжлэх Ухаан, Технологи, Инновацын Холбоо ТББ нь Монгол
              Улсын хууль тогтоомжийн хүрээнд үйл ажиллагаа явуулдаг, цөмийн
              салбарын мэргэжлийн төрийн бус байгууллага юм. Тус Холбоо нь
              цөмийн технологийн аюулгүй, үр ашигтай хөгжлийг дэмжих, салбарын
              мэргэжилтнүүдийн чадавхийг бэхжүүлэх, олон нийтийн мэдлэг
              ойлголтыг нэмэгдүүлэхэд чиглэсэн үйл ажиллагааг тэргүүлэх
              зорилготой. Холбоо нь Цөмийн энерги ба цөмийн аж үйлдвэрийн олон
              улсын ахмадын холбооны гишүүн бөгөөд олон улсын түвшинд салбарын
              хамтын ажиллагааг хөгжүүлэхэд идэвхтэй оролцож байна
            </p>
          </div>

          <Carousel autoplay className="custom-carousel">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-[3/2] md:h-full rounded-lg "
              >
                <Image
                  src={src}
                  fill={true}
                  alt={`Intro image ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <style jsx global>
          {carouselDotStyle}
        </style>
      </div>
    </div>
  );
};
