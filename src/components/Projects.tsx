import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { mockProjects } from '@/data/mockData';
import { Project } from '@/types/portfolio';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="card-hover group cursor-pointer h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
          <img 
            src={project.imagemProjeto} 
            alt={project.tituloProjeto}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {project.tituloProjeto}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {formatDate(project.dataCriacao)}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.resumoProjeto}
        </p>

        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Tecnologias:</h4>
            <div className="flex flex-wrap gap-1">
              {[
                ...project.tecnologiasProjeto.backend,
                ...project.tecnologiasProjeto.frontend,
                ...project.tecnologiasProjeto.dB,
                ...project.tecnologiasProjeto.deploy
              ].slice(0, 6).map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <div className="flex gap-2 w-full">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.gitHubProjeto, '_blank');
            }}
          >
            <Github className="h-4 w-4 mr-2" />
            Código
          </Button>
          {project.deployProjeto && (
            <Button 
              size="sm" 
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.deployProjeto, '_blank');
              }}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Projetos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, showcasing diferentes tecnologias e soluções
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project, index) => (
            <div key={index} onClick={() => setSelectedProject(project)}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Project Details Modal would go here if needed */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-auto">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{selectedProject.tituloProjeto}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(selectedProject.dataCriacao)}
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                  >
                    ×
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={selectedProject.imagemProjeto} 
                    alt={selectedProject.tituloProjeto}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject.descricaoCompletaProjeto}
                </p>

                <div className="space-y-4 mb-6">
                  {Object.entries(selectedProject.tecnologiasProjeto).map(([category, techs]) => 
                    techs.length > 0 && (
                      <div key={category}>
                        <h4 className="font-semibold text-sm mb-2 capitalize">
                          {category}:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {techs.map((tech, index) => (
                            <Badge key={index} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1" asChild>
                    <a href={selectedProject.gitHubProjeto} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Ver Código
                    </a>
                  </Button>
                  {selectedProject.deployProjeto && (
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={selectedProject.deployProjeto} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;