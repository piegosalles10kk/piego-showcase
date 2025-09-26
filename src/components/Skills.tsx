import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockPortfolio } from '@/data/mockData';
import { Technology } from '@/types/portfolio';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: mockPortfolio.tecnologias.backend,
      color: "bg-blue-500"
    },
    {
      title: "Frontend", 
      skills: mockPortfolio.tecnologias.frontend,
      color: "bg-green-500"
    },
    {
      title: "Database",
      skills: mockPortfolio.tecnologias.dB,
      color: "bg-purple-500"
    },
    {
      title: "Deploy & DevOps",
      skills: mockPortfolio.tecnologias.deploy,
      color: "bg-orange-500"
    }
  ];

  const SkillBar = ({ skill }: { skill: Technology }) => {
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-medium">{skill.linguagem}</span>
          <Badge variant="secondary">{skill.nivel}%</Badge>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full skill-bar rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.nivel}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Habilidades Técnicas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo no desenvolvimento de soluções
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${category.color}`} />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Top Skills Summary */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">Principais Tecnologias</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ...mockPortfolio.tecnologias.backend.slice(0, 2),
              ...mockPortfolio.tecnologias.frontend.slice(0, 2),
              ...mockPortfolio.tecnologias.dB.slice(0, 1),
              ...mockPortfolio.tecnologias.deploy.slice(0, 1)
            ].map((skill, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                {skill.linguagem}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;