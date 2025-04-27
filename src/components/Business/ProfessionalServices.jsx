import React from "react";
import {
  SafetyCertificateOutlined,
  DeploymentUnitOutlined,
  EnvironmentOutlined,
  CarOutlined,
  DeleteOutlined,
  HomeOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const services = [
  {
    icon: (
      <SafetyCertificateOutlined style={{ fontSize: 48, color: "#1E40AF" }} />
    ),
    title: "Цөмийн хууль эрх зүй, зөвлөгөө",
    description:
      "Цөмийн салбарын хууль эрх зүй, тусгай зөвшөөрлийн талаар зөвлөгөө өгөх",
  },
  {
    icon: <DeploymentUnitOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
    title: "Цацраг идэвхт ашигт малтмал",
    description:
      "Цацраг идэвхт ашигт малтмалын хайгуул, олборлолт, байгаль орчин, ТЭЗҮ-ийн цацрагийн дүн шинжилгээ",
  },
  {
    icon: <EnvironmentOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
    title: "Цацрагийн хэмжилт",
    description:
      "Цацрагийн үүсгүүр ашигладаг байгууллагын ажлын байр, талбайд хэмжилт хийж, дүгнэлт гаргана",
  },
  {
    icon: <CarOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
    title: "Импорт, тээвэрлэлтийн зөвлөгөө",
    description:
      "Цацрагийн үүсгүүр импортлох, тээвэрлэх үйл ажиллагаанд зөвлөгөө өгнө",
  },
  {
    icon: <DeleteOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
    title: "Цацрагийн хамгаалалт",
    description:
      "Байгууллагын цацрагийн хамгаалалтыг сайжруулах төлөвлөгөө боловсруулж зөвлөгөө өгнө",
  },
  {
    icon: <DeleteOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
    title: "Цацраг идэвхт хаягдлын зөвлөгөө",
    description:
      "Цацраг идэвхт хаягдлыг тээвэрлэх, хадгалах, аюулгүй болгоход зөвлөгөө өгнө",
  },
  {
    icon: <HomeOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
    title: "Орон байрны радоны хэмжилт",
    description:
      "Орон байрны радоны хэмжилт хийж, эрсдлийн үнэлгээ, дүгнэлт гаргана",
  },
  {
    icon: <FileTextOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
    title: "Төслийн баримт бичиг",
    description: "Цөмийн салбарын баримт бичиг боловсруулах, зөвлөгөө өгөх",
  },
];

export default function ProfessionalServices() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <h1 className="mb-12 text-3xl font-bold text-center text-prussian-blue">
          Мэргэжлийн үйлчилгээ
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-6">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={`${
                  index === 6 ? "md:col-start-2 md:col-end-4 " : "col-span-2"
                } ${
                  index === 7 ? "md:col-start-4 md:col-end-6 " : "col-span-2"
                } flex flex-col items-center p-6 text-center transition-transform duration-300 ease-in-out transform bg-white shadow-md group rounded-2xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105`}
              >
                <div className="p-4 mb-4 transition-colors duration-300 bg-blue-100 rounded-full group-hover:bg-blue-200">
                  {service?.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-blue-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
