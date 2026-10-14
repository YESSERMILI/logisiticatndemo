
"use client";

import { 
  Search, 
  Plus, 
  Filter, 
  Download, 
  MoreHorizontal, 
  ExternalLink,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpDown,
  FileText
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
    case 'Livrée': return <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-3 font-bold rounded-lg h-7">LIVRÉE</Badge>;
    case 'En préparation': return <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 px-3 font-bold rounded-lg h-7">PRÉPARATION</Badge>;
    case 'À préparer': return <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 font-bold rounded-lg h-7">À PRÉPARER</Badge>;
    case 'Expédiée': return <Badge className="bg-[#F7931E]/10 text-[#F7931E] border-[#F7931E]/20 px-3 font-bold rounded-lg h-7">EXPÉDIÉE</Badge>;
    case 'À valider': return <Badge className="bg-slate-500/10 text-slate-400 border-slate-500/20 px-3 font-bold rounded-lg h-7">À VALIDER</Badge>;
    case 'En livraison': return <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-3 font-bold rounded-lg h-7">LIVRAISON</Badge>;
    case 'Annulée': return <Badge className="bg-rose-500/10 text-rose-400 border-rose-500/20 px-3 font-bold rounded-lg h-7">ANNULÉE</Badge>;
    default: return <Badge variant="outline">{status}</Badge>;
  }
};

const getPriorityBadge = (priority: string) => {
  if (priority === 'Urgente') return <div className="flex items-center gap-1.5 text-rose-400 font-black text-[9px] uppercase tracking-widest"><AlertCircle size={12} /> {priority}</div>;
  if (priority === 'Haute') return <div className="flex items-center gap-1.5 text-amber-400 font-black text-[9px] uppercase tracking-widest"><Clock size={12} /> {priority}</div>;
  return <div className="text-slate-600 font-bold text-[9px] uppercase tracking-widest">{priority}</div>;
};

export default function OrdersPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-white tracking-tight">Gestion des Commandes</h1>
          <p className="text-slate-500 font-bold text-sm tracking-wide uppercase text-[10px] flex items-center gap-2">
            <FileText size={12} className="text-[#1F6FDB]" />
            Registre central • 1,248 ordres au total
          </p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="border-white/5 bg-white/5 text-slate-400 font-black h-12 px-6 rounded-2xl gap-2 hover:text-white transition-all">
             <Download size={18} /> EXPORTER
           </Button>
           <Button className="bg-[#F7931E] text-[#0B2A6B] font-black h-12 px-6 rounded-2xl hover:bg-[#E0861A] gap-2 shadow-xl shadow-orange-500/20">
             <Plus size={20} strokeWidth={3} /> NOUVELLE COMMANDE
           </Button>
        </div>
      </div>

      <Card className="border-white/5 bg-[#0B2A6B]/30 backdrop-blur-xl shadow-2xl rounded-[32px] overflow-hidden">
        <CardHeader className="p-8 pb-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 h-4 w-4" />
              <Input 
                placeholder="Référence, client, boutique..." 
                className="pl-12 h-12 bg-white/5 border-white/5 text-white text-sm rounded-2xl focus:ring-2 focus:ring-[#1F6FDB]/20"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-slate-500 font-black gap-2 text-[10px] uppercase tracking-widest hover:text-white">
                <Filter size={16} /> Filtres Avancés
              </Button>
              <div className="h-8 w-px bg-white/5 hidden md:block" />
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] hidden lg:block">7 ordres trouvés</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-white/5">
              <TableRow className="border-white/5">
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] px-8 h-14">Référence</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Client / Boutique</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Date d'entrée</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Lignes / Qté</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Priorité</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Statut</TableHead>
                <TableHead className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] text-right px-8">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.ref} className="border-white/5 hover:bg-white/5 transition-all group">
                  <TableCell className="px-8 font-mono text-xs font-black text-[#1F6FDB]">{order.ref}</TableCell>
                  <TableCell className="font-bold text-slate-300">{order.customer}</TableCell>
                  <TableCell className="text-slate-500 text-xs font-bold uppercase tracking-tight">{order.date}</TableCell>
                  <TableCell className="text-slate-400 text-xs font-black">
                    {order.items} <span className="text-white/10 mx-1">|</span> {order.qty}
                  </TableCell>
                  <TableCell>{getPriorityBadge(order.priority)}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell className="text-right px-8">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-slate-600 hover:text-white hover:bg-white/10 transition-all">
                        <ExternalLink size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-slate-600 hover:bg-white/10">
                        <MoreHorizontal size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-8 bg-white/5 flex items-center justify-between border-t border-white/5">
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Page 1 sur 24 • Ordres 1-7 de 1,248</span>
            <div className="flex gap-2">
              <Button disabled variant="outline" size="sm" className="h-10 px-6 rounded-2xl text-[9px] font-black uppercase tracking-widest border-white/5 bg-transparent text-slate-600">Précédent</Button>
              <Button variant="outline" size="sm" className="h-10 px-6 rounded-2xl text-[9px] font-black uppercase tracking-widest border-white/10 bg-white/5 text-white">Suivant</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
