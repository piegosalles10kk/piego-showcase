import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import { mockPortfolio } from '@/data/mockData';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">{mockPortfolio.nome}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              {mockPortfolio.cargo}
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {mockPortfolio.sobreMim}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto"
            >
              Ver Projetos
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => window.open('/cv.pdf', '_blank')}
            >
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center pt-12">
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;