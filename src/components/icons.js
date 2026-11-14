import { FileCheck, Calculator, ShieldCheck, Users, BarChart3 } from "lucide-react";

const ICONS = { FileCheck, Calculator, ShieldCheck, Users, BarChart3 };

export default function ServiceIcon({ name, size = 28 }) {
  const Icon = ICONS[name] || FileCheck;
  return <Icon size={size} aria-hidden="true" />;
}
