import { useEffect, useRef, useState } from 'react';
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import './App.css'

function App() {
const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Hook 1: Custom Cursor Logic
  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

    if (window.matchMedia("(any-hover: hover)").matches) {
      const moveCursor = (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        outline.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
      };

      window.addEventListener('mousemove', moveCursor);

      const interactables = document.querySelectorAll('a, button');
      interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
          outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
          outline.style.backgroundColor = 'rgba(6, 182, 212, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
          outline.style.transform = 'translate(-50%, -50%) scale(1)';
          outline.style.backgroundColor = 'transparent';
        });
      });

      return () => {
        window.removeEventListener('mousemove', moveCursor);
      };
    }
  }, []);

  // Hook 2: Scroll Animations & Navbar Scroll State
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "-50px" });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#050505] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-[#050505] text-slate-50 min-h-screen ...">
      
      
    
      {/* Custom Cursors */}
      <div ref={dotRef} className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-cyan-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"></div>
      <div ref={outlineRef} className="cursor-outline fixed top-0 left-0 w-10 h-10 border-2 border-cyan-500/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-colors duration-200"></div>

      {/* Background Blobs */}
      <div className="blob-cont">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <div className="fixed bottom-0 left-8 z-50 hidden md:flex flex-col items-center gap-6">
  
        {/* GitHub */}
        <a href="https://github.com/ShashwathNayak06" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all hover:-translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/shashwathb06" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all hover:-translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/shash____6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all hover:-translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>

        {/* Vertical Line */}
        <div className="w-[1px] h-24 bg-gray-500/50 mt-2"></div>
      </div>

      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#141414]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1400px] mx-auto w-[92%] flex justify-between items-center">
          <a href="#" className="text-3xl font-bold tracking-tighter">Dev<span className="text-cyan-500">.</span></a>

          {/* Navigation Links - Increased from text-sm to text-base (or text-lg on large screens) */}
          <div className="hidden md:flex space-x-12 text-base lg:text-lg font-medium text-gray-300">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
            
          {/* Hire Me Button - Increased padding (px-8 py-3) and text size (text-base) */}
          <a href="#contact" className="hidden md:block px-8 py-3 border border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-[#050505] transition-all text-base font-bold">
            Hire Me
          </a>

        </div>
      </nav>

    
      <main className="max-w-[1400px] mx-auto w-[92%]">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="text-center py-6 border-t border-gray-800 text-sm text-gray-500">
        <p>Built with React & Tailwind. © {new Date().getFullYear()} Shashwath Nayak.</p>
      </footer>
    </div>
  );
}

export default App
