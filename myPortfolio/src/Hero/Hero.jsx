export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 relative">
      <div className="reveal">
        <p className="text-cyan-500 font-semibold tracking-wider mb-4 uppercase text-sm">Welcome to my portfolio</p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Shashwath</span>.<br/>
          I build things for the web.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          I am a third-year Computer Science Engineering student specializing in React.js and Node.js. 
          I thrive on turning complex problems into scalable, elegant web applications.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="px-8 py-4 bg-cyan-500 text-[#0a0a0a] font-bold rounded-lg hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1 flex items-center">
            View Projects 
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
          <a 
          href="/Shashwath_B_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 font-bold rounded-lg hover:border-gray-400 transition-all transform hover:-translate-y-1 flex items-center"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}