import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Rocket } from 'lucide-react';
import { mockPortfolio } from '@/data/mockData';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Código limpo e bem documentado seguindo as melhores práticas de desenvolvimento."
    },
    {
      icon: Lightbulb,
      title: "Soluções Inovadoras",
      description: "Criação de soluções criativas e eficientes para problemas complexos."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Foco em otimização e performance para melhor experiência do usuário."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Sobre Mim</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha trajetória e paixão por desenvolvimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Olá! Eu sou o <span className="gradient-text">{mockPortfolio.nome}</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {mockPortfolio.sobreMim}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Ao longo da minha carreira, tive a oportunidade de trabalhar em projetos diversos,
                desde startups até grandes corporações, sempre buscando entregar valor através
                da tecnologia. Minha paixão por aprender me mantém atualizado com as últimas
                tendências e ferramentas do mercado.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-semibold text-primary">Email</h4>
                <p className="text-sm text-muted-foreground">{mockPortfolio.email}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Telefone</h4>
                <p className="text-sm text-muted-foreground">{mockPortfolio.telefone}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;