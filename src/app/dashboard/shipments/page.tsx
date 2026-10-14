
"use client";

import { 
  Truck, 
  Search, 
  Download, 
  Filter, 
  ArrowRight,
  MoreHorizontal,
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
  CardDescription 
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
          <h1 className="text-4xl font-black text-[#0B2A6B] tracking-tight">Expéditions & Dispatch</h1>
          <p className="text-slate-400 font-bold text-sm tracking-wide uppercase text-[10px]">Sorties d'entrepôt • Hub de distribution</p>
        </div>
        <div className="flex items-center gap-3">
           <Button className="bg-[#1F6FDB] text-white font-black h-12 px-6 rounded-2xl hover:bg-[#1656B3] gap-2 shadow-lg shadow-blue-500/20 transition-all">
             <Truck size={20} strokeWidth={2.5} /> Créer un Manifeste
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {[
          { label: 'Manifestes Ouverts', value: '08', icon: Box, color: 'text-blue-500 bg-blue-50' },
          { label: 'Colis en Dispatch', value: '158', icon: Truck, color: 'text-[#F7931E] bg-[#F7931E]/10' },
          { label: 'Attente Transporteur', value: '24', icon: Calendar, color: 'text-amber-500 bg-amber-50' },
          { label: 'Délai Moyen Dispatch', value: '45m', icon: Clock, color: 'text-emerald-500 bg-emerald-50' },
        ].map((item, i) => (
          <Card key={i} className="border-none shadow-sm bg-white rounded-[28px] overflow-hidden group hover:shadow-lg transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.25em] mb-2">{item.label}</p>
                  <h3 className="text-3xl font-black text-[#0B2A6B] tracking-tighter">{item.value}</h3>
                </div>
                <div className={cn("p-4 rounded-2xl transition-transform group-hover:scale-110 duration-500 shadow-sm", item.color)}>
                  <item.icon className="h-6 w-6" strokeWidth={2.5} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none shadow-sm bg-white rounded-[32px] overflow-hidden">
        <CardHeader className="p-8 pb-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 h-4 w-4" />
              <Input 
                placeholder="Rechercher expédition, n° tracking, destination..." 
                className="pl-11 h-12 bg-slate-50 border-none text-sm rounded-2xl focus:ring-2 focus:ring-[#1F6FDB]/10"
              />
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 text-slate-500 font-black text-[10px] uppercase tracking-widest gap-2">
                <Filter size={16} /> Tous les transporteurs
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="border-slate-100">
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-8 h-14">ID Expédition</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Commande Origine</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Destination Finale</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Transporteur</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Poids Brut</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Statut Dispatch</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right px-8">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shipments.map((shp) => (
                <TableRow key={shp.id} className="border-slate-50 hover:bg-slate-50/30 transition-all group">
                  <TableCell className="px-8 font-mono text-xs font-black text-[#1F6FDB]">{shp.id}</TableCell>
                  <TableCell className="font-bold text-slate-500">{shp.order}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-xs text-slate-600 font-bold">
                      <MapPin size={12} className="text-slate-300" />
                      {shp.destination}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-none font-black text-[9px] rounded-lg tracking-widest px-2.5 h-6">
                      {shp.carrier.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center text-xs font-black text-slate-400 tabular-nums">{shp.weight}</TableCell>
                  <TableCell>
                    <Badge className={cn(
                      "border-none px-3 font-black text-[9px] rounded-lg h-7 tracking-widest",
                      shp.status === 'En livraison' ? 'bg-blue-50 text-blue-600' : 
                      shp.status === 'En transit' ? 'bg-[#F7931E]/10 text-[#F7931E]' : 'bg-slate-50 text-slate-400'
                    )}>
                      {shp.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right px-8">
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-300 hover:text-[#0B2A6B] hover:bg-slate-100 rounded-xl transition-all">
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
