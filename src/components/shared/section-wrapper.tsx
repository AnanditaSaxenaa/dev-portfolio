import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  subtitle?: string;
}

export default function SectionWrapper({ id, title, children, className = '', subtitle }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-3 text-primary">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
