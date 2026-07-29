// 1. Define your project data outside the component (or fetch it from an API later)
const projectData = [
  {
    id: 1,
    title: "WebRTC VS Code Extension",
    stack: ["JavaScript", "WebRTC", "Node.js"],
    description: "A hackathon project enabling real-time video meetings and synchronized code sharing directly within the editor.",
    githubLink: "#",
  },
  {
    id: 2,
    title: "FuelPro DBMS",
    stack: ["SQL", "PostgreSQL", "Relational Design"],
    description: "A comprehensive fuel station management system featuring complex relational schemas and optimized database queries for inventory and transactions.",
    githubLink: "#",
  },
  {
    id: 3,
    title: "AI Crop Advisory System",
    stack: ["React.js", "Node.js", "AI Integration"],
    description: "Developed for the Smart India Hackathon (SIH), this platform provides farmers with AI-driven query support and actionable agricultural insights.",
    githubLink: "#",
  }
];

// 2. The main component
export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>Featured Projects</h2>
      
      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            
            <div className="tech-stack">
              {project.stack.map((tech, index) => (
                <span key={index} className="tech-pill">{tech}</span>
              ))}
            </div>
            
            <p>{project.description}</p>
            
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}