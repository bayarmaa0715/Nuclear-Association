import { Associotion } from "@/components/About/Association";
import { Goal } from "@/components/About/Goal";
import { Intro } from "@/components/About/Intro";
import { Partner } from "@/components/About/Partner";

const About = () => {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory ">
      <section id="goal" className="snap-start">
        <Goal />
      </section>
      <section id="intro" className="snap-start">
        <Intro />
      </section>
      <section id="associotion" className="snap-start">
        <Associotion />
      </section>
      <section id="partner" className="snap-start">
        <Partner />
      </section>
    </div>
  );
};

export default About;
