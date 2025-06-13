
import SectionWrapper from '@/components/shared/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CodeXml, Library, Brain, HardDrive, Zap, Settings, Palette, Terminal } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon?: LucideIcon; // Optional: individual skill icon
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Languages',
    icon: CodeXml,
    skills: [
      { name: 'Java' },
      { name: 'SQL' },
      { name: 'CSS' },
      { name: 'Javascript' },
      { name: 'Python' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Library,
    skills: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'Express.js' },
        { name: 'Tailwind CSS' },
        { name: 'ShadCN UI' },
        { name: 'Bootstrap' },
        { name: 'jQuery' },
        { name: 'React.js' },
        { name: 'NumPy' },
        { name: 'Pandas' },
        { name: 'Streamlit' },
        { name: 'Matplotlib' },
        { name: 'Scikit-learn' },
        { name: 'Beautiful Soup' },
        { name: 'Selenium' }      
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: HardDrive,
    skills: [
        { name: 'Git & GitHub' },
        { name: 'Tableau' },
        { name: 'MySQL' },
      ]
      
  },
];

export default function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      title="My Technical Skills"
      subtitle="A glimpse into the technologies and tools I work with to build modern applications."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category) => (
          <Card key={category.title} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-headline text-primary flex items-center">
                <category.icon className="mr-3 h-6 w-6 flex-shrink-0" />
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="font-body text-sm py-1 px-3">
                    {skill.icon && <skill.icon className="mr-1.5 h-4 w-4" />}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-muted-foreground font-body mt-12 text-sm italic">
        This list is always evolving as I continuously learn and explore new technologies.
      </p>
    </SectionWrapper>
  );
}
