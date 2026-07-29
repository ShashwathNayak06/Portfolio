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
          <a href="#" className="px-8 py-4 bg-[#141414]/60 backdrop-blur-md border border-gray-700 font-bold rounded-lg hover:border-gray-400 transition-all transform hover:-translate-y-1 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}