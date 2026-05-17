const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// The palette:
// Primary Blue: #004aad
// Dark Background: #0a1128
// Accent Orange: #f97316 (Tailwind orange-500)

// 1. Replace Hero & Mentorship colors
// Hero background
content = content.replace(/bg-\[#020617\]/g, 'bg-[#0a1128]');
// Purple blur -> Blue blur
content = content.replace(/bg-purple-600\/10/g, 'bg-[#004aad]/10');
// #0052cc -> #004aad
content = content.replace(/#0052cc/g, '#004aad');
// Text gradient in hero
content = content.replace(/from-orange-400 to-yellow-300/g, 'from-orange-400 to-orange-500');
// Green pulse dot -> orange
content = content.replace(/bg-green-400 animate-pulse/g, 'bg-orange-500 animate-pulse');
// rgba(0,82,204 -> rgba(0,74,173
content = content.replace(/rgba\(0,82,204/g, 'rgba(0,74,173');
// Hero icons background
content = content.replace(/bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg/g, 'bg-[#004aad] rounded-full flex items-center justify-center text-white shadow-lg');
content = content.replace(/bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg/g, 'bg-[#004aad] rounded-full flex items-center justify-center text-white shadow-lg');

// Mentorship Section fixes
content = content.replace(/bg-\[#f0f4f9\]/g, 'bg-slate-50');
content = content.replace(/bg-\[#fff0f4\]/g, 'bg-slate-100');
content = content.replace(/bg-\[#ff7aa2\]/g, 'bg-slate-200');
// Re-add macOS buttons with standard hex colors if they were affected, but they are explicit:
// #ff5f56, #ffbd2e, #27c93f (These are fine)

content = content.replace(/bg-yellow-100 text-yellow-800/g, 'bg-blue-50 text-[#004aad]');
// Stats icons in mentorship
content = content.replace(/text-green-500"><Timer/g, 'text-[#004aad]"><Timer');
content = content.replace(/text-orange-500"><Briefcase/g, 'text-[#004aad]"><Briefcase');

// Explore Domains fixes
content = content.replace(/bg-\[#061a40\]/g, 'bg-[#0a1128]');
// Make all domain cards use standard primary blue instead of rainbow colors
content = content.replace(/text-blue-500/g, 'text-[#004aad]');
content = content.replace(/bg-blue-50/g, 'bg-blue-50/50');

content = content.replace(/text-orange-500/g, 'text-[#004aad]');
content = content.replace(/bg-orange-50/g, 'bg-blue-50/50');

content = content.replace(/text-pink-500/g, 'text-[#004aad]');
content = content.replace(/bg-pink-50/g, 'bg-blue-50/50');

content = content.replace(/text-green-500/g, 'text-[#004aad]');
content = content.replace(/bg-green-50/g, 'bg-blue-50/50');

content = content.replace(/text-purple-500/g, 'text-[#004aad]');
content = content.replace(/bg-purple-50/g, 'bg-blue-50/50');

content = content.replace(/text-yellow-500/g, 'text-[#004aad]');
content = content.replace(/bg-yellow-50/g, 'bg-blue-50/50');

// General fixes
// #003DFF -> #004aad
content = content.replace(/#003DFF/g, '#004aad');
// #061a40 -> #0a1128 (if any left)
content = content.replace(/#061a40/g, '#0a1128');
// #020617 -> #0a1128 (for footer and dark sections)
content = content.replace(/#020617/g, '#0a1128');

// Fix the stars to be orange-500
content = content.replace(/text-yellow-400 mb-1/g, 'text-orange-500 mb-1');


fs.writeFileSync(filePath, content, 'utf8');
console.log("Colors unified successfully.");
