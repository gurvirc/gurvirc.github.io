import viperProtect from "../images/ViperProtect.png"
import chefClaude from '../images/ChefClaude.png'
import hangman from '../images/AssemblyHangman.png'
import crime from '../images/Crime.png'
export const projects = [
  {
    title: "Chef Claude V2",
    description: "A full-stack recipe generation app with AI-powered suggestions, user authentication, and a personal recipe saving system.",
    tags: ["React", "Express.js", "SQLite"],
    github: "https://github.com/gurvirc/chef-claude-remake",
    demo: "#",
    number: "01",
    image: chefClaude,
  },
  {
    title: "Viper Protection",
    description: "A full-stack web app that protects artists' work by applying invisible adversarial poisoning to prevent unauthorized AI training.",
    tags: ["Python", "D3.js", "REST API"],
    github: "https://github.com/MountainM2026/ViperProtection",
    demo: "https://www.youtube.com/watch?v=39qpKKAfcaE",
    number: "02",
    image: viperProtect,
  },
  {
    title: "Predictive Traffic & Hazard Detector",
    description: "A full-stack web app that analyzes vancouvers live camera feeds in real time to detect traffic hazards and crime using a fine-tuned YOLOv11 model.",
    tags: ["React", "Java", "Spring-boot", "YOLOV11", "Web-Sockets"],
    github: "https://github.com/TelusHackathon2026/rainCity",
    demo: "#",
    number: "03",
    image: crime,
  },
  {
    title: "Assembly Hangman",
    description: "A React web app where every wrong Hangman guess eliminates a programming language from existence, with Assembly as the last one standing.",
    tags: ["React", "Javascript", "CSS", "HTML"],
    github: "#",
    demo: "#",
    number: "04",
    image: hangman,
  },
];