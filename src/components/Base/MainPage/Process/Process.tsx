import Timeline from "@/components/Home/Timeline/Timeline";
import React from "react";

const Process = () => {
  return (
    <section className="max-w-[750px] m-auto my-14 w-full flex flex-col gap-3 mt-32">
      <div className="flex flex-col gap-1 justify-center items-center mb-7">
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
      </div>
      <h2 className="capitalize text-md font-bold text-textColor text-center">
        following the process
      </h2>
      <Timeline />
    </section>
  );
};

export default Process;
