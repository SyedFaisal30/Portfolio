"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="space-x-6">
          <a href="https://github.com/SyedFaisal30" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/syedfaisal30" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
          <a href="mailto:sfarz172320@gmail.com" className="hover:text-blue-400">Email</a>
          <a href="https://x.com/SyedFaisal30" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">X (Twitter)</a>
          <a href="https://wa.me/9892996342" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">WhatsApp</a>
        </div>
        <p className="mt-4 text-sm">© 2025 Syed Faisal Abdul Rahman Zulfequar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
