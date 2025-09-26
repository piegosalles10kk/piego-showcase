import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import { mockPortfolio } from '@/data/mockData';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: mockPortfolio.email,
      href: `mailto:${mockPortfolio.email}`,
      description: "Melhor forma de me contatar"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: mockPortfolio.telefone,
      href: `tel:${mockPortfolio.telefone}`,
      description: "Disponível durante horário comercial"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Veja meus projetos",
      href: mockPortfolio.github,
      description: "Código e contribuições"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Conecte-se comigo",
      href: mockPortfolio.linkedin,
      description: "Rede profissional"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Entre em Contato</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar a torná-lo realidade
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Vamos trabalhar juntos!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Estou sempre interessado em novos desafios e oportunidades de colaboração. 
                  Se você tem um projeto interessante ou uma oportunidade de trabalho, 
                  não hesite em me contatar.
                </p>
              </div>

              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4">
                      <a 
                        href={method.href} 
                        target={method.href?.startsWith('http') ? '_blank' : undefined}
                        rel={method.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 text-left"
                      >
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <method.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{method.title}</h4>
                          <p className="text-sm text-primary">{method.value}</p>
                          <p className="text-xs text-muted-foreground">{method.description}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="text-center space-y-4">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Contato Rápido</h3>
                      <p className="text-muted-foreground text-sm">
                        Clique abaixo para me enviar um email diretamente
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <a href={`mailto:${mockPortfolio.email}?subject=Oportunidade de Trabalho&body=Olá ${mockPortfolio.nome},%0D%0A%0D%0ATenho interesse em conversar sobre uma oportunidade...`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Enviar Email
                      </a>
                    </Button>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">ou</p>
                    </div>

                    <Button 
                      variant="outline"
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <a href={`https://wa.me/${mockPortfolio.telefone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                        <Phone className="h-4 w-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Location Info */}
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Localização</h4>
                    <p className="text-muted-foreground">Brasil</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Disponível para trabalho remoto e presencial
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;