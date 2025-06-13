
import AppHeader from '@/components/shared/app-header';
import ProjectsSection from '@/components/projects-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ContactSection from '@/components/contact-section';
import OtherLinksSection from '@/components/other-links-section';
import { Separator } from '@/components/ui/separator';

export default function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        <ProjectsSection />
        <Separator className="my-0" /> 
        <AboutSection />
        <Separator className="my-0" />
        <SkillsSection />
        <Separator className="my-0" />
        <ContactSection />
        <Separator className="my-0" />
        <OtherLinksSection />
      </main>
      <footer className="text-center p-8 bg-secondary font-body border-t border-border/50">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Anandita's Portfolio.</p>
        <p className="text-xs text-muted-foreground/70 mt-1">All rights reserved.</p>
      </footer>
    </div>
  );
}

