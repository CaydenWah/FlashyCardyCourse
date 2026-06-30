import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const sampleCards = [
  { front: "What is photosynthesis?", back: "The process plants use to convert light into energy" },
  { front: "E = mc²", back: "Energy equals mass times the speed of light squared" },
  { front: "Mitochondria", back: "The powerhouse of the cell" },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center flex-1 px-6 py-24 text-center overflow-hidden">
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-indigo-600/20 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[80px]" />
        </div>

        {/* Badge */}
        <div className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
          Learn smarter, not harder
        </div>

        {/* Headline */}
        <h1 className="relative max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Flashy Cardy Course
          </span>
        </h1>

        {/* Subheadline */}
        <p className="relative mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Master any subject with beautifully crafted flashcards. Study smarter
          with spaced repetition and track your progress as you go.
        </p>

        {/* CTA Buttons */}
        <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
          <SignUpButton>
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all duration-200"
            >
              Get Started Free
            </Button>
          </SignUpButton>
          <SignInButton>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-border/60 px-8 hover:bg-muted/50 hover:scale-105 transition-all duration-200"
            >
              Sign In
            </Button>
          </SignInButton>
        </div>

        {/* Stats */}
        <div className="relative mt-16 flex flex-wrap items-center justify-center gap-10 text-center">
          {[
            { value: "10k+", label: "Active Learners" },
            { value: "500k+", label: "Flashcards Created" },
            { value: "95%", label: "Retention Rate" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-foreground">{value}</span>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Cards Section */}
      <section className="px-6 py-20 bg-muted/20 border-t border-border/40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight mb-2">
            Study anything, anywhere
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            From science to history — create cards for every subject.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {sampleCards.map((card, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <span className="mb-3 inline-block rounded-lg bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-400">
                    Front
                  </span>
                  <p className="text-sm font-medium text-foreground mb-4">
                    {card.front}
                  </p>
                  <div className="h-px bg-border/60 mb-4" />
                  <span className="mb-3 inline-block rounded-lg bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-400">
                    Back
                  </span>
                  <p className="text-sm text-muted-foreground">{card.back}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Ready to start learning?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of students already mastering their courses with
            Flashy Cardy.
          </p>
          <SignUpButton>
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-10 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all duration-200"
            >
              Create Free Account
            </Button>
          </SignUpButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 px-6 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Flashy Cardy Course. All rights reserved.
      </footer>
    </div>
  );
}
