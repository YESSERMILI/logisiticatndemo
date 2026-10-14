
"use client";

import { 
  Search, 
  Warehouse, 
  History, 
  ArrowDownCircle, 
  Filter,
  MoreVertical,
  Layers,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const inventory = [
  { sku: 'APL-IP15-P256', name: 'iPhone 15 Pro 256GB - Blue', category: 'Tech', location: 'RACK-A12-01', total: 42, reserved: 8, available: 34 },
  { sku: 'SAM-S24U-512', name: 'Galaxy S24 Ultra Titanium', category: 'Tech', location: 'RACK-A12-02', total: 15, reserved: 15, available: 0 },
  { sku: 'LOG-PKG-MED', name: 'Carton Emballage Medium', category: 'Supplies', location: 'Z-BULK-04', total: 1200, reserved: 0, available: 1200 },
  { sku: 'NIK-AF1-W-42', name: 'Nike Air Force 1 White T42', category: 'Mode', location: 'SHO-B01-44', total: 24, reserved: 2, available: 22 },
  { sku: 'DY-V15-SUP', name: 'Dyson V15 Detect Absolute', category: 'Home', location: 'RACK-C02-09', total: 8, reserved: 1, available: 7 },
];

export default function InventoryPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-white tracking-tight">Stocks & WMS</h1>
          <p className="text-slate-500 font-bold text-sm tracking-wide uppercase text-[10px] flex items-center gap-2">
            <Warehouse size={12} className="text-[#F7931E]" />
            Visibilité temps réel • Hub Tunis
          </p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="border-white/5 bg-white/5 text-slate-400 font-black h-12 px-6 rounded-2xl gap-2 hover:text-white transition-all">
             <History size={18} /> HISTORIQUE
           </Button>
           <Button className="bg-[#1F6FDB] text-white font-black h-12 px-6 rounded-2xl hover:bg-[#1656B3] gap-2 shadow-xl shadow-blue-500/20 border-none">
             <ArrowDownCircle size={20} /> RÉCEPTION ARTICLE
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-white/5 bg-[#0B2A6B]/40 backdrop-blur-xl shadow-2xl rounded-[32px]">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Occupation Hub</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-4">
            <div className="flex items-end justify-between mb-4">
              <h3 className="text-4xl font-black text-white">82.4%</h3>
              <p className="text-[9px] font-black text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-lg uppercase tracking-widest">NORMAL</p>
            </div>
            <Progress value={82.4} className="h-2.5 bg-white/5" />
          </CardContent>
        </Card>
        
        <Card className="border-white/5 bg-[#0B2A6B]/40 backdrop-blur-xl shadow-2xl rounded-[32px]">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Alertes Rupture</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-4">
            <div className="flex items-end justify-between">
              <h3 className="text-4xl font-black text-rose-400">14</h3>
              <div className="p-3 rounded-2xl bg-rose-400/10 text-rose-400">
                <Layers size={24} />
              </div>
            </div>
            <p className="text-[9px] text-slate-600 font-bold mt-5 uppercase tracking-widest">Nécessite réapprovisionnement urgent</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-2xl bg-[#F7931E] text-[#0B2A6B] rounded-[32px] overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShieldCheck size={100} strokeWidth={1} />
          </div>
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-[9px] font-black text-[#0B2A6B]/40 uppercase tracking-[0.3em]">Précision Audit</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-4">
            <h3 className="text-4xl font-black tracking-tighter">99.98%</h3>
            <p className="text-[9px] text-[#0B2A6B]/60 font-bold mt-5 uppercase tracking-widest">Dernier contrôle physique : Hier 22:00</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-white/5 bg-[#0B2A6B]/30 backdrop-blur-xl shadow-2xl rounded-[32px] overflow-hidden">
        <CardHeader className="p-8 pb-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 h-4 w-4" />
              <Input 
                placeholder="SKU, article, emplacement..." 
                className="pl-12 h-12 bg-white/5 border-white/5 text-white text-sm rounded-2xl focus:ring-2 focus:ring-[#1F6FDB]/20"
              />
            </div>
            <Button variant="ghost" className="text-slate-500 font-black gap-2 text-[10px] uppercase tracking-widest hover:text-white">
              <Filter size={16} /> Filtrer catégories
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-white/5">
              <TableRow className="border-white/5">
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] px-8 h-14">SKU / Code</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Produit</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] text-center">Emplacement</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] text-center">Stock Total</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] text-center">Réservé</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] text-center">Disponible</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] text-right px-8">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.sku} className="border-white/5 hover:bg-white/5 transition-all group">
                  <TableCell className="px-8 font-mono text-xs font-black text-[#1F6FDB]">{item.sku}</TableCell>
                  <TableCell className="font-bold text-slate-300">
                    <div className="flex flex-col">
                      <span>{item.name}</span>
                      <span className="text-[8px] text-slate-600 font-black uppercase tracking-widest">{item.category}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className="text-[9px] font-black border-white/5 text-slate-500 px-3 h-7 rounded-lg">
                      <MapPin size={10} className="mr-1 opacity-50" /> {item.location}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center font-black text-white tabular-nums">{item.total}</TableCell>
                  <TableCell className="text-center font-bold text-slate-600 tabular-nums">{item.reserved}</TableCell>
                  <TableCell className="text-center">
                    <span className={cn(
                      "font-black text-sm tabular-nums",
                      item.available === 0 ? "text-rose-400" : item.available < 5 ? "text-amber-400" : "text-emerald-400"
                    )}>
                      {item.available}
                    </span>
                  </TableCell>
                  <TableCell className="text-right px-8">
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-600 hover:text-white rounded-xl">
                      <MoreVertical size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
