export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm SHASHWATH B.</h1>
        <h2>Full-Stack Developer specializing in React.js & Node.js.</h2>
        <p>
          I am a third-year Computer Science Engineering student with a passion 
          for building scalable web applications and robust database management 
          systems. Based in Mangaluru, I'm actively seeking internship opportunities 
          to apply clean code and efficient architecture in a fast-paced 
          engineering environment.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="/resume.pdf" target="_blank" className="btn-secondary">Download Resume</a>
        </div>
      </div>
    </section>
  );
}