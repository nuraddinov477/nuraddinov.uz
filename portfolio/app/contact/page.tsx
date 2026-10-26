import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Bog'lanish",
  description: "Nuraddinov Sarvarbek bilan bog'lanish: email, Telegram, GitHub, LinkedIn yoki xabar formasi orqali.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
