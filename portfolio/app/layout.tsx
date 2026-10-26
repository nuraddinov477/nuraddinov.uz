import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { EMAIL, SITE_URL, socialLinks } from "@/lib/socials";

const title = "Nuraddinov Sarvarbek — Full-stack & AI Developer";
const description =
  "Nuraddinov Sarvarbek — TDShU talabasi, full-stack & AI dasturchi. TDShU, Firdavs School va RESTA uchun AI asosidagi tizimlar: SmartJadval, Bilim Check-Up, RESTA ERP. FastAPI, Django, React, Next.js, Claude va Gemini API.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
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
  alternateName: ["Sarvarbek Nuraddinov", "Нураддинов Сарварбек"],
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
    <html lang="uz" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-gray-100 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
