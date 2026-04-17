import { BrowseCategories } from "@/components/home/browse-categories";
import { CommunityAndCreationSection } from "@/components/home/community-and-creation";
import { FeaturedQuizzes } from "@/components/home/featured-quizzes";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <div className="flex flex-col space-y-20 md:space-y-32">
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-32">
        <BrowseCategories />
        <FeaturedQuizzes />
        <CommunityAndCreationSection />
      </div>
    </div>
  );
}
