import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/images/point-logo.png"
        alt="Point Logo"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Logo;
