// skills.ts

export type SkillArea = "Frontend" | "Backend" | "CI/CD" | "Database" | "Tool";

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface Skill {
  icon: string;
  name: string;
  area: SkillArea;
  level: SkillLevel;
}

  

export const skills: Skill[] = [
    // Frontend
    { name: "TypeScript", area: "Frontend", level: "Expert", icon: "devicon-typescript-plain" },
    { name: "React", area: "Frontend", level: "Expert", icon: "devicon-react-original" },
    { name: "Tailwind CSS", area: "Frontend", level: "Advanced", icon: "devicon-tailwindcss-plain" },
    { name: "Bootstrap", area: "Frontend", level: "Advanced", icon: "devicon-bootstrap-plain" },
    { name: "HTML5", area: "Frontend", level: "Expert", icon: "devicon-html5-plain" },
    { name: "CSS3", area: "Frontend", level: "Intermediate", icon: "devicon-css3-plain" },
  
    // Backend
    { name: "Java", area: "Backend", level: "Advanced", icon: "devicon-java-plain" },
    { name: "Spring Boot", area: "Backend", level: "Advanced", icon: "devicon-spring-plain" },
    { name: "Node.js", area: "Backend", level: "Advanced", icon: "devicon-nodejs-plain" },
    { name: "Express.js", area: "Backend", level: "Intermediate", icon: "devicon-express-original" },
    { name: "Python", area: "Backend", level: "Beginner", icon: "devicon-python-plain" },
  
    // CI/CD
    { name: "Docker", area: "CI/CD", level: "Advanced", icon: "devicon-docker-plain" },
    { name: "Kubernetes", area: "CI/CD", level: "Beginner", icon: "devicon-kubernetes-plain" },
  
    // Database
    { name: "PostgreSQL", area: "Database", level: "Advanced", icon: "devicon-postgresql-plain" },
    { name: "SQL", area: "Database", level: "Advanced", icon: "devicon-mysql-plain" },
  
    // Tools
    { name: "VS Code", area: "Tool", level: "Expert", icon: "devicon-vscode-plain" },
    { name: "IntelliJ JetBrains", area:"Tool", level: "Expert", icon: "devicon-intellij-plain" },
    { name: "Postman", area: "Tool", level: "Advanced", icon: "devicon-postman-plain" },
    { name: "Figma", area: "Tool", level: "Beginner", icon: "devicon-figma-plain" },
    { name: "npm Package Manager", area: "Tool", level: "Advanced", icon: "devicon-npm-original-wordmark" },
    { name: "Git", area: "Tool", level: "Advanced", icon: "devicon-git-plain" },
  ];