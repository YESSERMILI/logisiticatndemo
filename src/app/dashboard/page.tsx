
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
  Users
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

const KPICard = ({ title, value, trend, trendDir = 'up', icon: Icon, colorClass, sub }: any) => (
  <Card className="border-none shadow-sm bg-white overflow-hidden group hover:shadow-xl transition-all duration-500 rounded-[28px]">
    <CardContent className="p-7">
      <div className="flex justify-between items-start">
        <div className={cn("p-4 rounded-2xl bg-opacity-10 transition-all group-hover:scale-110 duration-500", colorClass.replace('text-', 'bg-'), colorClass)}>
          <Icon size={24} strokeWidth={2.5} />
        </div>
        <div className={cn(
          "flex items-center gap-1 text-[10px] font-black px-2.5 py-1.5 rounded-full uppercase tracking-widest",
          trendDir === 'up' ? "text-emerald-500 bg-emerald-50" : "text-rose-500 bg-rose-50"
        )}>
          {trend} {trendDir === 'up' ? <TrendingUp size={12} /> : <ArrowDownRight size={12} />}
        </div>
      </div>
      <div className="mt-8">
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{title}</p>
        <h3 className="text-4xl font-black text-[#0B2A6B] tracking-tighter">{value}</h3>
        <p className="text-[10px] font-bold text-slate-300 mt-2 uppercase tracking-widest">{sub}</p>
      </div>
    </CardContent>
  </Card>
);

export default function DashboardPage() {
  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-[#0B2A6B] tracking-tight">Bonjour, Ahmed 👋</h1>
          <p className="text-slate-400 font-bold text-sm tracking-wide uppercase text-[10px]">Système de gestion Logistica v4.5 • Hub Tunis Sud</p>
        </div>
        <div className="flex items-center gap-3 p-1.5 bg-white rounded-2xl shadow-sm border border-slate-100">
           <Button variant="ghost" size="sm" className="bg-[#1F6FDB] text-white font-black rounded-xl px-5 text-xs h-10 shadow-lg shadow-blue-500/20">Aujourd'hui</Button>
           <Button variant="ghost" size="sm" className="text-slate-400 hover:text-[#0B2A6B] font-bold rounded-xl px-5 text-xs h-10">7 Jours</Button>
           <div className="w-px h-6 bg-slate-100 mx-1" />
           <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-slate-400"><Layers size={18} /></Button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <KPICard 
          title="Commandes" 
          value="1,248" 
          trend="+14%" 
          sub="Volume total du mois"
          icon={ClipboardList} 
          colorClass="text-[#1F6FDB]" 
        />
        <KPICard 
          title="En préparation" 
          value="42" 
          trend="+5%" 
          sub="Picking en cours"
          icon={Package} 
          colorClass="text-[#F7931E]" 
        />
        <KPICard 
          title="Livraisons" 
          value="98.4%" 
          trend="+0.8%" 
          sub="Taux de succès SLA"
          icon={CheckCircle2} 
          colorClass="text-emerald-500" 
        />
        <KPICard 
          title="Alertes" 
          value="03" 
          trend="-12%" 
          trendDir="down"
          sub="Anomalies actives"
          icon={AlertCircle} 
          colorClass="text-rose-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Chart Card */}
        <Card className="lg:col-span-2 border-none shadow-sm bg-white overflow-hidden rounded-[32px]">
          <CardHeader className="flex flex-row items-center justify-between p-10 pb-4">
            <div>
              <CardTitle className="text-xl font-black text-[#0B2A6B]">Activité Hebdomadaire</CardTitle>
              <CardDescription className="text-slate-400 font-medium">Flux comparatif des ordres et expéditions.</CardDescription>
            </div>
            <div className="flex gap-6">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-[#1F6FDB]" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ordres</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-[#F7931E]" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Dispatch</span>
               </div>
            </div>
          </CardHeader>
          <CardContent className="h-[400px] p-10 pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1F6FDB" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#1F6FDB" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 11, fontWeight: 800 }}
                  dy={15}
                />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 11, fontWeight: 600 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', padding: '15px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="orders" 
                  stroke="#1F6FDB" 
                  strokeWidth={5} 
                  fillOpacity={1} 
                  fill="url(#colorOrders)" 
                  name="Commandes"
                />
                <Area 
                  type="monotone" 
                  dataKey="shipments" 
                  stroke="#F7931E" 
                  strokeWidth={5} 
                  fill="transparent" 
                  name="Expéditions"
                  strokeDasharray="10 10"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Action Board */}
        <div className="space-y-8">
           <Card className="border-none shadow-lg bg-[#0B2A6B] text-white rounded-[32px] overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform group-hover:scale-110 duration-700">
                <Box size={100} strokeWidth={1} />
              </div>
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-lg font-black tracking-tight">Capacité WMS</CardTitle>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Occupation Hub Tunis</p>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                 <div className="flex items-end justify-between mb-4">
                   <h3 className="text-4xl font-black text-[#F7931E]">82.4%</h3>
                   <span className="text-[9px] font-black bg-white/10 px-2 py-1 rounded-lg uppercase tracking-widest text-emerald-400">Stable</span>
                 </div>
                 <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden mb-6">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '82.4%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-white rounded-full" 
                    />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                       <p className="text-[8px] font-black text-white/30 uppercase mb-1 tracking-widest">Emplacements</p>
                       <p className="text-lg font-black">3,200</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                       <p className="text-[8px] font-black text-white/30 uppercase mb-1 tracking-widest">SKUs Actifs</p>
                       <p className="text-lg font-black">1,450</p>
                    </div>
                 </div>
              </CardContent>
           </Card>

           <Card className="border-none shadow-sm bg-white rounded-[32px] overflow-hidden">
              <CardHeader className="p-8 pb-4 flex flex-row items-center justify-between">
                 <CardTitle className="text-base font-black text-[#0B2A6B]">Équipe en poste</CardTitle>
                 <Users size={18} className="text-slate-300" />
              </CardHeader>
              <CardContent className="p-8 pt-4 space-y-5">
                 {[
                   { name: 'Sami B.', role: 'Picking', status: 'En cours', img: 'https://picsum.photos/seed/sami/100' },
                   { name: 'Faten R.', role: 'Réception', status: 'Pause', img: 'https://picsum.photos/seed/faten/100' },
                   { name: 'Zied K.', role: 'Dispatch', status: 'En cours', img: 'https://picsum.photos/seed/zied/100' },
                 ].map((user, i) => (
                   <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="h-10 w-10 rounded-xl overflow-hidden border border-slate-100 ring-2 ring-transparent group-hover:ring-[#1F6FDB]/20 transition-all">
                        <img src={user.img} alt={user.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-black text-[#0B2A6B]">{user.name}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{user.role}</p>
                      </div>
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        user.status === 'En cours' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'bg-slate-200'
                      )} />
                   </div>
                 ))}
                 <Button variant="outline" className="w-full h-11 border-slate-100 rounded-xl font-bold text-slate-400 hover:text-[#0B2A6B] hover:bg-slate-50 mt-2">
                    Voir tout le planning
                 </Button>
              </CardContent>
           </Card>
        </div>
      </div>

      {/* Operational Pipeline Flow */}
      <Card className="border-none shadow-xl bg-white rounded-[40px] overflow-hidden">
        <CardHeader className="p-10 pb-4">
          <CardTitle className="text-xl font-black text-[#0B2A6B]">Pipeline Opérationnel Temps Réel</CardTitle>
          <CardDescription className="text-slate-400 font-medium">Flux global des ordres de ce jour à travers les étapes de fulfillment.</CardDescription>
        </CardHeader>
        <CardContent className="p-10">
          <div className="flex flex-wrap items-start justify-between gap-12">
            {[
              { label: 'Reçues', count: '142', sub: 'Ordres du jour', icon: ClipboardList, color: 'text-blue-500 bg-blue-50' },
              { label: 'Préparation', count: '58', sub: 'En picking', icon: Package, color: 'text-amber-500 bg-amber-50' },
              { label: 'Expédiées', count: '104', sub: 'Sorties quai', icon: Truck, color: 'text-[#F7931E] bg-[#F7931E]/10' },
              { label: 'En Livraison', count: '412', sub: 'Dernier Km', icon: MapPin, color: 'text-indigo-500 bg-indigo-50' },
              { label: 'Livrées', count: '894', sub: 'SLA : 98.4%', icon: CheckCircle2, color: 'text-emerald-500 bg-emerald-50' },
            ].map((step, idx, arr) => (
              <div key={idx} className="flex-1 min-w-[180px] relative">
                <div className="flex flex-col items-center text-center group">
                  <div className={cn("w-16 h-16 rounded-[24px] flex items-center justify-center mb-6 transition-all group-hover:scale-110 shadow-sm", step.color)}>
                    <step.icon size={28} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-3xl font-black text-[#0B2A6B] tracking-tighter">{step.count}</h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B2A6B] mt-2">{step.label}</p>
                  <p className="text-[10px] font-bold text-slate-300 mt-1 uppercase tracking-widest">{step.sub}</p>
                </div>
                {idx < arr.length - 1 && (
                  <div className="absolute top-8 -right-6 w-12 h-px bg-slate-100 hidden xl:block" />
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
