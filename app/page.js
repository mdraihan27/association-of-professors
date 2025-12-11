import Image from "next/image";
import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Second } from "./components/second";
import { Third } from "./components/third";
import { Fourth } from "./components/fourth";
import { Fifth } from "./components/fifth";
import { Sixth } from "./components/sixth";
import { Seventh } from "./components/seventh";
import { Eighth } from "./components/eighth";
import { Ninth } from "./components/ninth";
import { Tenth } from "./components/tenth";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className=" flex flex-col items-center">
      <div className="bg-[#02203b] w-full flex flex-col items-center">
        <Nav />

        <Hero />
      </div>

      <div className="w-full bg-white flex justify-center">
        {" "}
        <Second />
      </div>
      <div className="w-full bg-[#f7f3ec] flex justify-center">
        {" "}
        <Third />
      </div>

      <div className="w-full bg-white flex justify-center">
        {" "}
        <Fourth />
      </div>

      <div className="w-full bg-[#fafafa] flex justify-center">
        {" "}
        <Fifth />
      </div>

      <div className="w-full bg-white flex justify-center">
        {" "}
        <Sixth />
      </div>

      <div className="w-full bg-[#f7f3ec] flex justify-center">
        {" "}
        <Seventh />
      </div>
      <div className="w-full bg-white flex justify-center">
        {" "}
        <Eighth />
      </div>

      <div className="w-full bg-[#f4f4f4] flex justify-center">
        {" "}
        <Ninth />
      </div>

      <div className="w-full bg-white flex flex-col items-center">
        {" "}
        <Tenth />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
