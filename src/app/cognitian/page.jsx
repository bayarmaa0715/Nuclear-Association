import TopicsSlider from "@/components/Slider";
import React from "react";

const Cognitian = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex flex-col items-center justify-center min-h-screen gap-5 p-4 text-center md:gap-10">
        {" "}
        <TopicsSlider />
      </div>
    </div>
  );
};

export default Cognitian;
