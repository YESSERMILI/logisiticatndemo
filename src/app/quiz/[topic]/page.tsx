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
      topicTitleFr = category.title;
      topicTitleAr = category.title;
    }
  } else {
    topicTitleFr = topic.replace(/-/g, " ");
    topicTitleAr = "";
  }

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
      <QuizPlayer topic={topic} />
    </div>
  );
}
