import { generateLocalizedQuizContent } from "@/ai/flows/generate-localized-quiz-content-flow";
import { QuizClient } from "@/components/quiz/quiz-client";
import { QuizError } from "@/components/quiz/quiz-error";
import { categories } from "@/lib/data";
import { Loader2 } from "lucide-react";
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
    const category = categories.find(c => c.slug === params.topic);
    const topicName = category ? category.name.fr : params.topic.replace(/-/g, ' ');

    const quizContent = await generateLocalizedQuizContent({
      topic: topicName,
      difficulty,
      numQuestions,
    });
    
    if (!quizContent || quizContent.length === 0) {
        throw new Error("No content generated");
    }

    return <QuizClient quiz={quizContent} topic={params.topic} />;
  } catch (error) {
    return <QuizError />;
  }
}

export default function QuizPage(props: QuizPageProps) {
    const category = categories.find(c => c.slug === props.params.topic);
    // This is a server component, so we can't use the useTranslation hook
    // We'll pass the names to the client component if needed or just display one lang
    const topicTitleFr = category?.name.fr || props.params.topic.replace(/-/g, ' ');
    const topicTitleAr = category?.name.ar || '';

    return (
        <div>
            <div className="py-12 bg-secondary text-center">
                <div className="container">
                    <p className="text-primary font-semibold">{topicTitleFr}</p>
                    <h1 className="text-4xl font-black tracking-tight lg:text-5xl text-glow mt-2">
                        {topicTitleFr} Quiz
                    </h1>
                     <p className="mt-2 text-lg text-muted-foreground">{topicTitleAr}</p>
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
      <h2 className="mt-6 text-2xl font-semibold">
        جاري إنشاء اختبارك...
      </h2>
      <p className="mt-2 text-muted-foreground">
        الرجاء الانتظار بينما يقوم الذكاء الاصطناعي بإعداد تحديك!
      </p>
    </div>
  );
}
