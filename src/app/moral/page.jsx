import React from "react";
import InternationalContract from "@/components/Moral/InternationalContract";
import MongoliaLaw from "@/components/Moral/MongoliaLaw";

const Moral = () => {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory ">
      <section id="foriegn" className="snap-start">
        <InternationalContract />
      </section>
      <section id="mongolia" className="snap-start">
        <MongoliaLaw />
      </section>
    </div>
  );
};

export default Moral;
