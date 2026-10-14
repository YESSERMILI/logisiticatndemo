
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
      <div className="flex min-h-screen w-full bg-[#040D26]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <AppSidebar />
        <SidebarInset className="flex flex-col min-w-0 bg-transparent relative">
          {/* Global Cyber Dots Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
               style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          
          <DashboardHeader />
          <main className="flex-1 overflow-y-auto relative z-10">
            <div className="max-w-[1600px] mx-auto p-6 md:p-10 lg:p-12">
              {children}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
