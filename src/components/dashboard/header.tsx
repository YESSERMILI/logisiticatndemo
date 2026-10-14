
"use client";

import { Bell, Search, Plus, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTranslation } from "@/hooks/use-translation";
import Link from "next/link";

export function DashboardHeader() {
  const { language } = useTranslation();
  const isAr = language === 'ar';

  return (
    <header className="h-16 border-b border-slate-200 bg-white sticky top-0 z-30 flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1">
        <SidebarTrigger className="text-slate-500 hover:text-[#0B2A6B]" />
        
        <div className="relative max-w-md w-full hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
          <Input 
            placeholder="Rechercher une commande, un SKU..." 
            className="pl-10 h-10 bg-slate-50 border-none text-sm focus:ring-2 focus:ring-[#1F6FDB]/20 transition-all rounded-xl"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="hidden sm:flex border-slate-200 text-slate-600 hover:bg-slate-50 h-10 px-4 rounded-xl gap-2 font-bold uppercase text-[10px] tracking-widest">
          <Plus className="h-4 w-4 text-[#F7931E]" />
          Nouvelle action
        </Button>

        <div className="h-10 w-px bg-slate-200 mx-2 hidden sm:block" />

        <Button variant="ghost" size="icon" className="relative text-slate-500 hover:text-[#0B2A6B] hover:bg-slate-100 rounded-full">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#F7931E] rounded-full border-2 border-white" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10 border border-slate-200 shadow-sm">
                <AvatarImage src="https://picsum.photos/seed/user/100" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mt-2 rounded-xl shadow-xl border-slate-100" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-bold text-[#0B2A6B]">Admin Logistica</p>
                <p className="text-xs text-slate-400">admin@logistica.tn</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="py-2.5 cursor-pointer rounded-lg hover:bg-slate-50">
              <User className="mr-2 h-4 w-4 text-slate-400" />
              <span>Profil utilisateur</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href="/">
              <DropdownMenuItem className="py-2.5 cursor-pointer rounded-lg text-red-600 hover:bg-red-50">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Déconnexion</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
