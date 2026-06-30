import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <main className="flex flex-1 items-center justify-center">
      <h1 className="text-3xl font-semibold tracking-tight">
        Welcome to Flashy Cardy Course
      </h1>
    </main>
  );
}
