import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  adjustFontFallback: false,
  fallback: [],
});

export const metadata: Metadata = {
  title: "Flashy Cardy Course",
  description: "Master anything with intelligent flashcards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ClerkProvider
          appearance={{
            theme: shadcn,
            captcha: { theme: "dark" },
          }}
        >
          <header className="flex items-center justify-between px-6 py-4 border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
            <span className="text-lg font-semibold tracking-tight">
              ⚡ FlashyCardy
            </span>
            <div className="flex items-center gap-3">
              <Show when="signed-out">
                <SignInButton>
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button size="sm">Sign Up</Button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
