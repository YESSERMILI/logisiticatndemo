
"use client";

import * as React from "react";
import {
  LayoutDashboard,
  Package,
  Truck,
  Box,
  Users,
  Settings,
  BarChart3,
  ClipboardList,
  History,
  AlertTriangle,
  Warehouse,
  FileText,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Vue d'ensemble",
      items: [
        { title: "Tableau de bord", icon: LayoutDashboard, url: "/dashboard" },
      ]
    },
    {
      title: "Opérations",
      items: [
        { title: "Commandes", icon: ClipboardList, url: "/dashboard/orders" },
        { title: "Préparations", icon: Package, url: "/dashboard/preparations" },
        { title: "Expéditions", icon: Truck, url: "/dashboard/shipments" },
        { title: "Retours & Anomalies", icon: AlertTriangle, url: "/dashboard/issues", badge: "3" },
      ]
    },
    {
      title: "Entrepôt",
      items: [
        { title: "Stock total", icon: Warehouse, url: "/dashboard/inventory" },
        { title: "Catalogue Articles", icon: Box, url: "/dashboard/products" },
        { title: "Réceptions", icon: History, url: "/dashboard/receipts" },
      ]
    },
    {
      title: "Pilotage",
      items: [
        { title: "Analyses", icon: BarChart3, url: "/dashboard/analytics" },
        { title: "Documents", icon: FileText, url: "/dashboard/documents" },
        { title: "Facturation", icon: CreditCard, url: "/dashboard/billing" },
      ]
    }
  ];

  return (
    <Sidebar className="border-r border-slate-200 bg-[#0B2A6B] text-white">
      <SidebarHeader className="p-6">
        <Link href="/">
          <Logo className="h-8 w-auto brightness-0 invert" />
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="px-4">
        {navItems.map((group, idx) => (
          <SidebarGroup key={idx} className="mb-4">
            <SidebarGroupLabel className="text-white/30 text-[10px] uppercase font-black tracking-widest px-2 mb-2">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={pathname === item.url}
                      className={cn(
                        "hover:bg-white/10 transition-all rounded-xl h-10 px-3",
                        pathname === item.url ? "bg-[#F7931E] text-[#0B2A6B] font-black" : "text-white/60 hover:text-white"
                      )}
                    >
                      <Link href={item.url} className="flex items-center gap-3">
                        <item.icon size={18} className={cn(pathname === item.url ? "text-[#0B2A6B]" : "text-white/40")} />
                        <span className="text-sm font-semibold">{item.title}</span>
                        {item.badge && (
                          <span className="ml-auto bg-red-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 mt-auto border-t border-white/5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-white/40 hover:text-white hover:bg-white/5 transition-all rounded-xl h-10 px-3">
              <Settings size={18} />
              <span className="text-sm font-semibold">Configuration</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
