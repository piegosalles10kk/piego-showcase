import { Portfolio, Project } from '@/types/portfolio';
import ecommerceImage from '@/assets/ecommerce-project.jpg';
import taskManagerImage from '@/assets/task-manager-project.jpg';
import weatherDashboardImage from '@/assets/weather-dashboard-project.jpg';

export const mockPortfolio: Portfolio = {
  nome: "Piego Developer",
  cargo: "Full Stack Developer",
  sobreMim: "Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes. Com experiência em diversas tecnologias modernas, busco sempre entregar código limpo e performático, focando na melhor experiência do usuário.",
  tecnologias: {
    backend: [
      { linguagem: "Node.js", nivel: 90 },
      { linguagem: "Python", nivel: 85 },
      { linguagem: "Java", nivel: 75 },
      { linguagem: "Express.js", nivel: 88 },
      { linguagem: "NestJS", nivel: 80 }
    ],
    frontend: [
      { linguagem: "React", nivel: 95 },
      { linguagem: "TypeScript", nivel: 90 },
      { linguagem: "Next.js", nivel: 85 },
      { linguagem: "Vue.js", nivel: 70 },
      { linguagem: "Tailwind CSS", nivel: 92 }
    ],
    dB: [
      { linguagem: "MongoDB", nivel: 88 },
      { linguagem: "PostgreSQL", nivel: 82 },
      { linguagem: "MySQL", nivel: 75 },
      { linguagem: "Redis", nivel: 70 }
    ],
    deploy: [
      { linguagem: "Docker", nivel: 85 },
      { linguagem: "AWS", nivel: 80 },
      { linguagem: "Vercel", nivel: 90 },
      { linguagem: "Heroku", nivel: 75 }
    ]
  },
  experiencia: [
    {
      empresa: "TechCorp Solutions",
      cargo: "Senior Full Stack Developer",
      tecnologiasUsadas: {
        backend: ["Node.js", "NestJS", "TypeScript"],
        frontend: ["React", "Next.js", "Tailwind CSS"],
        dB: ["PostgreSQL", "MongoDB"],
        deploy: ["Docker", "AWS"]
      },
      dataInicio: new Date("2022-03-15"),
      dataFim: new Date("2024-01-30"),
      descricao: "Liderou o desenvolvimento de aplicações web complexas, implementando arquiteturas escaláveis e otimizando performance. Responsável por mentoria de desenvolvedores júnior e definição de padrões de código."
    },
    {
      empresa: "StartupXYZ",
      cargo: "Full Stack Developer",
      tecnologiasUsadas: {
        backend: ["Node.js", "Express.js"],
        frontend: ["React", "JavaScript", "CSS3"],
        dB: ["MongoDB"],
        deploy: ["Heroku", "Vercel"]
      },
      dataInicio: new Date("2020-06-01"),
      dataFim: new Date("2022-02-28"),
      descricao: "Desenvolveu do zero a plataforma principal da startup, incluindo sistema de autenticação, painel administrativo e APIs RESTful. Participou ativamente das decisões de arquitetura e tecnologia."
    }
  ],
  github: "https://github.com/piego-dev",
  linkedin: "https://linkedin.com/in/piego-developer",
  telefone: "+55 11 99999-9999",
  email: "piego.developer@email.com"
};

export const mockProjects: Project[] = [
  {
    _id: "1",
    tituloProjeto: "E-commerce Platform",
    resumoProjeto: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque.",
    tecnologiasProjeto: {
      backend: ["Node.js", "Express.js", "JWT"],
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      dB: ["MongoDB", "Redis"],
      deploy: ["Docker", "AWS EC2"]
    },
    dataCriacao: new Date("2024-01-15"),
    imagemProjeto: ecommerceImage,
    descricaoCompletaProjeto: "Uma plataforma de e-commerce completa desenvolvida com as melhores práticas de desenvolvimento. Inclui sistema de autenticação seguro, carrinho de compras, processamento de pagamentos, painel administrativo para gestão de produtos e pedidos, e sistema de notificações em tempo real.",
    gitHubProjeto: "https://github.com/piego-dev/ecommerce-platform",
    deployProjeto: "https://ecommerce-demo.vercel.app"
  },
  {
    _id: "2",
    tituloProjeto: "Task Management App",
    resumoProjeto: "Aplicação de gerenciamento de tarefas com colaboração em equipe e notificações em tempo real.",
    tecnologiasProjeto: {
      backend: ["NestJS", "TypeScript", "Socket.io"],
      frontend: ["Next.js", "React Query", "Chakra UI"],
      dB: ["PostgreSQL", "Prisma"],
      deploy: ["Vercel", "Railway"]
    },
    dataCriacao: new Date("2023-10-20"),
    imagemProjeto: taskManagerImage,
    descricaoCompletaProjeto: "Aplicação moderna para gerenciamento de tarefas e projetos em equipe. Possui funcionalidades de colaboração em tempo real, sistema de notificações, relatórios de produtividade e integração com calendários externos.",
    gitHubProjeto: "https://github.com/piego-dev/task-manager",
    deployProjeto: "https://tasks-manager-pro.vercel.app"
  },
  {
    _id: "3",
    tituloProjeto: "Weather Dashboard",
    resumoProjeto: "Dashboard meteorológico com previsões avançadas e mapas interativos.",
    tecnologiasProjeto: {
      backend: ["Python", "FastAPI", "OpenWeather API"],
      frontend: ["Vue.js", "D3.js", "Vuetify"],
      dB: ["PostgreSQL"],
      deploy: ["Docker", "Digital Ocean"]
    },
    dataCriacao: new Date("2023-07-10"),
    imagemProjeto: weatherDashboardImage,
    descricaoCompletaProjeto: "Dashboard completo para visualização de dados meteorológicos com mapas interativos, gráficos dinâmicos e previsões detalhadas. Inclui alertas personalizados e histórico de dados climáticos.",
    gitHubProjeto: "https://github.com/piego-dev/weather-dashboard"
  }
];