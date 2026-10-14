
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

  return (
    <header className="h-20 border-b border-white/5 bg-[#040D26]/80 backdrop-blur-xl sticky top-0 z-30 flex items-center justify-between px-10">
      <div className="flex items-center gap-8 flex-1">
        <SidebarTrigger className="text-slate-500 hover:text-white hover:bg-white/5 p-2 rounded-2xl transition-all" />
        
        <div className="relative max-w-xl w-full hidden lg:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 h-4 w-4" />
          <Input 
            placeholder="Rechercher commande, SKU, client..." 
            className="pl-12 h-11 bg-white/5 border-white/5 text-white text-sm focus:ring-2 focus:ring-[#1F6FDB]/30 transition-all rounded-2xl placeholder:text-slate-600"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-3 pr-6 border-r border-white/5">
          <Button variant="ghost" size="icon" className="text-slate-500 hover:text-white hover:bg-white/5 rounded-2xl h-10 w-10">
            <HelpCircle size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="relative text-slate-500 hover:text-white hover:bg-white/5 rounded-2xl h-10 w-10">
            <Bell size={20} />
            <span className="absolute top-3 right-3 w-2 h-2 bg-[#F7931E] rounded-full ring-2 ring-[#040D26]" />
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-12 w-12 rounded-2xl p-0 hover:bg-white/5 transition-all border border-white/5 overflow-hidden">
              <Avatar className="h-full w-full rounded-none">
                <AvatarImage src="https://picsum.photos/seed/admin/100" />
                <AvatarFallback className="bg-[#1F6FDB] text-white font-bold">AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72 mt-4 rounded-[24px] shadow-2xl border-white/10 bg-[#0B2A6B] text-white p-2" align="end">
            <DropdownMenuLabel className="px-5 py-4">
              <div className="flex flex-col space-y-1">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Administrateur</p>
                <p className="text-base font-black text-white">Ahmed Logistica</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/5" />
            <DropdownMenuItem className="py-3 px-5 cursor-pointer rounded-xl hover:bg-white/5 transition-colors">
              <User className="mr-3 h-4 w-4 text-slate-400" />
              <span className="font-bold text-sm">Profil Hub</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-3 px-5 cursor-pointer rounded-xl hover:bg-white/5 transition-colors">
              <LayoutGrid className="mr-3 h-4 w-4 text-slate-400" />
              <span className="font-bold text-sm">Configuration WMS</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/5" />
            <Link href="/">
              <DropdownMenuItem className="py-3 px-5 cursor-pointer rounded-xl text-rose-400 hover:bg-rose-500/10 transition-colors">
                <LogOut className="mr-3 h-4 w-4" />
                <span className="font-bold text-sm">Fermer Session</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
