import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-[100vh]">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
