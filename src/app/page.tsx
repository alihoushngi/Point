import Header from "@/components/Base/Header/Header";
import Navbar from "@/components/Base/Navbar/Navbar";
import WhatsWeDo from "@/components/Base/WhatsWeDo/WhatsWeDo";

export default function Home() {
  return (
    <main className="m-auto">
      <Navbar />
      <Header />
      <WhatsWeDo />
    </main>
  );
}
