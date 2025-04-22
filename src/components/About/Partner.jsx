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
export const Partner = () => (
  <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center bg-white">
    <h2 className="mb-6 text-4xl font-bold text-prussian-blue">
      Харилцагч байгууллагууд
    </h2>
    {/* <div className="grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div
          key={n}
          className="relative flex items-center justify-center w-20 h-20"
        >
          <img
            src={`/images/img${n}.jpg`}
            layout="fill"
            alt={`Партнер ${n}`}
            className="object-cover w-auto h-20 transition-all duration-300 grayscale hover:grayscale-0"
          />
        </div>
      ))}
    </div> */}
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6 md:gap-8">
      {tags.map((tag, index) => (
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
);
