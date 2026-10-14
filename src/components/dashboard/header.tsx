
"use client";

import { Bell, Search, Plus, User, LogOut, LayoutGrid, HelpCircle } from "lucide-react";
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
import { cn } from "@/lib/utils";

export function DashboardHeader() {
  const { language } = useTranslation();
  const isAr = language === 'ar';

  return (
    <header className="h-20 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-8">
      <div className="flex items-center gap-6 flex-1">
        <SidebarTrigger className="text-slate-400 hover:text-[#0B2A6B] hover:bg-slate-100 p-2 rounded-xl transition-all" />
        
        <div className="relative max-w-md w-full hidden lg:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 h-4 w-4" />
          <Input 
            placeholder="Rechercher commande, SKU, client..." 
            className="pl-11 h-11 bg-slate-50 border-none text-sm focus:ring-2 focus:ring-[#1F6FDB]/10 transition-all rounded-2xl placeholder:text-slate-300"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 pr-4 border-r border-slate-100">
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-[#0B2A6B] hover:bg-slate-50 rounded-xl h-10 w-10">
            <HelpCircle size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-[#0B2A6B] hover:bg-slate-50 rounded-xl h-10 w-10">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#F7931E] rounded-full ring-2 ring-white" />
          </Button>
        </div>

        <Button className="hidden md:flex bg-[#F7931E] text-[#0B2A6B] hover:bg-[#E0861A] h-11 px-5 rounded-2xl gap-2 font-black uppercase text-[10px] tracking-widest shadow-lg shadow-orange-500/10">
          <Plus className="h-4 w-4" strokeWidth={3} />
          Action Rapide
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-12 w-12 rounded-2xl p-0 hover:bg-slate-50 transition-all border border-slate-100 overflow-hidden">
              <Avatar className="h-full w-full rounded-none">
                <AvatarImage src="https://picsum.photos/seed/admin/100" />
                <AvatarFallback className="bg-[#1F6FDB] text-white font-bold">AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 mt-3 rounded-2xl shadow-2xl border-slate-100 p-2" align="end">
            <DropdownMenuLabel className="px-4 py-3">
              <div className="flex flex-col space-y-0.5">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Compte Administrateur</p>
                <p className="text-sm font-black text-[#0B2A6B]">Ahmed Logistica</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-50" />
            <DropdownMenuItem className="py-3 px-4 cursor-pointer rounded-xl hover:bg-slate-50 transition-colors">
              <User className="mr-3 h-4 w-4 text-slate-400" />
              <span className="font-bold text-slate-600 text-sm">Mon Profil</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-3 px-4 cursor-pointer rounded-xl hover:bg-slate-50 transition-colors">
              <LayoutGrid className="mr-3 h-4 w-4 text-slate-400" />
              <span className="font-bold text-slate-600 text-sm">Préférences</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-50" />
            <Link href="/">
              <DropdownMenuItem className="py-3 px-4 cursor-pointer rounded-xl text-rose-600 hover:bg-rose-50 transition-colors">
                <LogOut className="mr-3 h-4 w-4" />
                <span className="font-bold text-sm">Déconnexion</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
