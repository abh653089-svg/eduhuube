const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace WhyUsSection static glows
const staticWhyUs = `const WhyUsSection = () => (
  <section className="py-24 bg-[#0a1128] relative overflow-hidden">
    {/* Ambient Glows */}
    <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#004aad]/10 blur-[100px] rounded-full pointer-events-none"></div>
    <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-blue-500/5 blur-[90px] rounded-full pointer-events-none"></div>`;

const animatedWhyUs = `const WhyUsSection = () => (
  <section className="py-24 bg-[#0a1128] relative overflow-hidden">
    {/* Animated Ambient Glows */}
    <motion.div 
      animate={{ 
        x: [0, 30, -15, 0],
        y: [0, -25, 20, 0],
        scale: [1, 1.1, 0.95, 1]
      }}
      transition={{ 
        duration: 16, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#004aad]/10 blur-[100px] rounded-full pointer-events-none"
    />
    <motion.div 
      animate={{ 
        x: [0, -25, 30, 0],
        y: [0, 20, -25, 0],
        scale: [1, 0.95, 1.1, 1]
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-blue-500/5 blur-[90px] rounded-full pointer-events-none"
    />`;

if (content.indexOf(staticWhyUs) !== -1) {
    content = content.replace(staticWhyUs, animatedWhyUs);
    console.log("Successfully prepared WhyUsSection background animation.");
} else {
    console.error("Could not find exact WhyUsSection static block!");
}

// 2. Replace CampusSection static glows
const staticCampus = `const CampusSection = () => (
  <section className="py-24 bg-[#0a1128] relative overflow-hidden">
    {/* Ambient Glows */}
    <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#004aad]/10 blur-[100px] rounded-full pointer-events-none"></div>
    <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-purple-500/5 blur-[90px] rounded-full pointer-events-none"></div>`;

const animatedCampus = `const CampusSection = () => (
  <section className="py-24 bg-[#0a1128] relative overflow-hidden">
    {/* Animated Ambient Glows */}
    <motion.div 
      animate={{ 
        x: [0, 35, -20, 0],
        y: [0, -20, 25, 0],
        scale: [1, 1.15, 0.9, 1]
      }}
      transition={{ 
        duration: 17, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#004aad]/10 blur-[100px] rounded-full pointer-events-none"
    />
    <motion.div 
      animate={{ 
        x: [0, -20, 35, 0],
        y: [0, 25, -20, 0],
        scale: [1, 0.9, 1.15, 1]
      }}
      transition={{ 
        duration: 19, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-purple-500/5 blur-[90px] rounded-full pointer-events-none"
    />`;

if (content.indexOf(staticCampus) !== -1) {
    content = content.replace(staticCampus, animatedCampus);
    console.log("Successfully prepared CampusSection background animation.");
} else {
    console.error("Could not find exact CampusSection static block!");
}

// 3. Replace TestimonialsSection static glows
const staticTestimonials = `const TestimonialsSection = () => (
  <section className="py-24 bg-[#0a1128] relative overflow-hidden">
    {/* Ambient Glows */}
    <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#004aad]/10 blur-[100px] rounded-full pointer-events-none"></div>
    <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-purple-500/5 blur-[90px] rounded-full pointer-events-none"></div>`;

const animatedTestimonials = `const TestimonialsSection = () => (
  <section className="py-24 bg-[#0a1128] relative overflow-hidden">
    {/* Animated Ambient Glows */}
    <motion.div 
      animate={{ 
        x: [0, 40, -15, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.1, 0.95, 1]
      }}
      transition={{ 
        duration: 21, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#004aad]/10 blur-[100px] rounded-full pointer-events-none"
    />
    <motion.div 
      animate={{ 
        x: [0, -15, 40, 0],
        y: [0, 20, -30, 0],
        scale: [1, 0.95, 1.1, 1]
      }}
      transition={{ 
        duration: 23, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-purple-500/5 blur-[90px] rounded-full pointer-events-none"
    />`;

if (content.indexOf(staticTestimonials) !== -1) {
    content = content.replace(staticTestimonials, animatedTestimonials);
    console.log("Successfully prepared TestimonialsSection background animation.");
} else {
    console.error("Could not find exact TestimonialsSection static block!");
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully applied all background animations!");
