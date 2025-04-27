import {
  BulbOutlined,
  TeamOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

const goals = [
  {
    icon: <FileSearchOutlined style={{ fontSize: 80, color: "#dae3ff" }} />,
    text: "Цацраг идэвхт ашигт малтмал болон цөмийн энергийн салбарт олон улсад хүлээн зөвшөөрөгдсөн дэвшилтэт техник, технологийг Монгол Улсад нутагшуулах, тэргүүн туршлагыг нэвтрүүлэх, үүнд мэргэжлийн зөвлөгөө, дэмжлэг үзүүлэх, холбогдох судалгаа, шинжилгээ хийх",
  },
  {
    icon: <TeamOutlined style={{ fontSize: 80, color: "#dae3ff" }} />,
    text: "Салбарын баталгаажсан бодит мэдээллийг төр, олон нийтэд үнэн зөв, цаг тухайд нь хүргэх, олон нийтийн дунд цөмийн энергийн талаарх зөв ойлголт, хандлагыг төлөвшүүлэх",
  },
  {
    icon: <BulbOutlined style={{ fontSize: 80, color: "#dae3ff" }} />,
    text: "Олон улсад хүлээн зөвшөөрөгдсөн, чадавхтай үндэсний мэргэжлийн холбоо болох, олон улсын байгууллагатай хамтран ажиллаж, туршлага солилцох, салбарын хөгжилд хувь нэмрээ оруулах",
  },
];

export const Goal = () => (
  <div className="flex justify-center ">
    <div className="container flex flex-col items-center justify-center min-h-screen gap-5 p-4 text-center md:gap-10">
      <h1 className="text-2xl font-bold md:text-4xl text-prussian-blue">
        Холбооны зорилго
      </h1>
      <p className="text-base text-justify md:text-lg text-slate-700 md:text-center">
        Монгол Улсад цацраг идэвхт ашигт малтмал болон цөмийн энергийн салбарын
        тогтвортой хөгжил, дэвшил, ололт амжилтыг хөхүүлэн дэмжих, олон нийтэд
        сурталчлах, аюулгүй байдлын соёлыг төлөвшүүлж, үндсэн зарчмыг
        бүрдүүлэхэд Холбооны эрхэм зорилго оршино. Энэхүү эрхэм зорилго нь
        Монгол Улсын эдийн засаг, нийгмийн хөгжилд цөмийн шинжлэх ухаан,
        технологийн бодит хувь нэмрийг нэмэгдүүлэхэд чиглэгдэнэ
      </p>

      <div className="flex flex-col gap-10 text-start">
        {goals.map((goal, index) => (
          <div
            key={index}
            className={`p-4 md:p-5 border rounded-b-4xl border-[#dae3ff] md:w-2/3 ${
              index === 1 ? "self-end rounded-tl-4xl " : "rounded-tr-4xl"
            } transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-indigo-100`}
          >
            <div
              className={`flex items-center p-4 bg-white md:p-10 rounded-b-3xl   ${
                index === 1 ? "rounded-tl-3xl " : "rounded-tr-3xl"
              } `}
            >
              <div className="mr-6">{goal.icon}</div>
              <p className="text-sm md:text-lg">{goal.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
