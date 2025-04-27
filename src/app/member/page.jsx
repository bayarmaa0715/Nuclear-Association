"use client";
import React from "react";
import Become from "@/components/Member/Become";
import { MemberAdvantage } from "@/components/Member/MemberAdvantage";
import Event from "@/components/Member/Event";

const Member = () => {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory ">
      <section id="become" className="snap-start">
        <Become />
      </section>
      <section id="memberAdvantage" className="snap-start">
        <MemberAdvantage />
      </section>
      <section id="event" className="snap-start">
        <Event />
      </section>
    </div>
  );
};

export default Member;
