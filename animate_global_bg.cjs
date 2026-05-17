const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'aithe', 'Music', 'ebuddha-agency', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const targetStart = 'export default function App() {';
const startIndex = content.indexOf(targetStart);
if (startIndex === -1) {
    console.error("Could not find App start!");
    process.exit(1);
}

const replacement = `export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#050914] text-white font-outfit selection:bg-[#004aad] selection:text-white antialiased relative overflow-x-hidden">
      {/* Global Animated Ambient Spotlights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
         <motion.div 
            animate={{ 
              x: [0, 80, -40, 0],
              y: [0, -60, 50, 0],
              scale: [1, 1.25, 0.8, 1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-[10%] left-[10%] w-[700px] h-[700px] bg-[#004aad]/12 blur-[150px] rounded-full"
         />
         <motion.div 
            animate={{ 
              x: [0, -50, 70, 0],
              y: [0, 50, -60, 0],
              scale: [1, 0.85, 1.2, 1]
            }}
            transition={{ 
              duration: 32, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full"
         />
         <motion.div 
            animate={{ 
              x: [0, 60, -50, 0],
              y: [0, -50, 40, 0],
              scale: [1, 1.15, 0.85, 1]
            }}
            transition={{ 
              duration: 29, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-[75%] left-[20%] w-[650px] h-[650px] bg-[#004aad]/8 blur-[160px] rounded-full"
         />
      </div>

      <div className="relative z-10">
         <TopBar />
         <Navbar />
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/online/:courseName" element={<CoursePage />} />
           <Route path="/on-campus/:centerName" element={<CoursePage />} />
           <Route path="/resources" element={<ResourcesPage />} />
           <Route path="/alumni" element={<AlumniPage />} />
           <Route path="/masterclass" element={<CommonPage title="Live Masterclasses" />} />
           <Route path="/hire-from-us" element={<JobPortalPage />} />
           <Route path="/refer-and-earn" element={<ReferAndEarnPage />} />
           <Route path="/webinars" element={<CommonPage title="Expert Webinars" />} />
           <Route path="/contact" element={<CommonPage title="Get in Touch" />} />
         </Routes>
         <Footer />
      </div>
    </div>
  );
}`;

// Replaces from startIndex to the end of the file
content = content.substring(0, startIndex) + replacement;

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully replaced App() global return container using node script!");
