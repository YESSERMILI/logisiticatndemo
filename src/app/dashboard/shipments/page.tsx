
"use client";

import { 
  Truck, 
  Search, 
  Download, 
  Filter, 
  ArrowRight,
  MapPin,
  Calendar,
  Box,
  Clock
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
import { Badge } from "@/components/ui/badge";

const shipments = [
  { id: 'SHP-4590', order: 'ORD-8821', destination: 'Tunis, Ariana', carrier: 'Aramex', status: 'En livraison', weight: '2.5kg' },
  { id: 'SHP-4591', order: 'ORD-8825', destination: 'Sousse, Ville', carrier: 'Internal Fleet', status: 'Prêt', weight: '12.0kg' },
  { id: 'SHP-4592', order: 'ORD-8829', destination: 'Sfax, Sakiet', carrier: 'Jumia Express', status: 'Livreur affecté', weight: '0.8kg' },
  { id: 'SHP-4593', order: 'ORD-8830', destination: 'Gabès, Centre', carrier: 'Internal Fleet', status: 'En transit', weight: '4.2kg' },
  { id: 'SHP-4594', order: 'ORD-8832', destination: 'Bizerte, Corniche', carrier: 'Aramex', status: 'En livraison', weight: '1.5kg' },
];

export default function ShipmentsPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-white tracking-tight">Expéditions & Dispatch</h1>
          <p className="text-slate-500 font-bold text-sm tracking-wide uppercase text-[10px] flex items-center gap-2">
            <Truck size={12} className="text-[#F7931E]" />
            Contrôle des flux de sortie • Temps réel
          </p>
        </div>
        <div className="flex items-center gap-3">
           <Button className="bg-[#1F6FDB] text-white font-black h-12 px-6 rounded-2xl hover:bg-[#1656B3] gap-2 shadow-xl shadow-blue-500/20 border-none">
             <Truck size={20} strokeWidth={2.5} /> CRÉER UN MANIFESTE
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {[
          { label: 'Manifestes Ouverts', value: '08', icon: Box, color: 'text-blue-400 bg-blue-500/10' },
          { label: 'Colis en Dispatch', value: '158', icon: Truck, color: 'text-[#F7931E] bg-[#F7931E]/10' },
          { label: 'Attente Transporteur', value: '24', icon: Calendar, color: 'text-amber-400 bg-amber-500/10' },
          { label: 'Délai Moyen', value: '45m', icon: Clock, color: 'text-emerald-400 bg-emerald-500/10' },
        ].map((item, i) => (
          <Card key={i} className="border-white/5 bg-[#0B2A6B]/40 backdrop-blur-xl shadow-2xl rounded-[28px] overflow-hidden group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">{item.label}</p>
                  <h3 className="text-3xl font-black text-white tracking-tighter">{item.value}</h3>
                </div>
                <div className={cn("p-4 rounded-2xl transition-transform group-hover:rotate-6 duration-500 border border-white/5", item.color)}>
                  <item.icon className="h-6 w-6" strokeWidth={2.5} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-white/5 bg-[#0B2A6B]/30 backdrop-blur-xl shadow-2xl rounded-[32px] overflow-hidden">
        <CardHeader className="p-8 pb-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 h-4 w-4" />
              <Input 
                placeholder="N° tracking, destination, transporteur..." 
                className="pl-12 h-12 bg-white/5 border-white/5 text-white text-sm rounded-2xl focus:ring-2 focus:ring-[#1F6FDB]/20"
              />
            </div>
            <Button variant="ghost" className="text-slate-500 font-black gap-2 text-[10px] uppercase tracking-widest hover:text-white">
              <Filter size={16} /> Transporteurs
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-white/5">
              <TableRow className="border-white/5">
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] px-8 h-14">ID Expédition</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Commande Origine</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Destination</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Transporteur</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] text-center">Poids</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Statut Dispatch</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] text-right px-8">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shipments.map((shp) => (
                <TableRow key={shp.id} className="border-white/5 hover:bg-white/5 transition-all group">
                  <TableCell className="px-8 font-mono text-xs font-black text-[#1F6FDB]">{shp.id}</TableCell>
                  <TableCell className="font-bold text-slate-500">{shp.order}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-xs text-slate-300 font-bold">
                      <MapPin size={12} className="text-[#F7931E]" />
                      {shp.destination}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-white/5 text-slate-400 border-white/5 font-black text-[8px] rounded-lg tracking-widest px-2.5 h-6">
                      {shp.carrier.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center text-xs font-black text-slate-500 tabular-nums">{shp.weight}</TableCell>
                  <TableCell>
                    <Badge className={cn(
                      "border-none px-3 font-black text-[8px] rounded-lg h-7 tracking-widest",
                      shp.status === 'En livraison' ? 'bg-blue-500/10 text-blue-400' : 
                      shp.status === 'En transit' ? 'bg-[#F7931E]/10 text-[#F7931E]' : 'bg-white/5 text-slate-600'
                    )}>
                      {shp.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right px-8">
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-600 hover:text-white hover:bg-white/10 rounded-xl transition-all">
                      <ArrowRight size={18} />
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
