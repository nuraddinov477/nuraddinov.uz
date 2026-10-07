import { Github, Linkedin, Facebook, Mail, Send, Instagram, type LucideIcon } from "lucide-react";

export const GITHUB_USERNAME = "nuraddinov477";
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;
export const EMAIL = "nuraddinovsarvarbek05@gmail.com";

export const socialLinks: { icon: LucideIcon; label: string; href: string; handle: string }[] = [
  { icon: Github, label: "GitHub", href: GITHUB_URL, handle: `@${GITHUB_USERNAME}` },
  { icon: Send, label: "Telegram", href: "https://t.me/nuraddinov_477", handle: "@nuraddinov_477" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/nuraddinov__477", handle: "@nuraddinov__477" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/sarvarbek-nuraddinov", handle: "Sarvarbek Nuraddinov" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/sarvarbek.nuraddinov", handle: "Sarvarbek Nuraddinov" },
  { icon: Mail, label: "Email", href: `mailto:${EMAIL}`, handle: EMAIL },
];

// mailto: links must not open a new (blank) tab
export const linkTarget = (href: string) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
