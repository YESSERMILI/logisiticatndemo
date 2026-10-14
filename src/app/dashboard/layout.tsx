
"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { useTranslation } from "@/hooks/use-translation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useTranslation();
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#F8FAFC]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <AppSidebar />
        <SidebarInset className="flex flex-col">
          <DashboardHeader />
          <main className="flex-1 overflow-y-auto p-4 md:p-8">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
