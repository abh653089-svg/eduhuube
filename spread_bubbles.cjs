const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace positions with spread out coordinates
content = content.replace(
  'className="absolute top-[20%] left-[5%] w-36 h-36 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20"',
  'className="absolute top-[10%] left-[-2%] w-36 h-36 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20"'
);

content = content.replace(
  'className="absolute top-[10%] left-[45%] w-32 h-32 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10"',
  'className="absolute top-[0%] left-[46%] w-32 h-32 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10"'
);

content = content.replace(
  'className="absolute top-[25%] right-[10%] w-40 h-40 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20"',
  'className="absolute top-[12%] right-[-4%] w-40 h-40 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20"'
);

content = content.replace(
  'className="absolute bottom-[20%] left-[10%] w-32 h-32 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20"',
  'className="absolute bottom-[10%] left-[-2%] w-32 h-32 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20"'
);

content = content.replace(
  'className="absolute bottom-[5%] left-[32%] w-28 h-28 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10"',
  'className="absolute bottom-[-10%] left-[32%] w-28 h-28 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10"'
);

content = content.replace(
  'className="absolute bottom-[15%] right-[25%] w-36 h-36 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20"',
  'className="absolute bottom-[5%] right-[25%] w-36 h-36 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20"'
);

content = content.replace(
  'className="absolute top-[50%] right-[0%] w-32 h-32 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10"',
  'className="absolute top-[48%] right-[-12%] w-32 h-32 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10"'
);

// Replace pill positions
content = content.replace(
  'className="absolute top-[45%] left-[-10%] bg-white text-slate-800 px-4 py-1.5 rounded-full font-bold text-xs shadow-xl z-40 border border-slate-100 whitespace-nowrap"',
  'className="absolute top-[40%] left-[-18%] bg-white text-slate-800 px-4 py-1.5 rounded-full font-bold text-xs shadow-xl z-40 border border-slate-100 whitespace-nowrap"'
);

content = content.replace(
  'className="absolute top-[45%] right-[-15%] bg-white text-slate-800 px-4 py-1.5 rounded-full font-bold text-xs shadow-xl z-40 border border-slate-100 whitespace-nowrap"',
  'className="absolute top-[38%] right-[-24%] bg-white text-slate-800 px-4 py-1.5 rounded-full font-bold text-xs shadow-xl z-40 border border-slate-100 whitespace-nowrap"'
);

content = content.replace(
  'className="absolute bottom-[15%] left-[-5%] bg-white text-slate-800 px-4 py-1.5 rounded-full font-bold text-xs shadow-xl z-40 border border-slate-100 whitespace-nowrap"',
  'className="absolute bottom-[8%] left-[-12%] bg-white text-slate-800 px-4 py-1.5 rounded-full font-bold text-xs shadow-xl z-40 border border-slate-100 whitespace-nowrap"'
);

content = content.replace(
  'className="absolute bottom-[5%] right-[10%] bg-white text-slate-800 px-4 py-1.5 rounded-full font-bold text-xs shadow-xl z-40 border border-slate-100 whitespace-nowrap"',
  'className="absolute bottom-[-5%] right-[8%] bg-white text-slate-800 px-4 py-1.5 rounded-full font-bold text-xs shadow-xl z-40 border border-slate-100 whitespace-nowrap"'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Spread bubbles out successfully");
