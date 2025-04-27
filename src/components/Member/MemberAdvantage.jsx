// import { CheckCircleOutlined } from "@ant-design/icons";

// const advantages = [
//   {
//     text: "Эрх зүйн орчныг сайжруулах санаачлагад оролцох",
//     description:
//       "Холбооны гишүүнээр элссэнээр салбарын эрх зүйн орчныг сайжруулах санал санаачлагад оролцох боломжтой.",
//   },
//   {
//     text: "Мэргэжил арга зүйн зөвлөгөө авах эрх",
//     description:
//       "Цөмийн салбарын хууль эрх зүй, аюулгүй ажиллагаа, технологийн чиглэлээр мэргэжлийн зөвлөгөө авах боломж.",
//   },
//   {
//     text: "Сурталчилгааны хэрэгсэл ашиглах",
//     description:
//       "Гишүүнчлэлийн хүрээнд өөрийн байгууллага, хувь хүний үйл ажиллагааг Холбооны мэдээллийн сувгаар сурталчлах боломжтой.",
//   },
//   {
//     text: "Мэргэжил дээшлүүлэх сургалтад хамрагдах",
//     description:
//       "Холбооноос зохион байгуулдаг сургалт, семинар, мэргэжил дээшлүүлэх хөтөлбөрт хөнгөлөлттэй нөхцөлөөр хамрагдах.",
//   },
//   {
//     text: "Нийгмийн баталгаагаа хангуулах, эрхээ хамгаалуулах дэмжлэг",
//     description:
//       "Гишүүнчлэлийн хүрээнд нийгмийн баталгаагаа хангуулах, хууль ёсны эрх ашгаа хамгаалуулах дэмжлэг авах.",
//   },
//   {
//     text: "Мэдээллийн эх сурвалжтай болох",
//     description:
//       "Цөмийн салбарын шинэ мэдээлэл, судалгаа, шинжилгээний материал, хууль эрх зүйн өөрчлөлтүүдийг тогтмол авах боломжтой.",
//   },
//   {
//     text: "Салбарын хамтын ажиллагаанд нэгдэх",
//     description:
//       "Гишүүнчлэлтэй холбоотойгоор цөмийн салбарын тэргүүлэх байгууллага, мэргэжилтнүүдтэй хамтран ажиллах боломж олгоно.",
//   },
// ];

// export const MemberAdvantage = () => (
//   <div className="flex justify-center min-h-screen px-6 py-16 ">
//     <div className="w-full max-w-6xl">
//       <h1 className="mb-12 text-3xl font-bold text-center text-prussian-blue">
//         Холбооны гишүүний албан ёсны давуу талууд
//       </h1>

//       <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {advantages.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-start p-8 transition-all duration-300 bg-white shadow-xl rounded-xl hover:scale-105 hover:shadow-2xl hover:bg-indigo-50"
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <CheckCircleOutlined className="text-3xl text-indigo-600" />
//               <p className="text-xl font-semibold text-gray-800">{item.text}</p>
//             </div>
//             <p className="text-sm text-gray-600">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );
import { CheckCircleOutlined } from "@ant-design/icons";

const advantages = [
  {
    text: "Эрх зүйн орчныг сайжруулах санаачлагад оролцох",
    description:
      "Холбооны гишүүнээр элссэнээр салбарын эрх зүйн орчныг сайжруулах санал санаачлагад оролцох боломжтой.",
  },
  {
    text: "Мэргэжил арга зүйн зөвлөгөө авах эрх",
    description:
      "Цөмийн салбарын хууль эрх зүй, аюулгүй ажиллагаа, технологийн чиглэлээр мэргэжлийн зөвлөгөө авах боломж.",
  },
  {
    text: "Сурталчилгааны хэрэгсэл ашиглах",
    description:
      "Гишүүнчлэлийн хүрээнд өөрийн байгууллага, хувь хүний үйл ажиллагааг Холбооны мэдээллийн сувгаар сурталчлах боломжтой.",
  },
  {
    text: "Мэргэжил дээшлүүлэх сургалтад хамрагдах",
    description:
      "Холбооноос зохион байгуулдаг сургалт, семинар, мэргэжил дээшлүүлэх хөтөлбөрт хөнгөлөлттэй нөхцөлөөр хамрагдах.",
  },
  {
    text: "Нийгмийн баталгаагаа хангуулах, эрхээ хамгаалуулах дэмжлэг",
    description:
      "Гишүүнчлэлийн хүрээнд нийгмийн баталгаагаа хангуулах, хууль ёсны эрх ашгаа хамгаалуулах дэмжлэг авах.",
  },
  {
    text: "Мэдээллийн эх сурвалжтай болох",
    description:
      "Цөмийн салбарын шинэ мэдээлэл, судалгаа, шинжилгээний материал, хууль эрх зүйн өөрчлөлтүүдийг тогтмол авах боломжтой.",
  },
  {
    text: "Салбарын хамтын ажиллагаанд нэгдэх",
    description:
      "Гишүүнчлэлтэй холбоотойгоор цөмийн салбарын тэргүүлэх байгууллага, мэргэжилтнүүдтэй хамтран ажиллах боломж олгоно.",
  },
];

export const MemberAdvantage = () => (
  <div className="flex justify-center min-h-screen px-6 py-16">
    <div className="w-full max-w-6xl">
      <h1 className="mb-12 text-3xl font-bold text-center text-prussian-blue">
        Холбооны гишүүний албан ёсны давуу талууд
      </h1>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {advantages.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-start p-8 transition-all duration-300 bg-white shadow-xl rounded-xl hover:scale-105 hover:shadow-2xl hover:bg-indigo-50 ${
              index === 6 ? "md:col-start-2 md:col-end-3" : ""
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <CheckCircleOutlined className="text-3xl text-indigo-600" />
              <p className="text-xl font-semibold text-gray-800">{item.text}</p>
            </div>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
