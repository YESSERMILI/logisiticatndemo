
import { QuizClient } from "@/components/quiz/quiz-client";
import { QuizError } from "@/components/quiz/quiz-error";
import { categories, trendingQuizzes, featuredQuizzes } from "@/lib/data";
import { staticQuizData } from "@/lib/quiz-data";

type QuizPageProps = {
  params: Promise<{
    topic: string;
  }>;
  searchParams: Promise<{
    difficulty?: "easy" | "medium" | "hard";
  }>;
};

async function QuizPlayer({ topic }: { topic: string }) {
  const quizContent = staticQuizData[topic];

  if (!quizContent || quizContent.length === 0) {
    return <QuizError />;
  }

  return <QuizClient quiz={quizContent} topic={topic} />;
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { topic } = await params;
  
  const allTopics = [...categories, ...trendingQuizzes, ...featuredQuizzes];
  const category = allTopics.find(
    (c) => (c as any).slug === topic || (c as any).id === topic
  );

  let topicTitleFr: string;
  let topicTitleAr: string;

  if (category) {
    if ("name" in category) {
      topicTitleFr = category.name.fr;
      topicTitleAr = category.name.ar;
    } else {
      topicTitleFr = (category as any).title || topic.replace(/-/g, " ");
      topicTitleAr = (category as any).title || "";
    }
  } else {
    topicTitleFr = topic.replace(/-/g, " ");
    topicTitleAr = "";
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="py-12 bg-secondary/30 backdrop-blur-md border-b border-primary/10 text-center">
        <div className="container px-4">
          <p className="text-primary font-bold uppercase tracking-widest text-sm">{topicTitleFr}</p>
          <h1 className="text-4xl font-black tracking-tight lg:text-6xl text-glow mt-4 mb-2">
            {topicTitleFr}
          </h1>
          <p className="mt-2 text-xl text-muted-foreground font-arabic">{topicTitleAr}</p>
        </div>
      </div>
      <div className="container px-4 -mt-8 relative z-10 pb-20">
        <QuizPlayer topic={topic} />
      </div>
    </div>
  );
}
