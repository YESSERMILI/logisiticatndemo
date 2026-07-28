import type { Category, Guild, LeaderboardUser, FeaturedQuiz, TrendingQuiz, DailyQuest, FriendActivity } from "./types";

export const categories: Category[] = [
    { name: { ar: "كرة القدم التونسية", fr: "Football Tunisien" }, slug: "tunisian-football", icon: "Trophy", avgDifficulty: "medium", quizCount: 28 },
    { name: { ar: "تاريخ قرطاج", fr: "Histoire de Carthage" }, slug: "carthage-history", icon: "Scroll", avgDifficulty: "hard", quizCount: 15 },
    { name: { ar: "سينما تونسية", fr: "Cinéma Tunisien" }, slug: "tunisian-cinema", icon: "Film", avgDifficulty: "easy", quizCount: 22 },
    { name: { ar: "المطبخ التونسي", fr: "Cuisine Tunisienne" }, slug: "plats-tunisiens", icon: "ChefHat", avgDifficulty: "medium", quizCount: 18 },
    { name: { ar: "موسيقى تونسية", fr: "Musique Tunisienne" }, slug: "timeless-melodies", icon: "Music", avgDifficulty: "medium", quizCount: 25 },
    { name: { ar: "جغرافيا تونس", fr: "Géographie de la Tunisie" }, slug: "tunisia-world-heritage-sites", icon: "Globe", avgDifficulty: "medium", quizCount: 12 },
    { name: { ar: "تاريخ تونس الحديث", fr: "Histoire Moderne de la Tunisie" }, slug: "modern-tunisian-history", icon: "History", avgDifficulty: "medium", quizCount: 9 },
    { name: { ar: "ديربي العاصمة", fr: "Derby de Tunis" }, slug: "derby-de-tunis", icon: "Target", avgDifficulty: "hard", quizCount: 15 },
    { name: { ar: "أبطال أفريقيا", fr: "Champions d'Afrique" }, slug: "african-champions-league", icon: "Star", avgDifficulty: "hard", quizCount: 20 },
    { name: { ar: "حنبعل برقا", fr: "Hannibal Barca" }, slug: "hannibal-barca", icon: "Shield", avgDifficulty: "hard", quizCount: 10 },
];

export const leaderboardUsers: LeaderboardUser[] = [
  { rank: 1, avatar: "avatar-1", username: "Zied_TN", points: 15750, streak: 7 },
  { rank: 2, avatar: "avatar-2", username: "Fatma_Gamer", points: 14920, streak: 12, },
  { rank: 3, avatar: "avatar-3", username: "Houssem_23", points: 13500, streak: 20 },
  { rank: 4, avatar: "avatar-4", username: "Sara_Beast", points: 12850, streak: 8 },
  { rank: 5, avatar: "avatar-5", username: "Amine_FTW", points: 11200, streak: 5 },
  { rank: 6, username: "Player6", points: 10500, streak: 3, avatar: "avatar-1" },
  { rank: 7, username: "Player7", points: 9800, streak: 9, avatar: "avatar-2" },
  { rank: 8, username: "Player8", points: 9500, streak: 2, avatar: "avatar-3" },
  { rank: 9, username: "Player9", points: 9200, streak: 11, avatar: "avatar-4" },
  { rank: 10, username: "Player10", points: 8900, streak: 1, avatar: "avatar-5" },
];

export const guilds: Guild[] = [
  { name: "Carthage Eagles", logo: "guild-logo-1", points: 152000, memberCount: 25 },
  { name: "Djerba Dolphins", logo: "guild-logo-2", points: 138000, memberCount: 18 },
];

export const featuredQuizzes: FeaturedQuiz[] = [
  { id: "derby-de-tunis", title: "ديربي العاصمة", category: "كرة القدم التونسية", author: "Admin", imageId: "quiz-football-derby", difficulty: "hard", rating: 4.9, questionCount: 15 },
  { id: "hannibal-barca", title: "حنبعل برقا: الأسطورة", category: "تاريخ قرطاج", author: "HistoryBuff", imageId: "quiz-hannibal", difficulty: "hard", rating: 4.8, questionCount: 20 },
  { id: "un-ete-a-la-goulette", title: "صيف حلق الوادي", category: "سينما تونسية", author: "Cinephile", imageId: "quiz-la-goulette", difficulty: "easy", rating: 4.7, questionCount: 10 },
  { id: "plats-tunisiens", title: "أشهر الأطباق التونسية", category: "المطبخ التونسي", author: "Gourmet", imageId: "quiz-couscous", difficulty: "medium", rating: 4.9, questionCount: 12 },
];

export const trendingQuizzes: TrendingQuiz[] = [
  { rank: 1, slug: "african-champions-league", title: "أبطال دوري أبطال أفريقيا", category: "كرة القدم التونسية", points: 18200, rating: 4.8, difficulty: "hard" },
  { rank: 2, slug: "tunisia-world-heritage-sites", title: "مواقع التراث العالمي في تونس", category: "جغرافيا تونس", points: 15300, rating: 4.7, difficulty: "medium" },
  { rank: 3, slug: "guess-the-actor", title: "من هو الممثل؟", category: "سينما تونسية", points: 12500, rating: 4.5, difficulty: "easy" },
  { rank: 4, slug: "timeless-melodies", title: "ألحان خالدة", category: "موسيقى تونسية", points: 9800, rating: 4.6, difficulty: "medium" },
];

export const dailyQuests: DailyQuest[] = [
  { id: 'play-three', title: 'لاعب نشيط', progress: 1, goal: 3, reward: 50 },
  { id: 'history-buff', title: 'عاشق التاريخ', progress: 0, goal: 1, reward: 100 },
  { id: 'perfect-score', title: 'العلامة الكاملة', progress: 0, goal: 1, reward: 200 },
];

export const friendsActivity: FriendActivity[] = [
  { id: 1, text: "<strong>سارة</strong> اجتازت اختبار 'السينما التونسية' بنجاح", timestamp: "منذ 5 دقائق", avatar: "avatar-4" },
  { id: 2, text: "<strong>أمين</strong> وصل إلى المستوى 12", timestamp: "منذ ساعة", avatar: "avatar-5" },
  { id: 3, text: "<strong>فاطمة</strong> أنشأت اختبارًا جديدًا: 'ألغاز تاريخية'", timestamp: "منذ 3 ساعات", avatar: "avatar-2" },
];
