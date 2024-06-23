import { StaticImageData } from "next/image";

export interface IBlogCardTypes {
  CardLink: string;
  BlogImage: StaticImageData | string;
  BlogAlt: string;
  BlogName: string;
  BlogCategory: string;
}
