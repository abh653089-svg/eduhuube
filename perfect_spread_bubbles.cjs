const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Find start of target container
const targetStart = '<div className="relative w-full h-full max-w-[700px] min-h-[650px]">';
const startIndex = content.indexOf(targetStart);
if (startIndex === -1) {
    console.error("Could not find the target bubble container!");
    process.exit(1);
}

// Find ending relative to start
const containerEndMarker = '{/* Pills */}';
const pillsIndex = content.indexOf(containerEndMarker, startIndex);
if (pillsIndex === -1) {
    console.error("Could not find the pills marker!");
    process.exit(1);
}

const lastPillIndex = content.indexOf('</motion.div>', pillsIndex + 200);
const divEndIndex = content.indexOf('</div>', lastPillIndex);

if (divEndIndex === -1) {
    console.error("Could not find closing div of container!");
    process.exit(1);
}

// Balanced coordinates (Midpoint of Cramped and Ultra-Spread)
const replacement = `<div className="relative w-full h-full max-w-[650px] min-h-[620px]">
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
            </div>`;

// Replace parent h-[680px] height to h-[640px]
content = content.replace(
  'className="relative h-[680px] hidden lg:flex items-center justify-center w-full"',
  'className="relative h-[640px] hidden lg:flex items-center justify-center w-full"'
);

// Apply container replacement
content = content.substring(0, startIndex) + replacement + content.substring(divEndIndex + 6);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully set balanced space (midpoint) between avatars in Hero!");
