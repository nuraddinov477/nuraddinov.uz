import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Nuraddinov Sarvarbek — ML & Web Developer",
  description:
    "Nuraddinov Sarvarbek Muzaffar o'g'li — ML muhandis va veb dasturchi. Machine Learning, AI va zamonaviy veb ilovalar yarataman. Vibe coder. Toshkent, O'zbekiston.",
  keywords: [
    "Nuraddinov Sarvarbek",
    "Sarvarbek Nuraddinov",
    "Нураддинов Сарварбек",
    "Sarvarbek Muzaffar",
    "ML engineer",
    "ML muhandis",
    "web developer",
    "veb dasturchi",
    "machine learning",
    "sun'iy intellekt",
    "AI developer",
    "vibe coder",
    "vibe coding",
    "разработчик",
    "portfolio",
    "Next.js",
    "React",
    "Python",
    "PyTorch",
    "Toshkent",
    "Uzbekistan",
    "O'zbekiston",
  ],
  authors: [{ name: "Nuraddinov Sarvarbek", url: "mailto:nuraddinovsarvarbek05@gmail.com" }],
  creator: "Nuraddinov Sarvarbek",
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US"],
    title: "Nuraddinov Sarvarbek — ML & Web Developer",
    description:
      "Nuraddinov Sarvarbek Muzaffar o'g'li — ML muhandis va veb dasturchi. Machine Learning va zamonaviy veb ilovalar yarataman.",
    siteName: "Sarvarbek Nuraddinov Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuraddinov Sarvarbek — ML & Web Developer",
    description:
      "Nuraddinov Sarvarbek Muzaffar o'g'li — ML muhandis va veb dasturchi.",
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
