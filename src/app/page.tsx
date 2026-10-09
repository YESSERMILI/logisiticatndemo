
"use client";

import React from "react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          New project started&nbsp;
          <code className="font-bold">src/app/page.tsx</code>
        </p>
      </div>

      <div className="relative flex place-items-center mt-24">
        <h1 className="text-6xl font-black tracking-tighter">
          Blank Slate
        </h1>
      </div>

      <div className="mt-12 text-center text-muted-foreground max-w-prose">
        <p>Your workspace has been cleared. Start building your new website by editing the home page or adding new routes.</p>
      </div>
    </main>
  );
}
