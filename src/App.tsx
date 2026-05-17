import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, TrendingUp, Award, Sparkles, Menu, X,
  ChevronRight, Megaphone, Search, Database, 
  BrainCircuit, Code, Shield, Smartphone, 
  CheckCircle2, ArrowRight, Play, Star,
  MessageSquare, HelpCircle, Mail, Phone,
  MapPin, Facebook, Twitter, Instagram, Linkedin,
  Youtube, GraduationCap, Briefcase, Rocket,
  Laptop, BookOpen, UserCheck, Timer, ChevronDown, Gift, Heart,
  User, UserPlus, Trophy
} from 'lucide-react';

// --- Components ---

const TopBar = () => (
  <div className="bg-[#0a1128] text-white py-2 border-b border-white/5 hidden md:block">
    <div className="container-wide px-6 flex justify-between items-center text-xs font-medium opacity-80">
      <div className="flex gap-6">
        <span className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</span>
        <span className="flex items-center gap-2"><Mail size={14} /> info@ebuddha.com</span>
      </div>
      <div className="flex gap-4">
        <a href="#" className="hover:text-primary">Free Tutorials</a>
        <a href="#" className="hover:text-primary">Interview Questions</a>
        <a href="#" className="hover:text-primary">Online Compilers</a>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('Digital Marketing');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onlineCategories = {
    'Digital Marketing': [
      { name: 'Digital Marketing', sub: 'Mentorship Program with AI', icon: '📢' },
      { name: 'AI-Driven Performance Marketing', sub: 'Bootcamp', icon: '📊' },
      { name: 'SEO & AI Search Optimization', sub: 'Bootcamp', icon: '🔍' }
    ],
    'Data Science & Analytics': {
      isNew: true,
      courses: [
        { name: 'Data Science with Generative AI', sub: 'Professional Certification', icon: '🧠' },
        { name: 'Data Analytics Mastery', sub: 'Placement Guaranteed', icon: '📉' },
        { name: 'Business Intelligence with AI', sub: 'Advanced Program', icon: '💎' }
      ]
    },
    'AI Programs': {
      isNew: true,
      courses: [
        { name: 'Generative AI Specialist', sub: 'Prompt Engineering & More', icon: '🤖' },
        { name: 'Machine Learning Engineering', sub: 'Deep Learning & Neural Networks', icon: '⚙️' }
      ]
    },
    'Full Stack with AI Engineering': [
      { name: 'MERN Stack with AI', sub: 'Modern Web Development', icon: '💻' },
      { name: 'Python Full Stack', sub: 'Backend & AI Integration', icon: '🐍' }
    ],
    'Cyber Security': [
      { name: 'Ethical Hacking', sub: 'Advanced Security Program', icon: '🛡️' },
      { name: 'Cyber Security Analyst', sub: 'Certification Prep', icon: '🔐' }
    ],
    'App Development': [
      { name: 'Android with Kotlin', sub: 'Native App Development', icon: '📱' },
      { name: 'iOS with Swift', sub: 'Mobile Engineering', icon: '🍎' }
    ]
  };

  const navLinks = [
    { name: 'Online Programs', id: 'online', hasMega: true },
    { name: 'On Campus Programs', id: 'campus', hasMega: true },
    { name: 'Masterclass', path: '/masterclass' },
    { name: 'Free Resources', path: '/resources' },
    { name: 'Alumni', path: '/alumni' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled || activeMegaMenu ? 'bg-[#0a1128] py-3 shadow-2xl' : 'bg-transparent py-8'}`}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <div className="container-wide flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 group">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-lg">
            <GraduationCap size={24} />
          </div>
          <span className="text-white tracking-tight">eBuddha</span>
        </Link>
        
        {/* Desktop Nav */}
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
        </div>

        {/* Mobile Toggle */}
        <button className="text-white lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Online Programs Mega Menu */}
      <AnimatePresence>
        {activeMegaMenu === 'online' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-[85%] left-0 right-0 mx-auto w-full max-w-[1100px] bg-white shadow-[0_40px_100px_rgba(0,0,0,0.2)] border border-slate-100 rounded-[2.5rem] overflow-hidden z-50"
          >
            <div className="grid grid-cols-[280px_1fr] min-h-[500px]">
              {/* Sidebar */}
              <div className="bg-slate-50/50 border-r border-slate-100 py-10 px-6">
                <div className="flex flex-col gap-1">
                  {Object.entries(onlineCategories).map(([cat, data]) => (
                    <button 
                      key={cat}
                      onMouseEnter={() => setActiveCategory(cat)}
                      className={`flex items-center justify-between px-5 py-4 rounded-2xl font-bold text-[14px] transition-all group ${activeCategory === cat ? 'bg-white text-primary shadow-sm border border-slate-100' : 'text-slate-500 hover:bg-white/50'}`}
                    >
                      <div className="flex items-center gap-2 text-left">
                        {cat}
                        {(data as any).isNew && (
                          <span className="bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded-md font-black uppercase tracking-tighter">New</span>
                        )}
                      </div>
                      <ChevronRight size={16} className={`transition-all ${activeCategory === cat ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid Content */}
              <div className="py-12 px-14 bg-white">
                <h3 className="text-slate-900 font-bold text-xl mb-10">{activeCategory}</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {(() => {
                    const data = onlineCategories[activeCategory as keyof typeof onlineCategories];
                    if (!data) return null;
                    const courses = Array.isArray(data) ? data : (data as any).courses;
                    return courses.map((course: any) => (
                      <Link 
                        key={course.name} 
                        to={`/online/${course.name.toLowerCase().replace(/ /g, '-')}`}
                        className="group flex items-center gap-5 p-5 rounded-3xl border border-slate-50 hover:border-primary/10 hover:bg-slate-50/50 transition-all bg-white"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-blue-50/50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shrink-0">
                          {course.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-1">{course.name}</h4>
                          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{course.sub}</p>
                        </div>
                      </Link>
                    ));
                  })()}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* On Campus Dropdown Overlay */}
      <AnimatePresence>
        {activeMegaMenu === 'campus' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-[85%] left-0 right-0 mx-auto w-full max-w-[1000px] bg-white shadow-[0_40px_100px_rgba(0,0,0,0.2)] border border-slate-100 rounded-[2.5rem] overflow-hidden z-50"
          >
            <div className="grid grid-cols-[280px_1fr] min-h-[400px]">
              {/* Sidebar */}
              <div className="bg-slate-50/50 border-r border-slate-100 py-10 px-6">
                <div className="flex flex-col gap-2">
                  {['Jaipur', 'Jodhpur'].map(city => (
                    <button 
                      key={city}
                      onMouseEnter={() => setActiveCategory(city)}
                      className={`flex items-center justify-between px-5 py-4 rounded-2xl font-bold text-[14px] transition-all group ${activeCategory === city ? 'bg-white text-primary shadow-sm border border-slate-100' : 'text-slate-500 hover:bg-white/50'}`}
                    >
                      <div className="flex items-center gap-3">
                        {city}
                        <span className="bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded-md font-black uppercase tracking-tighter">New</span>
                      </div>
                      <ChevronRight size={16} className={`transition-all ${activeCategory === city ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid Content */}
              <div className="py-12 px-14 bg-white">
                <h3 className="text-slate-900 font-bold text-xl mb-10">{activeCategory} Campus Programs</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {[
                    { name: 'Digital Marketing', sub: 'Mentorship Program', icon: '📢' },
                    { name: 'Data Analytics', sub: 'Mentorship Program', icon: '📊' },
                    { name: 'MERN Stack', sub: 'with AI Engineering', icon: '💻' },
                    { name: 'Data Science & AI', sub: 'Mentorship Program', icon: '🧠', isNew: true }
                  ].map(course => (
                    <Link 
                      key={course.name} 
                      to={`/on-campus/${activeCategory.toLowerCase()}`}
                      className="group flex items-center gap-5 p-5 rounded-3xl border border-slate-50 hover:border-primary/10 hover:bg-slate-50/50 transition-all bg-white relative"
                    >
                      {course.isNew && <span className="absolute -top-2 left-4 bg-red-500 text-white text-[8px] px-2 py-0.5 rounded-md font-black uppercase tracking-tighter z-10">New</span>}
                      <div className="w-16 h-16 rounded-2xl bg-blue-50/50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shrink-0">
                        {course.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-1">{course.name}</h4>
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{course.sub}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 bg-[#0a1128] overflow-hidden min-h-[95vh] flex items-center">
    {/* Refined Background Effects */}
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
    
    {/* Animated Background Blobs */}
    <motion.div 
      animate={{ 
        x: [0, 50, -30, 0],
        y: [0, -40, 60, 0],
        scale: [1, 1.2, 0.9, 1]
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#004aad]/20 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/4"
    />
    <motion.div 
      animate={{ 
        x: [0, -40, 50, 0],
        y: [0, 60, -30, 0],
        scale: [1, 0.9, 1.1, 1]
      }}
      transition={{ 
        duration: 25, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#004aad]/10 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3"
    />

    {/* Floating Particles/Bubbles */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -100, 0],
          x: [0, i % 2 === 0 ? 30 : -30, 0],
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 1.5
        }}
        className="absolute w-24 h-24 bg-[#004aad]/10 rounded-full blur-xl pointer-events-none"
        style={{
          left: `${15 + i * 15}%`,
          top: `${20 + (i % 3) * 20}%`
        }}
      />
    ))}

    <div className="container-wide px-6 relative z-10">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
          >
             <div className="w-2 h-2 rounded-full bg-blue-50/500 animate-pulse"></div>
             <span className="text-white/80 text-[12px] font-bold uppercase tracking-widest">India's Leading EdTech Platform</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[48px] md:text-[64px] lg:text-[72px] font-black leading-[1.05] text-white mb-6 tracking-tight"
          >
            Don't Just Upskill, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Get Career-ready,</span> <br />
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
            <button className="bg-[#004aad] hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-[16px] md:text-[18px] shadow-[0_10px_40px_rgba(0,74,173,0.4)] hover:shadow-[0_15px_50px_rgba(0,74,173,0.6)] transition-all hover:-translate-y-1 flex items-center gap-2">
              Explore Programs <ArrowRight size={20} />
            </button>
            <button className="bg-white/5 border border-white/10 text-white hover:bg-white hover:text-slate-900 px-10 py-5 rounded-2xl font-bold text-[16px] md:text-[18px] transition-all hover:-translate-y-1">
              Book Mentor Session
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
                  <div key={i} className="w-12 h-12 rounded-full border-[3px] border-[#0a1128] overflow-hidden">
                     <img src={`https://i.pravatar.cc/150?img=${i+10}`} className="w-full h-full object-cover" alt="user" />
                  </div>
                ))}
             </div>
             <div>
                <div className="flex items-center gap-1 text-orange-500 mb-1">
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

        {/* Right Visual - Bubble Cluster */}
        <div className="relative h-[640px] hidden lg:flex items-center justify-center w-full">
           {/* Decorative background radiating circles */}
           <div className="absolute top-10 right-20 text-white/20">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                 <circle cx="12" cy="12" r="10" />
                 <circle cx="12" cy="12" r="6" />
                 <circle cx="12" cy="12" r="2" />
              </svg>
           </div>
           
           {/* Sparkles */}
           <div className="absolute bottom-20 right-10 text-white">
              <Sparkles size={32} />
           </div>
           <div className="absolute top-40 left-0 text-orange-400">
              <Sparkles size={24} />
           </div>

           <div className="relative w-full h-full max-w-[650px] min-h-[620px]">
               {/* Avatars */}
               <motion.div 
                  animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[18%] left-[0%] w-36 h-36 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20">
                  <img src="https://i.pravatar.cc/150?u=mentor1" className="w-full h-full object-cover" />
               </motion.div>
               
               <motion.div 
                  animate={{ y: [0, 20, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-[4%] left-[45%] w-32 h-32 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10">
                  <img src="https://i.pravatar.cc/150?u=mentor2" className="w-full h-full object-cover" />
               </motion.div>

               <motion.div 
                  animate={{ y: [0, -20, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-[20%] right-[-2%] w-40 h-40 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20">
                  <img src="https://i.pravatar.cc/150?u=mentor3" className="w-full h-full object-cover" />
               </motion.div>

               {/* Central Large Avatar */}
               <motion.div 
                  animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[36%] left-[26%] w-48 h-48 rounded-full border-[6px] border-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover object-top" />
               </motion.div>

               <motion.div 
                  animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-[16%] left-[2%] w-32 h-32 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20">
                  <img src="https://i.pravatar.cc/150?u=mentor5" className="w-full h-full object-cover" />
               </motion.div>

               <motion.div 
                  animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute bottom-[-3%] left-[33%] w-28 h-28 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10">
                  <img src="https://i.pravatar.cc/150?u=mentor6" className="w-full h-full object-cover" />
               </motion.div>

               <motion.div 
                  animate={{ y: [0, 25, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-[8%] right-[22%] w-36 h-36 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20">
                  <img src="https://i.pravatar.cc/150?u=mentor7" className="w-full h-full object-cover" />
               </motion.div>
               
               <motion.div 
                  animate={{ y: [0, -12, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  className="absolute top-[49%] right-[-8%] w-32 h-32 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10">
                  <img src="https://i.pravatar.cc/150?u=mentor8" className="w-full h-full object-cover" />
               </motion.div>

               {/* Pills */}
               <motion.div 
                  animate={{ x: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[41%] left-[-10%] bg-white text-slate-800 px-4 py-1.5 rounded-full font-bold text-xs shadow-xl z-40 border border-slate-100 whitespace-nowrap">
                  Python
               </motion.div>

               <motion.div 
                  animate={{ x: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-[38%] right-[-16%] bg-white text-slate-800 px-4 py-1.5 rounded-full font-bold text-xs shadow-xl z-40 border border-slate-100 whitespace-nowrap">
                  Full Stack Development
               </motion.div>

               <motion.div 
                  animate={{ x: [0, 15, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-[10%] left-[-5%] bg-white text-slate-800 px-4 py-1.5 rounded-full font-bold text-xs shadow-xl z-40 border border-slate-100 whitespace-nowrap">
                  Performance Marketing
               </motion.div>

               <motion.div 
                  animate={{ x: [0, -15, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-[-2%] right-[10%] bg-white text-slate-800 px-4 py-1.5 rounded-full font-bold text-xs shadow-xl z-40 border border-slate-100 whitespace-nowrap">
                  Data Analytics
               </motion.div>
            </div>
        </div>
      </div>
    </div>
  </section>
);

const MentorshipSection = () => {
  const categories = ['Digital Marketing', 'Data Analytics', 'Web Development', 'Cyber Security', 'App Development'];
  const [activeTab, setActiveTab] = useState<any>('Digital Marketing');

  const programData = {
    'Digital Marketing': {
      title: 'AI-Powered Digital Marketing',
      desc: 'Master performance marketing, SEO, algorithms, and AI tools like ChatGPT & Midjourney to scale brand revenues.',
      badge: 'Trending',
      features: ['💰 ₹12L+ Package', '🔥 10+ AI Tools', '📈 ₹50K Ads Budget'],
      duration: '16 Weeks',
      salary: '₹ 6.5 LPA',
      tools: ['Meta Ads', 'Google Analytics', 'ChatGPT', 'SEMrush'],
      visualType: 'marketing'
    },
    'Data Analytics': {
      title: 'Data Science & Business Analytics',
      desc: 'Uncover deep business insights using SQL, Python, Excel, and Tableau. Transition from raw data to boardroom decisions.',
      badge: 'Highest Placement',
      features: ['📊 15+ Capstone Projects', '💡 SQL & Tableau', '🐍 Advanced Python'],
      duration: '24 Weeks',
      salary: '₹ 9.2 LPA',
      tools: ['Python', 'SQL', 'Tableau', 'Pandas'],
      visualType: 'data'
    },
    'Web Development': {
      title: 'Next-Gen MERN Stack Full Stack',
      desc: 'Build enterprise-grade SaaS web applications using MongoDB, Express, React, Node.js, and TypeScript with AI workflows.',
      badge: '100% Interviews',
      features: ['🚀 5 SaaS Apps', '⚡ Next.js & Serverless', '🤖 AI Coding Assistant'],
      duration: '28 Weeks',
      salary: '₹ 11.5 LPA',
      tools: ['React', 'NodeJS', 'MongoDB', 'NextJS'],
      visualType: 'web'
    },
    'Cyber Security': {
      title: 'Ethical Hacking & Cyber Defense',
      desc: 'Protect networks and critical infrastructure from intrusions. Learn penetration testing, ethical hacking, and threat hunting.',
      badge: 'High Demand',
      features: ['🛡️ CEH Syllabus', '💻 Cyber Range Labs', '🔐 Zero-Trust Network'],
      duration: '20 Weeks',
      salary: '₹ 8.5 LPA',
      tools: ['Wireshark', 'Kali Linux', 'Metasploit', 'Nmap'],
      visualType: 'security'
    },
    'App Development': {
      title: 'Native iOS & Android Mobile Eng.',
      desc: 'Develop high-performance mobile applications using React Native, Flutter, and Swift. Publish apps to Google Play & App Store.',
      badge: 'Showcase',
      features: ['📱 3 Live Play Store Apps', '✨ Flutter Core', '🎨 Rich UI/UX Animations'],
      duration: '22 Weeks',
      salary: '₹ 7.8 LPA',
      tools: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
      visualType: 'app'
    }
  };

  const activeData = programData[activeTab as keyof typeof programData];

  // Helper to render interactive visual mockups (white theme optimized)
  const renderVisual = (type: string) => {
    switch (type) {
      case 'marketing':
        return (
          <div className="relative w-full h-[280px] flex flex-col justify-between p-4 bg-white text-slate-800 rounded-2xl overflow-hidden border border-slate-100 shadow-sm text-left">
             <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] uppercase font-black tracking-widest text-[#004aad] bg-blue-50 px-2 py-0.5 rounded-full">Ads Campaign</span>
                <span className="text-emerald-500 font-bold text-[10px] flex items-center gap-1">● Live</span>
             </div>
             <div className="flex-1 flex items-center justify-center relative">
                <div className="w-24 h-24 rounded-full border-[8px] border-slate-50 border-t-[#004aad] flex flex-col items-center justify-center shadow-md relative bg-slate-50/30">
                   <span className="text-xl font-black text-slate-900">340%</span>
                   <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">ROI</span>
                </div>
                <motion.div 
                   animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute bottom-0 right-0 bg-slate-55/95 backdrop-blur-sm p-2 rounded-xl border border-slate-100 text-left shadow-lg">
                   <div className="text-[8px] text-slate-400 font-bold">Growth</div>
                   <div className="text-sm font-black text-emerald-600">+15.4K</div>
                </motion.div>
             </div>
             <div className="h-10 flex gap-1.5 items-end justify-between px-2 mt-2 border-t border-slate-50 pt-2">
                {[40, 60, 45, 80, 55, 95, 70].map((h, i) => (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                    key={i} 
                    className="w-full bg-[#004aad] rounded-t-sm opacity-80"
                  />
                ))}
             </div>
          </div>
        );
      case 'data':
        return (
          <div className="relative w-full h-[280px] flex flex-col justify-between p-4 bg-white text-slate-800 rounded-2xl overflow-hidden border border-slate-100 shadow-sm text-left">
             <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] uppercase font-black tracking-widest text-[#004aad] bg-blue-50 px-2 py-0.5 rounded-full">Tableau Analytics</span>
                <span className="text-slate-400 text-[10px]">Dataset_2026</span>
             </div>
             <div className="grid grid-cols-2 gap-2.5 flex-1 items-center">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                   <div className="text-slate-400 text-[8px] font-bold uppercase tracking-wider">Accuracy</div>
                   <div className="text-lg font-black text-blue-600">99.8%</div>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                   <div className="text-slate-400 text-[8px] font-bold uppercase tracking-wider">Rows</div>
                   <div className="text-lg font-black text-orange-600">14.2M</div>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 col-span-2 flex items-center justify-between">
                   <div>
                      <div className="text-slate-400 text-[8px] font-bold uppercase tracking-wider">Trend</div>
                      <div className="text-sm font-black text-emerald-600">Upswing</div>
                   </div>
                   <div className="w-12 h-6 overflow-hidden relative">
                      <svg viewBox="0 0 100 50" className="w-full h-full">
                         <path d="M0,45 Q25,20 50,30 T100,5" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
                      </svg>
                   </div>
                </div>
             </div>
          </div>
        );
      case 'web':
        return (
          <div className="relative w-full h-[280px] flex flex-col bg-[#0f172a] text-slate-300 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 text-left">
             <div className="bg-[#1e293b] px-3 py-1.5 flex items-center justify-between border-b border-slate-800 shrink-0">
                <div className="flex gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                   <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                </div>
                <span className="font-mono text-[10px] text-slate-400">App.tsx</span>
             </div>
             <div className="flex-1 p-3.5 font-mono text-[10px] leading-relaxed text-left bg-[#0b0f19]">
                <div className="text-slate-500">// MERN SaaS Setup</div>
                <div className="mt-1"><span className="text-pink-500">import</span> React <span className="text-pink-500">from</span> <span className="text-amber-300">'react'</span>;</div>
                <div className="mt-1"><span className="text-blue-400">const WebApp</span> = () =&gt; &#123;</div>
                <div className="mt-1 pl-3"><span className="text-pink-500">return</span> &lt;<span className="text-blue-400">eBuddhaSaaS</span> /&gt;;</div>
                <div className="mt-1">&#125;;</div>
             </div>
             <motion.div 
                animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-2 right-2 bg-slate-900 border border-slate-700 p-2.5 rounded-xl shadow-2xl flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center text-white"><Code size={14} /></div>
                <div className="text-left">
                   <div className="text-slate-400 text-[8px] font-bold">Preview</div>
                   <div className="text-[10px] font-black text-white">SaaS Panel</div>
                </div>
             </motion.div>
          </div>
        );
      case 'security':
        return (
          <div className="relative w-full h-[280px] flex flex-col justify-between p-4 bg-emerald-50/10 text-slate-800 rounded-2xl overflow-hidden border border-emerald-100 shadow-sm text-left">
             <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] uppercase font-black tracking-widest text-emerald-600 bg-emerald-100/30 border border-emerald-100/50 px-2 py-0.5 rounded-full">Cyber Shield</span>
                <span className="text-emerald-500 font-bold text-[9px] flex items-center gap-1 animate-pulse">● Active</span>
             </div>
             <div className="flex-1 flex items-center justify-center relative">
                <div className="w-28 h-28 rounded-full border border-emerald-500/10 flex items-center justify-center relative">
                   <motion.div 
                      animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 origin-center bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent rounded-full"
                   />
                   <div className="w-10 h-10 bg-emerald-50 border border-emerald-200/50 rounded-xl flex items-center justify-center relative z-10">
                      <Shield className="text-emerald-600" size={20} />
                   </div>
                   <div className="absolute top-6 left-8 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
                </div>
             </div>
             <div className="mt-2 border-t border-emerald-100 pt-2 text-left flex justify-between items-center text-[10px]">
                <span className="text-slate-500 font-bold">Firewall Status</span>
                <span className="text-emerald-600 font-bold">SECURED (0% Threats)</span>
             </div>
          </div>
        );
      case 'app':
        return (
          <div className="relative w-full h-[280px] flex items-center justify-center p-2 bg-slate-50 rounded-2xl border border-slate-100">
             <div className="w-40 h-[240px] bg-white rounded-[28px] border-[4px] border-slate-200 p-2.5 shadow-xl relative flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-100 rounded-b-lg z-20"></div>
                <div className="flex justify-between items-center text-slate-400 text-[7px] mt-1 px-1">
                   <span>9:41</span>
                   <span>5G</span>
                </div>
                <div className="flex-1 flex flex-col justify-center mt-2 text-center">
                   <div className="w-8 h-8 bg-[#004aad] rounded-lg flex items-center justify-center text-white mx-auto mb-2 shadow-sm">
                      <GraduationCap size={16} />
                   </div>
                   <div className="text-[9px] font-black text-slate-800">eBuddha Mobile</div>
                   <button className="mt-3 w-full bg-[#004aad] text-white py-1 rounded-md text-[8px] font-bold">
                      Enroll Now
                   </button>
                </div>
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
       {/* Background accents to match high-end corporate style */}
       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
       
       {/* Animated Background Accents */}
       <motion.div 
         animate={{ 
           x: [0, 40, -20, 0],
           y: [0, -30, 25, 0],
           scale: [1, 1.1, 0.9, 1]
         }}
         transition={{ 
           duration: 18, 
           repeat: Infinity, 
           ease: "easeInOut" 
         }}
         className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#004aad]/5 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none"
       />
       <motion.div 
         animate={{ 
           x: [0, -30, 40, 0],
           y: [0, 25, -30, 0],
           scale: [1, 0.9, 1.1, 1]
         }}
         transition={{ 
           duration: 22, 
           repeat: Infinity, 
           ease: "easeInOut" 
         }}
         className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-400/5 blur-[90px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none"
       />

       {/* Floating Background Particles */}
       {[...Array(4)].map((_, i) => (
         <motion.div
           key={i}
           animate={{
             y: [0, -50, 0],
             opacity: [0.2, 0.5, 0.2],
             scale: [1, 1.2, 1]
           }}
           transition={{
             duration: 12 + i * 3,
             repeat: Infinity,
             ease: "easeInOut",
             delay: i * 2
           }}
           className="absolute w-16 h-16 bg-blue-100/30 rounded-full blur-xl pointer-events-none"
           style={{
             left: `${20 + i * 20}%`,
             top: `${30 + (i % 2) * 40}%`
           }}
         />
       ))}

       <div className="container-wide px-6 relative z-10">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-10"
         >
            <h2 className="text-[32px] md:text-[44px] font-black text-[#0a1128] mb-3 tracking-tight leading-none">
               Mentorship Programs
            </h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Master high-demand roles with top tech experts</p>
         </motion.div>

         {/* Navigation Tabs */}
         <div className="flex overflow-x-auto gap-3 mb-10 pb-2 scrollbar-hide justify-center max-w-4xl mx-auto px-4">
           {categories.map(cat => (
             <button 
               key={cat}
               onClick={() => setActiveTab(cat)}
               className={`whitespace-nowrap px-6 py-3 rounded-xl font-black text-xs transition-all border cursor-pointer ${activeTab === cat ? 'bg-[#004aad] border-[#004aad] text-white shadow-lg' : 'bg-white border-slate-200/80 text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
             >
               {cat}
             </button>
           ))}
         </div>

         {/* Featured Program Card */}
         <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-[2rem] shadow-[0_30px_60px_rgba(10,17,40,0.06)] overflow-hidden border border-slate-100 max-w-5xl mx-auto"
         >
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
               {/* Left Visual Box */}
               <div className="p-6 md:p-8 bg-slate-50/50 border-r border-slate-100 flex items-center justify-center min-h-[340px]">
                  <div className="w-full max-w-[380px] relative">
                     {renderVisual(activeData.visualType)}
                  </div>
               </div>
               
               {/* Right Details Box */}
               <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center text-left bg-white">
                  <div className="flex items-center gap-1.5 bg-blue-50 text-[#004aad] border border-blue-100 font-black text-[9px] px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-wider">
                     <Sparkles size={11} /> {activeData.badge}
                  </div>
                  
                  <h3 className="text-[24px] md:text-[30px] font-black text-[#0a1128] mb-3 leading-tight tracking-tight">{activeData.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6 font-medium">{activeData.desc}</p>
                  
                  {/* Features Row */}
                  <div className="grid grid-cols-3 gap-2.5 mb-6">
                     {activeData.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center justify-center text-center bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-[10px] font-black text-slate-700">
                           {feat}
                        </div>
                     ))}
                  </div>

                  {/* Combined Tools and Stats */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6 pt-4 border-t border-slate-100">
                     <div>
                        <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Tools & Skills</div>
                        <div className="flex flex-wrap gap-1.5">
                           {activeData.tools.map((tool, idx) => (
                              <span key={idx} className="bg-slate-100 border border-slate-200/50 text-slate-700 px-2.5 py-1 rounded-lg text-[10px] font-bold">
                                 {tool}
                              </span>
                           ))}
                        </div>
                     </div>
                     <div className="grid grid-cols-2 bg-slate-50 rounded-xl p-1.5 border border-slate-100 divide-x divide-slate-200">
                        <div className="text-center py-1">
                           <div className="text-slate-400 text-[8px] font-bold uppercase tracking-wider">Duration</div>
                           <div className="text-slate-800 font-black text-[12px]">{activeData.duration}</div>
                        </div>
                        <div className="text-center py-1">
                           <div className="text-slate-400 text-[8px] font-bold uppercase tracking-wider">Avg. Salary</div>
                           <div className="text-slate-800 font-black text-[12px]">{activeData.salary}</div>
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-3">
                     <button className="flex-1 bg-[#004aad] hover:bg-blue-600 text-white py-3 rounded-xl font-black text-xs transition-all shadow-[0_4px_12px_rgba(0,74,173,0.15)] cursor-pointer text-center">
                        Download Syllabus
                     </button>
                     <button className="flex-1 bg-slate-100 border border-slate-200/50 text-slate-700 hover:bg-slate-200 py-3 rounded-xl font-black text-xs transition-all cursor-pointer text-center">
                        Learn More
                     </button>
                  </div>
               </div>
            </div>
         </motion.div>
       </div>
    </section>
  );
};


const ExploreDomainsSection = () => {
  const domains = [
    { 
      title: 'Web Development', 
      icon: Code, 
      desc: 'Build scalable SaaS platforms, responsive web apps, and next-gen MERN stack full-stack portals.',
      stats: { jobs: '45K+ Openings', growth: '+28% YoY', pay: '₹8.4 LPA' }
    },
    { 
      title: 'Data Analytics', 
      icon: Database, 
      desc: 'Unlock deep intelligence with SQL, Python, Tableau, and build production data pipelines.',
      stats: { jobs: '32K+ Openings', growth: '+34% YoY', pay: '₹9.2 LPA' }
    },
    { 
      title: 'Digital Marketing', 
      icon: Megaphone, 
      desc: 'Scale brand revenues with SEO, performance advertising, growth hacking, and AI marketing tools.',
      stats: { jobs: '28K+ Openings', growth: '+22% YoY', pay: '₹6.5 LPA' }
    },
    { 
      title: 'Cyber Security', 
      icon: Shield, 
      desc: 'Defend systems from advanced intrusions and learn penetration testing in real-world range labs.',
      stats: { jobs: '18K+ Openings', growth: '+40% YoY', pay: '₹8.5 LPA' }
    },
    { 
      title: 'App Development', 
      icon: Smartphone, 
      desc: 'Create high-performance iOS and Android mobile software using React Native, Flutter, and Swift.',
      stats: { jobs: '24K+ Openings', growth: '+26% YoY', pay: '₹7.8 LPA' }
    },
    { 
      title: 'Artificial Intelligence', 
      icon: BrainCircuit, 
      desc: 'Train deep neural networks, deploy LLMs, build computer vision agents, and master Prompt Engineering.',
      stats: { jobs: '15K+ Openings', growth: '+52% YoY', pay: '₹12.0 LPA' }
    },
  ];

  return (
    <section className="py-24 bg-[#0a1128] relative overflow-hidden">
       {/* High-End Animated Ambient Nebula */}
       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
       <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
       
       <motion.div 
          animate={{ 
            x: [0, 40, -20, 0],
            y: [0, -30, 25, 0],
            scale: [1, 1.15, 0.9, 1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#004aad]/12 blur-[130px] rounded-full pointer-events-none"
       />
       <motion.div 
          animate={{ 
            x: [0, -30, 35, 0],
            y: [0, 25, -20, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"
       />

       <div className="container-wide px-6 relative z-10">
         {/* Section Header */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-20"
         >
            <div className="inline-flex items-center gap-1.5 bg-white/10 text-white border border-white/20 font-black text-[9px] px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
               <Sparkles size={11} /> Top Domains
            </div>
            <h2 className="text-[36px] md:text-[50px] font-black text-white mb-4 tracking-tight leading-none">
               Explore Top Career Domains
            </h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] max-w-xl mx-auto">Discover industry-aligned programs to accelerate your growth with expert corporate mentors</p>
         </motion.div>

         {/* 3x2 Grid of Large Square Cards */}
         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {domains.map((domain, i) => (
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.4)'
                  }}
                  key={i} 
                  className="bg-white p-8 rounded-[2.5rem] border border-white/10 transition-all duration-300 shadow-xl shadow-black/5 flex flex-col justify-between aspect-square text-left group cursor-pointer"
               >
                  {/* Top: Icon + Title */}
                  <div>
                     <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 bg-blue-50 text-[#004aad] rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm shadow-blue-500/5">
                           <domain.icon size={26} strokeWidth={2} />
                        </div>
                        <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 border border-emerald-100/50 px-3 py-1 rounded-full">
                           {domain.stats.growth}
                        </span>
                     </div>
                     <h3 className="text-2xl font-black text-[#0a1128] mb-3 group-hover:text-[#004aad] transition-colors">{domain.title}</h3>
                     <p className="text-slate-500 text-xs leading-relaxed font-medium line-clamp-3">{domain.desc}</p>
                  </div>

                  {/* Bottom: Micro details + Link */}
                  <div className="mt-4">
                     <div className="flex justify-between items-center text-xs font-bold text-slate-500 border-t border-slate-100 pt-6 mb-6">
                        <div>
                           <span className="text-slate-400 text-[9px] uppercase tracking-wide block leading-none mb-1.5">Jobs available</span>
                           <span className="text-[#0a1128] font-black text-[15px]">{domain.stats.jobs}</span>
                        </div>
                        <div className="text-right">
                           <span className="text-slate-400 text-[9px] uppercase tracking-wide block leading-none mb-1.5">Avg. Salary package</span>
                           <span className="text-[#0a1128] font-black text-[15px]">{domain.stats.pay}</span>
                        </div>
                     </div>

                     <div className="text-[#004aad] font-black text-xs flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        Explore Syllabus <ArrowRight size={14} />
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
       </div>
    </section>
  );
};


const WhyUsSection = () => (
  <section className="py-24 bg-[#0a1128] relative overflow-hidden">
    {/* Animated Ambient Glows */}
    <motion.div 
      animate={{ 
        x: [0, 30, -15, 0],
        y: [0, -25, 20, 0],
        scale: [1, 1.1, 0.95, 1]
      }}
      transition={{ 
        duration: 16, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#004aad]/10 blur-[100px] rounded-full pointer-events-none"
    />
    <motion.div 
      animate={{ 
        x: [0, -25, 30, 0],
        y: [0, 20, -25, 0],
        scale: [1, 0.95, 1.1, 1]
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-blue-500/5 blur-[90px] rounded-full pointer-events-none"
    />

    {/* Subtle Floating Particles for Dark Theme */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -80, 0],
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 15 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 1.2
        }}
        className="absolute w-1 h-1 bg-white rounded-full blur-[1px] pointer-events-none"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
      />
    ))}

    <div className="container-wide px-6 relative z-10">
      <div className="text-center mb-16 text-white">
         <h2 className="text-3xl md:text-5xl font-black mb-4">India's leading vernacular upskilling platform</h2>
         <p className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">What makes us different from others?</p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { title: 'Vernacular Learning', desc: 'Learn in your native language for better understanding.', icon: Megaphone },
          { title: 'Project-Based', desc: 'Build real-world projects to showcase your skills.', icon: Code },
          { title: 'Expert Mentors', desc: 'Get guided by industry leaders from top tech companies.', icon: Users },
          { title: 'Job Assistance', desc: 'Dedicated support to help you land your dream job.', icon: Briefcase },
          { title: 'Community', desc: 'Join a network of 1.5 Lakh+ ambitious learners.', icon: Heart }
        ].map((item, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
            key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-[#004aad]"><item.icon size={24} /></div>
            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const mentorshipProgramDetails = [
  {
    domain: 'Web Development',
    icon: Code,
    duration: '6 Months',
    sessions: '48 Live 1:1 Sessions',
    mentorType: 'Full-Stack Engineers',
    highlights: ['Build 5+ real projects', 'Deploy apps to production', 'Weekly code reviews'],
    tools: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50/50'
  },
  {
    domain: 'Data Analytics',
    icon: Database,
    duration: '5 Months',
    sessions: '40 Live 1:1 Sessions',
    mentorType: 'Data Scientists & Analysts',
    highlights: ['End-to-end case studies', 'Dashboard & reporting skills', 'SQL to ML pipeline'],
    tools: ['Python', 'SQL', 'Tableau', 'Power BI'],
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50/50'
  },
  {
    domain: 'Digital Marketing',
    icon: Megaphone,
    duration: '4 Months',
    sessions: '32 Live 1:1 Sessions',
    mentorType: 'Performance Marketers',
    highlights: ['Run live ad campaigns', 'SEO & content strategy', 'Analytics & ROI tracking'],
    tools: ['Meta Ads', 'Google Ads', 'SEO', 'Analytics'],
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-50/50'
  },
  {
    domain: 'Cyber Security',
    icon: Shield,
    duration: '6 Months',
    sessions: '44 Live 1:1 Sessions',
    mentorType: 'Security Architects',
    highlights: ['Hands-on lab practice', 'Vulnerability assessment', 'Industry certifications prep'],
    tools: ['Ethical Hacking', 'Networks', 'SIEM', 'Cloud Security'],
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50/50'
  }
];

const mentorshipStats = [
  { label: 'Expert Mentors', val: '50+', icon: Users },
  { label: 'Avg. Experience', val: '10+ Yrs', icon: Award },
  { label: 'Learner Rating', val: '4.9/5', icon: Star },
  { label: 'Placement Support', val: '100%', icon: Briefcase }
];

const MentorProofSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const domains = ['All', 'Web Development', 'Data Analytics', 'Digital Marketing', 'Cyber Security'];

  const filteredPrograms = activeTab === 'All'
    ? mentorshipProgramDetails
    : mentorshipProgramDetails.filter(p => p.domain === activeTab);

  return (
    <section className="py-14 bg-slate-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.05) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
      
      {/* Animated Floating Shapes for Light Theme */}
      <motion.div 
        animate={{ 
          rotate: 360,
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          rotate: -360,
          x: [0, -30, 30, 0],
          y: [0, 30, -30, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container-wide px-6 relative z-10">
        {/* Header Block - Flex Layout for Compactness */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 pb-6 border-b border-slate-200/50">
           <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                 <div className="flex items-center gap-1 text-[#004aad] font-black uppercase tracking-widest text-[9px] bg-blue-50 px-2.5 py-1 rounded-md w-fit">
                    <Sparkles size={11} className="animate-pulse" />
                    <span>Verified Mentors</span>
                 </div>
                 <div className="flex items-center gap-1 text-emerald-600 font-black uppercase tracking-widest text-[9px] bg-emerald-50 px-2.5 py-1 rounded-md w-fit">
                    <span>100% Live 1:1</span>
                 </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-none mb-2">
                 Hands-On Mentorship from Working Industry Professionals
              </h2>
              <div className="flex flex-wrap items-center gap-1.5 mt-2">
                 <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide mr-1.5">Every session includes:</span>
                 {["Live 1:1 Guidance", "Project Reviews", "Career Roadmaps", "Interview Prep", "Portfolio Feedback"].map((detail, idx) => (
                    <span key={idx} className="bg-slate-100/80 border border-slate-200/50 text-slate-700 px-2 py-0.5 rounded-md text-[9px] font-extrabold shadow-sm hover:bg-slate-50 transition-colors">
                       {detail}
                    </span>
                 ))}
              </div>
           </div>
           
           {/* Horizontal Compact Stats Row */}
           <div className="flex flex-wrap items-center gap-4 bg-white/80 backdrop-blur-sm border border-slate-200/50 p-2 rounded-xl shadow-sm">
              {[
                { label: 'YouTube', val: '4M+', icon: Youtube, color: 'text-red-500 bg-red-50/50' },
                { label: 'LinkedIn', val: '500K+', icon: Linkedin, color: 'text-blue-600 bg-blue-50/50' },
                { label: 'Instagram', val: '200K+', icon: Instagram, color: 'text-pink-600 bg-pink-50/50' }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-100 bg-white shadow-sm hover:scale-102 transition-transform">
                   <div className={`w-6 h-6 rounded-md flex items-center justify-center ${stat.color} shrink-0`}>
                      <stat.icon size={13} className="stroke-[2]" />
                   </div>
                   <div className="text-left leading-none">
                      <div className="text-[11px] font-black text-slate-900">{stat.val}</div>
                      <div className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">{stat.label}</div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Program stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
           {mentorshipStats.map((stat, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                 <div className="w-10 h-10 rounded-xl bg-[#004aad]/10 text-[#004aad] flex items-center justify-center shrink-0">
                    <stat.icon size={18} />
                 </div>
                 <div>
                    <div className="text-lg font-black text-slate-900 leading-none">{stat.val}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mt-0.5">{stat.label}</div>
                 </div>
              </div>
           ))}
        </div>

        {/* Filter and program details */}
        <div className="flex flex-col gap-6">
           {/* Domain filter tabs */}
           <div className="flex flex-wrap gap-1.5 bg-white border border-slate-200/55 p-1 rounded-xl w-fit shadow-sm max-w-full">
              {domains.map(tab => (
                 <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-4 py-1.5 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${activeTab === tab ? 'text-white' : 'text-slate-500 hover:text-slate-900'}`}
                 >
                    {activeTab === tab && (
                       <motion.div
                          layoutId="activeMentorTabCompact"
                          className="absolute inset-0 bg-[#004aad] rounded-lg z-0"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                       />
                    )}
                    <span className="relative z-10">{tab}</span>
                 </button>
              ))}
           </div>

           {/* Program detail panels */}
           <motion.div layout className="grid sm:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                 {filteredPrograms.map((program) => (
                    <motion.div
                       layout
                       initial={{ opacity: 0, y: 12 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -8 }}
                       transition={{ duration: 0.3 }}
                       key={program.domain}
                       className="group bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 text-left"
                    >
                       <div className="flex items-start justify-between gap-4 mb-5">
                          <div className="flex items-center gap-3">
                             <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${program.iconBg}`}>
                                <program.icon size={24} className={program.iconColor} />
                             </div>
                             <div>
                                <h4 className="text-lg font-black text-slate-900 tracking-tight">{program.domain}</h4>
                                <p className="text-xs text-slate-400 font-semibold mt-0.5">{program.mentorType}</p>
                             </div>
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#004aad] bg-blue-50/80 px-3 py-1.5 rounded-lg shrink-0 border border-blue-100/50">
                             {program.duration}
                          </span>
                       </div>

                       <div className="flex flex-wrap gap-2 mb-5">
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
                             <Timer size={14} className="text-[#004aad]" /> {program.sessions}
                          </span>
                       </div>

                       <ul className="space-y-3 mb-6">
                          {program.highlights.map((item, idx) => (
                             <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 font-medium leading-tight">
                                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                {item}
                             </li>
                          ))}
                       </ul>

                       <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                          {program.tools.map((tool, idx) => (
                             <span key={idx} className="bg-slate-50 border border-slate-100 text-slate-500 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                                {tool}
                             </span>
                          ))}
                       </div>
                    </motion.div>
                 ))}
              </AnimatePresence>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const CampusSection = () => (
  <section className="py-24 bg-[#0a1128] relative overflow-hidden">
    {/* Animated Ambient Glows */}
    <motion.div 
      animate={{ 
        x: [0, 35, -20, 0],
        y: [0, -20, 25, 0],
        scale: [1, 1.15, 0.9, 1]
      }}
      transition={{ 
        duration: 17, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#004aad]/10 blur-[100px] rounded-full pointer-events-none"
    />
    <motion.div 
      animate={{ 
        x: [0, -20, 35, 0],
        y: [0, 25, -20, 0],
        scale: [1, 0.9, 1.15, 1]
      }}
      transition={{ 
        duration: 19, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-purple-500/5 blur-[90px] rounded-full pointer-events-none"
    />

    <div className="container-wide px-6 relative z-10">
      <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Our Headquarters</h2>
         <p className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">Located Exclusively in Bhopal</p>
      </motion.div>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-[3rem] shadow-2xl border border-white/10">
          <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1200" className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/95 via-[#0a1128]/40 to-transparent p-12 flex flex-col justify-end text-white">
             <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-cyan-400" size={32} />
                <h3 className="text-4xl font-black">Bhopal, India</h3>
             </div>
             <p className="text-slate-300 mb-8 max-w-lg leading-relaxed text-lg font-medium">Our premier agency and educational headquarters is located exclusively in the heart of Bhopal, equipped with modern facilities to provide the best hands-on mentorship.</p>
             <button className="w-fit bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-[#004aad] hover:text-white transition-all shadow-lg hover:shadow-[#004aad]/25">Visit Our Office</button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const CareerPathSection = () => {
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
                     style={{ left: `${step.x}%`, top: `${step.y}%` }}
                  >
                     {/* The Map Pin */}
                     <div className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center ${step.type === 'peak' ? 'bottom-full mb-8' : 'top-full mt-8'}`}>
                        <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.fill} flex flex-col items-center justify-center text-white shadow-xl shadow-black/10 border-[3px] border-white hover:scale-110 transition-transform cursor-pointer`}>
                           <span className="font-black text-[22px] leading-none mt-1">{step.id}</span>
                           <span className="text-[9px] font-bold tracking-widest uppercase opacity-90 mt-0.5">Step</span>
                           
                           {/* Tail */}
                           {step.type === 'peak' ? (
                              <div className={`absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] ${step.tail}`}></div>
                           ) : (
                              <div className={`absolute -top-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] ${step.tail}`}></div>
                           )}
                        </div>
                     </div>

                     {/* The Text & Icon Box */}
                     <div className={`absolute left-1/2 -translate-x-1/2 text-center w-48 flex flex-col items-center ${step.type === 'peak' ? 'top-full mt-10' : 'bottom-full mb-10'}`}>
                        <step.icon size={36} strokeWidth={1.5} className={`${step.color} mb-3`} />
                        <div className={`font-black text-[13px] mb-1.5 uppercase tracking-wider ${step.color}`}>{step.title}</div>
                        <div className="font-medium text-slate-500 text-[12px] leading-relaxed px-2">{step.desc}</div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
};

const FounderMessageSection = () => (
  <section className="py-24 bg-white border-t border-slate-100">
    <div className="container-wide px-6">
       <div className="grid lg:grid-cols-[400px_1fr] gap-20 items-center">
          <div className="relative">
             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-[2rem] text-white shadow-2xl">
                <div className="text-4xl font-black mb-1">4M+</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Subscribers</div>
             </div>
          </div>
          <div>
             <div className="text-primary font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-3">
                <div className="w-12 h-0.5 bg-primary"></div> A Note from our Founder
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">Empowering India with the right skills.</h2>
             <p className="text-xl text-slate-500 leading-relaxed mb-10 italic font-medium">
                "Our mission is to bridge the gap between education and employment by providing vernacular, project-based mentorship that prepares you for the real world. Every aspirant deserves a chance to build a successful tech career, regardless of their background."
             </p>
             <div>
                <div className="text-2xl font-black text-slate-900 mb-1">Virat</div>
                <div className="text-sm text-slate-400 font-bold uppercase tracking-widest">Founder, eBuddha Academy</div>
             </div>
          </div>
       </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0a1128] text-white pt-32 pb-12">
    <div className="container-wide px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-16 mb-24">
      <div className="xl:col-span-1">
        <div className="text-4xl font-black mb-10 flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-xl"><GraduationCap size={32} /></div>
          <span>eBuddha</span>
        </div>
        <p className="text-white/40 leading-relaxed mb-10 text-sm font-medium">
          India's leading vernacular upskilling platform, helping 1.5 Lakh+ aspirants learn high-demand tech skills from industry leaders.
        </p>
        <div className="flex gap-4">
          {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-black mb-10 flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          Free Tutorials
        </h4>
        <ul className="space-y-4 text-white/40 font-bold text-xs uppercase tracking-widest">
          {['Python Guide', 'DSA Mastery', 'Digital Marketing', 'MERN Roadmap', 'SEO Fundamentals', 'Cyber Security'].map(item => (
            <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-black mb-10 flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          Quick Links
        </h4>
        <ul className="space-y-4 text-white/40 font-bold text-xs uppercase tracking-widest">
          {['About Us', 'Success Stories', 'Mentorship Programs', 'Free Resources', 'Refer & Earn', 'Hire From Us'].map(item => (
            <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-black mb-10 flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          Support
        </h4>
        <ul className="space-y-4 text-white/40 font-bold text-xs uppercase tracking-widest">
          {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Use', 'Refund Policy', 'FAQ'].map(item => (
            <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-black mb-10 flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          Campus
        </h4>
        <div className="space-y-8 text-sm">
          <div className="flex items-start gap-4">
             <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0"><MapPin size={20} /></div>
             <span className="text-white/40 leading-relaxed font-medium">Digital Hub, 4th Floor, Sector 63, Noida, UP 201301</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0"><Phone size={20} /></div>
             <span className="text-white/40 font-black">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0"><Mail size={20} /></div>
             <span className="text-white/40 font-black">info@ebuddha.com</span>
          </div>
        </div>
      </div>
    </div>

    <div className="container-wide px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/20 font-black uppercase tracking-[0.2em]">
      <p>© 2026 eBuddha Academy. All rights reserved.</p>
      <div className="flex gap-10">
        <a href="#" className="hover:text-white transition-colors">Facebook</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">YouTube</a>
      </div>
    </div>
  </footer>
);

const TestimonialsSection = () => (
  <section className="py-24 bg-[#0a1128] relative overflow-hidden">
    {/* Animated Ambient Glows */}
    <motion.div 
      animate={{ 
        x: [0, 40, -15, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.1, 0.95, 1]
      }}
      transition={{ 
        duration: 21, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#004aad]/10 blur-[100px] rounded-full pointer-events-none"
    />
    <motion.div 
      animate={{ 
        x: [0, -15, 40, 0],
        y: [0, 20, -30, 0],
        scale: [1, 0.95, 1.1, 1]
      }}
      transition={{ 
        duration: 23, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-purple-500/5 blur-[90px] rounded-full pointer-events-none"
    />

    <div className="container-wide px-6 relative z-10">
      <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Hear From Our Learners</h2>
         <p className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">Real Stories, Real Results</p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Aditya Sharma', role: 'Full Stack Developer', company: 'Microsoft', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
          { name: 'Priya Verma', role: 'Performance Marketer', company: 'Google', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' },
          { name: 'Rahul Mehra', role: 'Data Analyst', company: 'KPMG', img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200' }
        ].map((s, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -10, boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.4)' }}
            key={i} className="bg-white p-10 rounded-[3rem] border border-white/10 shadow-xl shadow-black/5 flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md shadow-black/5">
                  <img src={s.img} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900 leading-none mb-1.5">{s.name}</div>
                  <div className="text-xs text-[#004aad] font-bold">{s.role} @ {s.company}</div>
                </div>
              </div>
              <p className="text-slate-500 italic leading-relaxed text-sm">"The mentorship at eBuddha was life-changing. I gained practical skills that helped me crack {s.company}."</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CoursePage = () => {
  const { courseName } = useParams();
  const formattedName = courseName?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="pt-24">
      {/* Sticky Sub-nav */}
      <div className="bg-slate-900 text-white/70 py-4 sticky top-16 z-40 border-b border-white/5 hidden md:block">
        <div className="container-wide px-6 flex gap-10 text-[13px] font-bold">
          {['Overview', 'Curriculum', 'Projects', 'Mentors', 'Certification', 'Fees'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="container-wide px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-primary/20 text-primary border border-primary/30 w-fit px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
              <Sparkles size={14} /> WsCube Certified Program
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Professional <br /> {formattedName} Certification</h1>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Become a job-ready expert with our comprehensive {formattedName} program. 100% Practical learning with 20+ real-world projects and industry-recognized certification.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all">Talk to Advisor</button>
              <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">Download Curriculum</button>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5 bg-slate-800">
               <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" alt="course" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform cursor-pointer shadow-2xl">
                     <Play size={40} fill="currentColor" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="container-wide px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Hands-on Projects</h2>
            <p className="text-slate-500">Build a professional portfolio with real-world applications.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-primary/20 transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  <Code size={32} />
                </div>
                <h3 className="text-xl font-black mb-4">Major Project 0{i}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">Developing a fully functional {formattedName} system from scratch using industry standards.</p>
                <ul className="space-y-2 mb-8">
                  {['React.js', 'Node.js', 'PostgreSQL'].map(t => (
                    <li key={t} className="inline-block bg-white px-3 py-1 rounded-full text-[10px] font-bold text-slate-400 mr-2 border border-slate-100">{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
const ResourcesPage = () => (
  <div className="pt-40 pb-20 bg-slate-50 min-h-screen">
    <div className="container-wide px-6 text-center mb-16">
       <h1 className="text-5xl font-black text-slate-900 mb-6">Free Learning Resources</h1>
       <p className="text-slate-500 max-w-2xl mx-auto">Master high-demand skills for free with our tutorials, interview questions, and online tools.</p>
    </div>
    
    <div className="container-wide px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
       {[
         { title: 'Tutorials', icon: BookOpen, count: '100+ Topics', desc: 'Master programming & marketing with step-by-step guides.' },
         { title: 'Quizzes', icon: Timer, count: '500+ Questions', desc: 'Test your knowledge and track your progress instantly.' },
         { title: 'Interview QnA', icon: MessageSquare, count: '200+ Topics', desc: 'Crack top tech companies with curated interview questions.' },
         { title: 'Online Compilers', icon: Code, count: '15+ Languages', desc: 'Practice coding anywhere, anytime without local setup.' }
       ].map(res => (
         <div key={res.title} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
               <res.icon size={32} />
            </div>
            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{res.count}</div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">{res.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">{res.desc}</p>
            <button className="flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all">Start Learning <ArrowRight size={18} /></button>
         </div>
       ))}
    </div>
  </div>
);

const AlumniPage = () => (
  <div className="pt-40 pb-20 bg-white">
    <div className="container-wide px-6 text-center mb-20">
       <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 w-fit mx-auto">Career Success Wall</div>
       <h1 className="text-5xl font-black text-slate-900 mb-8">Our Alumni Success Stories</h1>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto items-center opacity-40 grayscale hover:grayscale-0 transition-all">
          {['Microsoft', 'KPMG', 'Rapido', 'Amazon'].map(brand => <div key={brand} className="text-3xl font-black">{brand}</div>)}
       </div>
    </div>

    <div className="container-wide px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
       {[
         { name: 'Aditya Sharma', role: 'Full Stack Developer', company: 'Microsoft', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
         { name: 'Priya Verma', role: 'Performance Marketer', company: 'Google', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' },
         { name: 'Rahul Mehra', role: 'Data Analyst', company: 'KPMG', img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200' }
       ].map(s => (
         <div key={s.name} className="bg-slate-50 p-8 rounded-[3rem] flex flex-col items-center text-center group border-2 border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all">
            <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden mb-6 border-4 border-white shadow-xl">
               <img src={s.img} className="w-full h-full object-cover" alt={s.name} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-1">{s.name}</h3>
            <div className="text-slate-400 font-bold text-sm mb-6">{s.role} @ <span className="text-primary">{s.company}</span></div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 italic">"The mentorship at eBuddha was life-changing. I gained practical skills that helped me crack Microsoft."</p>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0077b5] shadow-lg"><Linkedin size={20} fill="currentColor" /></div>
         </div>
       ))}
    </div>
  </div>
);

const ReferAndEarnPage = () => (
  <div className="pt-40 pb-20 bg-[#004aad] text-white min-h-screen">
    <div className="container-wide px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h1 className="text-6xl font-black mb-8 leading-tight">Refer & Earn <br /> Rewards Every Month</h1>
        <p className="text-xl text-white/70 mb-12 leading-relaxed">Share the joy of learning with your friends and family. Get rewarded with cashback, exclusive course access, and exciting gadgets for every successful referral.</p>
        <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/20 backdrop-blur-md mb-12">
           <h3 className="text-2xl font-black mb-6">How it works?</h3>
           <div className="space-y-6">
              {[
                { step: '01', text: 'Share your unique referral link with friends.' },
                { step: '02', text: 'They enroll in any of our Pro programs.' },
                { step: '03', text: 'You get your rewards directly in your wallet!' }
              ].map(s => (
                <div key={s.step} className="flex gap-6 items-center">
                   <div className="text-3xl font-black text-white/20">{s.step}</div>
                   <p className="font-bold">{s.text}</p>
                </div>
              ))}
           </div>
        </div>
        <button className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg shadow-2xl hover:-translate-y-1 transition-all">Get Referral Link</button>
      </div>
      <div className="relative">
         <div className="aspect-square bg-white/5 rounded-[4rem] border border-white/10 flex items-center justify-center overflow-hidden">
            <Gift size={200} className="text-white/20 animate-bounce" />
         </div>
      </div>
    </div>
  </div>
);

const JobPortalPage = () => (
  <div className="pt-40 pb-20 bg-slate-50 min-h-screen">
    <div className="container-wide px-6">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div>
          <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 w-fit">Exclusive Job Portal</div>
          <h1 className="text-5xl font-black text-slate-900">Career Opportunities</h1>
        </div>
        <div className="flex gap-4">
           <button className="bg-white px-6 py-3 rounded-xl font-bold border border-slate-200">All Jobs</button>
           <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold">Post a Job</button>
        </div>
      </div>

      <div className="grid gap-6">
        {[
          { title: 'Full Stack Developer', company: 'Google Cloud India', loc: 'Bangalore', salary: '12-18 LPA' },
          { title: 'SEO Specialist', company: 'Zomato', loc: 'Gurgaon', salary: '8-12 LPA' },
          { title: 'Data Scientist', company: 'Amazon', loc: 'Hyderabad', salary: '15-22 LPA' },
          { title: 'UI/UX Designer', company: 'Paytm', loc: 'Noida', salary: '10-15 LPA' }
        ].map(job => (
          <div key={job.title} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary font-black text-2xl">{job.company[0]}</div>
                <div>
                   <h3 className="text-xl font-black text-slate-900 mb-1">{job.title}</h3>
                   <div className="flex items-center gap-4 text-sm text-slate-400 font-bold">
                      <span className="text-primary">{job.company}</span>
                      <span>•</span>
                      <span>{job.loc}</span>
                   </div>
                </div>
             </div>
             <div className="flex items-center gap-8 w-full md:w-auto border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-12">
                <div className="text-center md:text-left">
                   <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Package</div>
                   <div className="text-lg font-black text-slate-900">{job.salary}</div>
                </div>
                <button className="flex-1 md:flex-initial bg-primary/10 text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">Apply Now</button>
             </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CommonPage = ({ title }: { title: string }) => (
  <div className="pt-40 pb-20 container-wide px-6 min-h-[60vh] flex flex-col items-center justify-center text-center">
    <h1 className="text-6xl font-black mb-8">{title}</h1>
    <p className="text-slate-500 max-w-2xl leading-relaxed text-lg mb-12">We are currently preparing the most comprehensive {title.toLowerCase()} experience for you. Stay tuned!</p>
    <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold">Notify Me</button>
  </div>
);

const HomePage = () => (
  <>
    <Hero />
    <MentorshipSection />
    <ExploreDomainsSection />
    <WhyUsSection />
    <MentorProofSection />
    <CampusSection />
    <CareerPathSection />
    <TestimonialsSection />
    <FounderMessageSection />
  </>
);

// --- Main App Component ---

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#050914] text-white font-outfit selection:bg-[#004aad] selection:text-white antialiased relative overflow-x-hidden">
      {/* Global Animated Ambient Spotlights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
         <motion.div 
            animate={{ 
              x: [0, 80, -40, 0],
              y: [0, -60, 50, 0],
              scale: [1, 1.25, 0.8, 1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-[10%] left-[10%] w-[700px] h-[700px] bg-[#004aad]/12 blur-[150px] rounded-full"
         />
         <motion.div 
            animate={{ 
              x: [0, -50, 70, 0],
              y: [0, 50, -60, 0],
              scale: [1, 0.85, 1.2, 1]
            }}
            transition={{ 
              duration: 32, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full"
         />
         <motion.div 
            animate={{ 
              x: [0, 60, -50, 0],
              y: [0, -50, 40, 0],
              scale: [1, 1.15, 0.85, 1]
            }}
            transition={{ 
              duration: 29, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-[75%] left-[20%] w-[650px] h-[650px] bg-[#004aad]/8 blur-[160px] rounded-full"
         />
      </div>

      <div className="relative z-10">
         <TopBar />
         <Navbar />
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/online/:courseName" element={<CoursePage />} />
           <Route path="/on-campus/:centerName" element={<CoursePage />} />
           <Route path="/resources" element={<ResourcesPage />} />
           <Route path="/alumni" element={<AlumniPage />} />
           <Route path="/masterclass" element={<CommonPage title="Live Masterclasses" />} />
           <Route path="/hire-from-us" element={<JobPortalPage />} />
           <Route path="/refer-and-earn" element={<ReferAndEarnPage />} />
           <Route path="/webinars" element={<CommonPage title="Expert Webinars" />} />
           <Route path="/contact" element={<CommonPage title="Get in Touch" />} />
         </Routes>
         <Footer />
      </div>
    </div>
  );
}