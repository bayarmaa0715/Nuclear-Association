import React from "react";
import {
  SafetyOutlined,
  FileTextOutlined,
  AuditOutlined,
  GlobalOutlined,
  SolutionOutlined,
  ReadOutlined,
  CalendarOutlined,
  NotificationOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
const laws = [
  {
    icon: <SafetyOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
    title: "ЦӨМИЙН ЭРЧИМ ХҮЧНИЙ ТУХАЙ ХУУЛЬ",
    description:
      "Цөмийн эрчим хүчний ашиглалт, аюулгүй байдал, хог хаягдлын менежмент зэрэг асуудлыг зохицуулдаг.",
    year: "2002",
    link: "https://legalinfo.mn/mn/law/details/211",
  },
  {
    icon: <FileTextOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
    title: "ЦАЦРАГ ИДЭВХТ ХОГ ХАЯГДЛЫН ТУХАЙ ХУУЛЬ",
    description:
      "Цацраг идэвхт хог хаягдлын хадгалалт, тээвэрлэлт, устгалын асуудлыг зохицуулдаг.",
    year: "2012",
    link: "https://legalinfo.mn/mn/law/details/13861",
  },
  {
    icon: <AuditOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
    title: "ЦӨМИЙН АЮУЛГҮЙ БАЙДЛЫН ТУХАЙ ХУУЛЬ",
    description:
      "Цөмийн байгууламжийн аюулгүй ажиллагаа, хяналт, хамгаалалт зэрэг асуудлыг зохицуулдаг.",
    year: "2011",
    link: "https://legalinfo.mn/mn/law/details/13900",
  },
  {
    icon: <GlobalOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
    title: "ЦӨМИЙН ХЯНАЛТЫН ТУХАЙ ХУУЛЬ",
    description:
      "Цөмийн байгууламжийн үйл ажиллагааг хянах, үнэлэх, зөвшөөрөл олгох зэрэг асуудлыг зохицуулдаг.",
    year: "2004",
    link: "https://legalinfo.mn/mn/law/details/4778",
  },
  {
    icon: <NotificationOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
    title: "ЦАЦРАГ ИДЭВХТ БОДИСЫН ТУХАЙ ХУУЛЬ",
    description:
      "Цацраг идэвхт бодисын үйлдвэрлэл, хэрэглээ, хадгалалт, тээвэрлэлт.",
    year: "2013",
    link: "https://legalinfo.mn/mn/law/details/4567",
  },
  {
    icon: <SafetyOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
    title: "ЦӨМИЙН ЭРЧИМ ХҮЧНИЙ АЮУЛГҮЙ БАЙДЛЫН ХУУЛИЙН ХЭРЭГЖИЛТ",
    description:
      "Цөмийн эрчим хүчний аюулгүй байдлын хуулийн хэрэгжилт, түүний үр нөлөө, үнэлгээ.",
    year: "2019",
    link: "https://legalinfo.mn/mn/law/details/15432",
  },
];

const MongoliaLaw = () => {
  return (
    <div className="flex justify-center ">
      <div className="container flex flex-col items-center justify-center min-h-screen gap-5 p-4 text-center md:gap-10">
        <h1 className="text-2xl font-bold md:text-4xl text-prussian-blue">
          Монгол улсын хууль эрх зүйн орчин{" "}
        </h1>
        <p className="text-base text-center md:text-lg text-slate-700 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          culpa voluptas ullam cumque, obcaecati sequi possimus? Corporis
          officiis illum iste. Asperiores voluptas eveniet omnis blanditiis
          temporibus illum ipsum adipisci facilis.
        </p>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
          {laws.map((law, index) => (
            <div
              key={index}
              className="relative p-6 transition-all duration-300 ease-in-out transform rounded-lg hover:shadow-xl hover:scale-105 hover:translate-y-2"
            >
              <div className="absolute top-1/2 left-0 h-4/6 w-2 transform -translate-x-1/2 -translate-y-1/2 bg-[#dae3ff] group-hover:bg-[#334EAC] rounded-4xl"></div>

              <div className="flex justify-center p-4 mb-4 transition-colors duration-300 rounded-full group">
                {law.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                {law.title}
              </h2>
              <p className="mt-2 text-base text-gray-600">{law.description}</p>
              <div className="mt-4">
                <a
                  href={law.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-900 hover:text-blue-700"
                >
                  Дэлгэрэнгүй
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MongoliaLaw;
