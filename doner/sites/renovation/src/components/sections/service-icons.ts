import {
  Cable,
  ClipboardCheck,
  Hammer,
  HardHat,
  Home,
  House,
  PackageCheck,
  Paintbrush,
  PaintRoller,
  Ruler,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const serviceIconMap: Record<string, LucideIcon> = {
  Cable,
  ClipboardCheck,
  Construction: Hammer,
  HardHat,
  Home,
  House,
  Paintbrush,
  PaintRoller,
  PackageCheck,
  Ruler,
};

export function getServiceIcon(iconName: string): LucideIcon {
  return serviceIconMap[iconName] ?? Hammer;
}
