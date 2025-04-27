import React from "react";

const events = [
  {
    title: "Цөмийн салбарын хөгжлийн хурал",
    date: "2025-05-15",
    description:
      "Цөмийн технологийн хөгжил, цацрагийн аюулгүй ажиллагаа болон салбарын инновациудын талаар ярилцаж, салбарын тэргүүлэх мэргэжилтнүүдтэй хамтран ажиллах боломж.",
    image: "/images/img1.jpg",
  },
  {
    title: "Мэргэжил дээшлүүлэх сургалт",
    date: "2025-06-10",
    description:
      "Цөмийн аюулгүй ажиллагааны талаар мэргэжлийн сургалт зохион байгуулна. Мэргэжилтнүүдийн болон салбарын ажилтнуудын чадварыг дээшлүүлэх зорилготой.",
    image: "/images/img3.jpg",
  },
  {
    title: "Цөмийн технологийн үзэсгэлэн",
    date: "2025-07-01",
    description:
      "Цөмийн технологийн дэвшилтэт төхөөрөмж, шинэ бүтээгдэхүүнүүдийг танилцуулах үзэсгэлэн. Цөмийн салбарын холбоо болон байгууллагууд оролцоно.",
    image: "/images/img4.jpg",
  },
];

const Event = () => (
  <div className="flex justify-center min-h-screen py-12 bg-gray-50">
    <div className="container mx-auto">
      <h1 className="mb-12 text-3xl font-bold text-center text-prussian-blue">
        Арга хэмжээнүүд
      </h1>
      <div className="flex flex-col gap-5 md:gap-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-6 p-6 transition-all duration-300 transform bg-white shadow-xl md:flex-row rounded-xl hover:shadow-2xl hover:bg-indigo-50 hover:scale-105"
          >
            <img
              src={event.image}
              alt={event.title}
              className="object-cover w-full h-64 rounded-lg md:w-1/3"
            />
            <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Event;
