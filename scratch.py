import re

file_path = r"c:\Users\aithe\Music\ebuddha-agency\src\App.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Navbar Desktop Nav
old_nav_desktop = """        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 font-semibold text-[13px] text-white/80">
            {navLinks.map(link => (
              <li 
                key={link.name}
                onMouseEnter={() => link.hasMega ? setActiveMegaMenu(link.id) : setActiveMegaMenu(null)}
                className="relative py-2"
              >
                {link.path ? (
                  <Link to={link.path} className="hover:text-white transition-all flex items-center gap-1.5 hover:translate-y-[-1px]">
                    {link.name}
                  </Link>
                ) : (
                  <button 
                    onMouseEnter={() => {
                      setActiveMegaMenu(link.id);
                      if (link.id === 'online') setActiveCategory('Digital Marketing');
                      if (link.id === 'campus') setActiveCategory('Jaipur');
                    }}
                    className="hover:text-white transition-all flex items-center gap-1.5 hover:translate-y-[-1px] cursor-pointer"
                  >
                    {link.name}
                    {(link.hasMega || link.hasDropdown) && <ChevronDown size={14} className="opacity-50" />}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
             <button className="px-8 py-2.5 rounded-xl font-bold text-[13px] border border-white/20 text-white bg-white/5 hover:bg-white hover:text-primary transition-all backdrop-blur-md">
               Login
             </button>
          </div>
        </div>"""

new_nav_desktop = """        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 font-semibold text-[14px] text-white">
            {navLinks.map(link => (
              <li 
                key={link.name}
                onMouseEnter={() => link.hasMega ? setActiveMegaMenu(link.id) : setActiveMegaMenu(null)}
                className="relative py-2"
              >
                {link.path ? (
                  <Link to={link.path} className="text-white/80 hover:text-white transition-all flex items-center gap-1.5">
                    {link.name}
                  </Link>
                ) : (
                  <button 
                    onMouseEnter={() => {
                      setActiveMegaMenu(link.id);
                      if (link.id === 'online') setActiveCategory('Digital Marketing');
                      if (link.id === 'campus') setActiveCategory('Jaipur');
                    }}
                    className={`${link.id === 'online' ? 'bg-white text-slate-900 px-5 py-2.5 rounded-xl font-bold hover:bg-slate-50' : 'text-white/80 hover:text-white'} transition-all flex items-center gap-1.5 cursor-pointer`}
                  >
                    {link.name}
                    {(link.hasMega || link.hasDropdown) && <ChevronDown size={16} className={link.id === 'online' ? 'text-slate-500' : 'opacity-70'} />}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 ml-4">
             <button className="px-8 py-2.5 rounded-xl font-bold text-[14px] bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-md">
               Login
             </button>
          </div>
        </div>"""

content = content.replace(old_nav_desktop, new_nav_desktop)
content = content.replace("bg-[#003DFF] py-3 shadow-2xl", "bg-[#061a40] py-3 shadow-2xl")


# Replace Hero Component
hero_match = re.search(r"const Hero = \(\) => \(.*?\);\n", content, re.DOTALL)
new_hero = """const Hero = () => (
  <section className="relative pt-40 pb-20 bg-gradient-to-br from-[#061a40] to-[#002f6c] overflow-hidden min-h-[90vh] flex items-center">
    {/* Grid Overlay */}
    <div className="absolute inset-0 bg-grid opacity-10"></div>

    <div className="container-wide px-6 relative z-10">
      <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[40px] md:text-[52px] font-black leading-[1.1] text-white mb-6"
          >
            Don't Just Upskill, <br />
            <span className="text-blue-200">Get Career-ready,</span> <br />
            Get Hired.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[18px] md:text-[20px] text-[#a0c0f0] max-w-xl leading-relaxed mb-10 font-medium"
          >
            Top Mentorship Programs in Tech, Marketing, & Data. Designed and Delivered by industry maestros.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-8 mb-10"
          >
            {[
              { val: '1.5 Lakh+', label: 'Aspirants Mentored', icon: Users },
              { val: '1700+', label: 'Cohorts Delivered', icon: GraduationCap },
              { val: '40+', label: 'Industry Mentors', icon: Award }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-sm border border-white/10">
                  <stat.icon size={18} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">{stat.val}</div>
                  <div className="text-[#a0c0f0] text-xs font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 w-full max-w-xl"
          >
            <button className="flex-1 min-w-[200px] bg-[#0052cc] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all hover:-translate-y-1 text-center border border-[#0052cc]">
              Explore Programs
            </button>
            <button className="flex-1 min-w-[200px] bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(249,115,22,0)] hover:shadow-[0_10px_30px_rgba(249,115,22,0.3)] text-center">
              Book Mentor Session
            </button>
          </motion.div>
        </div>

        {/* Right Collage - Scattered Photos */}
        <div className="relative h-[600px] hidden lg:block">
           {/* Decorative elements */}
           <div className="absolute top-[20%] right-[10%] w-64 h-64 border-[40px] border-white/5 rounded-full"></div>
           <div className="absolute bottom-[20%] left-[10%] w-32 h-32 border-[20px] border-[#0052cc]/20 rounded-full"></div>
           
           {/* Headshots */}
           {[
             { img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=300', pos: 'top-[10%] left-[20%]', size: 'w-48 h-48', delay: 0 },
             { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200', pos: 'top-[5%] right-[15%]', size: 'w-24 h-24', delay: 0.2 },
             { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200', pos: 'top-[45%] right-[5%]', size: 'w-36 h-36', delay: 0.4 },
             { img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200', pos: 'bottom-[15%] right-[25%]', size: 'w-28 h-28', delay: 0.6 },
             { img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200', pos: 'bottom-[25%] left-[5%]', size: 'w-32 h-32', delay: 0.8 },
           ].map((m, i) => (
             <motion.div
               key={i}
               animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
               transition={{ duration: 4 + i, repeat: Infinity, delay: m.delay, ease: "easeInOut" }}
               className={`absolute ${m.pos} ${m.size} rounded-full border-[6px] border-white shadow-2xl overflow-hidden z-10 bg-slate-200`}
             >
               <img src={m.img} className="w-full h-full object-cover" alt="student" />
             </motion.div>
           ))}

           {/* Floating Pills */}
           {[
             { label: 'Python', pos: 'top-[35%] left-[5%]', delay: 0.5 },
             { label: 'Full Stack Development', pos: 'top-[25%] right-[-5%]', delay: 0.7 },
             { label: 'Data Analytics', pos: 'bottom-[15%] left-[20%]', delay: 0.9 },
           ].map((tag, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
               transition={{ duration: 3, repeat: Infinity, delay: tag.delay, ease: "easeInOut" }}
               className={`absolute ${tag.pos} bg-white px-5 py-2.5 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.15)] text-[13px] font-bold text-slate-900 z-30 flex items-center gap-2`}
             >
               <div className="w-2 h-2 rounded-full bg-[#84cc16]"></div>
               {tag.label}
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  </section>
);
"""
if hero_match:
    content = content.replace(hero_match.group(0), new_hero)

# Replace Mentorship Section and Add ExploreDomainsSection
mentorship_match = re.search(r"const MentorshipSection = \(\) => \{.*?\};\n", content, re.DOTALL)

new_mentorship_and_domains = """const MentorshipSection = () => {
  const categories = ['Digital Marketing', 'Data Analytics', 'Web Development', 'Cyber Security', 'App Development'];
  const [activeTab, setActiveTab] = useState('Digital Marketing');

  return (
    <section className="py-24 bg-[#f0f4f9] relative">
      {/* Decorative top border shape */}
      <div className="absolute top-0 left-0 w-full h-8 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>

      <div className="container-wide px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-[32px] md:text-[40px] font-black text-[#020617] mb-4">Mentorship Programs</h2>
           <p className="text-slate-500 font-medium text-[16px]">Choose your program, get certified, and grab new career opportunities.</p>
        </div>

        <div className="flex overflow-x-auto gap-4 mb-16 pb-4 scrollbar-hide justify-center">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`whitespace-nowrap px-6 py-3 rounded-xl font-bold text-[15px] transition-all border ${activeTab === cat ? 'bg-[#0052cc] border-[#0052cc] text-white shadow-md' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Program Card */}
        <div className="bg-white rounded-[24px] shadow-xl overflow-hidden border border-slate-100 max-w-6xl mx-auto">
           <div className="grid lg:grid-cols-2">
              {/* Left Visual Box (Mock Browser) */}
              <div className="bg-[#fff0f4] p-8 md:p-12 relative overflow-hidden flex flex-col justify-end min-h-[400px]">
                 {/* Browser Bar */}
                 <div className="absolute top-0 left-0 w-full h-10 bg-[#ff7aa2] flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                 </div>
                 {/* Decorative Graphics */}
                 <div className="absolute top-20 right-10 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl z-10 animate-bounce">
                    🚀
                 </div>
                 <div className="absolute top-40 left-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl z-10 animate-bounce" style={{animationDelay: '1s'}}>
                    📈
                 </div>
                 {/* Image */}
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" className="w-[85%] mx-auto mt-8 rounded-t-3xl shadow-2xl relative z-0 object-cover" style={{ objectPosition: 'top' }} alt="student" />
              </div>
              
              {/* Right Details Box */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                 <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 font-bold text-[12px] px-3 py-1.5 rounded-full w-fit mb-6">
                    <Sparkles size={14} className="text-[#0052cc]" /> AI Powered
                 </div>
                 <h3 className="text-[28px] md:text-[36px] font-black text-[#020617] mb-6 leading-[1.2]">AI-Powered {activeTab} Course</h3>
                 
                 <div className="flex flex-wrap gap-3 mb-8">
                    <span className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-[13px] font-semibold flex items-center gap-2">
                       <span className="text-lg">👍</span> 100% Placement Assistance
                    </span>
                    <span className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-[13px] font-semibold flex items-center gap-2">
                       <span className="text-lg">✨</span> AI-Powered curriculum
                    </span>
                    <span className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-[13px] font-semibold flex items-center gap-2">
                       <span className="text-lg">📄</span> Real world case studies
                    </span>
                 </div>

                 <div className="mb-8">
                    <div className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-4">Covered Projects & Tools</div>
                    <div className="flex gap-4 opacity-70">
                       <div className="font-black text-xl text-slate-800">Nykaa</div>
                       <div className="font-black text-xl text-[#14a800]">Upwork</div>
                       <div className="font-black text-xl text-blue-600">Meta</div>
                    </div>
                 </div>

                 {/* Stats Block */}
                 <div className="flex bg-[#f0f4f9] rounded-[16px] p-2 mb-8 divide-x divide-slate-200 border border-slate-100">
                    <div className="flex-1 flex items-center gap-4 px-6 py-4">
                       <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-500"><Timer size={24} /></div>
                       <div>
                          <div className="text-slate-500 text-[13px] font-medium">Duration</div>
                          <div className="text-slate-900 font-bold text-[16px]">20 Weeks</div>
                       </div>
                    </div>
                    <div className="flex-1 flex items-center gap-4 px-6 py-4">
                       <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-500"><Briefcase size={24} /></div>
                       <div>
                          <div className="text-slate-500 text-[13px] font-medium">Average salary</div>
                          <div className="text-slate-900 font-bold text-[16px]">₹ 8.9 LPA</div>
                       </div>
                    </div>
                 </div>

                 <div className="flex flex-wrap gap-4">
                    <button className="bg-[#0052cc] hover:bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold text-[15px] transition-all shadow-md">
                       Download Curriculum
                    </button>
                    <button className="bg-slate-100 text-slate-800 hover:bg-slate-200 px-8 py-3.5 rounded-xl font-bold text-[15px] transition-all">
                       Learn More
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const ExploreDomainsSection = () => (
  <section className="py-24 bg-[#061a40] relative overflow-hidden">
    {/* Hexagonal/Dot Grid Overlay */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
    
    <div className="container-wide px-6 relative z-10">
       <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="sticky top-32 text-white">
             <h2 className="text-[36px] md:text-[48px] font-black leading-tight mb-6">Explore Top Career Domains</h2>
             <p className="text-[#a0c0f0] text-[18px] leading-relaxed mb-8">
                Discover your path to success. Choose from our industry-aligned programs and accelerate your career growth with expert mentorship.
             </p>
             <button className="bg-white text-[#061a40] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
                View All Programs
             </button>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
             {[
                { title: 'Web Development', icon: Code, color: 'text-blue-500', bg: 'bg-blue-50' },
                { title: 'Data Analytics', icon: Database, color: 'text-orange-500', bg: 'bg-orange-50' },
                { title: 'Digital Marketing', icon: Megaphone, color: 'text-pink-500', bg: 'bg-pink-50' },
                { title: 'Cyber Security', icon: Shield, color: 'text-green-500', bg: 'bg-green-50' },
                { title: 'App Development', icon: Smartphone, color: 'text-purple-500', bg: 'bg-purple-50' },
                { title: 'Artificial Intelligence', icon: BrainCircuit, color: 'text-yellow-500', bg: 'bg-yellow-50' },
             ].map((domain, i) => (
                <div key={i} className="bg-white p-8 rounded-[24px] hover:-translate-y-2 transition-all duration-300 shadow-lg group cursor-pointer border border-slate-100 flex flex-col items-start h-full">
                   <div className={`w-16 h-16 ${domain.bg} rounded-2xl flex items-center justify-center ${domain.color} mb-8 group-hover:scale-110 transition-transform`}>
                      <domain.icon size={32} strokeWidth={1.5} />
                   </div>
                   <h3 className="text-[22px] font-black text-slate-900 mb-4 flex-1">{domain.title}</h3>
                   <div className="text-[#0052cc] font-bold text-[14px] flex items-center gap-2 group-hover:gap-3 transition-all">
                      See Programs <ArrowRight size={16} />
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  </section>
);
"""

if mentorship_match:
    content = content.replace(mentorship_match.group(0), new_mentorship_and_domains)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated successfully")
