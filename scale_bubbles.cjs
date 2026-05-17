const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace avatars with larger dimensions
content = content.replace('w-28 h-28 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20', 'w-36 h-36 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20');
content = content.replace('w-24 h-24 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10', 'w-32 h-32 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10');
content = content.replace('w-32 h-32 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20', 'w-40 h-40 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20');
content = content.replace('w-36 h-36 rounded-full border-[6px] border-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30', 'w-48 h-48 rounded-full border-[6px] border-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30');
content = content.replace('w-24 h-24 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20', 'w-32 h-32 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20');
content = content.replace('w-20 h-20 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10', 'w-28 h-28 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10');
content = content.replace('w-28 h-28 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20', 'w-36 h-36 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-20');
content = content.replace('w-24 h-24 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10', 'w-32 h-32 rounded-full border-[4px] border-white overflow-hidden shadow-2xl z-10');

// Replace pills text and padding
content = content.replace(/px-6 py-2 rounded-full font-bold text-sm shadow-xl z-40 border border-slate-100 whitespace-nowrap/g, 'px-4 py-1.5 rounded-full font-bold text-xs shadow-xl z-40 border border-slate-100 whitespace-nowrap');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Scaled bubbles up and text down successfully");
