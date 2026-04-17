import { BrowseCategories } from "@/components/home/browse-categories";
import { CommunityAndCreationSection } from "@/components/home/community-and-creation";
import { DailyQuests } from "@/components/home/daily-challenge";
import { FeaturedQuizzes } from "@/components/home/featured-quizzes";
import { Hero } from "@/components/home/hero";
import { TrendingNow } from "@/components/home/trending-now";

export default function Home() {
  return (
    <div className="flex flex-col space-y-20 md:space-y-32">
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-32">
        <BrowseCategories />
        <FeaturedQuizzes />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <TrendingNow />
            </div>
            <div>
                <DailyQuests />
            </div>
        </div>
        <CommunityAndCreationSection />
      </div>
    </div>
  );
}
