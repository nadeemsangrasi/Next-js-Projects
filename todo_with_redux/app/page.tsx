import Todos from "@/components/Todos";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Todos />
      </div>
    </>
  );
}
