// Types based on the MongoDB schemas provided

export interface Technology {
  linguagem: string;
  nivel?: number;
}

export interface TechnologiesGroup {
  backend: Technology[];
  frontend: Technology[];
  dB: Technology[];
  deploy: Technology[];
}

export interface ProjectTechnologies {
  backend: string[];
  frontend: string[];
  dB: string[];
  deploy: string[];
}

export interface Experience {
  empresa: string;
  cargo: string;
  tecnologiasUsadas: ProjectTechnologies;
  dataInicio: Date;
  dataFim?: Date;
  descricao: string;
}

export interface Project {
  _id?: string;
  tituloProjeto: string;
  resumoProjeto: string;
  tecnologiasProjeto: ProjectTechnologies;
  dataCriacao: Date;
  imagemProjeto: string;
  descricaoCompletaProjeto: string;
  gitHubProjeto: string;
  deployProjeto?: string;
}

export interface Portfolio {
  _id?: string;
  nome: string;
  cargo: string;
  sobreMim: string;
  tecnologias: TechnologiesGroup;
  experiencia: Experience[];
  github?: string;
  linkedin?: string;
  telefone: string;
  email: string;
}