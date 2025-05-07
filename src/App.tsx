
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated imports
import LandingPage from './pages/landingPage';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Education from './pages/education';
import Contact from './pages/contact';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
};

export default App;
