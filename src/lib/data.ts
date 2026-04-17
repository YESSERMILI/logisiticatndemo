import type { Category, Guild, LeaderboardUser, FeaturedQuiz, TrendingQuiz, DailyQuest, FriendActivity } from "./types";

export const categories: Category[] = [
  { name: { ar: "علوم", fr: "Science" }, slug: "science", icon: "FlaskConical" },
  { name: { ar: "تاريخ", fr: "History" }, slug: "history", icon: "Scroll" },
  { name: { ar: "جغرافيا", fr: "Geography" }, slug: "geography", icon: "Globe" },
  { name: { ar: "ترفيه", fr: "Entertainment" }, slug: "entertainment", icon: "Film" },
  { name: { ar: "رياضة", fr: "Sports" }, slug: "sports", icon: "Trophy" },
  { name: { ar: "تكنولوجيا", fr: "Technology" }, slug: "technology", icon: "Cpu" },
  { name: { ar: "فنون", fr: "Arts & Literature" }, slug: "arts-literature", icon: "BookOpen" },
  { name: { ar: "طبيعة", fr: "Nature" }, slug: "nature", icon: "Leaf" },
];

export const leaderboardUsers: LeaderboardUser[] = [
  { rank: 1, avatar: "avatar-1", username: "Zied_TN", points: 12580, streak: 15 },
  { rank: 2, avatar: "avatar-2", username: "Fatma_Gamer", points: 11920, streak: 12, },
  { rank: 3, avatar: "avatar-3", username: "Houssem_23", points: 11500, streak: 20 },
  { rank: 4, avatar: "avatar-4", username: "Sara_Beast", points: 10850, streak: 8 },
  { rank: 5, avatar: "avatar-5", username: "Amine_FTW", points: 10200, streak: 5 },
];

export const guilds: Guild[] = [
  { name: "Carthage Eagles", logo: "guild-logo-1", points: 152000, memberCount: 25 },
  { name: "Djerba Dolphins", logo: "guild-logo-2", points: 138000, memberCount: 18 },
];

export const featuredQuizzes: FeaturedQuiz[] = [
  { id: "space-explorer", title: "The Ultimate Space Explorer", category: "Science", author: "CosmoMind", imageId: "quiz-space", difficulty: "hard", rating: 4.8, questionCount: 200 },
  { id: "world-capitals", title: "World Capitals Challenge", category: "Geography", author: "GeoWizard", imageId: "quiz-capitals", difficulty: "medium", rating: 4.7, questionCount: 150 },
  { id: "90s-mania", title: "90s Movie Mania", category: "Entertainment", author: "CinemaFan", imageId: "quiz-movies", difficulty: "easy", rating: 4.9, questionCount: 250 },
  { id: "ancient-civilizations", title: "Ancient Civilizations", category: "History", author: "TimeTraveler", imageId: "quiz-history", difficulty: "hard", rating: 4.6, questionCount: 200 },
];

export const trendingQuizzes: TrendingQuiz[] = [
  { rank: 1, title: "AI Revolution Quiz", category: "Technology", points: 8700, rating: 4.5, difficulty: "medium" },
  { rank: 2, title: "Premier League Legends", category: "Sports", points: 15300, rating: 4.8, difficulty: "hard" },
  { rank: 3, title: "Famous Paintings", category: "Arts", points: 9200, rating: 4.4, difficulty: "easy" },
  { rank: 4, title: "Wild Animals Safari", category: "Nature", points: 11500, rating: 4.7, difficulty: "medium" },
];

export const dailyQuests: DailyQuest[] = [
  { id: 'specialist', title: 'The Specialist', progress: 0, goal: 1, reward: 100 },
  { id: 'speed-demon', title: 'Speed Demon', progress: 0, goal: 1, reward: 50 },
  { id: 'creators-eye', title: 'Creator\'s Eye', progress: 2, goal: 3, reward: 150 },
];

export const friendsActivity: FriendActivity[] = [
  { id: 1, text: "<strong>Sarah</strong> aced the 'World Capitals' quiz", timestamp: "5m ago", avatar: "avatar-4" },
  { id: 2, text: "<strong>Mike</strong> reached Level 45", timestamp: "1h ago", avatar: "avatar-5" },
  { id: 3, text: "<strong>Emma</strong> created a new quiz 'Music of the 80s'", timestamp: "3h ago", avatar: "avatar-2" },
  { id: 4, text: "<strong>John</strong> won the Science Tournament", timestamp: "2h ago", avatar: "avatar-3" },
];
