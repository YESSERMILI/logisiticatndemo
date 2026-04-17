import { AppName } from "@/components/logo";
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

export default function RegisterPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-transparent px-4 py-12">
      <Card className="w-full max-w-sm glassmorphic">
        <CardHeader className="text-center space-y-4 p-6">
          <div className="mx-auto">
            <AppName />
          </div>
          <div className="space-y-1">
            <CardTitle className="font-heading text-2xl">
              Join the Competition
            </CardTitle>
            <CardDescription>
              Create an account to start playing and winning.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 p-6">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="YourPlayerName" required className="bg-transparent" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required className="bg-transparent" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required className="bg-transparent" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col p-6">
          <Button className="w-full">Create account</Button>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
