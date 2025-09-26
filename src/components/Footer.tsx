import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { mockPortfolio } from '@/data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              {mockPortfolio.nome}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {mockPortfolio.cargo}
            </p>
            <div className="flex space-x-2">
              {mockPortfolio.github && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={mockPortfolio.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {mockPortfolio.linkedin && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={mockPortfolio.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              )}
              <Button variant="ghost" size="sm" asChild>
                <a href={`mailto:${mockPortfolio.email}`}>
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navegação</h4>
            <nav className="flex flex-col space-y-2">
              <a 
                href="#home" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Início
              </a>
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Sobre
              </a>
              <a 
                href="#skills" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Habilidades
              </a>
              <a 
                href="#projects" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projetos
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {mockPortfolio.email}
              </p>
              <p className="text-sm text-muted-foreground">
                {mockPortfolio.telefone}
              </p>
              <p className="text-sm text-muted-foreground">
                Brasil
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© {currentYear} {mockPortfolio.nome}. Feito com</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>e React</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Disponível para novas oportunidades
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;