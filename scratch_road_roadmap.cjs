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
    { id: '01', title: 'Skill Assessment', desc: 'Identify your strengths.', icon: Briefcase, x: 10, y: 25, type: 'peak', color: 'text-teal-500', fill: 'from-teal-400 to-teal-600', tail: 'border-t-teal-600' },
    { id: '02', title: 'Immersive Learning', desc: 'Project-based mentorship.', icon: User, x: 30, y: 75, type: 'valley', color: 'text-cyan-500', fill: 'from-cyan-400 to-cyan-600', tail: 'border-b-cyan-400' },
    { id: '03', title: 'Portfolio Building', desc: 'Build real-world apps.', icon: BookOpen, x: 50, y: 25, type: 'peak', color: 'text-blue-500', fill: 'from-blue-500 to-blue-700', tail: 'border-t-blue-700' },
    { id: '04', title: 'Interview Prep', desc: 'Mock sessions & reviews.', icon: Users, x: 70, y: 75, type: 'valley', color: 'text-fuchsia-500', fill: 'from-fuchsia-500 to-purple-600', tail: 'border-b-fuchsia-500' },
    { id: '05', title: 'Dream Career', desc: 'Land your dream role.', icon: Trophy, x: 90, y: 25, type: 'peak', color: 'text-orange-500', fill: 'from-amber-400 to-orange-500', tail: 'border-t-orange-500' }
  ];

  return (
    <section className="bg-[#f8fafc] relative overflow-hidden font-sans py-32 border-y border-slate-200">
      <div className="container-wide px-6">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
         >
            <h2 className="text-[36px] md:text-[48px] font-black text-slate-800 mb-4">
               Career Roadmap
            </h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">A proven step-by-step path to guide you from absolute beginner to a successful tech professional.</p>
         </motion.div>

         {/* The Wavy Road Container */}
         <div className="w-full overflow-x-auto pb-10 scrollbar-hide">
            <div className="min-w-[1000px] h-[400px] relative mx-auto max-w-5xl">
               
               {/* SVG Road */}
               <svg viewBox="0 0 1000 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  {/* Thick Dark Road */}
                  <path 
                     d="M 0 200 C 40 200, 60 100, 100 100 C 200 100, 200 300, 300 300 C 400 300, 400 100, 500 100 C 600 100, 600 300, 700 300 C 800 300, 800 100, 900 100 C 940 100, 960 200, 1000 200" 
                     fill="none" 
                     stroke="#334155" 
                     strokeWidth="48" 
                     strokeLinecap="round"
                  />
                  {/* Road Borders */}
                  <path 
                     d="M 0 200 C 40 200, 60 100, 100 100 C 200 100, 200 300, 300 300 C 400 300, 400 100, 500 100 C 600 100, 600 300, 700 300 C 800 300, 800 100, 900 100 C 940 100, 960 200, 1000 200" 
                     fill="none" 
                     stroke="#1e293b" 
                     strokeWidth="52" 
                     strokeLinecap="round"
                     className="opacity-50"
                  />
                  {/* White Dashed Line inside the road */}
                  <path 
                     d="M 0 200 C 40 200, 60 100, 100 100 C 200 100, 200 300, 300 300 C 400 300, 400 100, 500 100 C 600 100, 600 300, 700 300 C 800 300, 800 100, 900 100 C 940 100, 960 200, 1000 200" 
                     fill="none" 
                     stroke="#ffffff" 
                     strokeWidth="4" 
                     strokeDasharray="20 20"
                     strokeLinecap="round"
                  />
               </svg>

               {/* Nodes */}
               {steps.map((step, i) => (
                  <motion.div 
                     initial={{ opacity: 0, scale: 0.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.5, delay: i * 0.15 }}
                     key={i} 
                     className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2"
                     style={{ left: \`\${step.x}%\`, top: \`\${step.y}%\` }}
                  >
                     {/* The Map Pin */}
                     <div className={\`absolute left-1/2 -translate-x-1/2 flex items-center justify-center \${step.type === 'peak' ? 'bottom-full mb-8' : 'top-full mt-8'}\`}>
                        <div className={\`relative w-16 h-16 rounded-full bg-gradient-to-br \${step.fill} flex flex-col items-center justify-center text-white shadow-xl shadow-black/10 border-[3px] border-white hover:scale-110 transition-transform cursor-pointer\`}>
                           <span className="font-black text-[22px] leading-none mt-1">{step.id}</span>
                           <span className="text-[9px] font-bold tracking-widest uppercase opacity-90 mt-0.5">Step</span>
                           
                           {/* Tail */}
                           {step.type === 'peak' ? (
                              <div className={\`absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] \${step.tail}\`}></div>
                           ) : (
                              <div className={\`absolute -top-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] \${step.tail}\`}></div>
                           )}
                        </div>
                     </div>

                     {/* The Text & Icon Box */}
                     <div className={\`absolute left-1/2 -translate-x-1/2 text-center w-48 flex flex-col items-center \${step.type === 'peak' ? 'top-full mt-10' : 'bottom-full mb-10'}\`}>
                        <step.icon size={36} strokeWidth={1.5} className={\`\${step.color} mb-3\`} />
                        <div className={\`font-black text-[13px] mb-1.5 uppercase tracking-wider \${step.color}\`}>{step.title}</div>
                        <div className="font-medium text-slate-500 text-[12px] leading-relaxed px-2">{step.desc}</div>
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
    console.log("Roadmap replaced with Asphalt Wavy template design successfully");
} else {
    console.log("Could not find CareerPathSection!");
}
