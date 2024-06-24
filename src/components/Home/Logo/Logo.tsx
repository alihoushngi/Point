import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image
        src="/images/point-logo.png"
        alt="Point Logo"
        width={200}
        height={200}
        priority
        style={{ width: "150px" }}
      />
    </>
  );
};

export default Logo;
