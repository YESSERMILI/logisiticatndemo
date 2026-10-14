
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
  Clock
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const chartData = [
  { name: 'Lun', orders: 12, shipments: 10 },
  { name: 'Mar', orders: 19, shipments: 15 },
  { name: 'Mer', orders: 15, shipments: 18 },
  { name: 'Jeu', orders: 22, shipments: 20 },
  { name: 'Ven', orders: 30, shipments: 25 },
  { name: 'Sam', orders: 14, shipments: 12 },
  { name: 'Dim', orders: 8, shipments: 5 },
];

const KPICard = ({ title, value, trend, icon: Icon, color }: any) => (
  <Card className="border-none shadow-sm bg-white overflow-hidden group hover:shadow-md transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-2xl ${color} bg-opacity-10 text-opacity-100 transition-transform group-hover:scale-110 duration-300`}>
          <Icon className={`h-6 w-6`} />
        </div>
        <div className="flex items-center gap-1 text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full uppercase">
          {trend} <TrendingUp size={10} />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest">{title}</p>
        <h3 className="text-3xl font-black text-[#0B2A6B] mt-1">{value}</h3>
      </div>
    </CardContent>
  </Card>
);

export default function DashboardPage() {
  const { t, language } = useTranslation();
  const isAr = language === 'ar';

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#0B2A6B] tracking-tight">Bonjour, Admin 👋</h1>
          <p className="text-slate-500 font-medium mt-1">Voici l'état actuel de vos opérations logistiques.</p>
        </div>
        <div className="flex items-center gap-2 bg-white p-1 rounded-xl shadow-sm border border-slate-100">
          <Button variant="ghost" size="sm" className="bg-slate-50 text-[#0B2A6B] font-bold rounded-lg px-4 text-xs h-9">Aujourd'hui</Button>
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-[#0B2A6B] font-bold rounded-lg px-4 text-xs h-9">7 Jours</Button>
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-[#0B2A6B] font-bold rounded-lg px-4 text-xs h-9">Ce mois</Button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Commandes à préparer" 
          value="42" 
          trend="+12%" 
          icon={ClipboardList} 
          color="text-[#1F6FDB] bg-[#1F6FDB]" 
        />
        <KPICard 
          title="Expéditions en cours" 
          value="158" 
          trend="+5%" 
          icon={Truck} 
          color="text-[#F7931E] bg-[#F7931E]" 
        />
        <KPICard 
          title="Taux de réussite" 
          value="98.4%" 
          trend="+1.2%" 
          icon={CheckCircle2} 
          color="text-emerald-500 bg-emerald-500" 
        />
        <KPICard 
          title="Alertes actives" 
          value="03" 
          trend="-2%" 
          icon={AlertCircle} 
          color="text-red-500 bg-red-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Chart */}
        <Card className="lg:col-span-2 border-none shadow-sm bg-white overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-8">
            <div>
              <CardTitle className="text-lg font-black text-[#0B2A6B]">Activité hebdomadaire</CardTitle>
              <CardDescription>Flux des commandes et des expéditions par jour.</CardDescription>
            </div>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:bg-slate-50">
              <MoreHorizontal size={20} />
            </Button>
          </CardHeader>
          <CardContent className="h-80">
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
                  tick={{ fill: '#94A3B8', fontSize: 12, fontWeight: 600 }}
                  dy={10}
                />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
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
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-none shadow-sm bg-white overflow-hidden flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg font-black text-[#0B2A6B]">Activité récente</CardTitle>
            <CardDescription>Actions effectuées par l'équipe.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-6">
            {[
              { type: 'order', ref: 'ORD-2024-88', time: 'Il y a 2 min', user: 'Zied', icon: Clock },
              { type: 'ship', ref: 'EXP-4590', time: 'Il y a 15 min', user: 'Système', icon: Truck },
              { type: 'stock', ref: 'iPhone 15 Pro', time: 'Il y a 1h', user: 'Ahmed', icon: Box },
              { type: 'issue', ref: 'Livraison Sfax', time: 'Il y a 3h', user: 'Wassim', icon: AlertCircle },
            ].map((activity, idx) => (
              <div key={idx} className="flex gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 text-slate-400 group-hover:bg-[#1F6FDB]/10 group-hover:text-[#1F6FDB] transition-all">
                  <activity.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-[#0B2A6B] truncate">
                    {activity.ref}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Par {activity.user} • {activity.time}</p>
                </div>
                <ArrowUpRight size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4 border-slate-100 text-slate-500 font-bold text-xs h-10 rounded-xl hover:bg-slate-50">
              Voir tout le journal
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Order Pipeline */}
      <Card className="border-none shadow-sm bg-white overflow-hidden">
        <CardHeader>
          <CardTitle className="text-lg font-black text-[#0B2A6B]">Pipeline de traitement</CardTitle>
          <CardDescription>Suivez le flux opérationnel en temps réel.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-2">
            {[
              { label: 'Reçues', count: '14', color: 'bg-blue-500' },
              { label: 'À préparer', count: '08', color: 'bg-amber-500' },
              { label: 'En cours', count: '22', color: 'bg-[#F7931E]' },
              { label: 'Expédiées', count: '45', color: 'bg-[#1F6FDB]' },
              { label: 'Livrées', count: '184', color: 'bg-emerald-500' },
            ].map((step, idx, arr) => (
              <div key={idx} className="flex items-center gap-4 flex-1 min-w-[140px]">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-12 h-12 rounded-full ${step.color} bg-opacity-10 flex items-center justify-center mb-3 relative`}>
                    <span className={`font-black text-sm ${step.color.replace('bg-', 'text-')}`}>{step.count}</span>
                    {idx < arr.length - 1 && (
                      <div className="absolute top-1/2 -right-6 w-4 h-[2px] bg-slate-100 hidden lg:block" />
                    )}
                  </div>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{step.label}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
