
"use client";

import { 
  Search, 
  Plus, 
  Warehouse, 
  History, 
  ArrowDownCircle, 
  ArrowUpRight,
  Filter,
  MoreVertical,
  Layers,
  ShieldCheck
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
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#0B2A6B] tracking-tight">Stocks & Inventaire</h1>
          <p className="text-slate-500 font-medium mt-1">Visibilité temps réel sur le WMS et les mouvements de stock.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" className="border-slate-200 text-slate-600 font-bold h-10 rounded-xl gap-2">
             <History size={16} /> Mouvements
           </Button>
           <Button className="bg-[#1F6FDB] text-white font-black h-10 rounded-xl hover:bg-[#1656B3] gap-2">
             <ArrowDownCircle size={18} /> Réception Article
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none shadow-sm bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Occupation Totale</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between mb-4">
              <h3 className="text-3xl font-black text-[#0B2A6B]">82.4%</h3>
              <p className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">CAPACITÉ OK</p>
            </div>
            <Progress value={82.4} className="h-2 bg-slate-100" />
            <p className="text-[10px] text-slate-400 font-medium mt-4">2,637 / 3,200 emplacements occupés</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Articles en Rupture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-rose-500">14</h3>
              <div className="p-2 rounded-xl bg-rose-50 text-rose-500">
                <Layers size={20} />
              </div>
            </div>
            <p className="text-[10px] text-slate-400 font-medium mt-4 tracking-wider uppercase">Nécessite réapprovisionnement immédiat</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-[#0B2A6B] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <ShieldCheck size={80} strokeWidth={1} />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-black text-white/30 uppercase tracking-[0.2em]">Précision Inventaire</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-3xl font-black text-[#F7931E]">99.98%</h3>
            <p className="text-[10px] text-white/40 font-medium mt-4 tracking-wider uppercase">Dernier audit : Hier 22:00</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm bg-white overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input 
                placeholder="Filtrer par SKU, Nom, Emplacement..." 
                className="pl-10 h-10 bg-slate-50 border-none text-sm rounded-xl"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-10 border-slate-200 text-slate-500 font-bold px-4 rounded-xl gap-2">
                <Filter size={14} /> Catégories
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="border-slate-100">
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-6">SKU / Code</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Désignation</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Emplacement</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Total</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Réservé</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Disponible</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-right px-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.sku} className="border-slate-50 hover:bg-slate-50/30 transition-colors">
                  <TableCell className="px-6 font-mono text-[11px] font-bold text-[#1F6FDB]">{item.sku}</TableCell>
                  <TableCell className="font-semibold text-slate-700">{item.name}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className="text-[10px] font-black border-slate-200 text-slate-500 px-2 rounded-lg">
                      {item.location}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center font-bold text-[#0B2A6B]">{item.total}</TableCell>
                  <TableCell className="text-center font-bold text-slate-400">{item.reserved}</TableCell>
                  <TableCell className="text-center">
                    <span className={cn(
                      "font-black text-sm",
                      item.available === 0 ? "text-rose-500" : item.available < 5 ? "text-amber-500" : "text-emerald-500"
                    )}>
                      {item.available}
                    </span>
                  </TableCell>
                  <TableCell className="text-right px-6">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
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
