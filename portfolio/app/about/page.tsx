import { pageMetadata } from "@/lib/seo";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CallToAction from "@/components/CallToAction";

export const metadata = pageMetadata(
  "Men haqimda",
  "Nuraddinov Sarvarbek — TDShU talabasi, full-stack va AI dasturchi. TDShU, Firdavs School va RESTA loyihalaridagi tajriba va texnologiyalar.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <About />
      <Experience />
      <Skills />
      <CallToAction />
    </>
  );
}
