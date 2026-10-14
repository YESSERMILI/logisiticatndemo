
"use client";

import { 
  Search, 
  Plus, 
  Filter, 
  Download, 
  MoreHorizontal, 
  ArrowUpDown,
  ExternalLink,
  Clock,
  CheckCircle2,
  AlertCircle
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
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";

const orders = [
  { ref: 'ORD-2024-001', customer: 'Shopify Store Alpha', date: '20 Mai 2024', items: 3, qty: 12, status: 'Livrée', priority: 'Haute' },
  { ref: 'ORD-2024-002', customer: 'Boutique Mode TN', date: '21 Mai 2024', items: 1, qty: 1, status: 'En préparation', priority: 'Normale' },
  { ref: 'ORD-2024-003', customer: 'Tech House Tunis', date: '21 Mai 2024', items: 5, qty: 42, status: 'À préparer', priority: 'Urgente' },
  { ref: 'ORD-2024-004', customer: 'Gafsa Electronique', date: '22 Mai 2024', items: 2, qty: 4, status: 'Expédiée', priority: 'Normale' },
  { ref: 'ORD-2024-005', customer: 'Sfax Mall', date: '22 Mai 2024', items: 12, qty: 120, status: 'À valider', priority: 'Normale' },
  { ref: 'ORD-2024-006', customer: 'Beauty Pro Sousse', date: '23 Mai 2024', items: 4, qty: 8, status: 'En livraison', priority: 'Haute' },
  { ref: 'ORD-2024-007', customer: 'Cosmetics TN', date: '23 Mai 2024', items: 2, qty: 5, status: 'Annulée', priority: 'Normale' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Livrée': return <Badge className="bg-emerald-50 text-emerald-600 border-none px-3 font-bold">LIVRÉE</Badge>;
    case 'En préparation': return <Badge className="bg-amber-50 text-amber-600 border-none px-3 font-bold">PRÉPARATION</Badge>;
    case 'À préparer': return <Badge className="bg-blue-50 text-blue-600 border-none px-3 font-bold">À PRÉPARER</Badge>;
    case 'Expédiée': return <Badge className="bg-[#1F6FDB]/10 text-[#1F6FDB] border-none px-3 font-bold">EXPÉDIÉE</Badge>;
    case 'À valider': return <Badge className="bg-slate-50 text-slate-500 border-none px-3 font-bold">À VALIDER</Badge>;
    case 'En livraison': return <Badge className="bg-purple-50 text-purple-600 border-none px-3 font-bold">LIVRAISON</Badge>;
    case 'Annulée': return <Badge className="bg-rose-50 text-rose-600 border-none px-3 font-bold">ANNULÉE</Badge>;
    default: return <Badge variant="outline">{status}</Badge>;
  }
};

const getPriorityBadge = (priority: string) => {
  if (priority === 'Urgente') return <div className="flex items-center gap-1.5 text-rose-600 font-black text-[10px] uppercase"><AlertCircle size={12} /> {priority}</div>;
  if (priority === 'Haute') return <div className="flex items-center gap-1.5 text-amber-600 font-black text-[10px] uppercase"><Clock size={12} /> {priority}</div>;
  return <div className="text-slate-400 font-bold text-[10px] uppercase">{priority}</div>;
};

export default function OrdersPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#0B2A6B] tracking-tight">Gestion des Commandes</h1>
          <p className="text-slate-500 font-medium mt-1">Gérez l'intégralité du cycle de vie de vos commandes clients.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" className="border-slate-200 text-slate-600 font-bold h-10 rounded-xl gap-2">
             <Download size={16} /> Exporter
           </Button>
           <Button className="bg-[#F7931E] text-[#0B2A6B] font-black h-10 rounded-xl hover:bg-[#E0861A] gap-2">
             <Plus size={18} strokeWidth={3} /> Créer une commande
           </Button>
        </div>
      </div>

      <Card className="border-none shadow-sm bg-white overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input 
                placeholder="Rechercher par référence, client..." 
                className="pl-10 h-10 bg-slate-50 border-none text-sm rounded-xl focus:ring-2 focus:ring-[#1F6FDB]/10"
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button variant="outline" className="flex-1 md:flex-none h-10 rounded-xl border-slate-200 text-slate-600 font-bold gap-2">
                <Filter size={16} /> Filtres
              </Button>
              <div className="h-8 w-px bg-slate-100 hidden md:block" />
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest whitespace-nowrap">7 Commandes trouvées</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="border-slate-100">
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-6">Référence</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Client</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Lignes / Qté</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Priorité</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Statut</TableHead>
                <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-right px-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.ref} className="border-slate-50 hover:bg-slate-50/30 transition-colors group">
                  <TableCell className="px-6 font-bold text-[#0B2A6B]">{order.ref}</TableCell>
                  <TableCell className="font-semibold text-slate-600">{order.customer}</TableCell>
                  <TableCell className="text-slate-500 text-xs font-medium">{order.date}</TableCell>
                  <TableCell className="text-slate-500 text-xs font-bold">
                    {order.items} <span className="text-[10px] text-slate-300 mx-1">/</span> {order.qty}
                  </TableCell>
                  <TableCell>{getPriorityBadge(order.priority)}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell className="text-right px-6">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400 hover:text-[#1F6FDB] hover:bg-[#1F6FDB]/10">
                        <ExternalLink size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400 hover:bg-slate-100">
                        <MoreHorizontal size={14} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-4 bg-slate-50/30 flex items-center justify-between border-t border-slate-50">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Page 1 sur 24</span>
            <div className="flex gap-1">
              <Button disabled variant="outline" size="sm" className="h-8 px-4 rounded-lg text-[10px] font-black uppercase">Précédent</Button>
              <Button variant="outline" size="sm" className="h-8 px-4 rounded-lg text-[10px] font-black uppercase">Suivant</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
