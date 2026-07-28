"use client";

import { useState, useEffect } from "react";
import { type Quiz } from "@/lib/types";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, Trophy, ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const QUESTION_TIME = 20; // 20 seconds per question

type QuizClientProps = {
  quiz: Quiz;
  topic: string;
};

export function QuizClient({ quiz, topic }: QuizClientProps) {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const router = useRouter();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quiz[currentQuestionIndex];
  const questionText = currentQuestion[`question_${language}`];
  const options = currentQuestion[`options_${language}`];

  useEffect(() => {
    if (isFinished || isAnswered) return;

    if (timeLeft === 0) {
      setIsAnswered(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isFinished, isAnswered]);

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === currentQuestion.correct_answer_index) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(QUESTION_TIME);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="container mx-auto max-w-2xl py-12">
        <Card className="text-center glassmorphic border-accent/30 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex flex-col items-center gap-4 text-3xl font-black">
              <Trophy className="h-16 w-16 text-accent animate-bounce" />
              {t("quiz_results")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">{t("quiz_score")}:</p>
            <p className="my-4 text-7xl font-black text-primary text-glow">
              {score} / {quiz.length}
            </p>
            <p className="text-muted-foreground font-medium">
              {score} {t("quiz_correct_answers")}
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 sm:flex-row pt-6">
            <Button
              className="w-full font-bold h-12 glow-on-hover"
              onClick={() => router.refresh()}
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              {t("quiz_play_again")}
            </Button>
            <Button variant="outline" className="w-full font-bold h-12 border-primary/40" asChild>
              <Link href="/categories">
                <ArrowRight className="mr-2 h-5 w-5" />
                {t("quiz_back_to_categories")}
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const getOptionClasses = (index: number) => {
    if (!isAnswered) {
      return "hover:bg-primary/10 hover:border-primary/60 border-primary/20 bg-card/40";
    }
    const isCorrect = index === currentQuestion.correct_answer_index;
    const isSelected = index === selectedOption;

    if (isCorrect) {
      return "bg-green-500/20 border-green-500 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.3)]";
    }
    if (isSelected && !isCorrect) {
      return "bg-red-500/20 border-red-500 text-red-400";
    }
    return "opacity-40 grayscale";
  };
  
  const timerProgress = (timeLeft / QUESTION_TIME) * 100;
  
  return (
    <div
      className="container mx-auto max-w-2xl py-8 px-4"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Card className="glassmorphic overflow-hidden border-primary/30 shadow-2xl">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Question
              </p>
              <p className="text-xl font-black text-foreground tabular-nums">
                {currentQuestionIndex + 1} <span className="text-muted-foreground text-sm font-bold">/ {quiz.length}</span>
              </p>
            </div>

            <div className="relative flex h-24 w-24 items-center justify-center">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
                  <circle
                      className="text-white/5"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                  />
                  <circle
                      className={cn(
                        "transition-all duration-1000 ease-linear origin-center -rotate-90 transform-gpu",
                        timeLeft <= 5 ? "text-destructive" : "text-primary"
                      )}
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (timerProgress / 100) * 251.2}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                  />
                </svg>
                <div className="flex flex-col items-center justify-center z-10">
                  <span className={cn(
                    "font-mono text-3xl font-black text-glow tabular-nums",
                    timeLeft <= 5 ? "text-destructive" : "text-primary"
                  )}>
                    {timeLeft}
                  </span>
                </div>
            </div>

            <div className="flex flex-col items-end">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                {t("quiz_score")}
              </p>
              <p className="text-xl font-black text-accent text-glow tabular-nums">
                {score}
              </p>
            </div>
          </div>
          <CardTitle className="pt-8 text-center text-2xl font-black leading-snug md:text-3xl">
            {questionText}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 gap-4">
            {options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={cn(
                  "h-auto min-h-[4.5rem] w-full justify-start whitespace-normal rounded-xl border-2 p-5 text-start font-bold text-lg transition-all duration-300 transform-gpu active:scale-[0.98]",
                  getOptionClasses(index)
                )}
                onClick={() => handleOptionSelect(index)}
                disabled={isAnswered}
              >
                <div className="flex w-full items-center justify-between gap-4">
                    <span className="flex-1">{option}</span>
                    {isAnswered && index === currentQuestion.correct_answer_index && (
                        <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-500 animate-in zoom-in duration-300" />
                    )}
                    {isAnswered && index === selectedOption && index !== currentQuestion.correct_answer_index && (
                        <XCircle className="h-6 w-6 flex-shrink-0 text-red-500 animate-in zoom-in duration-300" />
                    )}
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="bg-primary/5 p-6 border-t border-primary/10">
          {isAnswered ? (
            <Button
              className="w-full font-black text-lg h-14 glow-on-hover shadow-lg"
              onClick={handleNextQuestion}
              size="lg"
            >
              {currentQuestionIndex < quiz.length - 1
                ? t("quiz_next_question")
                : t("quiz_results")}
              <ArrowRight className="ms-2 h-6 w-6" />
            </Button>
          ) : (
            <Button className="w-full font-black text-lg h-14 bg-white/5 border border-white/10 text-muted-foreground cursor-not-allowed" disabled size="lg">
              {t("quiz_submit")}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
