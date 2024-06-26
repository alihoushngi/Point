import Link from "next/link";
import { FooterSocialIconList } from "./FooterSocialIconList";
import SocialIcon from "@/components/Home/SocialIcon/SocialIcon";

const Footer = () => {
  return (
    <footer className="border border-secondary border-b-primary footer-border-radius p-20">
      <section className="flex flex-col justify-center items-center max-w-[300px] m-auto gap-6">
        <h6 className="font-extralight tracking-[.3rem]">
          info@pointmarcom.com
        </h6>
        <div className="flex gap-1 justify-center">
          <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
          <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
          <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        </div>
        <div className="font-extralight">
          <span>
            <Link href="tel:+905345576612">+905345576612</Link>
            <Link href="tel:+905060488089">+905060488089</Link>
          </span>
          <address className="not-italic text-justify">
            unit 5, no.25, akademi Ave, kaitaneh, istanbul, Turkey
          </address>
        </div>
        <div className="font-extralight">
          <span>
            <Link href="tel:+982122708062">+982122708062</Link>
            <Link href="tel:+982122724899">+982122724899</Link>
          </span>
          <address className="not-italic text-justify">
            unit 778, building no.281, sarayenoavri sanaye khalagh,
            north-phelestin st cross enghlab Ave Tehran, Iran
          </address>
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
          <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
          <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        </div>
        <div className="flex gap-4">
          {FooterSocialIconList.map((item, index) => {
            return (
              <div key={index}>
                <SocialIcon
                  IconAlt={item.name}
                  IconImage={item.image}
                  IconLink={item.url}
                />
              </div>
            );
          })}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
