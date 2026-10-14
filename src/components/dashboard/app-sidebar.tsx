
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
  ChevronRight,
  Plus
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
import { Button } from "../ui/button";

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
    <Sidebar className="border-r border-white/5 bg-[#040D26] text-white shadow-2xl">
      <SidebarHeader className="p-8 pb-4">
        <Link href="/" className="transition-all hover:opacity-80 active:scale-95 flex flex-col items-center gap-6">
          <Logo className="h-10 w-auto" />
          <Button className="w-full bg-[#F7931E] text-[#0B2A6B] font-black rounded-2xl h-12 shadow-xl shadow-orange-500/10 hover:bg-[#E0861A] gap-2 border-none">
            <Plus size={18} strokeWidth={3} />
            ACTION RAPIDE
          </Button>
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="px-4 pt-6">
        {navItems.map((group, idx) => (
          <SidebarGroup key={idx} className="mb-6">
            <SidebarGroupLabel className="text-white/10 text-[9px] uppercase font-black tracking-[0.3em] px-4 mb-3">
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
                        "group/btn relative transition-all duration-300 rounded-2xl h-12 px-4 border border-transparent",
                        pathname === item.url 
                          ? "bg-white/10 text-white font-bold border-white/5 shadow-xl" 
                          : "text-slate-500 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <Link href={item.url} className="flex items-center gap-3">
                        <item.icon size={18} className={cn(
                          "transition-colors",
                          pathname === item.url ? "text-[#F7931E]" : "text-slate-600 group-hover/btn:text-slate-300"
                        )} />
                        <span className="text-xs uppercase tracking-wider">{item.title}</span>
                        {item.badge && (
                          <span className="ml-auto bg-[#F7931E] text-[#0B2A6B] text-[8px] font-black px-1.5 py-0.5 rounded-lg shadow-lg">
                            {item.badge}
                          </span>
                        )}
                        {pathname === item.url && (
                           <div className="absolute left-[-16px] w-1.5 h-6 bg-[#F7931E] rounded-r-full shadow-[0_0_10px_#F7931E]" />
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
            <SidebarMenuButton className="text-slate-500 hover:text-white hover:bg-white/5 transition-all rounded-2xl h-11 px-4">
              <Settings size={18} />
              <span className="text-xs uppercase tracking-wider font-semibold">Paramètres</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="text-rose-500/60 hover:text-rose-400 hover:bg-rose-500/5 transition-all rounded-2xl h-11 px-4">
              <Link href="/">
                <LogOut size={18} />
                <span className="text-xs uppercase tracking-wider font-semibold">Déconnexion</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
