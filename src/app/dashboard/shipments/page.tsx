
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
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#0B2A6B] tracking-tight">Expéditions & Dispatch</h1>
          <p className="text-slate-500 font-medium mt-1">Sorties d'entrepôt et dispatch vers les transporteurs partenaires.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button className="bg-[#1F6FDB] text-white font-black h-10 rounded-xl hover:bg-[#1656B3] gap-2">
             <Truck size={18} /> Créer un Manifeste
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {[
          { label: 'Manifestes Ouverts', value: '08', icon: Box, color: 'text-blue-500' },
          { label: 'Colis en Dispatch', value: '158', icon: Truck, color: 'text-[#F7931E]' },
          { label: 'Attente Transporteur', value: '24', icon: Calendar, color: 'text-amber-500' },
          { label: 'Délai Moyen Dispatch', value: '45m', icon: Clock, color: 'text-emerald-500' },
        ].map((item, i) => (
          <Card key={i} className="border-none shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                  <h3 className="text-2xl font-black text-[#0B2A6B]">{item.value}</h3>
                </div>
                <div className={cn("p-3 rounded-xl bg-opacity-10", item.color.replace('text-', 'bg-'))}>
                  <item.icon className={cn("h-5 w-5", item.color)} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none shadow-sm bg-white overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input 
                placeholder="Rechercher expédition, n° tracking..." 
                className="pl-10 h-10 bg-slate-50 border-none text-sm rounded-xl"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="h-10 rounded-xl border-slate-200 text-slate-500 font-bold gap-2">
                <Filter size={14} /> Tous les transporteurs
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="border-slate-100">
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-6">ID Expédition</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Commande</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Destination</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Transporteur</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Poids</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Statut</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-right px-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shipments.map((shp) => (
                <TableRow key={shp.id} className="border-slate-50 hover:bg-slate-50/30 transition-colors">
                  <TableCell className="px-6 font-bold text-[#0B2A6B]">{shp.id}</TableCell>
                  <TableCell className="font-semibold text-slate-500">{shp.order}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                      <MapPin size={12} className="text-slate-300" />
                      {shp.destination}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-none font-bold text-[10px]">
                      {shp.carrier}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center text-xs font-bold text-slate-400">{shp.weight}</TableCell>
                  <TableCell>
                    <Badge className={cn(
                      "border-none px-3 font-bold",
                      shp.status === 'En livraison' ? 'bg-blue-50 text-blue-600' : 
                      shp.status === 'En transit' ? 'bg-[#F7931E]/10 text-[#F7931E]' : 'bg-slate-50 text-slate-400'
                    )}>
                      {shp.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right px-6">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 rounded-lg">
                      <ArrowRight size={16} />
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

import { Clock } from "lucide-react";
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
