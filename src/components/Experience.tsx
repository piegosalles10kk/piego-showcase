import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';
import { mockPortfolio } from '@/data/mockData';

const Experience = () => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      month: 'short',
      year: 'numeric'
    });
  };

  const calculateDuration = (startDate: Date, endDate?: Date) => {
    const end = endDate || new Date();
    const months = (end.getFullYear() - startDate.getFullYear()) * 12 + 
                   (end.getMonth() - startDate.getMonth());
    
    if (months < 12) {
      return `${months} ${months === 1 ? 'mês' : 'meses'}`;
    }
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? 'ano' : 'anos'}`;
    }
    
    return `${years} ${years === 1 ? 'ano' : 'anos'} e ${remainingMonths} ${remainingMonths === 1 ? 'mês' : 'meses'}`;
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Experiência Profissional</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha trajetória profissional e principais conquistas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5" />

            <div className="space-y-12">
              {mockPortfolio.experiencia.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1.5 z-10" />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 flex-1 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="card-hover">
                      <CardContent className="p-6 space-y-4">
                        {/* Header */}
                        <div className="space-y-2">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3 className="text-xl font-bold text-primary">
                              {exp.cargo}
                            </h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              {formatDate(exp.dataInicio)} - {exp.dataFim ? formatDate(exp.dataFim) : 'Atual'}
                            </div>
                          </div>
                          
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="font-medium">{exp.empresa}</span>
                            <span className="mx-2">•</span>
                            <span className="text-sm">
                              {calculateDuration(exp.dataInicio, exp.dataFim)}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.descricao}
                        </p>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm">Tecnologias utilizadas:</h4>
                          <div className="space-y-2">
                            {Object.entries(exp.tecnologiasUsadas).map(([category, techs]) => 
                              techs.length > 0 && (
                                <div key={category} className="flex flex-wrap gap-1">
                                  {techs.map((tech, techIndex) => (
                                    <Badge 
                                      key={techIndex} 
                                      variant="secondary"
                                      className="text-xs"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;