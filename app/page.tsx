import Image from "next/image";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignInButton from "@/components/SignInButton";
import { getAuthSession } from "@/lib/nextAuth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    // user is logged in
    return redirect("/dashboard");
  }
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-300px">
        <CardHeader>
          <CardTitle>Welcome to Strain</CardTitle>
          <CardDescription>Strain is for sales brain</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In"></SignInButton>
        </CardContent>
      </Card>
    </div>
  );
}
