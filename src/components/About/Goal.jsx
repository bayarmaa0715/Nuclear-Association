import {
  BulbOutlined,
  TeamOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

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
        <div className="p-4 md:p-5 border rounded-b-4xl border-[#dae3ff] rounded-tr-4xl md:w-2/3">
          <div className="flex items-center p-4 bg-white md:p-10 rounded-b-3xl rounded-tr-3xl ">
            <p>
              {" "}
              Цацраг идэвхт ашигт малтмал болон цөмийн энергийн салбарт олон
              улсад хүлээн зөвшөөрөгдсөн дэвшилтэт техник, технологийг Монгол
              Улсад нутагшуулах, тэргүүн туршлагыг нэвтрүүлэх, үүнд мэргэжлийн
              зөвлөгөө, дэмжлэг үзүүлэх, холбогдох судалгаа, шинжилгээ хийх
            </p>
            <FileSearchOutlined style={{ fontSize: 80, color: "#dae3ff" }} />
          </div>
        </div>
        <div className="p-4 md:p-5 border rounded-b-4xl border-[#dae3ff] rounded-tl-4xl md:w-2/3 self-end">
          <div className="flex items-center p-4 bg-white md:p-10 rounded-b-3xl rounded-tl-3xl">
            <p>
              {" "}
              Салбарын баталгаажсан бодит мэдээллийг төр, олон нийтэд үнэн зөв,
              цаг тухайд нь хүргэх, олон нийтийн дунд цөмийн энергийн талаарх
              зөв ойлголт, хандлагыг төлөвшүүлэх
            </p>
            <TeamOutlined style={{ fontSize: 80, color: "#dae3ff" }} />
          </div>
        </div>
        <div className="p-4 md:p-5 border rounded-b-4xl border-[#dae3ff] rounded-tr-4xl md:w-2/3">
          <div className="flex items-center p-4 bg-white md:p-10 rounded-b-3xl rounded-tr-3xl">
            <p>
              {" "}
              Олон улсад хүлээн зөвшөөрөгдсөн, чадавхтай үндэсний мэргэжлийн
              холбоо болох, олон улсын байгууллагатай хамтран ажиллаж, туршлага
              солилцох, салбарын хөгжилд хувь нэмрээ оруулах
            </p>
            <BulbOutlined style={{ fontSize: 80, color: "#dae3ff" }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
