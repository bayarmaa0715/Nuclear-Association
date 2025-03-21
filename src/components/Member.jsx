import React from "react";

const tags = [
  { name: "Travel", image: "./assets/images/tag1.png" },
  { name: "Culture", image: "./assets/images/tag2.png" },
  { name: "Lifestyle", image: "./assets/images/tag3.png" },
  { name: "Fashion", image: "./assets/images/tag4.png" },
  { name: "Food", image: "./assets/images/tag5.png" },
  { name: "Space", image: "./assets/images/tag6.png" },
  { name: "Animal", image: "./assets/images/tag7.png" },
  { name: "Minimal", image: "./assets/images/tag8.png" },
  { name: "Interior", image: "./assets/images/tag9.png" },
  { name: "Plant", image: "./assets/images/tag10.png" },
  { name: "Nature", image: "./assets/images/tag11.png" },
  { name: "Business", image: "./assets/images/tag12.png" },
];

const Member = () => {
  return (
    <section>
      <div className="container mx-auto  ">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-columbia-blue">
            <span className="  bg-clip-text">Гишүүд</span>
          </h2>
          <p className="text-lg text-wild-blue-yonder">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            deserunt.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {tags.map((tag, index) => (
            <li
              key={index}
              className=" border-2  border-[#dae3ff] rounded-lg transition-transform transform hover:translate-y-[-2px] hover:shadow-lg hover:bg-gradient-to-r hover:from-[#E7F1FF|] hover:to-[#dae3ff] hover:border-transparent"
            >
              <button className="card tag-btn flex items-center gap-2 p-4 rounded-lg ">
                <img
                  src={tag.image}
                  width="32"
                  height="32"
                  loading="lazy"
                  alt={tag.name}
                />
                <p className="btn-text">{tag.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Member;
