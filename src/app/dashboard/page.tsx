
"use client";

import { motion } from "framer-motion";
import { 
  Package, 
  Truck, 
  ClipboardList, 
  TrendingUp, 
  AlertCircle,
  ArrowUpRight,
  MoreHorizontal,
  Plus,
  Box,
  CheckCircle2,
  Clock,
  ArrowDownRight,
  Layers,
  MapPin
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const chartData = [
  { name: 'Lun', orders: 124, shipments: 110 },
  { name: 'Mar', orders: 189, shipments: 155 },
  { name: 'Mer', orders: 155, shipments: 180 },
  { name: 'Jeu', orders: 222, shipments: 205 },
  { name: 'Ven', orders: 280, shipments: 245 },
  { name: 'Sam', orders: 140, shipments: 120 },
  { name: 'Dim', orders: 88, shipments: 65 },
];

const KPICard = ({ title, value, trend, trendDir = 'up', icon: Icon, color }: any) => (
  <Card className="border-none shadow-sm bg-white overflow-hidden group hover:shadow-md transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-2xl ${color} bg-opacity-10 transition-transform group-hover:scale-110 duration-300`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className={cn(
          "flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-full uppercase",
          trendDir === 'up' ? "text-emerald-500 bg-emerald-50" : "text-rose-500 bg-rose-50"
        )}>
          {trend} {trendDir === 'up' ? <TrendingUp size={10} /> : <ArrowDownRight size={10} />}
        </div>
      </div>
      <div className="mt-6">
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{title}</p>
        <h3 className="text-3xl font-black text-[#0B2A6B] mt-1">{value}</h3>
      </div>
    </CardContent>
  </Card>
);

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#0B2A6B] tracking-tight">Bonjour, Ahmed 👋</h1>
          <p className="text-slate-500 font-medium mt-1">Plateforme de pilotage Logistica Tunisie v4.2</p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-[#F7931E] text-[#0B2A6B] font-black rounded-xl hover:bg-[#E0861A] shadow-lg shadow-orange-500/10 px-5 gap-2">
            <Plus size={18} strokeWidth={3} />
            Nouvelle Commande
          </Button>
          <div className="flex items-center bg-white p-1 rounded-xl shadow-sm border border-slate-100">
            <Button variant="ghost" size="sm" className="bg-slate-50 text-[#0B2A6B] font-black rounded-lg px-4 text-xs h-9">Aujourd'hui</Button>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-[#0B2A6B] font-bold rounded-lg px-4 text-xs h-9">7 Jours</Button>
          </div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Commandes reçues" 
          value="1,248" 
          trend="+14.2%" 
          icon={ClipboardList} 
          color="text-[#1F6FDB] bg-[#1F6FDB]" 
        />
        <KPICard 
          title="Commandes à préparer" 
          value="42" 
          trend="+5.1%" 
          icon={Package} 
          color="text-[#F7931E] bg-[#F7931E]" 
        />
        <KPICard 
          title="Livraisons réussies" 
          value="98.4%" 
          trend="+0.8%" 
          icon={CheckCircle2} 
          color="text-emerald-500 bg-emerald-500" 
        />
        <KPICard 
          title="Alertes actives" 
          value="03" 
          trend="-12%" 
          trendDir="down"
          icon={AlertCircle} 
          color="text-rose-500 bg-rose-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <Card className="lg:col-span-2 border-none shadow-sm bg-white overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-8">
            <div>
              <CardTitle className="text-lg font-black text-[#0B2A6B]">Activité hebdomadaire</CardTitle>
              <CardDescription>Flux comparatif des commandes et des expéditions réelles.</CardDescription>
            </div>
            <div className="flex gap-4">
               <div className="flex items-center gap-1.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#1F6FDB]" />
                 <span className="text-[10px] font-bold text-slate-400 uppercase">Commandes</span>
               </div>
               <div className="flex items-center gap-1.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#F7931E]" />
                 <span className="text-[10px] font-bold text-slate-400 uppercase">Expéditions</span>
               </div>
            </div>
          </CardHeader>
          <CardContent className="h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1F6FDB" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#1F6FDB" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 11, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 11 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="orders" 
                  stroke="#1F6FDB" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorOrders)" 
                  name="Commandes"
                />
                <Area 
                  type="monotone" 
                  dataKey="shipments" 
                  stroke="#F7931E" 
                  strokeWidth={4} 
                  fill="transparent" 
                  name="Expéditions"
                  strokeDasharray="8 8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Warehouse Status */}
        <Card className="border-none shadow-sm bg-white overflow-hidden flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg font-black text-[#0B2A6B]">État de l'entrepôt</CardTitle>
            <CardDescription>Occupation et backlog picking.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span>Occupation des racks</span>
                <span className="text-[#0B2A6B]">82%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#1F6FDB] rounded-full w-[82%]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">SKUs Actifs</p>
                <p className="text-xl font-black text-[#0B2A6B]">1,450</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Emplacements</p>
                <p className="text-xl font-black text-[#0B2A6B]">3,200</p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-50">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Derniers mouvements</h4>
              {[
                { label: 'Put-away A-12', time: '14:32', user: 'Zied', type: 'in' },
                { label: 'Picking ORD-88', time: '14:15', user: 'Faten', type: 'out' },
                { label: 'Réception SUP-4', time: '13:50', user: 'Sami', type: 'in' },
              ].map((move, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={cn("w-2 h-2 rounded-full", move.type === 'in' ? 'bg-emerald-400' : 'bg-orange-400')} />
                  <span className="text-xs font-bold text-[#0B2A6B] flex-1">{move.label}</span>
                  <span className="text-[10px] font-medium text-slate-400">{move.time} • {move.user}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Operational Pipeline Flow */}
      <Card className="border-none shadow-sm bg-[#0B2A6B] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <CardHeader>
          <CardTitle className="text-lg font-black">Pipeline de traitement en temps réel</CardTitle>
          <CardDescription className="text-white/40">Suivi du flux opérationnel global aujourd'hui.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-start justify-between gap-8 py-6 px-4">
            {[
              { label: 'Reçues', count: '142', sub: 'Ordres du jour', icon: ClipboardList, color: 'bg-blue-400' },
              { label: 'Préparation', count: '58', sub: 'Picking en cours', icon: Package, color: 'bg-amber-400' },
              { label: 'Expédiées', count: '104', sub: 'Sorties de quai', icon: Truck, color: 'bg-[#F7931E]' },
              { label: 'En Livraison', count: '412', sub: 'Dernier kilomètre', icon: MapPin, color: 'bg-[#1F6FDB]' },
              { label: 'Livrées', count: '894', sub: 'SLA : 98.4%', icon: CheckCircle2, color: 'bg-emerald-400' },
            ].map((step, idx, arr) => (
              <div key={idx} className="flex-1 min-w-[160px] relative">
                <div className="flex flex-col items-center">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all hover:scale-110 shadow-xl", step.color, "bg-opacity-20 text-white")}>
                    <step.icon size={24} />
                  </div>
                  <h4 className="text-2xl font-black">{step.count}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-1">{step.label}</p>
                  <p className="text-[9px] font-medium text-white/20 mt-0.5">{step.sub}</p>
                </div>
                {idx < arr.length - 1 && (
                  <div className="absolute top-7 -right-4 w-8 h-px bg-white/10 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
