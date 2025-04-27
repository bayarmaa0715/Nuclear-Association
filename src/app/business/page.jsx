"use client";
import React from "react";
import { Advice } from "@/components/Business/Advice";
import ProfessionalServices from "@/components/Business/ProfessionalServices";

const Business = () => {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory ">
      <section id="advice" className="snap-start">
        <Advice />
      </section>
      <section id="service" className="snap-start">
        <ProfessionalServices />
      </section>
    </div>
  );
};

export default Business;
