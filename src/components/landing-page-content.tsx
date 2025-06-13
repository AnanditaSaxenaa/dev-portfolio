
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function LandingPageContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-background">
      <div className="mb-8">
        <Sparkles className="h-16 w-16 text-primary animate-pulse" />
      </div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold mb-6">
        <span className="text-primary">Hello, I'm </span>
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-700 font-dancing text-6xl md:text-7xl lg:text-8xl">
          Anandita
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground font-body mb-12 max-w-2xl mx-auto animate-fade-in-up">
      I love turning ideas into fast, good-looking web apps that feel intuitive
      </p>
      <Link href="/portfolio" passHref>
        <Button
          size="lg"
          className="font-body text-lg py-8 px-10 animate-fade-in-up-delayed transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
          variant="default"
        >
          Explore My Work
          <ArrowRight className="ml-3 h-6 w-6" />
        </Button>
      </Link>
    </div>
  );
}

