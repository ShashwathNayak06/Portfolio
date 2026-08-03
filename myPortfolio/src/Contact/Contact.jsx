

export default function Contact() {
  return (
    <section id="contact" className="py-32 mb-20 text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 reveal">Get In Touch</h2>
      <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8 reveal"></div>
      <p className="text-gray-400 mb-10 text-lg reveal delay-100">
        I'm currently looking for internship opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
      </p>
      <a href="mailto:shashwathnayak658@gmail.com" className="reveal delay-200 inline-block px-10 py-4 bg-transparent text-cyan-500 font-bold rounded-lg border-2 border-cyan-500 hover:bg-cyan-500/10 transition-all transform hover:-translate-y-1">
        Say Hello
      </a>
    </section>
  );
}