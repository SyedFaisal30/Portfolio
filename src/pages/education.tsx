"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect } from "react";

const Education = () => {
  const educationTimeline = [
    {
      year: "2022-2025",
      title: "Kishinchand Chellaram College",
      degree: "B.Sc. in Computer Science",
      description:
        "Expected Graduation: March 2025 | GPA: 10.0 (1st Sem), 9.9 (2nd Sem), 9.9 (3rd Sem), 9.5 (4th Sem), 9.3 (5th Sem), 9.3 (6th Sem) - 9.7 (CGPA)",
      link: "https://kccollege.edu.in/",
    },
    {
      year: "2014-2018",
      title: "DAV College",
      degree: "12th Std – Science",
      description: "Completed 12th Science with 70%",
    },
    {
      year: "2010-2014",
      title: "St. John Convent High School",
      degree: "4th to 10th Std",
      description: "Completed 10th Std with 85.4%",
    },
    {
      year: "2004-2010",
      title: "New Model English High School",
      degree: "Nursery to 3rd Std",
      description: "Studied from Nursery to 3rd Standard",
    },
  ];

  const certifications = [
    {
      title: "HTML, CSS, and JavaScript",
      institution: "Coursera",
      year: "2023",
      description: "Completed certification in HTML, CSS, and JavaScript.",
    },
    {
      title: "Ongoing Gen AI with Chai",
      institution: "Coursera",
      year: "2024",
      description: "Currently learning Gen AI with Chai code implementation.",
    },
  ];

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("project-visible");
          observer.unobserve(entry.target); // Optional: only animate once
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const elements = document.querySelectorAll(".project-fade");
  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <div className="bg-gray-900 text-white font-sans pt-16">
      <Header />

      <div className=" px-4 sm:px-6 md:px-10 py-10 space-y-12">
        <h2 className="text-3xl font-bold text-blue-400 text-center">🎓 Education Timeline</h2>

        <div className="relative animate-on-scroll">
          {/* Vertical Line */}
          <div className="absolute  top-0 h-full w-1 bg-blue-400 transform -translate-x-1/2" />

          {/* Timeline Entries */}
          <div className="space-y-16">    
            {educationTimeline.map((entry, index) => (
              <div
                key={index}
                className="relative flex flex-col items-left text-left gap-2 project-fade"
              >
                {/* Dot Above */}
                <div className="absolute  transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400 border-2 border-gray-800" />

                <div className="w-full px-4 sm:px-6">
                  <h3 className="text-xl font-semibold text-blue-300 animate-on-scroll">
                    {entry.link ? (
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-400"
                      >
                        {entry.title}
                      </a>
                    ) : (
                      entry.title
                    )}
                  </h3>
                  <p className="text-gray-300">{entry.degree}</p>
                  <p className="text-gray-400 text-sm break-words whitespace-normal">
                    {entry.description}
                  </p>
                  <p className="text-gray-400 text-sm">{entry.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16 animate-on-scroll">
          <h2 className="text-3xl font-bold text-blue-400 text-center">📜 Certifications</h2>
          <div className="space-y-6 mt-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col gap-1 text-left project-fade">
                <h3 className="text-xl font-semibold text-blue-300">{cert.title}</h3>
                <p className="text-gray-300">{cert.institution}</p>
                <p className="text-gray-400 text-sm">{cert.year}</p>
                <p className="text-gray-400 text-sm break-words whitespace-normal">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Education;
