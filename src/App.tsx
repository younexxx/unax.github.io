import React, { useState } from 'react';
import { Code, BookOpen, Trophy, Instagram, Linkedin, Mail, Volume2, Bot, CreditCard, Send } from 'lucide-react';

function App() {
  // Student information
  const studentInfo = {
    name: "Younes Sedki",
    age: 20,
    year: "First Year",
    major: "Web Development",
    school: "ISTA Hay Riad",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 60 },
      { name: "React", level: 40 },
      { name: "Node.js", level: 50 },
      { name: "Telegram Bot API", level: 90 },
      { name: "Payment Processing", level: 75 },
    ],
    projects: [
      { 
        name: "UNAX Telegram Bot", 
        description: "A multipurpose Telegram bot with advanced user management and automation features",
        technologies: ["Node.js", "Telegram Bot API", "MongoDB"]
      },
      { 
        name: "CC Checker Service", 
        description: "Secure payment verification system with real-time validation and anti-fraud measures",
        technologies: ["JavaScript", "Payment APIs", "Security Protocols"]
      }
    ],
    hobbies: ["Coding", "Bot Development", "Payment Systems", "3D Modeling", "Pixel Art"]
  };

  // Sound effects with more reliable sources
  const soundEffects = [
    { name: "Steve Hurt", url: "src/sounds/steve.mp3" },
    { name: "Villager Hmm", url: "src/sounds/village.mp3" },
    { name: "Creeper Hiss", url: "src/sounds/creeper.mp3" },
    { name: "Enderman", url: "src/sounds/teleport.mp3" },
    { name: "Zombie", url: "src/sounds/zombie.mp3" },
    { name: "Pig", url: "src/sounds/pigs.mp3" }
  ];

  // State to track if a sound is currently playing
  const [playingSound, setPlayingSound] = useState<string | null>(null);

  // Function to play sound with error handling
  const playSound = (url: string, name: string) => {
    try {
      // Create new audio element
      const audio = new Audio(url);
      
      // Add event listeners for error handling
      audio.addEventListener('error', (e) => {
        console.error(`Error playing sound ${name}:`, e);
        setPlayingSound(null);
      });
      
      // Add event listener for when audio ends
      audio.addEventListener('ended', () => {
        setPlayingSound(null);
      });
      
      // Set the current playing sound
      setPlayingSound(name);
      
      // Play the sound
      audio.play().catch(error => {
        console.error(`Failed to play sound ${name}:`, error);
        setPlayingSound(null);
      });
    } catch (error) {
      console.error(`Error setting up sound ${name}:`, error);
      setPlayingSound(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#1D1F21] text-white font-minecraft">
      {/* Header/Navigation */}
      <header className="bg-[#272B2D] border-b-4 border-[#5E7A45] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-wider">UNAX</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-[#5E7A45] transition-colors">About</a>
              <a href="#skills" className="hover:text-[#5E7A45] transition-colors">Skills</a>
              <a href="#projects" className="hover:text-[#5E7A45] transition-colors">Projects</a>
              <a href="#telegram" className="hover:text-[#5E7A45] transition-colors">Telegram</a>
              <a href="#sounds" className="hover:text-[#5E7A45] transition-colors">Sounds</a>
              <a href="#contact" className="hover:text-[#5E7A45] transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-[url('https://images.unsplash.com/photo-1607513746994-51f730a44832?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-block bg-[#272B2D] p-2 mb-4 border-2 border-[#5E7A45]">
            <h2 className="text-lg text-[#5E7A45]">{studentInfo.year} Student at {studentInfo.school}</h2>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{studentInfo.name}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            A {studentInfo.age}-year-old {studentInfo.major} student specializing in Telegram bots and payment systems.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-[#5E7A45] hover:bg-[#4A6235] px-6 py-3 rounded-sm font-bold transition-colors">
              View Projects
            </button>
            <button className="bg-[#272B2D] border-2 border-[#5E7A45] hover:bg-[#323638] px-6 py-3 rounded-sm font-bold transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-[#272B2D]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="src/sounds/cat.jpg" 
                alt="Developer workspace with multiple screens" 
                className="rounded-sm border-4 border-[#5E7A45] shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="inline-block bg-[#1D1F21] p-2 mb-4 border-2 border-[#5E7A45]">
                <h2 className="text-lg text-[#5E7A45]">About Me</h2>
              </div>
              <h3 className="text-3xl font-bold mb-6">Building Digital Solutions</h3>
              <p className="mb-6 text-gray-300">
                As a {studentInfo.age}-year-old first-year student at {studentInfo.school}, I specialize in creating 
                powerful Telegram bots and secure payment verification systems. I combine technical expertise with 
                creative problem-solving to deliver reliable and innovative solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-[#5E7A45]" />
                  <span>Telegram Bot Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-[#5E7A45]" />
                  <span>Payment Systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-[#5E7A45]" />
                  <span>Web Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-[#5E7A45]" />
                  <span>Problem Solver</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-[#1D1F21]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#272B2D] p-2 mb-4 border-2 border-[#5E7A45]">
              <h2 className="text-lg text-[#5E7A45]">My Skills</h2>
            </div>
            <h3 className="text-3xl font-bold">Development Expertise</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {studentInfo.skills.map((skill, index) => (
              <div key={index} className="bg-[#272B2D] p-6 rounded-sm border-2 border-[#5E7A45]">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-bold">{skill.name}</h4>
                  <span className="text-[#5E7A45] font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#1D1F21] h-4 rounded-sm overflow-hidden">
                  <div 
                    className="bg-[#5E7A45] h-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-[#272B2D]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#1D1F21] p-2 mb-4 border-2 border-[#5E7A45]">
              <h2 className="text-lg text-[#5E7A45]">My Projects</h2>
            </div>
            <h3 className="text-3xl font-bold">Recent Builds</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentInfo.projects.slice(0, 3).map((project, index) => (
              <div key={index} className="bg-[#1D1F21] rounded-sm overflow-hidden border-2 border-[#5E7A45] transition-transform hover:transform hover:scale-105">
                <div className="h-48 bg-[#323638] flex items-center justify-center">
                  {index === 0 ? (
                    <Bot className="h-16 w-16 text-[#5E7A45]" />
                  ) : index === 1 ? (
                    <CreditCard className="h-16 w-16 text-[#5E7A45]" />
                  ) : (
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png" 
                      alt="UNAX Logo" 
                      className="h-16 w-16"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{project.name}</h4>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-[#323638] px-3 py-1 text-sm rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-[#5E7A45] hover:bg-[#4A6235] py-2 rounded-sm font-bold transition-colors">
                    SOON BE READY
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {studentInfo.projects.slice(3).map((project, index) => (
              <div key={index} className="bg-[#1D1F21] rounded-sm overflow-hidden border-2 border-[#5E7A45] transition-transform hover:transform hover:scale-105">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-full bg-[#323638] flex items-center justify-center p-6">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png" 
                      alt="UNAX Logo" 
                      className="h-16 w-16"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h4 className="text-xl font-bold mb-2">{project.name}</h4>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-[#323638] px-3 py-1 text-sm rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-[#5E7A45] hover:bg-[#4A6235] py-2 rounded-sm font-bold transition-colors">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telegram Bots Section */}
      <section id="telegram" className="py-16 bg-[#1D1F21]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#272B2D] p-2 mb-4 border-2 border-[#5E7A45]">
              <h2 className="text-lg text-[#5E7A45]">Telegram & CC Services</h2>
            </div>
            <h3 className="text-3xl font-bold">Specialized Solutions</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Telegram Bot Card */}
            <div className="bg-[#272B2D] rounded-sm overflow-hidden border-2 border-[#5E7A45]">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Send className="h-10 w-10 text-[#5E7A45] mr-4" />
                  <h4 className="text-2xl font-bold">Telegram Bot Services</h4>
                </div>
                <p className="text-gray-300 mb-6">
                  I develop custom Telegram bots with advanced features including:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#5E7A45] mr-2">•</span>
                    <span>User management and authentication systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5E7A45] mr-2">•</span>
                    <span>Payment processing and subscription management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5E7A45] mr-2">•</span>
                    <span>Custom commands and interactive menus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5E7A45] mr-2">•</span>
                    <span>Automated notifications and alerts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5E7A45] mr-2">•</span>
                    <span>Integration with external APIs and services</span>
                  </li>
                </ul>
                <button className="w-full bg-[#5E7A45] hover:bg-[#4A6235] py-3 rounded-sm font-bold transition-colors">
                  Request a Custom Bot  coming soon 
                </button>
              </div>
            </div>
            
            {/* CC Checker Card */}
            <div className="bg-[#272B2D] rounded-sm overflow-hidden border-2 border-[#5E7A45]">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <CreditCard className="h-10 w-10 text-[#5E7A45] mr-4" />
                  <h4 className="text-2xl font-bold">CC Checker Services</h4>
                </div>
                <p className="text-gray-300 mb-6">
                  Secure and reliable payment verification systems with:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#5E7A45] mr-2">•</span>
                    <span>Real-time card validation and verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5E7A45] mr-2">•</span>
                    <span>Advanced security protocols and encryption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5E7A45] mr-2">•</span>
                    <span>BIN lookup and card information retrieval</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5E7A45] mr-2">•</span>
                    <span>Balance checking and transaction simulation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5E7A45] mr-2">•</span>
                    <span>Integration with Telegram bots for automated processing</span>
                  </li>
                </ul>
                <button className="w-full bg-[#5E7A45] hover:bg-[#4A6235] py-3 rounded-sm font-bold transition-colors">
                  <a href="https://medium.com/@vedantjdv/validating-credit-card-numbers-using-the-luhn-algorithm-in-java-3fd58e276744" target="_blank" rel="noopener noreferrer" className="text-white">Learn More</a>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-[#323638] p-6 rounded-sm border-2 border-[#5E7A45]">
            <div className="flex items-center mb-4">
              <Bot className="h-6 w-6 text-[#5E7A45] mr-3" />
              <h4 className="text-xl font-bold">DM with your Questions</h4>
            </div>
            <p className="text-gray-300 mb-4">
              Experience the power and functionality of my Telegram bots firsthand. Scan the QR code or click the button below to start a conversation with me.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="bg-white p-4 rounded-sm mb-4 md:mb-0">
                <div className="w-48 h-48 bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://t.me/DNS_U')] bg-contain bg-no-repeat bg-center"></div>
              </div>
              <div className="md:pl-8">
                <h5 className="text-lg font-bold mb-2">Features of the  Bots:</h5>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#5E7A45] mr-2">•</span>
                    <span>Interactive commands and responses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5E7A45] mr-2">•</span>
                    <span>Sample payment processing workflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5E7A45] mr-2">•</span>
                    <span>User-friendly interface with inline buttons</span>
                  </li>
                </ul>
                <a 
                  href="https://t.me/DNS_U" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-[#0088cc] hover:bg-[#0077b5] px-6 py-3 rounded-sm font-bold transition-colors"
                >
                  Open in Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sound Effects Section */}
      <section id="sounds" className="py-16 bg-[#1D1F21]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#272B2D] p-2 mb-4 border-2 border-[#5E7A45]">
              <h2 className="text-lg text-[#5E7A45]">Minecraft Sounds</h2>
            </div>
            <h3 className="text-3xl font-bold">Character Sound Effects</h3>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Click on the buttons below to hear various Minecraft character sounds!
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {soundEffects.map((sound, index) => (
              <button 
                key={index} 
                onClick={() => playSound(sound.url, sound.name)}
                className={`bg-[#272B2D] border-2 ${playingSound === sound.name ? 'border-yellow-500' : 'border-[#5E7A45]'} hover:bg-[#323638] p-6 rounded-sm transition-all hover:transform hover:scale-105 active:translate-y-1 flex items-center justify-center gap-3`}
                disabled={playingSound !== null}
              >
                <Volume2 className={`h-6 w-6 ${playingSound === sound.name ? 'text-yellow-500 animate-pulse' : 'text-[#5E7A45]'}`} />
                <span className="text-xl font-bold">{sound.name}</span>
                {playingSound === sound.name && <span className="absolute top-2 right-2 text-xs bg-yellow-500 text-black px-2 py-1 rounded-full">Playing</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#272B2D]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#1D1F21] p-2 mb-4 border-2 border-[#5E7A45]">
              <h2 className="text-lg text-[#5E7A45]">Contact Me</h2>
            </div>
            <h3 className="text-3xl font-bold">Let's Connect</h3>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="https://www.instagram.com/younas_sedki?igsh=MTRtMHltNm9yNzl5Zw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-[#1D1F21] rounded-sm border-2 border-[#5E7A45] hover:bg-[#323638] transition-colors">
              <Instagram className="h-12 w-12 text-[#5E7A45] mb-4" />
              <h4 className="text-xl font-bold">Instagram</h4>
              <p className="text-gray-300 text-center">Follow me for updates</p>
            </a>
            <a href="https://www.linkedin.com/in/younes-sedki-9429b6345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-[#1D1F21] rounded-sm border-2 border-[#5E7A45] hover:bg-[#323638] transition-colors">
              <Linkedin className="h-12 w-12 text-[#5E7A45] mb-4" />
              <h4 className="text-xl font-bold">LinkedIn</h4>
              <p className="text-gray-300 text-center">Connect with me professionally</p>
            </a>
            <a href="mailto:younes_sedki@hotmail.fr" className="flex flex-col items-center p-6 bg-[#1D1F21] rounded-sm border-2 border-[#5E7A45] hover:bg-[#323638] transition-colors">
              <Mail className="h-12 w-12 text-[#5E7A45] mb-4" />
              <h4 className="text-xl font-bold">Email</h4>
              <p className="text-gray-300 text-center">Send me a message directly</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#272B2D] border-t-4 border-[#5E7A45] py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-xl font-bold tracking-wider">UNAX</span>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {studentInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React and styled with Tailwind CSS. Logo icons created by Freepik - Flaticon.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;