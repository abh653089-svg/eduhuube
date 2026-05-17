import re

file_path = r"c:\Users\aithe\Music\ebuddha-agency\src\App.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

hero_match = re.search(r"const Hero = \(\) => \(.*?\n\);\n", content, re.DOTALL)

new_hero = """const Hero = () => (
  <section className="relative pt-32 pb-20 bg-[#020617] overflow-hidden min-h-[95vh] flex items-center">
    {/* Refined Background Effects */}
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0052cc]/20 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/4"></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3"></div>

    <div className="container-wide px-6 relative z-10">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
          >
             <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
             <span className="text-white/80 text-[12px] font-bold uppercase tracking-widest">India's Leading EdTech Platform</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[48px] md:text-[64px] lg:text-[72px] font-black leading-[1.05] text-white mb-6 tracking-tight"
          >
            Don't Just Upskill, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Get Career-ready,</span> <br />
            Get Hired.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[18px] md:text-[22px] text-white/60 max-w-xl leading-relaxed mb-10 font-medium"
          >
            Master top-demand skills in Tech, Marketing, & Data through immersive, project-based mentorship delivered by industry maestros.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-5 w-full mb-12"
          >
            <button className="bg-[#0052cc] hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-[16px] md:text-[18px] shadow-[0_10px_40px_rgba(0,82,204,0.4)] hover:shadow-[0_15px_50px_rgba(0,82,204,0.6)] transition-all hover:-translate-y-1 flex items-center gap-2">
              Explore Programs <ArrowRight size={20} />
            </button>
            <button className="bg-white/5 border border-white/10 text-white hover:bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-[16px] md:text-[18px] transition-all hover:-translate-y-1 group">
              <span className="group-hover:text-slate-900 text-white">Book Mentor Session</span>
            </button>
          </motion.div>

          {/* Trust Metrics below buttons */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="flex flex-wrap items-center gap-6 md:gap-10 pt-8 border-t border-white/10 w-full max-w-xl"
          >
             <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-[3px] border-[#020617] overflow-hidden">
                     <img src={`https://i.pravatar.cc/150?img=${i+10}`} className="w-full h-full object-cover" alt="user" />
                  </div>
                ))}
             </div>
             <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <span className="text-white font-black ml-2 text-lg">4.8/5</span>
                </div>
                <div className="text-white/50 text-[13px] font-bold">From 10,000+ Reviews</div>
             </div>
          </motion.div>
        </div>

        {/* Right Visual - Modern Hero Image with Glass Cards */}
        <div className="relative h-[700px] hidden lg:flex items-center justify-center">
           {/* Decorative Arc/Shape Background */}
           <div className="absolute bottom-0 right-10 w-[80%] h-[85%] bg-gradient-to-t from-[#0052cc] to-blue-400 rounded-t-[200px] overflow-hidden opacity-20"></div>
           
           {/* Main Hero Image */}
           <div className="relative z-10 w-full h-full flex items-end justify-center pb-0">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" className="w-[85%] h-[85%] object-cover object-top rounded-t-[100px] shadow-[0_0_80px_rgba(0,0,0,0.5)] border-t-[8px] border-x-[8px] border-white/10" alt="Professional Mentor" />
           </div>

           {/* Floating Glass Card 1 - Placement */}
           <motion.div 
             animate={{ y: [0, -15, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[20%] left-[-5%] bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl flex items-center gap-4 z-30"
           >
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
                 <Rocket size={24} />
              </div>
              <div>
                 <div className="text-white font-black text-lg">100%</div>
                 <div className="text-white/70 text-xs font-bold uppercase tracking-wider">Placement Help</div>
              </div>
           </motion.div>

           {/* Floating Glass Card 2 - Learners */}
           <motion.div 
             animate={{ y: [0, 15, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute bottom-[25%] right-[-10%] bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl flex items-center gap-4 z-30"
           >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                 <Users size={24} />
              </div>
              <div>
                 <div className="text-white font-black text-lg">1.5 Lakh+</div>
                 <div className="text-white/70 text-xs font-bold uppercase tracking-wider">Learners</div>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  </section>
);
"""

if hero_match:
    content = content.replace(hero_match.group(0), new_hero)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Hero updated successfully")
else:
    print("Could not find Hero component!")
