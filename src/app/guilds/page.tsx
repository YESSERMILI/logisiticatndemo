import { Button } from "@/components/ui/button";
import { Plus, Users } from "lucide-react";

export default function GuildsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col items-center text-center">
        <Users className="h-24 w-24 text-primary" />
        <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight lg:text-5xl">
          Guilds (Clans)
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          This feature is coming soon! Team up with friends, compete in guild
          battles, and climb the ranks together.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Create Guild
          </Button>
          <Button size="lg" variant="outline">
            Join Guild
          </Button>
        </div>
      </div>
    </div>
  );
}
