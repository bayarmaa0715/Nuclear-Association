"use client";
import { Carousel } from "antd";
import { carouselDotStyle, images } from "../Hero";
import Image from "next/image";
import {
  BulbOutlined,
  TeamOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

export const Intro = () => {
  const goals = [
    {
      icon: <FileSearchOutlined style={{ fontSize: 60, color: "#3b82f6" }} />,
      text: "Цөмийн салбарын нэр хүнд, мэргэжлийн ёс зүйг бэхжүүлэх, салбарын үйл ажиллагааны ил тод байдал, хариуцлагын нэгдсэн стандартыг тогтоож, хэрэгжүүлэх ажлыг санаачлан зохион байгуулах",
    },
    {
      icon: <TeamOutlined style={{ fontSize: 60, color: "#3b82f6" }} />,
      text: "Цөмийн салбарт үйл ажиллагаа явуулж буй гишүүн байгууллага, хувь хүний эрх ашгийг хууль, журмын хүрээнд хамгаалах, тэдний дуу хоолойг төлөөлөх",
    },
    {
      icon: <BulbOutlined style={{ fontSize: 60, color: "#3b82f6" }} />,
      text: "Цөмийн салбарын мэргэжилтнүүдийн мэдлэг, ур чадварыг тасралтгүй дээшлүүлэхэд чиглэсэн сургалт, семинар, мэргэжил дээшлүүлэх хөтөлбөр, зөвлөх үйлчилгээ зэрэг үйл ажиллагааг хуулиар хориглоогүй хүрээнд явуулах",
    },
  ];
  return (
    <div className="flex justify-center min-h-screen bg-white">
      <div className="container relative flex flex-col items-center justify-center gap-5 px-5 md:gap-10">
        <h2 className="text-2xl font-bold md:text-4xl text-prussian-blue">
          Холбооны танилцуулга
        </h2>

        <div className="grid items-center w-full grid-cols-1 gap-5 md:gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-5 md:gap-10">
            <h2 className="text-sm font-bold uppercase md:text-2xl">
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
              хамтын ажиллагааг хөгжүүлэхэд идэвхтэй оролцож байна. Холбооны
              бүтэц нь Удирдах зөвлөл, Гүйцэтгэх удирдлага, Хяналтын зөвлөлөөс
              бүрдэх бөгөөд гишүүдийн бүрэн эрхт хурал нь дээд байгууллага нь
              болно. Холбооны гишүүнчлэл нь цөмийн салбарт үйл ажиллагаа
              явуулдаг байгууллага, аж ахуйн нэгж болон хувь хүмүүст нээлттэй
            </p>
          </div>

          <Carousel autoplay className="w-full custom-carousel">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-[3/2] md:h-full rounded-lg"
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

        <div className="flex flex-col w-full gap-5 md:grid md:grid-cols-3">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="flex relative items-center p-8 transition-all duration-300 transform border-[#dae3ff] shadow-xl group rounded-xl hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute top-[-4px] w-3/6 h-2 transform -translate-x-1/2 bg-[#dae3ff] group-hover:bg-[#334EAC] left-1/2 rounded-4xl"></div>
              <p className="text-base leading-relaxed text-justify bg-white text-slate-700 md:text-lg ">
                {goal.text}
              </p>
            </div>
          ))}
        </div>

        <style jsx global>
          {carouselDotStyle}
        </style>
      </div>
    </div>
  );
};
