
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/shared/section-wrapper';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  { id: 8, title: 'Sarcasm Detection Using LSTM', description: 'This project is a sarcasm detection model built using Deep Learning (LSTM). The model is trained on a dataset of sarcastic and non-sarcastic texts and achieves high accuracy in detecting sarcasm in textual data. The project includes training, testing, and deployment scripts.', technologies: ['Python', 'TensorFlow', 'Keras', 'NLTK', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'], imageUrl: '/images/sarcasmdetector.png', imageHint: 'chatbot interface modern', githubUrl: 'https://github.com/AnanditaSaxenaa/sarcasm_detector'},
  { id: 7, title: 'Chat with Multiple PDFs', description: 'TThis project is a Streamlit web app that allows users to interactively chat with multiple PDF documents using natural language queries. It uses LangChain, FAISS, Hugging Face Embeddings, and a LLM (Mistral-7B-Instruct) to provide intelligent, context-aware answers from the uploaded documents.', technologies: ['Streamlit', 'Mistral-7B-Instruct (via Hugging Face Hub)','sentence-transformers/all-MiniLM-L6-v2','FAISS','PyPDF2','LangChain'], imageUrl: '/images/multiplepdfs.png', imageHint: 'chatbot interface modern', githubUrl: 'https://github.com/AnanditaSaxenaa/Chat-with-Multiple-PDFs'},
  { id: 1, title: 'AI Chatbot', description: 'This is an AI-powered chatbot built using the Gemini API. The project leverages HTML, CSS, and JavaScript to create an intuitive and interactive user interface. The chatbot is designed to be responsive and includes a feature that allows users to upload image files for processing and receive responses based on the uploaded content.', technologies: ['HTML', 'CSS', 'Javascript', 'Gemini-API'], imageUrl: '/images/chatbot.png', imageHint: 'chatbot interface modern', githubUrl: 'https://github.com/AnanditaSaxenaa/Chatbot', liveUrl: 'https://ananditasaxenaa.github.io/Chatbot/' },
  { id: 2, title: 'Dynamic portfolio website', description: 'Developed a dynamic personal portfolio website using Next.js, React, and TypeScript to showcase software development projects and AI expertise. Implemented a modern, responsive UI with Tailwind CSS and ShadCN UI components, ensuring a professional and accessible user experience. The platform effectively highlights skills, project details, and provides contact avenues.', technologies: ['Next.js', 'React', 'Node.js', 'TailwindCSS','Typescript','Shadcn UI'], imageUrl: '/images/newportfolio.png', imageHint: 'dashboard graph', githubUrl: 'https://github.com/AnanditaSaxenaa/dev-portfolio', liveUrl: 'https://ananditasportfolio.netlify.app/' },
  { id: 3, title: 'Simon Game', description: 'Created a Simon-Game utilizing basically jQuery, JavaScript, HTML, CSS. A practice project part of a course.', technologies: ['jQuery', 'HTML', 'CSS', 'Javascript'], imageUrl: '/images/simon.png', imageHint: 'online store sleek', githubUrl: 'https://github.com/AnanditaSaxenaa/Simon-Game' , liveUrl: 'https://ananditasaxenaa.github.io/Simon-Game/'},
  { id: 4, title: 'Instruments', description: 'Create a web-based virtual instrument platform utilizing HTML, CSS, and JavaScript. Users can play a selection of instruments via keyboard input or on-screen clicks.', technologies: ['HTML', 'CSS', 'Javascript', ' Bootstrap'], imageUrl: '/images/drums.png', imageHint: 'kanban board app', githubUrl: 'https://github.com/AnanditaSaxenaa/Drum-Kit?tab=readme-ov-file', liveUrl: 'https://ananditasdrumkit.netlify.app/' },
  { id: 5, title: 'Royal Blue Hotel Website', description: 'Developed a responsive hotel booking website using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL. The platform enables online reservations, manages inventory, and offers real-time updates.', technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap'], imageUrl: '/images/hotel.png', imageHint: 'social media dashboard', githubUrl: 'https://github.com/AnanditaSaxenaa/Royal_Blue_Hotel' },
  { id: 6, title: 'Basic Portfolio Website', description: 'This portfolio website is designed to be fully responsive, ensuring optimal viewing on various screen sizes. In addition to the homepage, it features dedicated pages for About, Contact, Projects, and Skills.', technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap'], imageUrl: '/images/oldportfolio.png', imageHint: 'portfolio design clean', githubUrl: 'https://github.com/AnanditaSaxenaa/Anandita_Portfolio', liveUrl: 'https://ananditasaxenaa.github.io/Anandita_Portfolio/' },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper 
      id="projects" 
      title="Featured Projects"
      subtitle="A glimpse into my recent projects, highlighting my strengths in AI, web development"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out rounded-xl group">
            <CardHeader className="p-0 relative overflow-hidden">
            <div className="w-full h-56 bg-black flex items-center justify-center">
  <Image
    src={project.imageUrl}
    alt={project.title}
    width={600}
    height={400}
    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
    data-ai-hint={project.imageHint}
  />
</div>

               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
              <CardTitle className="text-2xl font-headline mb-3 text-foreground">{project.title}</CardTitle>
              <p className="text-muted-foreground text-sm font-body leading-relaxed mb-5 flex-grow">{project.description}</p>
              <div className="mb-5">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-body text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <div className="flex justify-between items-center w-full">
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild className="font-body group/button transition-transform duration-200 hover:scale-105">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Github className="mr-2 h-4 w-4 text-muted-foreground group-hover/button:text-primary transition-colors" /> GitHub
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="default" size="sm" asChild className="font-body group/button transition-transform duration-200 hover:scale-105">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                         Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
                {(!project.githubUrl || !project.liveUrl) && project.liveUrl !== '#' && project.githubUrl !== '#' && (
                   <Button variant="link" size="sm" asChild className="font-body text-primary p-0">
                     
                   </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
