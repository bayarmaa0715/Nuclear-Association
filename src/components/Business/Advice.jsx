import {
  FileTextOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  SafetyOutlined,
  AuditOutlined,
  ReadOutlined,
  GlobalOutlined,
  NotificationOutlined,
  DatabaseOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
const adviceItems = [
  {
    title: "Хууль эрх зүйн орчныг сайжруулах",
    text: "Салбарын хууль, тогтоомж, эрх зүйн баримт бичигт дүн шинжилгээ хийж, олон улсын жишигт нийцүүлэх санал боловсруулах, холбогдох байгууллагад хүргүүлэх.",
    icon: <FileTextOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
  },
  {
    title: "Нэгдмэл байр суурийг хангах",
    text: "Цөмийн салбарын оролцогч болон эрх нь хөндөгдөж буй бүх талуудын эрх ашгийг тэнцвэржүүлэн, нэгдмэл байр суурийг хангах, хэлэлцүүлэг, зөвлөлдөх уулзалт зохион байгуулах",
    icon: <UsergroupAddOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
  },
  {
    title: "Мэргэжил арга зүйн зөвлөгөө өгөх",
    text: "Салбарт мөрдөгдөж буй хууль, тогтоомжийн талаар гишүүд болон бусад зайн сонирхогчдод мэргэжил арга зүйн зөвлөгөө, мэдээлэл өгөх, сургалт зохион байгуулах",
    icon: <SolutionOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
  },
  {
    title: "Аюулгүй ажиллагааны соёлыг дэмжих",
    text: "Тусгай зөвшөөрөл эзэмшигч аж ахуйн нэгж, байгууллагуудад аюулгүй ажиллагааны соёлыг төлөвшүүлэх, нэвтрүүлэхэд чиглэсэн хөтөлбөр, төсөл хэрэгжүүлэх, дэмжлэг үзүүлэх",
    icon: <SafetyOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
  },
  {
    title: "Хараат бус үнэлгээ хийх",
    text: "Төр, хувийн хэвшлийн түншлэлийн хүрээнд цөмийн болон цацрагийн барилга, байгууламж болон цацрагтай холбоотой аливаа үйл ажиллагаанд хараат бус хөндлөнгийн үнэлгээ хийх, дүгнэлт гаргах, зөвлөмж боловсруулах",
    icon: <AuditOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
  },
  {
    title: "Хүний нөөцийг хөгжүүлэх",
    text: "Салбарын хүний нөөцийг хөгжүүлэх цогц хөтөлбөр боловсруулах, цацрагтай ажиллагчдыг мэргэшүүлэн сургах, тэдгээрийн сургалтын хөтөлбөр, төлөвлөгөөг боловсруулах, мэргэжлийн шинжээч нарыг бэлтгэх, холбогдох эрхийг олгох үйл ажиллагааг дэмжих",
    icon: <ReadOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
  },
  {
    title: "Олон улсын хамтын ажиллагааг өргөжүүлэх",
    text: "Олон улсын ижил төрлийн байгууллагуудтай харилцаа тогтоож, хамтран ажиллах, туршлага солилцох, хамтарсан төсөл, хөтөлбөр хэрэгжүүлэх",
    icon: <GlobalOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
  },
  {
    title: "Олон нийтэд сурталчлах",
    text: "Цөмийн салбарын үйл ажиллагаа, дэвшилтэт технологийг олон нийтэд сурталчлан таниулах, мэдээлэл түгээх, эерэг хандлага төлөвшүүлэх, цахим болон хэвлэмэл мэдээллийн хэрэгсэл ашиглах",
    icon: <NotificationOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
  },
  {
    title: "Мэдээллийн сан бүрдүүлэх",
    text: "Цөмийн салбарын тоон мэдээллийг системтэйгээр хөтөлж, олон нийтийг бодит, цаг үеийн мэдээллээр хангах, мэдээллийн сан бүрдүүлж, ашиглах боломжийг нэмэгдүүлэх",
    icon: <DatabaseOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
  },
  {
    title: "Хэлэлцүүлэг, зөвлөгөөн зохион байгуулах",
    text: "Салбарын хүрээнд тулгамдаж буй асуудлыг хэлэлцэн шийдвэрлэх, ололт амжилтаа хуваалцах уулзалт, зөвлөгөөнийг тогтмол зохион байгуулах, гишүүдийн оролцоог идэвхжүүлэх",
    icon: <CalendarOutlined style={{ fontSize: 48, color: "#1E40AF" }} />,
  },
];

export const Advice = () => (
  <div className="flex justify-center min-h-screen py-12 bg-gray-50">
    <div className="container mx-auto">
      <h1 className="mb-12 text-3xl font-bold text-center text-prussian-blue">
        Холбооны үйл ажиллагааны чиглэл
      </h1>

      <div className="grid grid-cols-1 gap-5 md:gap-10 sm:grid-cols-3">
        {adviceItems.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 9 ? "md:col-start-2 md:col-end-3" : ""
            } flex flex-col items-center gap-4 px-6 py-6 transition border-b-[1px] hover:shadow-md hover:bg-white rounded-xl`}
          >
            <div className="flex-shrink-0 text-center ">{item.icon}</div>
            <h3 className="text-xl font-semibold text-prussian-blue">
              {item.title}
            </h3>{" "}
            <p className="text-lg text-justify text-gray-800">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
