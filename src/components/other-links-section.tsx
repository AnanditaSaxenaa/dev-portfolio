
import Link from 'next/link';
import { Award, Code, Zap, ExternalLink } from 'lucide-react';
import SectionWrapper from '@/components/shared/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LinkItem {
  id: string;
  name: string;
  url: string;
  icon: React.ElementType;
  category: 'certification' | 'coding-profile';
}

const linksData: LinkItem[] = [
  { id: 'cert1', name: '100 days Web Development bootcamp - Udemy', url: 'https://drive.google.com/file/d/1wAeoXweTZZOxOkRJt5S9ZUE47-ta0DZE/view?usp=sharing', icon: Award, category: 'certification' },
  { id: 'cert2', name: 'Ideastorm competition  - IGDTUW', url: 'https://photos.app.goo.gl/6w8WDXmWRdmP18uE6', icon: Award, category: 'certification' },
  { id: 'cert3', name: 'Creative team member - Finivesta (IGDTUW)', url: 'https://drive.google.com/file/d/1pisOFrSxi5kDj2QDq0n6XoT1F5QbniX3/view?usp=sharing', icon: Award, category: 'certification' },
  { id: 'cert4', name: 'StockGro Virtual Trading Competition (1st Position) - LeanIn Hacks 6.0 (IGDTUW)', url: 'https://www.stockgro.club/certificate/?id=00b73317-0094-44c8-b840-00bbe6fd060b', icon: Award, category: 'certification' },
  { id: 'cert5', name:  'Visual Computing With Pytorch', url: 'https://drive.google.com/file/d/1oltzN0zm0H8_1BLAumINtcCy5p3Q7uoS/view?usp=sharing', icon: Award, category: 'certification' },
  { id: 'cert6', name:  'Full Stack Development With AI', url: '#', icon: Award, category: 'certification' },
  { id: 'leetcode', name: 'LeetCode Profile', url: 'https://leetcode.com/u/saxenaanandita76/', icon: Code, category: 'coding-profile' },
  { id: 'codeforces', name: 'Codeforces Profile', url: 'https://codeforces.com/profile/saxenaanandita76', icon: Zap, category: 'coding-profile' },
];

export default function OtherLinksSection() {
  const certifications = linksData.filter(link => link.category === 'certification');
  const codingProfiles = linksData.filter(link => link.category === 'coding-profile');

  return (
    <SectionWrapper
      id="other-links"
      title="More About Me"
      subtitle="Explore my certifications and competitive programming achievements."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary flex items-center">
              <Award className="mr-3 h-6 w-6" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {certifications.map((item) => (
                <li key={item.id} className="flex items-center">
                  <item.icon className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                  <Link href={item.url} target="_blank" rel="noopener noreferrer" className="font-body text-foreground hover:text-primary transition-colors duration-200 group flex items-center">
                    {item.name}
                    <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
              {certifications.length === 0 && (
                <p className="text-muted-foreground font-body">No certifications listed yet.</p>
              )}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary flex items-center">
              <Code className="mr-3 h-6 w-6" />
              Coding Profiles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {codingProfiles.map((item) => (
                <li key={item.id} className="flex items-center">
                  <item.icon className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                  <Link href={item.url} target="_blank" rel="noopener noreferrer" className="font-body text-foreground hover:text-primary transition-colors duration-200 group flex items-center">
                    {item.name}
                    <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
              {codingProfiles.length === 0 && (
                <p className="text-muted-foreground font-body">No coding profiles listed yet.</p>
              )}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
