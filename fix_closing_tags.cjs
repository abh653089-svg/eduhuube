const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Error 1: Line 512-514 Mentorship
content = content.replace(
  /            <\/div>\n         <\/div>\n      <\/div>\n    <\/section>/g,
  `            </div>\n         </motion.div>\n      </div>\n    </section>`
);

// Error 2: Line 558-560 ExploreDomains
content = content.replace(
  /                   <\/div>\n                <\/div>\n             \}\)\}/g,
  `                   </div>\n                </motion.div>\n             ))}`
);

// Error 3: Line 591-593 WhyUs
content = content.replace(
  /            <p className="text-sm text-white\/60 leading-relaxed">\{item\.desc\}<\/p>\n          <\/div>\n        \}\)\}/g,
  `            <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>\n          </motion.div>\n        ))}`
);

// Error 4: Line 643-646 MentorProof
content = content.replace(
  /             <\/div>\n          <\/div>\n       <\/div>\n    <\/div>\n  <\/section>/g,
  `             </div>\n          </div>\n       </motion.div>\n    </div>\n  </section>`
);

// Error 5: Line 678-680 Campus
content = content.replace(
  /             <\/div>\n          <\/div>\n        \}\)\}/g,
  `             </div>\n          </motion.div>\n        ))}`
);

// Error 6: Line 724-726 CareerPath
content = content.replace(
  /                  <div className="flex-1"><\/div>\n               <\/div>\n             \}\)\}/g,
  `                  <div className="flex-1"></div>\n               </motion.div>\n             ))}`
);

// Error 7: Line 888-890 Testimonials
content = content.replace(
  /            <p className="text-slate-500 italic leading-relaxed">"The mentorship at eBuddha was life-changing\. I gained practical skills that helped me crack \{s\.company\}\."<\/p>\n          <\/div>\n        \}\)\}/g,
  `            <p className="text-slate-500 italic leading-relaxed">"The mentorship at eBuddha was life-changing. I gained practical skills that helped me crack {s.company}."</p>\n          </motion.div>\n        ))}`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Closing tags fixed successfully.");
