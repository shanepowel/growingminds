import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Car,
  GraduationCap,
  Hourglass,
  House,
  Monitor,
  Pencil,
  PenLine,
  Plus,
  ShieldCheck,
  Type,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  "shield-check": ShieldCheck,
  monitor: Monitor,
  plus: Plus,
  "book-open": BookOpen,
  type: Type,
  pencil: Pencil,
  "pen-line": PenLine,
  house: House,
  car: Car,
  hourglass: Hourglass,
};

export function getIcon(name: string): LucideIcon {
  return map[name] ?? GraduationCap;
}
