import Hero from "@/components/Hero";
import Process from "@/components/Process";
import FeaturedProjects from "@/components/FeaturedProjects";
import CallToAction from "@/components/CallToAction";
import { SITE_URL } from "@/lib/socials";
import { SITE_NAME } from "@/lib/seo";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: ["Sarvarbek Nuraddinov", "nuraddinov477"],
  url: `${SITE_URL}/`,
  publisher: { "@id": `${SITE_URL}/#person` },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Process />
      <FeaturedProjects />
      <CallToAction />
    </>
  );
}
