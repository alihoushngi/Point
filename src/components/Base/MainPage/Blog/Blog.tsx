import BlogCard from "@/components/Home/BlogCard/BlogCard";
import React from "react";
import { BlogItems } from "./BlogItems";

const Blog = () => {
  return (
    <section className="mt-40 max-w-[750px] w-full m-auto">
      <div className="flex gap-1 mt-8">
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
      </div>
      <h2 className="uppercase text-md font-bold text-textColor mt-2">
        blog & news
      </h2>
      <div className="flex justify-center items-center mt-10 gap-3">
        {BlogItems.map((item, index) => {
          return (
            <div key={index} className="w-1/2 flex justify-center items-center">
              <BlogCard
                CardLink={item.itemLink}
                BlogImage={item.imageUrl}
                BlogAlt={item.imageAlt}
                BlogName={item.itemName}
                BlogCategory={item.itemLabel}
              />
            </div>
          );
        })}
      </div>
      <div className="w-12 h-12 rounded-[9999px] bg-secondary flex justify-center items-center m-auto mt-8 custom-circle-shadow">
        <span className="text-[10px] text-center text-wrap capitalize">
          view more
        </span>
      </div>
    </section>
  );
};

export default Blog;
