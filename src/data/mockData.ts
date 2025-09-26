import { Portfolio, Project } from '@/types/portfolio';
import ecommerceImage from '@/assets/ecommerce-project.jpg';
import taskManagerImage from '@/assets/task-manager-project.jpg';
import weatherDashboardImage from '@/assets/weather-dashboard-project.jpg';

export const mockPortfolio: Portfolio = {
  nome: "Piego Developer",
  cargo: "Backend Developer",
  sobreMim: "Desenvolvedor backend especializado em arquiteturas escaláveis e APIs robustas. Com mais de 4 anos de experiência construindo sistemas distribuídos, microserviços e soluções de alta performance. Apaixonado por clean code e boas práticas de desenvolvimento.",
  tecnologias: {
    backend: [
      { linguagem: "Node.js", nivel: 95 },
      { linguagem: "Python", nivel: 90 },
      { linguagem: "Java", nivel: 88 },
      { linguagem: "C#", nivel: 85 },
      { linguagem: "Go", nivel: 80 },
      { linguagem: "Express.js", nivel: 92 },
      { linguagem: "NestJS", nivel: 88 }
    ],
    frontend: [
      { linguagem: "React", nivel: 70 },
      { linguagem: "JavaScript", nivel: 75 },
      { linguagem: "HTML/CSS", nivel: 68 }
    ],
    dB: [
      { linguagem: "MongoDB", nivel: 92 },
      { linguagem: "PostgreSQL", nivel: 90 },
      { linguagem: "MySQL", nivel: 88 },
      { linguagem: "Redis", nivel: 85 },
      { linguagem: "Elasticsearch", nivel: 80 }
    ],
    deploy: [
      { linguagem: "Docker", nivel: 90 },
      { linguagem: "AWS", nivel: 88 },
      { linguagem: "Kubernetes", nivel: 85 },
      { linguagem: "CI/CD", nivel: 82 },
      { linguagem: "Jenkins", nivel: 78 }
    ]
  },
  experiencia: [
    {
      empresa: "TechCorp Solutions",
      cargo: "Senior Backend Developer",
      tecnologiasUsadas: {
        backend: ["Node.js", "NestJS", "TypeScript", "Microserviços"],
        frontend: [],
        dB: ["PostgreSQL", "MongoDB", "Redis"],
        deploy: ["Docker", "AWS", "Kubernetes"]
      },
      dataInicio: new Date("2022-03-15"),
      dataFim: new Date("2024-01-30"),
      descricao: "Arquitetura e desenvolvimento de sistemas distribuídos escaláveis. Liderou a migração para microserviços, implementou APIs GraphQL e RESTful, otimizou performance de banco de dados resultando em 40% de melhoria na velocidade."
    },
    {
      empresa: "FinTech Solutions",
      cargo: "Backend Developer",
      tecnologiasUsadas: {
        backend: ["Java", "Spring Boot", "C#"],
        frontend: [],
        dB: ["PostgreSQL", "MongoDB"],
        deploy: ["Docker", "AWS"]
      },
      dataInicio: new Date("2020-06-01"),
      dataFim: new Date("2022-02-28"),
      descricao: "Desenvolvimento de sistemas financeiros críticos com alta disponibilidade. Implementou integração bancária via APIs, processamento de transações em tempo real e compliance com regulamentações PCI DSS."
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
    tituloProjeto: "API Gateway Microserviços",
    resumoProjeto: "Gateway escalável para orquestração de microserviços com autenticação JWT, rate limiting e load balancing.",
    tecnologiasProjeto: {
      backend: ["Node.js", "Express.js", "JWT", "Redis"],
      frontend: [],
      dB: ["MongoDB", "Redis"],
      deploy: ["Docker", "Kubernetes", "AWS"]
    },
    dataCriacao: new Date("2024-01-15"),
    imagemProjeto: ecommerceImage,
    descricaoCompletaProjeto: "Sistema de API Gateway robusto desenvolvido para gerenciar comunicação entre microserviços. Inclui sistema de autenticação JWT, rate limiting por usuário, circuit breaker pattern, monitoramento de saúde dos serviços e balanceamento de carga inteligente.",
    gitHubProjeto: "https://github.com/piego-dev/api-gateway-microservices",
    deployProjeto: "https://api-gateway-demo.herokuapp.com"
  },
  {
    _id: "2",
    tituloProjeto: "Sistema de Processamento Assíncrono",
    resumoProjeto: "Sistema de filas para processamento assíncrono de tarefas em larga escala com retry automático.",
    tecnologiasProjeto: {
      backend: ["Python", "Celery", "RabbitMQ", "FastAPI"],
      frontend: [],
      dB: ["PostgreSQL", "Redis"],
      deploy: ["Docker", "AWS ECS"]
    },
    dataCriacao: new Date("2023-10-20"),
    imagemProjeto: taskManagerImage,
    descricaoCompletaProjeto: "Sistema robusto para processamento assíncrono de tarefas críticas. Implementa padrões de retry com backoff exponencial, dead letter queues, monitoramento de performance e dashboards de métricas em tempo real.",
    gitHubProjeto: "https://github.com/piego-dev/async-task-processor",
    deployProjeto: "https://task-processor-api.herokuapp.com"
  },
  {
    _id: "3",
    tituloProjeto: "API de Analytics em Tempo Real",
    resumoProjeto: "API para coleta e processamento de eventos de analytics com alta throughput e baixa latência.",
    tecnologiasProjeto: {
      backend: ["Go", "Kafka", "ClickHouse"],
      frontend: [],
      dB: ["ClickHouse", "Redis"],
      deploy: ["Kubernetes", "GCP"]
    },
    dataCriacao: new Date("2023-07-10"),
    imagemProjeto: weatherDashboardImage,
    descricaoCompletaProjeto: "Sistema de alta performance para ingestão e processamento de eventos de analytics. Processa milhões de eventos por segundo com agregações em tempo real, suporte a queries complexas e APIs otimizadas para dashboards.",
    gitHubProjeto: "https://github.com/piego-dev/realtime-analytics-api"
  }
];