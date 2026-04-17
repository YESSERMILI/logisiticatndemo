import type { Category, Guild, LeaderboardUser } from "./types";
import {
  Swords,
  Globe,
  Flag,
  Gamepad2,
  BrainCircuit,
  Trophy,
} from "lucide-react";

export const categories: Category[] = [
  {
    name: { ar: "كرة القدم", fr: "Football" },
    slug: "football",
    icon: Trophy,
    quizCount: 24,
    avgDifficulty: "medium",
  },
  {
    name: { ar: "تونس", fr: "Tunisie" },
    slug: "tunisia",
    icon: Flag,
    quizCount: 18,
    avgDifficulty: "easy",
  },
  {
    name: { ar: "كأس العالم", fr: "Coupe du Monde" },
    slug: "world-cup",
    icon: Globe,
    quizCount: 12,
    avgDifficulty: "hard",
  },
  {
    name: { ar: "ألعاب الفيديو", fr: "Gaming" },
    slug: "gaming",
    icon: Gamepad2,
    quizCount: 30,
    avgDifficulty: "medium",
  },
  {
    name: { ar: "معلومات عامة", fr: "Culture Générale" },
    slug: "general-knowledge",
    icon: BrainCircuit,
    quizCount: 50,
    avgDifficulty: "easy",
  },
  {
    name: { ar: "تحدي TT", fr: "Défi TT" },
    slug: "tunisie-telecom-challenge",
    icon: Swords,
    quizCount: 5,
    avgDifficulty: "hard",
  },
];

export const leaderboardUsers: LeaderboardUser[] = [
  {
    rank: 1,
    avatar: "avatar-1",
    username: "Zied_TN",
    points: 12580,
    streak: 15,
  },
  {
    rank: 2,
    avatar: "avatar-2",
    username: "Fatma_Gamer",
    points: 11920,
    streak: 12,
  },
  {
    rank: 3,
    avatar: "avatar-3",
    username: "Houssem_23",
    points: 11500,
    streak: 20,
  },
  {
    rank: 4,
    avatar: "avatar-4",
    username: "Sara_Beast",
    points: 10850,
    streak: 8,
  },
  {
    rank: 5,
    avatar: "avatar-5",
    username: "Amine_FTW",
    points: 10200,
    streak: 5,
  },
];

export const guilds: Guild[] = [
  {
    name: "Carthage Eagles",
    logo: "guild-logo-1",
    points: 152000,
    memberCount: 25,
  },
  {
    name: "Djerba Dolphins",
    logo: "guild-logo-2",
    points: 138000,
    memberCount: 18,
  },
];
