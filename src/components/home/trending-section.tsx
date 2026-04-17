import { DailyQuests } from "./daily-challenge";
import { FriendsActivity } from "./leaderboard-preview";
import { TrendingNow } from "./trending-now";

export function TrendingSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <TrendingNow />
      </div>
      <div className="space-y-8">
        <DailyQuests />
        <FriendsActivity />
      </div>
    </section>
  );
}
