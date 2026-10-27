import { pageMetadata } from "@/lib/seo";
import Projects from "@/components/Projects";
import CallToAction from "@/components/CallToAction";

export const metadata = pageMetadata(
  "Veb va AI loyihalar",
  "Nuraddinov Sarvarbek loyihalari: SmartJadval, Bilim Check-Up, RESTA ERP, HSKGo va turkiy yozma yodgorliklar korpusi. Demo va ochiq kod havolalari.",
  "/projects",
);

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <CallToAction />
    </>
  );
}
