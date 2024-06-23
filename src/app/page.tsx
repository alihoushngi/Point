import AboutUs from "@/components/Base/MainPage/AboutUs/AboutUs";
import Blog from "@/components/Base/MainPage/Blog/Blog";
import Header from "@/components/Base/MainPage/Header/Header";
import LatestWork from "@/components/Base/MainPage/LatestWork/LatestWork";
import Navbar from "@/components/Base/MainPage/Navbar/Navbar";
import OurServices from "@/components/Base/MainPage/OurServices/OurServices";
import Process from "@/components/Base/MainPage/Process/Process";
import WhatsWeDo from "@/components/Base/MainPage/WhatsWeDo/WhatsWeDo";

export default function Home() {
  return (
    <main className="m-auto">
      <Navbar />
      <Header />
      <WhatsWeDo />
      <OurServices />
      <div className="border border-secondary custom-border-radius flex flex-col items-center">
        <LatestWork />
        <AboutUs />
      </div>
      <Process />
      <Blog />
    </main>
  );
}
