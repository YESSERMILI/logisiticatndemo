import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Shield, Users } from "lucide-react";

export default function GuildsPage() {
  return (
    <div className="container mx-auto py-8">
       <div className="mb-8 text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-5xl text-glow">
          Guilds
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Team up, compete, and conquer together.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto glassmorphic">
        <CardContent className="p-10 text-center">
          <Shield className="h-24 w-24 text-primary mx-auto" />
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight">
            This Feature is Under Construction
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground mx-auto">
            The Guilds & Clans system is coming soon! Get ready to team up with friends, compete in epic guild battles, and climb the ranks together to earn exclusive rewards.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" disabled>
              <Plus className="mr-2 h-5 w-5" />
              Create Guild
            </Button>
            <Button size="lg" variant="outline" disabled>
              <Users className="mr-2 h-5 w-5" />
              Join a Guild
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
