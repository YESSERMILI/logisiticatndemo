import { QuizClient } from "@/components/quiz/quiz-client";
import { QuizError } from "@/components/quiz/quiz-error";
import { categories, trendingQuizzes, featuredQuizzes } from "@/lib/data";
import { staticQuizData } from "@/lib/quiz-data";

type QuizPageProps = {
  params: {
    topic: string;
  };
  searchParams: {
    difficulty?: "easy" | "medium" | "hard";
  };
};

function QuizPlayer({ params }: { params: { topic: string } }) {
  const quizContent = staticQuizData[params.topic];

  if (!quizContent || quizContent.length === 0) {
    return <QuizError />;
  }

  return <QuizClient quiz={quizContent} topic={params.topic} />;
}

export default function QuizPage({ params }: QuizPageProps) {
  const allTopics = [...categories, ...trendingQuizzes, ...featuredQuizzes];
  const category = allTopics.find(
    (c) => (c as any).slug === params.topic || (c as any).id === params.topic
  );

  let topicTitleFr: string;
  let topicTitleAr: string;

  if (category) {
    if ("name" in category) {
      // It's a Category
      topicTitleFr = category.name.fr;
      topicTitleAr = category.name.ar;
    } else {
      // It's a TrendingQuiz or FeaturedQuiz
      topicTitleFr = category.title;
      topicTitleAr = category.title; // Assuming title is the same for now
    }
  } else {
    topicTitleFr = params.topic.replace(/-/g, " ");
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
      <QuizPlayer params={params} />
    </div>
  );
}
