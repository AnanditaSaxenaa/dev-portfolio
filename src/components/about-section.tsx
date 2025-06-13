
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
              src="/images/profilepicture.jpeg"
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
          I’m a final-year Computer Science student specializing in Artificial Intelligence, with a strong interest in building modern, user-focused websites and applications. I'm currently deepening my skills in React-based frontend development, exploring backend technologies through hands-on projects, and diving into the fascinating world of Generative AI. At the same time, I'm sharpening my coding and problem-solving abilities.
          </p>
          <p className="text-base md:text-lg text-foreground font-body mb-6 leading-relaxed">
          Beyond tech, I’m genuinely passionate about electric vehicles and sustainable innovation, and I look forward to exploring where these interests intersect in the future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button variant="outline" size="lg" asChild className="font-body text-base w-full sm:w-auto">
              {/* Replace with actual resume link */}
              <Link href="https://drive.google.com/file/d/12xHkIPMkq1pv3Qv6LqGmCs7nELW3h-Aw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download CV <DownloadCloud className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
