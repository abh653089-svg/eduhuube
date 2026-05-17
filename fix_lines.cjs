const fs = require('fs');
const filePath = 'C:/Users/aithe/Music/ebuddha-agency/src/App.tsx';
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const fixLines = [513, 559, 592, 644, 679, 725, 889];

for (let lineNum of fixLines) {
   let idx = lineNum - 1;
   if (lines[idx].includes('</div>')) {
       lines[idx] = lines[idx].replace('</div>', '</motion.div>');
   }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Lines fixed");
