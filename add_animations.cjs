const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Ensure framer-motion is imported at the top if it isn't already (it should be, but just in case)
if (!content.includes("import { motion, AnimatePresence } from 'framer-motion';")) {
  // It's probably imported as `import { motion } from 'framer-motion';` or something
  // We'll rely on the existing import which should be there.
}

// 1. Mentorship Section
content = content.replace(
  /<div className="text-center mb-16">([\s\S]*?)<\/div>/g,
  (match, inner, offset) => {
    // Only target the one in MentorshipSection and others that have h2
    if (match.includes("Mentorship Programs") || match.includes("Explore Top Career Domains") || match.includes("What makes us different") || match.includes("Hear From Our Learners") || match.includes("Our Campus Centers") || match.includes("Your Roadmap to Success")) {
        return `<motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >${inner}</motion.div>`;
    }
    return match;
  }
);

content = content.replace(
  /<div className="bg-white rounded-\[24px\] shadow-xl overflow-hidden border border-slate-100 max-w-6xl mx-auto">/g,
  `<motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="bg-white rounded-[24px] shadow-xl overflow-hidden border border-slate-100 max-w-6xl mx-auto">`
);
content = content.replace(
  /className="bg-white rounded-\[24px\] shadow-xl overflow-hidden border border-slate-100 max-w-6xl mx-auto">/g,
  `className="bg-white rounded-[24px] shadow-xl overflow-hidden border border-slate-100 max-w-6xl mx-auto">`
); // fix if I replaced incorrectly above. Actually I'll just change the opening tag and closing tag of that specific div.

content = content.replace(
  /<\/div>\n      <\/div>\n    <\/section>\n  \);\n};\n\nconst ExploreDomainsSection/g,
  `</motion.div>\n      </div>\n    </section>\n  );\n};\n\nconst ExploreDomainsSection`
);

// 2. ExploreDomainsSection
content = content.replace(
  /<div key=\{i\} className="bg-white p-8 rounded-\[24px\] hover:-translate-y-2/g,
  `<motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1, duration: 0.5 }}
                   whileHover={{ scale: 1.03, y: -5 }}
                   key={i} className="bg-white p-8 rounded-[24px]`
);

// We need to make sure we close the motion.div for domain cards
content = content.replace(
  /See Programs <ArrowRight size=\{16\} \/>\n                   <\/div>\n                <\/div>/g,
  `See Programs <ArrowRight size={16} />\n                   </div>\n                </motion.div>`
);

// 3. WhyUsSection
content = content.replace(
  /<div key=\{i\} className="bg-white\/10 backdrop-blur-md p-8/g,
  `<motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={i} className="bg-white/10 backdrop-blur-md p-8`
);
content = content.replace(
  /<p className="text-sm text-white\/60 leading-relaxed">\{item\.desc\}<\/p>\n          <\/div>/g,
  `<p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>\n          </motion.div>`
);

// 4. MentorProofSection
content = content.replace(
  /<div className="grid lg:grid-cols-2 gap-16 items-center bg-slate-50/g,
  `<motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="grid lg:grid-cols-2 gap-16 items-center bg-slate-50`
);
content = content.replace(
  /className="w-full h-full object-cover" \/>\n                     <\/div>\n                   \)\)}\n                <\/div>\n             <\/div>\n          <\/div>\n       <\/div>\n    <\/div>\n  <\/section>/g,
  `className="w-full h-full object-cover" />\n                     </div>\n                   ))}\n                </div>\n             </div>\n          </div>\n       </motion.div>\n    </div>\n  </section>`
);

// 5. CampusSection
content = content.replace(
  /<div key=\{campus\.city\} className="group relative overflow-hidden rounded-\[3rem\]/g,
  `<motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            key={campus.city} className="group relative overflow-hidden rounded-[3rem]`
);
content = content.replace(
  /Campus<\/button>\n            <\/div>\n          <\/div>/g,
  `Campus</button>\n            </div>\n          </motion.div>`
);

// 6. CareerPathSection
content = content.replace(
  /<div key=\{i\} className=\{\`flex items-center gap-12 w-full \$\{i % 2 === 0 \? 'flex-row' : 'flex-row-reverse'\}\`\}>/g,
  `<motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  key={i} className={\`flex items-center gap-12 w-full \${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}\`}>`
);
content = content.replace(
  /<div className="absolute -top-2 -right-2 bg-white/g,
  `<div className="absolute -top-2 -right-2 bg-white`
);
// Careful closing CareerPathSection
content = content.replace(
  /<step\.icon size=\{28\} \/>\n                     <div className="absolute -top-2 -right-2 bg-white text-\[#004aad\] text-\[10px\] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-\[#004aad\]">0\{i\+1\}<\/div>\n                  <\/div>\n                  <div className="flex-1"><\/div>\n               <\/div>/g,
  `<step.icon size={28} />\n                     <div className="absolute -top-2 -right-2 bg-white text-[#004aad] text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#004aad]">0{i+1}</div>\n                  </div>\n                  <div className="flex-1"></div>\n               </motion.div>`
);

// 7. TestimonialsSection
content = content.replace(
  /<div key=\{i\} className="bg-white p-10 rounded-\[3rem\] border border-slate-100 shadow-xl shadow-slate-200\/20">/g,
  `<motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/20">`
);
content = content.replace(
  /<p className="text-slate-500 italic leading-relaxed">"The mentorship at eBuddha was life-changing. I gained practical skills that helped me crack \{s\.company\}\."<\/p>\n          <\/div>/g,
  `<p className="text-slate-500 italic leading-relaxed">"The mentorship at eBuddha was life-changing. I gained practical skills that helped me crack {s.company}."</p>\n          </motion.div>`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Animations added successfully.");
