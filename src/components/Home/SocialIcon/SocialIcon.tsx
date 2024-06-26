import { ReactComponent } from "@/types/types";
import { ISocialIconTypes } from "./SocialIconTypes";
import Link from "next/link";
import Image from "next/image";

const SocialIcon: ReactComponent<ISocialIconTypes> = (props) => {
  const { IconAlt, IconLink, IconImage } = props;
  return (
    <Link href={IconLink}>
      <Image
        src={IconImage}
        alt={IconAlt}
        width={45}
        height={45}
        priority
        className="bg-white p-2 rounded-full"
      />
    </Link>
  );
};

export default SocialIcon;
