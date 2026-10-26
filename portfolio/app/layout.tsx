import type { Metadata } from "next";
import { Manrope, Nunito } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { EMAIL, SITE_URL, socialLinks } from "@/lib/socials";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Rounded fonts with Cyrillic support (the site is also in Russian)
const heading = Nunito({ subsets: ["latin", "cyrillic"], weight: ["700", "800"], variable: "--font-heading", display: "swap" });
const sans = Manrope({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600", "700"], variable: "--font-sans", display: "swap" });

// Runs before first paint: saved choice, else the OS preference
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`;

const title = "Nuraddinov Sarvarbek — Full-stack & AI Developer";
const description =
  "Nuraddinov Sarvarbek — TDShU talabasi, full-stack & AI dasturchi. TDShU, Firdavs School va RESTA uchun AI asosidagi tizimlar: SmartJadval, Bilim Check-Up, RESTA ERP. FastAPI, Django, React, Next.js, Claude va Gemini API.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s — Nuraddinov Sarvarbek" },
  description,
  alternates: { canonical: "/" },
  keywords: [
    "Nuraddinov Sarvarbek",
    "Sarvarbek Nuraddinov",
    "Нураддинов Сарварбек",
    "Sarvarbek Muzaffar",
    "nuraddinov477",
    "full-stack developer",
    "AI developer",
    "veb dasturchi",
    "sun'iy intellekt",
    "разработчик",
    "SmartJadval",
    "Bilim Check-Up",
    "TDShU",
    "Toshkent davlat sharqshunoslik universiteti",
    "FastAPI",
    "Django",
    "Next.js",
    "React",
    "Claude API",
    "Gemini API",
    "Telegram bot",
    "Toshkent",
    "O'zbekiston",
  ],
  authors: [{ name: "Nuraddinov Sarvarbek", url: SITE_URL }],
  creator: "Nuraddinov Sarvarbek",
  openGraph: {
    type: "profile",
    url: "/",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US", "zh_CN"],
    title,
    description,
    siteName: "Sarvarbek Nuraddinov",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Structured data so search engines can show a profile card
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nuraddinov Sarvarbek",
  alternateName: [
    "Sarvarbek Nuraddinov",
    "Nuraddinov Sarvarbek Muzaffar o'g'li",
    "Nuriddinov Sarvarbek",
    "Sarvarbek Nuriddinov",
    "Нураддинов Сарварбек",
    "Сарварбек Нураддинов",
    "nuraddinov477",
  ],
  url: SITE_URL,
  image: `${SITE_URL}/photo-nobg.png`,
  jobTitle: "Full-stack & AI Developer",
  email: `mailto:${EMAIL}`,
  address: { "@type": "PostalAddress", addressLocality: "Tashkent", addressCountry: "UZ" },
  affiliation: { "@type": "CollegeOrUniversity", name: "Tashkent State University of Oriental Studies" },
  knowsAbout: ["FastAPI", "Django", "React", "Next.js", "PostgreSQL", "Claude API", "Gemini API", "Telegram bots"],
  sameAs: socialLinks.filter((s) => s.href.startsWith("http")).map((s) => s.href),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" suppressHydrationWarning className={`${heading.variable} ${sans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg text-body font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen overflow-x-clip">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
