import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/app/ui/header";

export const experimental_ppr = true;

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <SideNav />
      <SidebarInset>
        <Header />
        <div className="px-4 pt-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
