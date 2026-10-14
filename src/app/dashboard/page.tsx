
"use client";

import { motion } from "framer-motion";
import { 
  Package, 
  Truck, 
  ClipboardList, 
  TrendingUp, 
  AlertCircle,
  Plus,
  CheckCircle2,
  MapPin,
  ArrowDownRight,
  ChevronRight,
  Layers,
  Box,
  Users,
  Search,
  Activity
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
import { cn } from "@/lib/utils";

const chartData = [
  { name: 'Lun', orders: 124, shipments: 110 },
  { name: 'Mar', orders: 189, shipments: 155 },
  { name: 'Mer', orders: 155, shipments: 180 },
  { name: 'Jeu', orders: 222, shipments: 205 },
  { name: 'Ven', orders: 280, shipments: 245 },
  { name: 'Sam', orders: 140, shipments: 120 },
  { name: 'Dim', orders: 88, shipments: 65 },
];

const KPICard = ({ title, value, trend, trendDir = 'up', icon: Icon, colorClass, sub }: any) => (
  <motion.div
    whileHover={{ scale: 1.02, translateY: -5 }}
    className="relative group"
  >
    <Card className="border-white/5 bg-[#0B2A6B]/40 backdrop-blur-xl relative overflow-hidden rounded-[24px] shadow-2xl">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className={cn("p-3 rounded-2xl transition-all duration-500 group-hover:rotate-6", colorClass.replace('text-', 'bg-').concat('/10'), colorClass)}>
            <Icon size={20} strokeWidth={2.5} />
          </div>
          <div className={cn(
            "flex items-center gap-1 text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-widest",
            trendDir === 'up' ? "text-emerald-400 bg-emerald-400/10" : "text-rose-400 bg-rose-400/10"
          )}>
            {trend} {trendDir === 'up' ? <TrendingUp size={10} /> : <ArrowDownRight size={10} />}
          </div>
        </div>
        <div className="mt-6">
          <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] mb-1">{title}</p>
          <h3 className="text-3xl font-black text-white tracking-tighter">{value}</h3>
          <p className="text-[9px] font-bold text-slate-500 mt-1 uppercase tracking-widest">{sub}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function DashboardPage() {
  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-1000">
      {/* Top Welcome Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-blue-500/5 p-8 rounded-[32px] border border-white/5 backdrop-blur-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
             <span className="text-3xl">👋</span>
             <h1 className="text-3xl font-black text-white tracking-tight">Bonjour, Ahmed</h1>
          </div>
          <p className="text-slate-500 font-bold text-sm tracking-wide uppercase text-[10px] flex items-center gap-2">
            <Activity size={12} className="text-[#F7931E]" />
            HUB TUNIS SUD • SYSTEM ONLINE • v4.8.2
          </p>
        </div>
        <div className="flex items-center gap-3">
           <div className="flex p-1 bg-white/5 rounded-2xl border border-white/5">
             <Button size="sm" className="bg-[#1F6FDB] text-white font-black rounded-xl px-6 h-9 shadow-lg shadow-blue-500/20">LIVE</Button>
             <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white font-bold rounded-xl px-6 h-9">HISTORY</Button>
           </div>
           <Button className="bg-[#F7931E] text-[#0B2A6B] font-black rounded-2xl h-11 px-6 hover:bg-[#E0861A] shadow-xl shadow-orange-500/20">
             <Plus size={18} strokeWidth={3} className="mr-2" />
             NOUVELLE COMMANDE
           </Button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <KPICard 
          title="Commandes" 
          value="1,248" 
          trend="+14%" 
          sub="Flux mensuel cumulé"
          icon={ClipboardList} 
          colorClass="text-[#1F6FDB]" 
        />
        <KPICard 
          title="En préparation" 
          value="42" 
          trend="+5%" 
          sub="Picking & Packaging"
          icon={Package} 
          colorClass="text-[#F7931E]" 
        />
        <KPICard 
          title="Taux de Livraison" 
          value="98.4%" 
          trend="+0.8%" 
          sub="Objectif SLA 2024"
          icon={CheckCircle2} 
          colorClass="text-emerald-400" 
        />
        <KPICard 
          title="Alertes Blocage" 
          value="03" 
          trend="-12%" 
          trendDir="down"
          sub="Résolution requise"
          icon={AlertCircle} 
          colorClass="text-rose-400" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Analytics Card */}
        <Card className="lg:col-span-2 border-white/5 bg-[#0B2A6B]/30 backdrop-blur-xl shadow-2xl rounded-[40px] overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-10 pb-4">
            <div>
              <CardTitle className="text-xl font-black text-white">Performance Opérationnelle</CardTitle>
              <CardDescription className="text-slate-500 font-medium text-xs">Analyse comparative des flux d'entrées et de sorties.</CardDescription>
            </div>
            <div className="flex gap-4">
               <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/20">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#1F6FDB] shadow-[0_0_8px_#1F6FDB]" />
                 <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Ordres</span>
               </div>
               <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 rounded-full border border-orange-500/20">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#F7931E] shadow-[0_0_8px_#F7931E]" />
                 <span className="text-[9px] font-black text-orange-400 uppercase tracking-widest">Dispatch</span>
               </div>
            </div>
          </CardHeader>
          <CardContent className="h-[400px] p-10 pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1F6FDB" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#1F6FDB" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#475569', fontSize: 10, fontWeight: 800 }}
                  dy={10}
                />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#475569', fontSize: 10, fontWeight: 600 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0B2A6B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                  itemStyle={{ color: '#fff', fontSize: '12px' }}
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

        {/* WMS Control Card */}
        <div className="flex flex-col gap-10">
           <Card className="border-none shadow-2xl bg-gradient-to-br from-[#1F6FDB] to-[#0B2A6B] text-white rounded-[40px] overflow-hidden relative group flex-1">
              <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform group-hover:scale-110 duration-700">
                <Box size={100} strokeWidth={1} />
              </div>
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-lg font-black tracking-tight uppercase">Capacité WMS</CardTitle>
                <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.2em]">Occupation Hub Tunis</p>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                 <div className="flex items-end justify-between mb-4">
                   <h3 className="text-5xl font-black text-white tracking-tighter">82.4%</h3>
                   <span className="text-[10px] font-black bg-emerald-400 text-emerald-950 px-3 py-1 rounded-lg uppercase tracking-widest shadow-[0_0_15px_rgba(52,211,153,0.3)]">OPTIMISÉ</span>
                 </div>
                 <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden mb-8 border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '82.4%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-white rounded-full shadow-[0_0_10px_white]" 
                    />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
                       <p className="text-[8px] font-black text-white/40 uppercase mb-1 tracking-widest">Emplacements</p>
                       <p className="text-xl font-black">3,200</p>
                    </div>
                    <div className="p-5 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
                       <p className="text-[8px] font-black text-white/40 uppercase mb-1 tracking-widest">SKUs Actifs</p>
                       <p className="text-xl font-black">1,450</p>
                    </div>
                 </div>
              </CardContent>
           </Card>

           <Card className="border-white/5 bg-[#0B2A6B]/40 backdrop-blur-xl rounded-[40px] overflow-hidden">
              <CardHeader className="p-8 pb-2 flex flex-row items-center justify-between">
                 <CardTitle className="text-xs font-black text-white uppercase tracking-widest">Équipe Active</CardTitle>
                 <div className="flex items-center gap-1.5 text-[9px] font-black text-emerald-400 uppercase">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                   LIVE
                 </div>
              </CardHeader>
              <CardContent className="p-8 pt-2 space-y-4">
                 {[
                   { name: 'Sami Ben Ali', role: 'PICKING', status: 'En cours', img: 'https://picsum.photos/seed/sami/100' },
                   { name: 'Faten Riahi', role: 'RECEPTION', status: 'Pause', img: 'https://picsum.photos/seed/faten/100' },
                 ].map((user, i) => (
                   <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer group">
                      <div className="h-10 w-10 rounded-xl overflow-hidden border border-white/10 group-hover:scale-105 transition-transform">
                        <img src={user.img} alt={user.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-black text-white">{user.name}</p>
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{user.role}</p>
                      </div>
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        user.status === 'En cours' ? 'bg-emerald-400' : 'bg-slate-700'
                      )} />
                   </div>
                 ))}
              </CardContent>
           </Card>
        </div>
      </div>

      {/* Operational Pipeline Flow */}
      <Card className="border-white/5 bg-[#0B2A6B]/20 backdrop-blur-xl rounded-[48px] overflow-hidden shadow-2xl">
        <CardHeader className="p-12 pb-6 text-center">
          <CardTitle className="text-2xl font-black text-white uppercase tracking-tighter">Pipeline Opérationnel Journalier</CardTitle>
          <CardDescription className="text-slate-500 font-medium uppercase tracking-[0.2em] text-[9px]">Progression temps réel à travers le tunnel logistique</CardDescription>
        </CardHeader>
        <CardContent className="p-12 pt-6">
          <div className="flex flex-wrap items-start justify-between gap-10">
            {[
              { label: 'Reçues', count: '142', sub: 'Input', icon: ClipboardList, color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
              { label: 'Picking', count: '58', sub: 'En cours', icon: Package, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
              { label: 'Dispatch', count: '104', sub: 'Sortie quai', icon: Truck, color: 'text-[#F7931E] bg-[#F7931E]/10 border-[#F7931E]/20' },
              { label: 'Livraison', count: '412', sub: 'Dernier Km', icon: MapPin, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
              { label: 'Livrées', count: '894', sub: 'SLA : 98.4%', icon: CheckCircle2, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
            ].map((step, idx, arr) => (
              <div key={idx} className="flex-1 min-w-[180px] relative">
                <div className="flex flex-col items-center text-center group">
                  <div className={cn("w-16 h-16 rounded-3xl flex items-center justify-center mb-8 transition-all group-hover:scale-110 shadow-lg border", step.color)}>
                    <step.icon size={28} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-4xl font-black text-white tracking-tighter">{step.count}</h4>
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mt-3">{step.label}</p>
                  <p className="text-[9px] font-bold text-slate-600 mt-1 uppercase tracking-widest">{step.sub}</p>
                </div>
                {idx < arr.length - 1 && (
                  <div className="absolute top-8 -right-5 w-10 h-px bg-white/5 hidden xl:block" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
