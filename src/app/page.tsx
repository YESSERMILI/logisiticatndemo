export default function Home() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          A Fresh Start
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          The previous project has been cleared. I'm ready to help you build something entirely new. What are we creating today?
        </p>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md">
          <h3 className="text-xl font-bold">Responsive Layout</h3>
          <p className="mt-2 text-sm text-muted-foreground">Tailwind CSS and ShadCN components are ready.</p>
        </div>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md">
          <h3 className="text-xl font-bold">Ready for GenAI</h3>
          <p className="mt-2 text-sm text-muted-foreground">Genkit is configured for your intelligent features.</p>
        </div>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md">
          <h3 className="text-xl font-bold">Firebase Support</h3>
          <p className="mt-2 text-sm text-muted-foreground">Authentication and Firestore can be added anytime.</p>
        </div>
      </div>
    </div>
  );
}
