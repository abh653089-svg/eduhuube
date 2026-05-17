const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const startStr = "const MentorProofSection = () => (";
const endStr = "const CareerPathSection = () => {";

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    const replacement = `const MentorProofSection = () => (
  <section className="py-24 bg-white">
    <div className="container-wide px-6">
       <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center bg-slate-50 rounded-[4rem] p-12 md:p-20 border border-slate-100">
          <div>
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">Our Proud Mentors</h2>
             <div className="flex flex-col gap-6">
                {[
                  { label: 'Subscribers on YouTube', val: '4M+', color: 'bg-red-500' },
                  { label: 'Followers on LinkedIn', val: '500K+', color: 'bg-blue-600' },
                  { label: 'Instagram Community', val: '200K+', color: 'bg-blue-500' }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                     <div className={\`w-16 h-16 \${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform\`}>
                        <TrendingUp size={28} />
                     </div>
                     <div>
                        <div className="text-3xl font-black text-slate-900 leading-none mb-1">{stat.val}</div>
                        <div className="text-sm text-slate-400 font-bold uppercase tracking-wider">{stat.label}</div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-[3rem] bg-white shadow-2xl p-10 border border-slate-100 flex flex-col items-center justify-center text-center">
                <div className="w-40 h-40 rounded-full border-8 border-primary/10 overflow-hidden mb-8">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">Our Mentors</h3>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-8">Guided by Practitioners</p>
                <div className="flex -space-x-4">
                   {[1, 2, 3, 4, 5].map(i => (
                     <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200">
                        <img src={\`https://i.pravatar.cc/150?u=mentor\${i}\`} className="w-full h-full object-cover" />
                     </div>
                   ))}
                </div>
             </div>
          </div>
       </motion.div>
    </div>
  </section>
);

const CampusSection = () => (
  <section className="py-24 bg-white">
    <div className="container-wide px-6">
      <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Our Headquarters</h2>
         <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Located Exclusively in Bhopal</p>
      </motion.div>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-[3rem] shadow-2xl">
          <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1200" className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-12 flex flex-col justify-end text-white">
             <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-primary" size={32} />
                <h3 className="text-4xl font-black">Bhopal, India</h3>
             </div>
             <p className="text-white/70 mb-8 max-w-lg leading-relaxed text-lg">Our premier agency and educational headquarters is located exclusively in the heart of Bhopal, equipped with modern facilities to provide the best hands-on mentorship.</p>
             <button className="w-fit bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">Visit Our Office</button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

`;

    content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Sections restored and updated successfully.");
} else {
    console.log("Could not find bounds!");
}
