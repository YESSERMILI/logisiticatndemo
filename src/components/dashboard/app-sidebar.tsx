
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
  ChevronRight,
  Warehouse,
  ArrowUpRight,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/use-translation";

export function AppSidebar() {
  const pathname = usePathname();
  const { t, language } = useTranslation();
  const isAr = language === 'ar';

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
        { title: "Livraisons", icon: History, url: "/dashboard/deliveries" },
        { title: "Anomalies", icon: AlertTriangle, url: "/dashboard/issues", badge: "3" },
      ]
    },
    {
      title: "Entrepôt",
      items: [
        { title: "Stock", icon: Warehouse, url: "/dashboard/inventory" },
        { title: "Articles", icon: Box, url: "/dashboard/products" },
      ]
    },
    {
      title: "Ressources",
      items: [
        { title: "Clients", icon: Users, url: "/dashboard/customers" },
        { title: "Rapports", icon: BarChart3, url: "/dashboard/analytics" },
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
          <SidebarGroup key={idx}>
            <SidebarGroupLabel className="text-white/40 text-[10px] uppercase font-black tracking-widest px-2 mb-2">
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
                        pathname === item.url ? "bg-[#F7931E] text-[#0B2A6B] font-bold" : "text-white/70 hover:text-white"
                      )}
                    >
                      <Link href={item.url} className="flex items-center gap-3">
                        <item.icon size={18} />
                        <span className="text-sm font-medium">{item.title}</span>
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
            <SidebarMenuButton className="text-white/40 hover:text-white hover:bg-white/5 transition-all rounded-xl">
              <Settings size={18} />
              <span className="text-sm font-medium">Paramètres</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
