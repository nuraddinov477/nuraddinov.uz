import { pageMetadata } from "@/lib/seo";
import Contact from "@/components/Contact";

export const metadata = pageMetadata(
  "Bog'lanish",
  "Veb-sayt, AI tizim yoki Telegram bot loyihasi uchun Nuraddinov Sarvarbek bilan bog'laning. Email, Telegram, GitHub va boshqa aloqa kanallari.",
  "/contact",
);

export default function ContactPage() {
  return <Contact />;
}
