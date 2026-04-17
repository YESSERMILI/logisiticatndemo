import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Trophy } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-transparent px-4 py-12">
      <Card className="w-full max-w-sm bg-card/30 backdrop-blur-lg border-primary/20">
        <CardHeader className="text-center">
          <Trophy className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="mt-4 font-heading text-2xl">
            Welcome Back!
          </CardTitle>
          <CardDescription>
            Log in to continue your journey.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required className="bg-transparent" />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required className="bg-transparent"/>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full">Sign in</Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
