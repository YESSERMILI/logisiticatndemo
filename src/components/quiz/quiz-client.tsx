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
import { Progress } from "@/components/ui/progress";
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
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="flex flex-col items-center gap-4 font-heading text-3xl">
              <Trophy className="h-16 w-16 text-accent" />
              {t("quiz_results")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">{t("quiz_score")}:</p>
            <p className="my-4 font-heading text-6xl font-bold text-primary">
              {score} / {quiz.length}
            </p>
            <p className="text-muted-foreground">
              {t("quiz_correct_answers")}
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 sm:flex-row">
            <Button
              className="w-full font-bold"
              onClick={() => router.refresh()}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              {t("quiz_play_again")}
            </Button>
            <Button variant="outline" className="w-full font-bold" asChild>
              <Link href="/categories">
                <ArrowRight className="mr-2 h-4 w-4" />
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
      return "hover:bg-secondary/80 hover:border-primary";
    }
    const isCorrect = index === currentQuestion.correct_answer_index;
    const isSelected = index === selectedOption;

    if (isCorrect) {
      return "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400";
    }
    if (isSelected && !isCorrect) {
      return "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400";
    }
    return "opacity-70";
  };
  
  const timerProgress = (timeLeft / QUESTION_TIME) * 100;
  
  return (
    <div
      className="container mx-auto max-w-2xl py-8"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {currentQuestionIndex + 1} / {quiz.length}
            </p>
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-primary bg-secondary p-2 font-mono font-bold text-primary">
              <span className="text-2xl">{timeLeft}</span>
              <span className="text-xs">s</span>
            </div>
            <p className="text-sm text-muted-foreground">{t("quiz_score")}: {score}</p>
          </div>
          <Progress value={timerProgress} className="mt-4 h-2" />
          <CardTitle className="pt-6 text-center font-heading text-2xl md:text-3xl">
            {questionText}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={cn(
                  "h-auto min-h-16 w-full justify-start whitespace-normal rounded-lg border-2 p-4 text-left font-semibold md:text-lg",
                  getOptionClasses(index)
                )}
                onClick={() => handleOptionSelect(index)}
              >
                <div className="flex w-full items-center justify-between">
                    <span>{option}</span>
                    {isAnswered && index === currentQuestion.correct_answer_index && (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                    )}
                    {isAnswered && index === selectedOption && index !== currentQuestion.correct_answer_index && (
                        <XCircle className="h-6 w-6 text-red-500" />
                    )}
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          {isAnswered ? (
            <Button
              className="w-full font-bold"
              onClick={handleNextQuestion}
              size="lg"
            >
              {currentQuestionIndex < quiz.length - 1
                ? t("quiz_next_question")
                : t("quiz_results")}
              <ArrowRight className="mx-2 h-5 w-5" />
            </Button>
          ) : (
            <Button className="w-full font-bold" disabled size="lg">
              {t("quiz_submit")}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
