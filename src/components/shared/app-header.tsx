
'use client';

import Link from 'next/link';
import { Code2, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio#projects", label: "Projects" },
    { href: "/portfolio#about", label: "About" },
    { href: "/portfolio#skills", label: "Skills" },
    { href: "/portfolio#contact", label: "Contact" },
    { href: "/portfolio#other-links", label: "Links" },
  ];

  return (
    <header className="py-5 px-4 md:px-8 sticky top-0 bg-primary text-primary-foreground z-50 border-b border-primary-foreground/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center text-2xl font-headline font-bold text-primary-foreground hover:text-primary-foreground/90 transition-colors">
          <Code2 className="mr-2 h-7 w-7" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2 md:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.label} // Use label as key if hrefs can be duplicated to different sections
              href={link.href}
              className="relative group text-primary-foreground hover:text-primary-foreground/80 font-body text-md transition-colors"
            >
              {link.label}
              <span className="absolute bottom-[-2px] left-0 h-0.5 w-0 bg-primary-foreground group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 focus-visible:ring-primary-foreground text-primary-foreground hover:text-primary-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  <SheetClose key={link.label} asChild>
                    <Link
                      href={link.href}
                      className="text-foreground hover:text-primary font-body text-lg py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
