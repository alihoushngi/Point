import React from "react";

const ContactUs = () => {
  return (
    <section className="mt-40 max-w-[750px] w-full m-auto">
      <div className="flex gap-1 mt-8 justify-center">
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
      </div>
      <h2 className="uppercase text-3xl font-bold text-textColor mt-10 text-center">
        don&apos;t be shy, say hello
      </h2>
      <div className="w-12 h-12 rounded-[9999px] bg-secondary flex justify-center items-center m-auto mt-8 mb-32 custom-circle-shadow">
        <span className="text-[10px] text-center text-wrap capitalize">
          contact us
        </span>
      </div>
    </section>
  );
};

export default ContactUs;
