const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const startStr = "const CareerPathSection = () => (";
const endStr = "const FounderMessageSection = () => (";

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr, startIndex);

if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    const newRoadmap = `const CareerPathSection = () => (
  <section className="py-32 bg-[#0a1128] relative overflow-hidden">
    {/* Tech grid overlay */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    {/* Glowing orbs */}
    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#004aad]/20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange-500/10 blur-[100px] rounded-full"></div>

    <div className="container-wide px-6 relative z-10">
       <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
             <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
             <span className="text-white/80 text-[12px] font-bold uppercase tracking-widest">A Proven Strategy</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Your Roadmap to Success</h2>
          <p className="text-white/60 font-medium text-lg max-w-2xl mx-auto">Follow our structured path designed by industry experts to transform your career from scratch to a top-tier tech professional.</p>
       </motion.div>

       <div className="relative max-w-5xl mx-auto">
          {/* Animated Central Glowing Line */}
          <div className="absolute top-0 bottom-0 w-1.5 left-1/2 -translate-x-1/2 bg-white/10 rounded-full overflow-hidden">
             <motion.div 
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-full h-1/3 bg-gradient-to-b from-transparent via-orange-500 to-transparent"
             ></motion.div>
          </div>

          <div className="flex flex-col items-center gap-12 relative">
             {[
               { title: 'Skill Assessment', desc: 'Identify your strengths, baseline knowledge, and career goals to create a customized learning path.', icon: BrainCircuit, color: 'text-orange-500' },
               { title: 'Immersive Learning', desc: 'Engage in hands-on, project-based mentorship led by top practitioners from leading tech companies.', icon: GraduationCap, color: 'text-blue-400' },
               { title: 'Portfolio Building', desc: 'Develop a highly professional, real-world project portfolio that proves your capabilities to recruiters.', icon: Sparkles, color: 'text-purple-400' },
               { title: 'Interview Prep', desc: 'Master technical interviews with mock sessions, resume reviews, and behavioral training.', icon: Briefcase, color: 'text-green-400' },
               { title: 'Dream Career', desc: 'Receive dedicated placement assistance to land your dream role and negotiate the best salary.', icon: Rocket, color: 'text-pink-400' }
             ].map((step, i) => (
               <motion.div 
                  initial={{ opacity: 0, y: 50, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, type: "spring", bounce: 0.4, delay: i * 0.1 }}
                  key={i} className={\`flex items-center gap-8 md:gap-16 w-full \${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}\`}
               >
                  {/* Content Card */}
                  <div className={\`flex-1 flex \${i % 2 === 0 ? 'justify-end text-right' : 'justify-start text-left'}\`}>
                     <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] max-w-md hover:border-white/30 transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] group"
                     >
                        <div className={\`text-xs font-black uppercase tracking-widest \${step.color} mb-3 flex items-center gap-2 \${i % 2 === 0 ? 'justify-end' : 'justify-start'}\`}>
                           Step 0{i+1} <div className="w-8 h-px bg-current opacity-50"></div>
                        </div>
                        <h4 className="text-2xl font-black text-white mb-4">{step.title}</h4>
                        <p className="text-white/60 font-medium leading-relaxed">{step.desc}</p>
                     </motion.div>
                  </div>

                  {/* Central Node */}
                  <div className="relative flex items-center justify-center z-10 shrink-0">
                     <div className="absolute inset-0 bg-[#004aad] rounded-full animate-ping opacity-20"></div>
                     <div className="w-20 h-20 bg-[#0a1128] border-4 border-[#004aad] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,74,173,0.5)] z-10">
                        <step.icon size={32} className="text-white" />
                     </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
               </motion.div>
             ))}
          </div>
       </div>
    </div>
  </section>
);\n\n`;

    content = content.substring(0, startIndex) + newRoadmap + content.substring(endIndex);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Roadmap updated successfully");
} else {
    console.log("Could not find CareerPathSection!");
}
