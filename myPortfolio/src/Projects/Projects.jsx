
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
    <section id="projects" className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 reveal">Featured Work</h2>
      <div className="w-20 h-1 bg-cyan-500 mb-12 reveal"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <div key={project.id} className={`bg-[#141414]/60 backdrop-blur-md border border-white/5 p-6 rounded-xl transition-all duration-300 reveal ${project.delay} hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 hover:-translate-y-1 group relative overflow-hidden flex flex-col`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 opacity-5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:opacity-20 transition-opacity"></div>
            
            <div className="flex justify-between items-center mb-6">
              <svg className="w-10 h-10 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
              {project.desc}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.stack.map(tech => (
                <span key={tech} className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}