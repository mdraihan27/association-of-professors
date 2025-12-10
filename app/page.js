import Image from "next/image";
import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Second } from "./components/second";
import { Third } from "./components/third";

export default function Home() {
  return (
    <div className="bg-[#02203b] flex flex-col items-center">
      <Nav/>
      <Hero/>
      <Second/>
      <Third/>

    </div>
  );
}
