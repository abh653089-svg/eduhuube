const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const startStr = "const CareerPathSection = () => (";
const endStr = "const FounderMessageSection = () => (";

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr, startIndex);

if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    const newRoadmap = `const CareerPathSection = () => {
  const steps = [
    { title: 'Skill Assessment', desc: 'Identify your strengths and baseline knowledge.', topIcon: User, color: 'bg-slate-200 text-slate-800' },
    { title: 'Immersive Learning', desc: 'Engage in project-based mentorship.', topIcon: UserPlus, color: 'bg-[#7a9bc8] text-white' },
    { title: 'Portfolio Building', desc: 'Develop a highly professional portfolio.', topIcon: Users, color: 'bg-[#527eb0] text-white' },
    { title: 'Interview Prep', desc: 'Master technical interviews with mock sessions.', topIcon: UserCheck, color: 'bg-[#2a6198] text-white' },
    { title: 'Dream Career', desc: 'Land your dream role at a top tech company.', topIcon: Trophy, color: 'bg-[#004480] text-white' }
  ];

  return (
    <section className="pt-24 bg-white font-sans overflow-hidden">
      <div className="container-wide px-6">
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-[36px] md:text-[42px] font-normal text-slate-900 mb-8"
        >
           Career Roadmap
        </motion.h2>
        
        <div className="w-full overflow-x-auto pb-0 scrollbar-hide">
          <div className="min-w-[900px] h-[450px] flex items-end relative mt-32">
             {steps.map((step, i) => (
                <motion.div 
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.5, delay: i * 0.1 }}
                   key={i} 
                   className={\`w-1/5 relative flex flex-col justify-start pt-6 \${step.color} border-l border-white/20\`} 
                   style={{ height: \`\${(i + 1) * 20}%\` }}
                >
                   
                   {/* Top Content (Person & Text) */}
                   <div className="absolute bottom-full left-0 w-full flex flex-col items-center mb-2 px-2">
                      <motion.p 
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ delay: 0.5 + (i * 0.1) }}
                         className="text-[11px] text-slate-500 text-center mb-2 leading-relaxed h-10 flex items-end"
                      >
                         {step.desc}
                      </motion.p>
                      {/* Vertical subtle line connecting text to icon */}
                      <div className="w-px h-6 bg-slate-200 mb-2"></div>
                      <motion.div
                         whileHover={{ scale: 1.1, y: -5 }}
                         className="text-slate-800"
                      >
                         <step.topIcon size={40} strokeWidth={1.5} />
                      </motion.div>
                   </div>

                   {/* Stair Content */}
                   <div className="px-4 md:px-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border-2 border-current opacity-80 flex items-center justify-center shrink-0">
                         <User size={20} className="opacity-80" />
                      </div>
                      <span className="font-bold text-sm md:text-base leading-tight pr-2">{step.title}</span>
                   </div>

                </motion.div>
             ))}
          </div>
        </div>
      </div>
      
      {/* Highlights Bar */}
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="bg-[#0a2342] text-white py-10 px-6"
      >
         <div className="container-wide">
            <h3 className="text-2xl font-bold mb-3">Highlights</h3>
            <p className="text-white/70 text-sm max-w-4xl leading-relaxed">
               Follow our structured path designed by industry experts to transform your career from scratch to a top-tier tech professional. Gain practical skills, build a strong portfolio, and receive dedicated placement assistance to ensure you land your dream job.
            </p>
         </div>
      </motion.div>
    </section>
  );
};\n\n`;

    content = content.substring(0, startIndex) + newRoadmap + content.substring(endIndex);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Roadmap replaced with staircase layout successfully");
} else {
    console.log("Could not find CareerPathSection!");
}
