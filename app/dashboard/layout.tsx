import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const experimental_ppr = true;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <SideNav />
      <SidebarInset className="p-4">
        <SidebarTrigger />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
