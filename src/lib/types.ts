import type {
  GenerateLocalizedQuizContentOutput,
  GenerateLocalizedQuizContentInput,
} from "@/ai/flows/generate-localized-quiz-content-flow";
import type { LucideIcon } from "lucide-react";

export type Category = {
  name: Record<"ar" | "fr", string>;
  slug: string;
  icon: LucideIcon;
  quizCount: number;
  avgDifficulty: "easy" | "medium" | "hard";
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

// Re-exporting AI flow types for consistency
export type Quiz = GenerateLocalizedQuizContentOutput;
export type Question = GenerateLocalizedQuizContentOutput[0];
export type QuizGenerationInput = GenerateLocalizedQuizContentInput;
