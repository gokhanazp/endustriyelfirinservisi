import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function IconOven(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="2.5" width="18" height="19" rx="2.5" />
      <path d="M3 8.5h18" />
      <rect x="6" y="11.5" width="12" height="7" rx="1.2" />
      <path d="M6.5 5.5h4M17.5 5.5h.01" />
    </svg>
  );
}

export function IconKitchen(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 21V9.5A2.5 2.5 0 0 1 5.5 7H12" />
      <rect x="12" y="7" width="9" height="14" rx="2" />
      <path d="M12 13h9" />
      <path d="M6 3v4M9 3v4" />
      <path d="M16 10.5v1.5M17.5 17.5h.01" />
    </svg>
  );
}

export function IconFactory(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M2 21h20" />
      <path d="M4 21V10l6 4V10l6 4V6h4v15" />
      <path d="M7 17.5h.01M13 17.5h.01M18.5 17.5h.01" />
    </svg>
  );
}

export function IconPizza(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3c4.5 0 8.3 2.6 9 4.2L12 21 3 7.2C3.7 5.6 7.5 3 12 3Z" />
      <path d="M5.2 9.6c1.9 1 4.3 1.6 6.8 1.6s4.9-.6 6.8-1.6" />
      <circle cx="10" cy="13" r=".9" />
      <circle cx="13.6" cy="15.6" r=".9" />
    </svg>
  );
}

export function IconFan(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 10c0-3 1-5 3.2-5 1.6 0 2.6 1.2 2.4 2.7-.3 2-2.5 2.9-5.6 2.3" />
      <path d="M14 12c3 0 5 1 5 3.2 0 1.6-1.2 2.6-2.7 2.4-2-.3-2.9-2.5-2.3-5.6" />
      <path d="M10 14c0 3-1 5-3.2 5-1.6 0-2.6-1.2-2.4-2.7.3-2 2.5-2.9 5.6-2.3" />
      <path d="M10 10c-3 0-5-1-5-3.2C5 5.2 6.2 4.2 7.7 4.4c2 .3 2.9 2.5 2.3 5.6" />
    </svg>
  );
}

export function IconStone(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <ellipse cx="12" cy="9" rx="9" ry="4" />
      <path d="M3 9v4c0 2.2 4 4 9 4s9-1.8 9-4V9" />
      <path d="M8 8.6h.01M12 10.4h.01M16 8.2h.01" />
    </svg>
  );
}

export function IconClock(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

export function IconShield(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l7.5 3v5.4c0 4.4-3.1 8.3-7.5 9.6-4.4-1.3-7.5-5.2-7.5-9.6V6L12 3Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  );
}

export function IconPart(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M10.3 3h3.4l.5 2.4 2 1.2 2.3-.9 1.7 3-1.8 1.6v2.4l1.8 1.6-1.7 3-2.3-.9-2 1.2-.5 2.4h-3.4l-.5-2.4-2-1.2-2.3.9-1.7-3 1.8-1.6v-2.4L3.8 8.7l1.7-3 2.3.9 2-1.2L10.3 3Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

export function IconBadge(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="9.5" r="5.5" />
      <path d="m8.5 14.5-1 6.5 4.5-2.4 4.5 2.4-1-6.5" />
      <path d="m10.3 9.4 1.2 1.3 2.2-2.4" />
    </svg>
  );
}

export function IconPhone(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6.2 3.5h3l1.4 3.6-1.9 1.4a11.5 11.5 0 0 0 5.3 5.3l1.4-1.9 3.6 1.4v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function IconWhatsapp(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.17 6.43 2.16 11.88c0 1.74.46 3.44 1.32 4.94L2 22.5l5.83-1.53a9.9 9.9 0 0 0 4.2.94h.01c5.44 0 9.87-4.43 9.88-9.88a9.82 9.82 0 0 0-2.89-6.99A9.82 9.82 0 0 0 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.46.91.92-3.37-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.53 3.69-8.21 8.22-8.21a8.15 8.15 0 0 1 5.8 2.41 8.15 8.15 0 0 1 2.4 5.81c0 4.53-3.68 8.21-8.21 8.21Z" />
    </svg>
  );
}

export function IconArrow(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function IconPin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconMail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function IconAlert(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3.5 21.5 20h-19L12 3.5Z" />
      <path d="M12 10v4M12 17.2h.01" />
    </svg>
  );
}

export function IconTools(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M14.5 3.5a4.5 4.5 0 0 1 5.6 5.9l-9.6 9.6-3.6.9.9-3.6 9.6-9.6" />
      <path d="M4 20l3.3-3.3" />
      <path d="M3.5 8.5a3.5 3.5 0 0 0 4.8 3.3" />
    </svg>
  );
}

const registry = {
  oven: IconOven,
  kitchen: IconKitchen,
  factory: IconFactory,
  pizza: IconPizza,
  fan: IconFan,
  stone: IconStone,
  clock: IconClock,
  shield: IconShield,
  part: IconPart,
  badge: IconBadge,
  phone: IconPhone,
  tools: IconTools,
} as const;

export type IconName = keyof typeof registry;

export function Icon({ name, ...rest }: { name: string } & IconProps) {
  const Cmp = registry[name as IconName] ?? IconTools;
  return <Cmp {...rest} />;
}
