import { HiCollection } from "react-icons/hi";
import { HiBell } from "react-icons/hi";
import { HiBookmark } from "react-icons/hi";
import { HiCog } from "react-icons/hi";

export const sidebarNav = [
  { id: 1, label: "Feeds", href: "/", order: 1, icons: HiCollection },
  {
    id: 2,
    label: "Notification",
    href: "/notifications",
    order: 2,
    icons: HiBell,
  },
  { id: 3, label: "Saved", href: "/saved", order: 2, icons: HiBookmark },
  { id: 4, label: "Settings", href: "/settings", order: 3, icons: HiCog },
] as const;
