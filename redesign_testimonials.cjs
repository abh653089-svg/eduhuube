const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const targetStart = 'const TestimonialsSection = () => (';
const startIndex = content.indexOf(targetStart);
if (startIndex === -1) {
    console.error("Could not find TestimonialsSection start!");
    process.exit(1);
}

const targetEndMarker = 'const CoursePage = () => {';
const endIndex = content.indexOf(targetEndMarker, startIndex);
if (endIndex === -1) {
    console.error("Could not find CoursePage marker!");
    process.exit(1);
}

const replacement = `const TestimonialsSection = () => (
  <section className="py-24 bg-[#0a1128] relative overflow-hidden">
    {/* Ambient Glows */}
    <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#004aad]/10 blur-[100px] rounded-full pointer-events-none"></div>
    <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-purple-500/5 blur-[90px] rounded-full pointer-events-none"></div>

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
);`;

content = content.substring(0, startIndex) + replacement + "\n\n" + content.substring(endIndex);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully replaced TestimonialsSection using node script!");
