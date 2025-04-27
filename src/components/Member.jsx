import React from "react";

const members = [
  { name: "Оюутолгой ХХК", image: "./assets/images/tag1.png" },
  { name: "Эрдэнэт ХХК", image: "./assets/images/tag2.png" },
  { name: "Тавантолгой ХХК", image: "./assets/images/tag3.png" },
  { name: "Саусгауз ХХК", image: "./assets/images/tag4.png" },
  { name: "Багануур ХХК", image: "./assets/images/tag5.png" },
  { name: "Шивээ-Овоо ХХК", image: "./assets/images/tag6.png" },
  { name: "МАК ХХК", image: "./assets/images/tag7.png" },
  { name: "Сибирьтэкс ХХК", image: "./assets/images/tag8.png" },
  { name: "Цахиурт ХХК", image: "./assets/images/tag10.png" },
  { name: "Говийн хөндий ХХК", image: "./assets/images/tag11.png" },
  { name: "Монголын Төмөр ХХК", image: "./assets/images/tag12.png" },
];

const Member = () => {
  return (
    <section>
      <div className="container px-4 mx-auto">
        <div className="mb-8 text-center sm:mb-12 md:mb-16">
          <h2 className="mb-3 text-xl font-bold md:text-4xl text-columbia-blue">
            <span className="bg-clip-text">Харилцагч байгууллагууд</span>
          </h2>
          {/* <p className="text-base sm:text-lg md:text-xl text-wild-blue-yonder">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            deserunt.
          </p> */}
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6 md:gap-8">
          {members.map((tag, index) => (
            <li
              key={index}
              className="border-2 border-[#dae3ff] rounded-lg transition-transform transform hover:translate-y-[-2px] hover:shadow-lg hover:bg-gradient-to-r hover:from-[#E7F1FF] hover:to-[#dae3ff] hover:border-transparent"
            >
              <button className="flex items-center gap-2 p-3 rounded-lg card tag-btn sm:p-4 md:p-5">
                <img
                  src={tag.image}
                  width="32"
                  height="32"
                  loading="lazy"
                  alt={tag.name}
                />
                <p className="text-sm font-semibold btn-text sm:text-base md:text-lg text-alice-blue">
                  {tag.name}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Member;
