import React from "react";
import Image from "next/image";

const InternationalContract = () => {
  const contracts = [
    {
      title: "Цөмийн зэвсэг үл дэлгэрүүлэх гэрээ (NPT)",
      description:
        "Цөмийн зэвсгийн тархалтыг хязгаарлаж, энхийн зорилгоор ашиглахыг дэмждэг.",
    },
    {
      title: "Цөмийн туршилтыг бүрэн хориглох гэрээ (CTBT)",
      description:
        "Дэлхий дахинд цөмийн зэвсгийн туршилтыг бүрэн зогсоох зорилготой.",
    },
    {
      title: "Цөмийн материалыг хамгаалах конвенц (CPPNM)",
      description:
        "Цөмийн материалын аюулгүй байдал, хамгаалалтыг зохицуулдаг.",
    },
    {
      title: "Цөмийн ослын үед тусламжийн конвенцууд",
      description:
        "Ослын үед мэдээлэл дамжуулах, тусламж үзүүлэх зохицуулалттай.",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="container flex flex-col items-center justify-center min-h-screen gap-5 p-4 text-center md:gap-10">
        <h1 className="text-2xl font-bold md:text-4xl text-prussian-blue">
          Олон улсын гэрээ конвенц
        </h1>
        <p className="text-base text-center md:text-lg text-slate-700">
          Цөмийн салбар нь бусад салбарыг бодвол хамгийн нарийн зохицуулалттай,
          хяналттай, олон улсын харилцааны чухал хэсэг болж ирсэн онцгой салбар
          юм. Атомын энергийг хүн төрөлхтөн нээж илрүүлснээр түүнийг эрчим хүч,
          уул уурхай, хүнс, хөдөө аж ахуй, эрүүл мэнд, аж үйлдвэр, судалгаа
          шинжилгээ, батлан хамгаалах салбарт өргөн ашиглах болж, энэ хэрээр
          эдгээр хэрэглээг зохицуулах, аюулгүй ашиглах, хянах тогтолцоо
          боловсронгуй болж хөгжсөөр байна
        </p>

        {/* Content Cards */}
        <div className="grid w-full max-w-5xl gap-5 mt-8 md:gap-10 md:grid-cols-2">
          {contracts.map((contract, index) => (
            <div
              key={index}
              className="flex relative flex-col items-start p-6  rounded-2xl hover:shadow-xl border-b-4 transition hover:-translate-y-1 hover:scale-[1.02] duration-300 ease-in-out border border-gray-100"
            >
              {" "}
              <div className="absolute top-[-4px] w-3/6 h-2 transform -translate-x-1/2 bg-[#dae3ff] group-hover:bg-[#334EAC] left-1/2 rounded-4xl"></div>
              <h2 className="mb-4 text-2xl font-semibold text-blue-900">
                {contract.title}
              </h2>
              <p className="leading-relaxed text-center text-gray-600">
                {contract.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternationalContract;
