import Slider from "@/components/Home/Slider/Slider";
import React from "react";

const AboutUs = () => {
  return (
    <section className="mt-16 max-w-[600px] w-full">
      <div className="flex gap-1 mt-8">
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
      </div>
      <h2 className="capitalize text-md font-bold text-textColor mt-2">
        about us.
      </h2>
      <div className="text-center mt-4 mb-12 max-w-60 m-auto">
        <span className="capitalize text-xs font-thin text-textColor">
          partner / strategy
        </span>
        <h3 className="capitalize text-md font-bold text-textColor">
          amanda johnston
        </h3>
        <span className="capitalize text-xs font-thin text-textColor">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          delectus atque harum mollitia
        </span>
      </div>
      <div className="mt-2 mb-40 m-auto">
        <Slider />
      </div>
    </section>
  );
};

export default AboutUs;
