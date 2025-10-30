import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export interface SocialLink {
  name: string;
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    color?: string;
  }>;
  url: string;
  color: string;
  username: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    color?: string;
  }>;
  label: string;
  value: string;
  href: string;
  color: string;
}

const BehanceIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 28,
  className,
}) => (
  <Image
    src="/icons/behance.png"
    alt="Behance"
    width={size}
    height={size}
    className={className}
  />
);

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/DevPBDias",
    color: "#6b7280",
    username: "@DevPBDias",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/devpaulobrunomdias",
    color: "#3b82f6",
    username: "DevPBDias",
  },
  {
    name: "Behance",
    icon: BehanceIcon,
    url: "https://www.behance.net/pbdias",
    color: "#0057ff",
    username: "pbdias",
  },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "devpbdias@gmail.com",
    href: "mailto:devpbdias@gmail.com",
    color: "#3b82f6",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (63) 99231-0976",
    href: "",
    color: "#10b981",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Palmas, TO",
    href: "",
    color: "#f59e0b",
  },
];
