import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
