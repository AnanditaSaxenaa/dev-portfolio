
import Image from 'next/image';
import SectionWrapper from '@/components/shared/section-wrapper';
import { Button } from '@/components/ui/button';
import { DownloadCloud } from 'lucide-react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <SectionWrapper 
      id="about" 
      title="Hello World_" 
      className="bg-secondary"
      subtitle="A little insight into who I am, my passion for technology, and what drives me."
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="lg:w-2/5 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-md opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="/images/WhatsApp Image 2025-06-13 at 14.45.58 (1).jpeg"
              alt="Profile Picture"
              width={350}
              height={350}
              className="rounded-full shadow-xl object-cover w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] relative"
              data-ai-hint="professional portrait modern"
              priority
            />
          </div>
        </div>
        <div className="lg:w-3/5 text-center lg:text-left">
          <p className="text-base md:text-lg text-foreground font-body mb-6 leading-relaxed">
          I’m a final-year Computer Science (AI) student and software developer with a strong focus on building scalable backend systems and impactful applications. My work primarily revolves around Java, Spring Boot, and modern data systems, while I also leverage React to create clean, user-friendly interfaces when needed. I enjoy solving complex problems, whether it’s optimizing recommendation systems or building full-stack AI-powered projects.
          <p className="text-base md:text-lg text-foreground font-body mb-6 leading-relaxed">
          Lately, I’ve been diving deeper into system design, backend performance, and real-world applications of Generative AI. Alongside tech, I have a growing curiosity for exploring countries—their geography, history, and cultures—which helps me think more broadly and creatively. I’m also passionate about electric vehicles and sustainable innovation, and I’m excited about opportunities where technology can drive meaningful change in these areas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button variant="outline" size="lg" asChild className="font-body text-base w-full sm:w-auto">
              <Link
                href="https://drive.google.com/uc?export=download&id=10n2-v0MvM0xsWFG8d4IwU7EovZnvnLmL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <DownloadCloud className="ml-2 h-5 w-5" />
              </Link>

            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
