"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="space-x-6">
          <a href="https://github.com/SyedFaisal30" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/SyedFaisal30" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
          <a href="mailto:your-email@gmail.com" className="hover:text-blue-400">Email</a>
          <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">X (Twitter)</a>
          <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">WhatsApp</a>
        </div>
        <p className="mt-4 text-sm">© 2025 Syed Faisal Abdul Rahman Zulfequar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
