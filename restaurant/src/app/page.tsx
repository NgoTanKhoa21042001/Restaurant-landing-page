import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";

export default function Home() {
  // trang homepage
  return (
    <main className="">
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
