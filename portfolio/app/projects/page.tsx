import type { Metadata } from "next";
import Projects from "@/components/Projects";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Loyihalar",
  description:
    "Jonli ishlaydigan loyihalar: SmartJadval, Bilim Check-Up, RESTA ERP, Turkiy yozma yodgorliklar korpusi, HSKGo va boshqalar.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <CallToAction />
    </>
  );
}
