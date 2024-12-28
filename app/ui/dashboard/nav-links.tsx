"use client";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <SidebarMenuItem key={link.name}>
            <SidebarMenuButton
              asChild
              isActive={
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== "/dashboard")
              }
              tooltip={link.name}
            >
              <Link href={link.href}>
                <LinkIcon />
                <span>{link.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </>
  );
}
