// import { useState } from 'react';
// import { Home, Code, BookOpen, Briefcase, Mail, Github, Linkedin, Twitter, Phone } from 'lucide-react';

// // App component
// export default function App() {
//   const [currentPage, setCurrentPage] = useState('home');
  
//   // Sample data - replace with your own
//   const personalInfo = {
//     name: "John Doe",
//     title: "Frontend Developer",
//     summary: "I'm a passionate frontend developer with experience in React, Tailwind CSS, and modern JavaScript. I love building responsive and user-friendly web applications.",
//     image: "/api/placeholder/400/400" // Replace with your image
//   };
  
//   const skills = [
//     { name: "React", level: 90, projects: ["E-commerce Site", "Portfolio Website"] },
//     { name: "JavaScript", level: 85, projects: ["E-commerce Site", "Task Manager", "Weather App"] },
//     { name: "HTML/CSS", level: 95, projects: ["E-commerce Site", "Portfolio Website", "Company Landing Page"] },
//     { name: "Tailwind CSS", level: 80, projects: ["Portfolio Website", "Company Landing Page"] },
//     { name: "Node.js", level: 75, projects: ["Task Manager", "API Development"] },
//     { name: "Git", level: 85, projects: ["All Projects"] },
//     { name: "Responsive Design", level: 90, projects: ["E-commerce Site", "Portfolio Website", "Company Landing Page"] },
//     { name: "TypeScript", level: 70, projects: ["Task Manager"] }
//   ];
  
//   const projects = [
//     {
//       title: "E-commerce Site",
//       description: "A fully responsive e-commerce website with product filtering, cart functionality, and payment integration.",
//       technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
//       link: "https://github.com/yourusername/ecommerce",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       title: "Task Manager",
//       description: "A productivity app that helps users manage their daily tasks with reminders and categorization.",
//       technologies: ["React", "TypeScript", "Firebase", "CSS"],
//       link: "https://github.com/yourusername/taskmanager",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       title: "Company Landing Page",
//       description: "A modern landing page for a tech startup featuring animations and responsive design.",
//       technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
//       link: "https://github.com/yourusername/landingpage",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       title: "Weather App",
//       description: "A weather forecast application that provides real-time weather data from multiple locations.",
//       technologies: ["React", "JavaScript", "API Integration", "CSS"],
//       link: "https://github.com/yourusername/weatherapp",
//       image: "/api/placeholder/400/250"
//     }
//   ];
  
//   const education = [
//     {
//       degree: "Bachelor of Science in Computer Science",
//       institution: "University of Technology",
//       duration: "2018 - 2022",
//       description: "Specialized in web development and software engineering."
//     },
//     {
//       degree: "Web Development Bootcamp",
//       institution: "CodeCamp Academy",
//       duration: "2017 - 2018",
//       description: "Intensive program focused on frontend and backend technologies."
//     },
//     {
//       degree: "High School Diploma",
//       institution: "Central High School",
//       duration: "2014 - 2017",
//       description: "Graduated with honors, focus on mathematics and computer science."
//     }
//   ];
  
//   const experience = [
//     {
//       position: "Frontend Developer",
//       company: "Tech Solutions Inc.",
//       duration: "2022 - Present",
//       description: "Developing modern web applications using React and related technologies."
//     },
//     {
//       position: "Web Developer Intern",
//       company: "Digital Creations",
//       duration: "2021 - 2022",
//       description: "Assisted in the development of client websites and applications."
//     },
//     {
//       position: "Freelance Web Designer",
//       company: "Self-employed",
//       duration: "2020 - 2021",
//       description: "Created custom websites for small businesses and individuals."
//     }
//   ];
  
//   const socialLinks = {
//     email: "john.doe@example.com",
//     github: "https://github.com/yourusername",
//     linkedin: "https://linkedin.com/in/yourusername",
//     twitter: "https://twitter.com/yourusername",
//     whatsapp: "+1234567890"
//   };

//   // Page rendering
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return <HomePage personalInfo={personalInfo} experience={experience} skills={skills} />;
//       case 'projects':
//         return <ProjectsPage projects={projects} />;
//       case 'skills':
//         return <SkillsPage skills={skills} />;
//       case 'education':
//         return <EducationPage education={education} />;
//       case 'contact':
//         return <ContactPage socialLinks={socialLinks} />;
//       default:
//         return <HomePage personalInfo={personalInfo} experience={experience} skills={skills} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800">
//       <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       <main className="container mx-auto py-8 px-4">
//         {renderPage()}
//       </main>
//       <Footer socialLinks={socialLinks} />
//     </div>
//   );
// }

// // Navbar Component
// function Navbar({ currentPage, setCurrentPage }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//   const navItems = [
//     { id: 'home', name: 'Home', icon: <Home size={18} /> },
//     { id: 'projects', name: 'Projects', icon: <Code size={18} /> },
//     { id: 'skills', name: 'Skills', icon: <Briefcase size={18} /> },
//     { id: 'education', name: 'Education', icon: <BookOpen size={18} /> },
//     { id: 'contact', name: 'Contact', icon: <Mail size={18} /> }
//   ];

//   return (
//     <nav className="bg-gray-800 text-white shadow-lg">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           <div className="flex items-center">
//             <span className="font-bold text-xl text-blue-400">MyPortfolio</span>
//           </div>
          
//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-4">
//             {navItems.map(item => (
//               <button
//                 key={item.id}
//                 onClick={() => setCurrentPage(item.id)}
//                 className={`flex items-center space-x-1 px-3 py-2 rounded transition ${
//                   currentPage === item.id 
//                     ? 'bg-blue-600 text-white' 
//                     : 'text-gray-300 hover:bg-gray-700'
//                 }`}
//               >
//                 {item.icon}
//                 <span>{item.name}</span>
//               </button>
//             ))}
//           </div>
          
//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button 
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-300 hover:text-white focus:outline-none"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {isMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
        
//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-2">
//             {navItems.map(item => (
//               <button
//                 key={item.id}
//                 onClick={() => {
//                   setCurrentPage(item.id);
//                   setIsMenuOpen(false);
//                 }}
//                 className={`flex items-center w-full space-x-2 px-4 py-2 text-left ${
//                   currentPage === item.id 
//                     ? 'bg-blue-600 text-white' 
//                     : 'text-gray-300 hover:bg-gray-700'
//                 }`}
//               >
//                 {item.icon}
//                 <span>{item.name}</span>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// // Footer Component
// function Footer({ socialLinks }) {
//   return (
//     <footer className="bg-gray-800 text-white py-6">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <p className="text-gray-300">&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
//           </div>
//           <div className="flex space-x-4">
//             <a href={`mailto:${socialLinks.email}`} className="text-gray-300 hover:text-blue-400 transition">
//               <Mail size={20} />
//             </a>
//             <a href={socialLinks.github} className="text-gray-300 hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer">
//               <Github size={20} />
//             </a>
//             <a href={socialLinks.linkedin} className="text-gray-300 hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer">
//               <Linkedin size={20} />
//             </a>
//             <a href={socialLinks.twitter} className="text-gray-300 hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer">
//               <Twitter size={20} />
//             </a>
//             <a href={`https://wa.me/${socialLinks.whatsapp}`} className="text-gray-300 hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer">
//               <Phone size={20} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // Home Page Component
// function HomePage({ personalInfo, experience, skills }) {
//   return (
//     <div className="space-y-12">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-gray-800 to-blue-900 text-white rounded-lg shadow-xl overflow-hidden">
//         <div className="container mx-auto px-6 py-12">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
//               <div className="rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
//                 <img src={personalInfo.image} alt={personalInfo.name} className="h-64 w-64 object-cover" />
//               </div>
//             </div>
//             <div className="md:w-2/3 md:pl-12">
//               <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
//               <h2 className="text-2xl text-blue-300 mb-6">{personalInfo.title}</h2>
//               <p className="text-lg mb-8">{personalInfo.summary}</p>
//               <div className="flex space-x-4">
//                 <button 
//                   onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition"
//                 >
//                   About Me
//                 </button>
//                 <button 
//                   onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
//                   className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-full transition"
//                 >
//                   My Skills
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="bg-white rounded-lg shadow-md p-8">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">About Me</h2>
//         <p className="text-lg mb-6">
//           I'm a dedicated frontend developer with a passion for creating responsive, user-friendly web applications. 
//           With experience in modern JavaScript frameworks and libraries, I specialize in translating design concepts 
//           into functional, efficient code.
//         </p>
//         <p className="text-lg">
//           I enjoy working on challenging projects that push my skills to the next level. When I'm not coding, 
//           you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge 
//           through blog posts and tutorials.
//         </p>
//       </section>

//       {/* Experience Section */}
//       <section className="bg-white rounded-lg shadow-md p-8">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">Experience</h2>
//         <div className="space-y-8">
//           {experience.map((exp, index) => (
//             <div key={index} className="border-l-4 border-blue-500 pl-4">
//               <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
//               <div className="flex items-center text-gray-600 mb-2">
//                 <span>{exp.company}</span>
//                 <span className="mx-2">•</span>
//                 <span>{exp.duration}</span>
//               </div>
//               <p className="text-gray-700">{exp.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Skills Preview Section */}
//       <section id="skills" className="bg-white rounded-lg shadow-md p-8">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">Skills</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {skills.slice(0, 4).map((skill, index) => (
//             <div key={index} className="bg-gray-100 p-4 rounded-lg">
//               <div className="flex justify-between mb-2">
//                 <span className="font-medium text-gray-800">{skill.name}</span>
//                 <span className="text-blue-600">{skill.level}%</span>
//               </div>
//               <div className="w-full bg-gray-300 rounded-full h-2.5">
//                 <div 
//                   className="bg-blue-600 h-2.5 rounded-full" 
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-6 text-center">
//           <button 
//             onClick={() => window.scrollTo(0, 0)}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition"
//           >
//             View All Skills
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

// // Projects Page Component
// function ProjectsPage({ projects }) {
//   return (
//     <div className="space-y-8">
//       <header className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-800">My Projects</h1>
//         <p className="text-gray-600 mt-2">Check out some of my recent work</p>
//       </header>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition hover:shadow-xl">
//             <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.technologies.map((tech, i) => (
//                   <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <a 
//                 href={project.link} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
//               >
//                 View Project
//                 <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Skills Page Component
// function SkillsPage({ skills }) {
//   return (
//     <div className="space-y-8">
//       <header className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-800">My Skills</h1>
//         <p className="text-gray-600 mt-2">Technologies and tools I work with</p>
//       </header>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {skills.map((skill, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex justify-between mb-2">
//               <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
//               <span className="text-blue-600 font-medium">{skill.level}%</span>
//             </div>
//             <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
//               <div 
//                 className="bg-blue-600 h-2.5 rounded-full" 
//                 style={{ width: `${skill.level}%` }}
//               ></div>
//             </div>
//             <div>
//               <h4 className="font-medium text-gray-700 mb-2">Used in projects:</h4>
//               <ul className="list-disc list-inside text-gray-600">
//                 {skill.projects.map((project, i) => (
//                   <li key={i}>{project}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Education Page Component
// function EducationPage({ education }) {
//   return (
//     <div className="space-y-8">
//       <header className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-800">Education</h1>
//         <p className="text-gray-600 mt-2">My academic journey</p>
//       </header>
      
//       <div className="relative border-l-2 border-blue-500 ml-4">
//         {education.map((edu, index) => (
//           <div key={index} className="mb-10 ml-6">
//             <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white"></div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
//               <div className="flex items-center text-gray-600 mt-1 mb-3">
//                 <span>{edu.institution}</span>
//                 <span className="mx-2">•</span>
//                 <span>{edu.duration}</span>
//               </div>
//               <p className="text-gray-700">{edu.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Contact Page Component
// function ContactPage({ socialLinks }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState('');
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };
  
//   const handleSubmit = () => {
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitMessage('Thank you for your message! I will get back to you soon.');
//       setFormData({ name: '', email: '', message: '' });
      
//       // Clear success message after 5 seconds
//       setTimeout(() => {
//         setSubmitMessage('');
//       }, 5000);
//     }, 1500);
//   };
  
//   return (
//     <div className="space-y-8">
//       <header className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
//         <p className="text-gray-600 mt-2">Let's get in touch</p>
//       </header>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Contact Form */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Send me a message</h2>
          
//           {submitMessage && (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//               {submitMessage}
//             </div>
//           )}
          
//           <div>
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
            
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
            
//             <div className="mb-4">
//               <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="5"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               ></textarea>
//             </div>
            
//             <button
//               onClick={handleSubmit}
//               disabled={isSubmitting}
//               className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition ${
//                 isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
//               }`}
//             >
//               {isSubmitting ? 'Sending...' : 'Send Message'}
//             </button>
//           </div>
//         </div>
        
//         {/* Contact Information */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect with me</h2>
          
//           <div className="space-y-4">
//             <div className="flex items-start">
//               <div className="bg-blue-100 p-2 rounded-full mr-4">
//                 <Mail size={20} className="text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-800">Email</h3>
//                 <a href={`mailto:${socialLinks.email}`} className="text-blue-600 hover:underline">
//                   {socialLinks.email}
//                 </a>
//               </div>
//             </div>
            
//             <div className="flex items-start">
//               <div className="bg-blue-100 p-2 rounded-full mr-4">
//                 <Github size={20} className="text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-800">GitHub</h3>
//                 <a href={socialLinks.github} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
//                   {socialLinks.github.replace('https://github.com/', '')}
//                 </a>
//               </div>
//             </div>
            
//             <div className="flex items-start">
//               <div className="bg-blue-100 p-2 rounded-full mr-4">
//                 <Linkedin size={20} className="text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-800">LinkedIn</h3>
//                 <a href={socialLinks.linkedin} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
//                   {socialLinks.linkedin.replace('https://linkedin.com/in/', '')}
//                 </a>
//               </div>
//             </div>
            
//             <div className="flex items-start">
//               <div className="bg-blue-100 p-2 rounded-full mr-4">
//                 <Twitter size={20} className="text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-800">Twitter</h3>
//                 <a href={socialLinks.twitter} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
//                   {socialLinks.twitter.replace('https://twitter.com/', '@')}
//                 </a>
//               </div>
//             </div>
            
//             <div className="flex items-start">
//               <div className="bg-blue-100 p-2 rounded-full mr-4">
//                 <Phone size={20} className="text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-800">WhatsApp</h3>
//                 <a href={`https://wa.me/${socialLinks.whatsapp}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
//                   {socialLinks.whatsapp}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
