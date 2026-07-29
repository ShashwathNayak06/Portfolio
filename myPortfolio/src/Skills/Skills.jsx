
export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-8"></div>
          <p className="text-gray-400 leading-relaxed mb-6">
            I've spent the last three years exploring the entire stack. While my focus is on crafting seamless frontend experiences with React, I am equally comfortable designing relational databases and building APIs to support them.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Here are a few technologies I’ve been working with recently:
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#141414]/60 backdrop-blur-md border border-white/5 p-5 rounded-lg reveal delay-100">
            <h4 className="text-cyan-500 font-semibold mb-3 border-b border-gray-700 pb-2">Frontend</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center"><span className="text-cyan-500 mr-2">▹</span> React.js</li>
              <li className="flex items-center"><span className="text-cyan-500 mr-2">▹</span> JavaScript (ES6+)</li>
              <li className="flex items-center"><span className="text-cyan-500 mr-2">▹</span> Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-[#141414]/60 backdrop-blur-md border border-white/5 p-5 rounded-lg reveal delay-200">
            <h4 className="text-cyan-500 font-semibold mb-3 border-b border-gray-700 pb-2">Backend</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center"><span className="text-cyan-500 mr-2">▹</span> Node.js</li>
              <li className="flex items-center"><span className="text-cyan-500 mr-2">▹</span> Express</li>
              <li className="flex items-center"><span className="text-cyan-500 mr-2">▹</span> REST APIs</li>
            </ul>
          </div>
          <div className="bg-[#141414]/60 backdrop-blur-md border border-white/5 p-5 rounded-lg reveal delay-100">
            <h4 className="text-cyan-500 font-semibold mb-3 border-b border-gray-700 pb-2">Database</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center"><span className="text-cyan-500 mr-2">▹</span> PostgreSQL</li>
              <li className="flex items-center"><span className="text-cyan-500 mr-2">▹</span> MySQL</li>
              <li className="flex items-center"><span className="text-cyan-500 mr-2">▹</span> MongoDB</li>
            </ul>
          </div>
          <div className="bg-[#141414]/60 backdrop-blur-md border border-white/5 p-5 rounded-lg reveal delay-200">
            <h4 className="text-cyan-500 font-semibold mb-3 border-b border-gray-700 pb-2">Tools</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center"><span className="text-cyan-500 mr-2">▹</span> Git & GitHub</li>
              <li className="flex items-center"><span className="text-cyan-500 mr-2">▹</span> Postman</li>
              <li className="flex items-center"><span className="text-cyan-500 mr-2">▹</span> VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}