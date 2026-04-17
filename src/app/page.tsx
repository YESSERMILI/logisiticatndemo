import { DailyChallenge } from "@/components/home/daily-challenge";
import { FeaturedCategories } from "@/components/home/featured-categories";
import { GuildHighlight } from "@/components/home/guild-highlight";
import { Hero } from "@/components/home/hero";
import { LeaderboardPreview } from "@/components/home/leaderboard-preview";
import { StatsBar } from "@/components/home/stats-bar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StatsBar />
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-12 lg:col-span-8">
            <FeaturedCategories />
            <GuildHighlight />
          </div>
          <div className="flex flex-col gap-12 lg:col-span-4">
            <DailyChallenge />
            <LeaderboardPreview />
          </div>
        </div>
      </div>
    </div>
  );
}
