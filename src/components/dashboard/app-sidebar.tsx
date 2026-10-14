
"use client";

import * as React from "react";
import {
  LayoutDashboard,
  Package,
  Truck,
  Box,
  Settings,
  BarChart3,
  ClipboardList,
  History,
  AlertTriangle,
  Warehouse,
  FileText,
  CreditCard,
  LogOut,
  ChevronRight
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
      title: "Navigation",
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
        { title: "Retours", icon: AlertTriangle, url: "/dashboard/issues", badge: "3" },
      ]
    },
    {
      title: "Entrepôt",
      items: [
        { title: "Stock & WMS", icon: Warehouse, url: "/dashboard/inventory" },
        { title: "Catalogue", icon: Box, url: "/dashboard/products" },
        { title: "Réceptions", icon: History, url: "/dashboard/receipts" },
      ]
    },
    {
      title: "Pilotage",
      items: [
        { title: "Analyses", icon: BarChart3, url: "/dashboard/analytics" },
        { title: "Facturation", icon: CreditCard, url: "/dashboard/billing" },
      ]
    }
  ];

  return (
    <Sidebar className="border-none bg-[#0B2A6B] text-white shadow-2xl">
      <SidebarHeader className="p-8">
        <Link href="/" className="transition-transform hover:scale-105 active:scale-95">
          <Logo className="h-10 w-auto brightness-0 invert" />
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="px-4">
        {navItems.map((group, idx) => (
          <SidebarGroup key={idx} className="mb-6">
            <SidebarGroupLabel className="text-white/20 text-[10px] uppercase font-black tracking-[0.2em] px-4 mb-3">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={pathname === item.url}
                      className={cn(
                        "group/btn relative transition-all duration-300 rounded-xl h-11 px-4",
                        pathname === item.url 
                          ? "bg-[#1F6FDB] text-white font-bold shadow-lg shadow-blue-500/20" 
                          : "text-white/50 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <Link href={item.url} className="flex items-center gap-3">
                        <item.icon size={20} className={cn(
                          "transition-colors",
                          pathname === item.url ? "text-white" : "text-white/30 group-hover/btn:text-white"
                        )} />
                        <span className="text-sm">{item.title}</span>
                        {item.badge && (
                          <span className="ml-auto bg-[#F7931E] text-[#0B2A6B] text-[9px] font-black px-1.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                        {pathname === item.url && (
                           <ChevronRight size={14} className="ml-auto opacity-50" />
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

      <SidebarFooter className="p-6 border-t border-white/5 mt-auto">
        <SidebarMenu className="gap-2">
          <SidebarMenuItem>
            <SidebarMenuButton className="text-white/40 hover:text-white hover:bg-white/5 transition-all rounded-xl h-11 px-4">
              <Settings size={20} />
              <span className="text-sm font-semibold">Paramètres</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-all rounded-xl h-11 px-4">
              <Link href="/">
                <LogOut size={20} />
                <span className="text-sm font-semibold">Déconnexion</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
