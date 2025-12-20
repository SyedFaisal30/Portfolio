import { FaLinkedin, FaGithub, FaWhatsapp, FaTwitter, FaEnvelope, FaRocket, FaComments, FaCoffee } from "react-icons/fa";
import Header from "../components/header";
import Footer from "../components/footer";
const Contact = () => {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">

      <div className="pt-20 px-4 sm:px-10 pb-10">
      <Header />
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-5xl font-bold text-blue-400 animate-pulse">
            Let's Create Something Amazing! 🚀
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have an exciting project in mind? Want to collaborate on something innovative? 
            Or just want to say hi over a virtual coffee? ☕
          </p>
          <p className="text-2xl text-blue-300 font-semibold">
            I'm just one click away!
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300">
            <FaRocket className="text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">New Projects</h3>
            <p className="text-gray-200">Got an innovative idea? Let's bring it to life together!</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300">
            <FaComments className="text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-gray-200">Looking to team up? I'm always open to exciting collaborations!</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300">
            <FaCoffee className="text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Just Chat</h3>
            <p className="text-gray-200">Want to discuss tech, share ideas, or just network? Hit me up!</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-10 rounded-2xl shadow-2xl max-w-4xl mx-auto mb-12 border-2 border-gray-500">
          <h3 className="text-3xl font-bold text-center mb-6 text-blue-300">
            Choose Your Preferred Way to Connect 👇
          </h3>
          <p className="text-center text-gray-300 mb-8 text-lg">
            Whether it's a professional inquiry, collaboration opportunity, or a friendly hello - 
            pick the platform you're most comfortable with!
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/syedfaisal30/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-blue-700 rounded-xl text-white hover:bg-blue-600 transition duration-300 transform hover:scale-110 shadow-lg min-w-[140px]"
            >
              <FaLinkedin className="text-4xl mb-2 group-hover:animate-bounce" />
              <span className="font-semibold">LinkedIn</span>
              <span className="text-xs text-gray-200 mt-1">Professional</span>
            </a>
            
            <a
              href="https://github.com/SyedFaisal30"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-gray-800 rounded-xl text-white hover:bg-gray-700 transition duration-300 transform hover:scale-110 shadow-lg min-w-[140px]"
            >
              <FaGithub className="text-4xl mb-2 group-hover:animate-bounce" />
              <span className="font-semibold">GitHub</span>
              <span className="text-xs text-gray-200 mt-1">Code & Projects</span>
            </a>
            
            <a
              href="https://wa.me/9892996342"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-green-500 rounded-xl text-white hover:bg-green-400 transition duration-300 transform hover:scale-110 shadow-lg min-w-[140px]"
            >
              <FaWhatsapp className="text-4xl mb-2 group-hover:animate-bounce" />
              <span className="font-semibold">WhatsApp</span>
              <span className="text-xs text-gray-200 mt-1">Quick Chat</span>
            </a>
            
            <a
              href="https://twitter.com/SyedFaisal30"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-blue-500 rounded-xl text-white hover:bg-blue-400 transition duration-300 transform hover:scale-110 shadow-lg min-w-[140px]"
            >
              <FaTwitter className="text-4xl mb-2 group-hover:animate-bounce" />
              <span className="font-semibold">Twitter</span>
              <span className="text-xs text-gray-200 mt-1">Social</span>
            </a>
            
            <a
              href="mailto:sfarz172320@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-red-500 rounded-xl text-white hover:bg-red-400 transition duration-300 transform hover:scale-110 shadow-lg min-w-[140px]"
            >
              <FaEnvelope className="text-4xl mb-2 group-hover:animate-bounce" />
              <span className="font-semibold">Email</span>
              <span className="text-xs text-gray-200 mt-1">Formal</span>
            </a>
          </div>
        </div>

        {/* Response Promise */}
        <div className="text-center bg-gray-800 p-8 rounded-xl max-w-2xl mx-auto shadow-lg">
          <h4 className="text-2xl font-bold text-blue-400 mb-4">⚡ Fast Response Guaranteed</h4>
          <p className="text-gray-300 text-lg">
            I typically respond within <span className="text-blue-400 font-bold">24 hours</span>. 
            Your message is important to me, and I'm excited to hear from you!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;