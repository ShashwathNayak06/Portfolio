const skillsData = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3 / Tailwind"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "WebRTC"]
  },
  {
    category: "Database & Tools",
    items: ["PostgreSQL", "SQL", "Git / GitHub", "VS Code"]
  }
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>Technical Skills</h2>
      
      <div className="skills-container">
        {skillsData.map((skillGroup, index) => (
          <div className="skill-category" key={index}>
            <h3>{skillGroup.category}</h3>
            <ul className="skill-list">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="skill-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}