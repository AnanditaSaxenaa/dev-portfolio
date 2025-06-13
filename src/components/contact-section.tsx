'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send, Twitter } from 'lucide-react';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/section-wrapper';
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    // For demo, we'll use the toast
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon. (This is a demo)",
      variant: "default",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <SectionWrapper 
      id="contact" 
      title="Get In Touch"
      subtitle="Have a project in mind, a question, or just want to say hi? I'd love to hear from you!"
      className="bg-secondary"
    >
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 md:p-10 rounded-xl shadow-xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground font-body mb-1.5">Full Name</label>
            <Input type="text" name="name" id="name" required className="font-body" placeholder="e.g. Jane Doe" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground font-body mb-1.5">Email Address</label>
            <Input type="email" name="email" id="email" required className="font-body" placeholder="e.g. jane.doe@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground font-body mb-1.5">Message</label>
            <Textarea name="message" id="message" rows={6} required className="font-body" placeholder="Your message here..."/>
          </div>
          <div>
            <Button type="submit" className="w-full font-body text-base py-6" variant="default">
              Send Message <Send className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </form>

        <div className="mt-16 text-center">
          <p className="text-lg font-body mb-6 text-muted-foreground">Or connect with me on social media:</p>
          <div className="flex justify-center space-x-6">
            <Link href="https://github.com/AnanditaSaxenaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-muted-foreground hover:text-primary transition-colors duration-200 transform hover:scale-110">
              <Github className="h-7 w-7 md:h-8 md:w-8" />
            </Link>
            <Link href="https://www.linkedin.com/in/anandita-saxena/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-muted-foreground hover:text-primary transition-colors duration-200 transform hover:scale-110">
              <Linkedin className="h-7 w-7 md:h-8 md:w-8" />
            </Link>
             <Link href="https://x.com/shut_up_tiya" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="text-muted-foreground hover:text-primary transition-colors duration-200 transform hover:scale-110">
              <Twitter className="h-7 w-7 md:h-8 md:w-8" />
            </Link>
            <Link href="saxenaanandita76@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors duration-200 transform hover:scale-110">
              <Mail className="h-7 w-7 md:h-8 md:w-8" />
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
