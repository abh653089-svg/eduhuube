const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const targetStart = 'const MentorshipSection = () => {';
const startIndex = content.indexOf(targetStart);
if (startIndex === -1) {
    console.error("Could not find MentorshipSection start!");
    process.exit(1);
}

const targetEndMarker = 'const ExploreDomainsSection = () =>';
const endIndex = content.indexOf(targetEndMarker, startIndex);
if (endIndex === -1) {
    console.error("Could not find ExploreDomainsSection marker!");
    process.exit(1);
}

// Read raw replacement block from file
const blockPath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'mentorship_block.txt');
const replacement = fs.readFileSync(blockPath, 'utf8');

content = content.substring(0, startIndex) + replacement + "\n\n" + content.substring(endIndex);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully replaced MentorshipSection using external text block!");
