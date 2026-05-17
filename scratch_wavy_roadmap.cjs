const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const startStr = "const CareerPathSection = () => {";
const endStr = "const FounderMessageSection = () => (";

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr, startIndex);

if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    const newRoadmap = `const CareerPathSection = () => {
  const steps = [
    { title: 'Skill Assessment', desc: 'Identify your strengths.', icon: Briefcase, x: 10, y: 55, textPos: 'bottom' },
    { title: 'Immersive Learning', desc: 'Project-based mentorship.', icon: User, x: 30, y: 70, textPos: 'top' },
    { title: 'Portfolio Building', desc: 'Build real-world apps.', icon: BookOpen, x: 50, y: 50, textPos: 'bottom' },
    { title: 'Interview Prep', desc: 'Mock sessions & reviews.', icon: Users, x: 70, y: 65, textPos: 'top' },
    { title: 'Dream Career', desc: 'Land your dream role.', icon: Trophy, x: 90, y: 40, textPos: 'bottom' }
  ];

  return (
    <section className="bg-slate-50 relative overflow-hidden font-sans pb-24">
      {/* Top Blue Wave Area */}
      <div className="absolute top-0 left-0 w-full h-[450px] bg-[#38bdf8]">
         {/* Subtle background pattern in the blue area */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 100px 100px, white 2px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      {/* Cloud-like Bottom divider for the blue area */}
      <div className="absolute top-[300px] left-0 w-full z-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-auto text-slate-50 fill-current">
          <path d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,213.3C672,224,768,192,864,165.3C960,139,1056,117,1152,133.3C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container-wide px-6 relative z-20 pt-20">
         <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white mb-10"
         >
            <h2 className="text-[48px] md:text-[64px] font-black leading-[1.1] uppercase tracking-wide">
               Career <br /> Roadmap
            </h2>
         </motion.div>
         
         {/* The Rocket & Trail */}
         <motion.div 
            initial={{ opacity: 0, x: -100, y: 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="absolute top-10 right-10 md:right-32 lg:right-48 z-30 flex items-center"
         >
            {/* Trail */}
            <div className="w-64 h-8 bg-gradient-to-r from-transparent to-white/80 -rotate-45 origin-right rounded-full blur-[4px] absolute right-16 top-10 hidden md:block"></div>
            {/* Rocket */}
            <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center text-slate-800 -rotate-45 relative z-10 border-[6px] border-slate-100 group hover:scale-110 transition-transform">
               <Rocket size={40} className="text-slate-800 fill-slate-800 group-hover:animate-bounce" />
               <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-12 bg-green-400 rounded-full blur-[8px] opacity-80"></div>
               <div className="absolute top-4 right-4 w-4 h-4 border-4 border-slate-300 rounded-full"></div>
            </div>
         </motion.div>

         {/* The Wavy Path Container */}
         <div className="w-full overflow-x-auto pb-20 pt-10 md:pt-20 scrollbar-hide">
            <div className="min-w-[1000px] h-[450px] relative">
               
               {/* SVG Dashed Path */}
               <svg viewBox="0 0 1000 400" className="absolute inset-0 w-full h-[400px] pointer-events-none" preserveAspectRatio="none">
                  <path 
                     d="M 0 160 C 50 160, 50 220, 100 220 C 200 220, 200 280, 300 280 C 400 280, 400 200, 500 200 C 600 200, 600 260, 700 260 C 800 260, 800 160, 900 160 C 950 160, 950 100, 1000 100" 
                     fill="none" 
                     stroke="#94a3b8" 
                     strokeWidth="3" 
                     strokeDasharray="16 16" 
                  />
               </svg>

               {/* Nodes */}
               {steps.map((step, i) => (
                  <motion.div 
                     initial={{ opacity: 0, scale: 0.5, y: 20 }}
                     whileInView={{ opacity: 1, scale: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.5, delay: i * 0.1 }}
                     key={i} 
                     className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10"
                     style={{ left: \`\${step.x}%\`, top: \`\${step.y}%\` }}
                  >
                     {/* The Circle */}
                     <div className="w-24 h-24 bg-white rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex items-center justify-center text-slate-800 relative z-10 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300">
                        <step.icon size={40} className="fill-slate-800 text-slate-800" />
                     </div>

                     {/* The Text Box */}
                     <div className={\`absolute text-center w-40 \${step.textPos === 'top' ? 'bottom-full mb-4' : 'top-full mt-4'}\`}>
                        <div className="font-bold text-slate-800 text-[15px] mb-1">{step.title}</div>
                        <div className="font-medium text-slate-500 text-[13px] leading-relaxed">{step.desc}</div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
};\n\n`;

    content = content.substring(0, startIndex) + newRoadmap + content.substring(endIndex);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Roadmap replaced with Wavy template design successfully");
} else {
    console.log("Could not find CareerPathSection! Indexes:", startIndex, endIndex);
}
