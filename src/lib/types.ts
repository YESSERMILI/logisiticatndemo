import type {
  GenerateLocalizedQuizContentOutput,
  GenerateLocalizedQuizContentInput,
} from "@/ai/flows/generate-localized-quiz-content-flow";

export type Category = {
  name: Record<"ar" | "fr", string>;
  slug: string;
  icon: string;
  avgDifficulty: "easy" | "medium" | "hard";
  quizCount: number;
};

export type LeaderboardUser = {
  rank: number;
  avatar: string;
  username: string;
  points: number;
  streak: number;
};

export type Guild = {
  name: string;
  logo: string;
  points: number;
  memberCount: number;
};

export type Quiz = GenerateLocalizedQuizContentOutput;
export type Question = GenerateLocalizedQuizContentOutput[0];
export type QuizGenerationInput = GenerateLocalizedQuizContentInput;

export interface FeaturedQuiz {
  id: string;
  title: string;
  category: string;
  author: string;
  imageId: string;
  difficulty: "easy" | "medium" | "hard";
  rating: number;
  questionCount: number;
}

export interface TrendingQuiz {
  rank: number;
  title: string;
  category: string;
  points: number;
  rating: number;
  difficulty: "easy" | "medium" | "hard";
}

export interface DailyQuest {
  id: string;
  title: string;
  progress: number;
  goal: number;
  reward: number;
}

export interface FriendActivity {
  id: number;
  text: string;
  timestamp: string;
  avatar: string;
}
