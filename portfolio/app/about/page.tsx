import type { Metadata } from "next";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Men haqimda",
  description:
    "TDShU talabasi, full-stack & AI dasturchi: TDShU, Firdavs School va RESTA'dagi tajriba, real loyihalarda ishlatilgan texnologiyalar.",
  alternates: { canonical: "/about" },
};

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
