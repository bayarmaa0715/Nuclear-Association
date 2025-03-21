// components/Hero.jsx
import Image from "next/image";
import Atom from "./Atom";

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-oxford-blue-2">
      <div className="container grid items-center gap-12 px-4 mx-auto lg:grid-cols-2">
        <div className="relative z-10">
          <p className="mb-4 font-bold tracking-wider text-carolina-blue">
            Сайн байна уу?
          </p>
          <h1 className="mb-6 text-5xl text-[##081F5C] font-extrabold leading-tight lg:text-6xl text-alice-blue">
            Монголын Цөмийн Мэргэжлийн Холбоо
          </h1>
          <p className="max-w-xl mb-8 text-lg text-wild-blue-yonder">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum modi
            delectus minus culpa reprehenderit? Accusamus eveniet corrupti
            deserunt repudiandae in, numquam optio eum exercitationem voluptates
            praesentium rem? Consequatur nostrum laudantium dolores cumque autem
            nam commodi ullam rem error mollitia! Earum?
          </p>
        </div>

        <div className="relative ">
          {/* <Image
            src="/images/atom1.jpg"
            width={600}
            height={800}
            alt="Logo"
            className="mx-auto transition-transform duration-300 transform hover:scale-105"
          /> */}
          <Atom />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
