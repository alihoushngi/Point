import { ReactComponent } from "@/types/types";
import { IBlogCardTypes } from "./BlogCardTypes";
import Link from "next/link";
import Image from "next/image";

const BlogCard: ReactComponent<IBlogCardTypes> = (props) => {
  const { CardLink, BlogAlt, BlogCategory, BlogImage, BlogName } = props;
  return (
    <Link href={CardLink} className="mb-9">
      <Image
        src={BlogImage}
        alt={BlogAlt}
        width={300}
        height={300}
        className="mb-1"
      />
      <div className="flex flex-col justify-between items-start gap-2">
        <span className="text-sm font-extralight px-4 py-[1px] bg-secondary">
          {BlogCategory}
        </span>
        <h3 className="text-lg font-light capitalize leading-6">{BlogName}</h3>
      </div>
    </Link>
  );
};

export default BlogCard;
