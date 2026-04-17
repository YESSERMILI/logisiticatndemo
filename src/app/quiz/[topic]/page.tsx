import { generateLocalizedQuizContent } from "@/ai/flows/generate-localized-quiz-content-flow";
import { QuizClient } from "@/components/quiz/quiz-client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data";
import { AlertTriangle, Loader2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

type QuizPageProps = {
  params: {
    topic: string;
  };
  searchParams: {
    difficulty?: "easy" | "medium" | "hard";
  };
};

async function QuizGenerator({ params, searchParams }: QuizPageProps) {
  const difficulty = searchParams.difficulty || "easy";
  const numQuestions = 10;
  
  try {
    const quizContent = await generateLocalizedQuizContent({
      topic: params.topic.replace("-", " "),
      difficulty,
      numQuestions,
    });
    
    if (!quizContent || quizContent.length === 0) {
        throw new Error("No content generated");
    }

    return <QuizClient quiz={quizContent} topic={params.topic} />;
  } catch (error) {
    console.error("Failed to generate quiz content:", error);
    return (
        <div className="container mx-auto max-w-2xl py-12">
             <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                   Failed to load quiz content. Please try again later.
                </AlertDescription>
            </Alert>
            <div className="mt-6 text-center">
                <Button asChild>
                    <Link href="/categories">Back to Categories</Link>
                </Button>
            </div>
        </div>
    );
  }
}

export default function QuizPage(props: QuizPageProps) {
    const category = categories.find(c => c.slug === props.params.topic);

    return (
        <div>
            <div className="py-12 bg-secondary text-center">
                <div className="container">
                    <p className="text-primary font-semibold">{category?.name.fr || props.params.topic}</p>
                    <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-5xl text-glow mt-2">
                        {category?.name.fr || props.params.topic} Quiz
                    </h1>
                     <p className="mt-2 text-lg text-muted-foreground">{category?.name.ar || ''}</p>
                </div>
            </div>
            <Suspense fallback={<LoadingState />}>
                <QuizGenerator {...props} />
            </Suspense>
        </div>
    )
}

function LoadingState() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-20 text-center">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
      <h2 className="mt-6 font-heading text-2xl font-semibold">
        Generating Your Quiz...
      </h2>
      <p className="mt-2 text-muted-foreground">
        Please wait while our AI prepares your challenge!
      </p>
    </div>
  );
}
