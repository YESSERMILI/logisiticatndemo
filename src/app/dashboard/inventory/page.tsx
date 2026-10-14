
"use client";

import { 
  Search, 
  Plus, 
  Warehouse, 
  History, 
  ArrowDownCircle, 
  Filter,
  MoreVertical,
  Layers,
  ShieldCheck,
  MapPin,
  Box
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
  CardDescription 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const inventory = [
  { sku: 'APL-IP15-P256', name: 'iPhone 15 Pro 256GB - Blue', category: 'Tech', location: 'RACK-A12-01', total: 42, reserved: 8, available: 34, unit: 'pces' },
  { sku: 'SAM-S24U-512', name: 'Galaxy S24 Ultra Titanium', category: 'Tech', location: 'RACK-A12-02', total: 15, reserved: 15, available: 0, unit: 'pces' },
  { sku: 'LOG-PKG-MED', name: 'Carton Emballage Medium', category: 'Supplies', location: 'Z-BULK-04', total: 1200, reserved: 0, available: 1200, unit: 'pces' },
  { sku: 'NIK-AF1-W-42', name: 'Nike Air Force 1 White T42', category: 'Mode', location: 'SHO-B01-44', total: 24, reserved: 2, available: 22, unit: 'pces' },
  { sku: 'DY-V15-SUP', name: 'Dyson V15 Detect Absolute', category: 'Home', location: 'RACK-C02-09', total: 8, reserved: 1, available: 7, unit: 'pces' },
  { sku: 'APL-MW-7-ST', name: 'Apple Watch Series 9 45mm', category: 'Tech', location: 'RACK-A12-08', total: 12, reserved: 4, available: 8, unit: 'pces' },
];

export default function InventoryPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-[#0B2A6B] tracking-tight">Stocks & WMS</h1>
          <p className="text-slate-400 font-bold text-sm tracking-wide uppercase text-[10px]">Visibilité temps réel • Inventaire permanent</p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="border-slate-200 text-slate-600 font-black h-12 px-6 rounded-2xl gap-2 shadow-sm">
             <History size={18} /> Historique Mouvements
           </Button>
           <Button className="bg-[#1F6FDB] text-white font-black h-12 px-6 rounded-2xl hover:bg-[#1656B3] gap-2 shadow-lg shadow-blue-500/20">
             <ArrowDownCircle size={20} /> Réception Article
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-none shadow-sm bg-white rounded-[28px]">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Occupation Totale Hub</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-4">
            <div className="flex items-end justify-between mb-4">
              <h3 className="text-4xl font-black text-[#0B2A6B]">82.4%</h3>
              <p className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-3 py-1.5 rounded-lg uppercase tracking-widest">Capacité OK</p>
            </div>
            <Progress value={82.4} className="h-2.5 bg-slate-100" />
            <p className="text-[10px] text-slate-300 font-bold mt-5 uppercase tracking-widest">2,637 / 3,200 emplacements utilisés</p>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-sm bg-white rounded-[28px]">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Alertes Rupture</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-4">
            <div className="flex items-end justify-between">
              <h3 className="text-4xl font-black text-rose-500">14</h3>
              <div className="p-3 rounded-2xl bg-rose-50 text-rose-500 shadow-sm">
                <Layers size={24} strokeWidth={2.5} />
              </div>
            </div>
            <p className="text-[10px] text-slate-300 font-bold mt-5 uppercase tracking-widest">Nécessite réapprovisionnement urgent</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-[#0B2A6B] text-white rounded-[28px] overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShieldCheck size={100} strokeWidth={1} />
          </div>
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-[10px] font-black text-white/30 uppercase tracking-[0.25em]">Précision Audit</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-4">
            <h3 className="text-4xl font-black text-[#F7931E]">99.98%</h3>
            <p className="text-[10px] text-white/30 font-bold mt-5 uppercase tracking-widest">Dernière vérification : Hier 22:00</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm bg-white rounded-[32px] overflow-hidden">
        <CardHeader className="p-8 pb-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 h-4 w-4" />
              <Input 
                placeholder="Filtrer par SKU, Nom d'article, Emplacement..." 
                className="pl-11 h-12 bg-slate-50 border-none text-sm rounded-2xl focus:ring-2 focus:ring-[#1F6FDB]/10"
              />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="h-12 px-6 border-slate-200 text-slate-500 font-black rounded-2xl gap-2 text-[10px] uppercase tracking-widest">
                <Filter size={16} /> Toutes les catégories
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="border-slate-100">
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-8 h-14">SKU / Code</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Désignation Produit</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Emplacement</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Total Stock</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Réservé</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Disponible</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right px-8">Gestion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.sku} className="border-slate-50 hover:bg-slate-50/30 transition-all group">
                  <TableCell className="px-8 font-mono text-xs font-black text-[#1F6FDB]">{item.sku}</TableCell>
                  <TableCell className="font-bold text-slate-600">
                    <div className="flex flex-col">
                      <span>{item.name}</span>
                      <span className="text-[9px] text-slate-300 font-black uppercase tracking-widest">{item.category}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className="text-[10px] font-black border-slate-200 text-slate-400 px-3 h-7 rounded-lg tracking-widest">
                      <MapPin size={10} className="mr-1 opacity-50" /> {item.location}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center font-black text-[#0B2A6B] tabular-nums">{item.total}</TableCell>
                  <TableCell className="text-center font-bold text-slate-300 tabular-nums">{item.reserved}</TableCell>
                  <TableCell className="text-center">
                    <span className={cn(
                      "font-black text-sm tabular-nums",
                      item.available === 0 ? "text-rose-500" : item.available < 5 ? "text-amber-500" : "text-emerald-500"
                    )}>
                      {item.available}
                    </span>
                  </TableCell>
                  <TableCell className="text-right px-8">
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-300 hover:bg-slate-100 rounded-xl">
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
