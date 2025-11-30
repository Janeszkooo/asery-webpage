import './Body.css';
import { FaInstagram, FaTiktok, FaTwitter, FaTwitch, FaGithub, FaGamepad, FaYoutube, FaDiscord } from 'react-icons/fa';
import { FaArrowUp, FaExternalLinkAlt, FaGuitar, FaPaperclip } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import AppearAnimation from '../appear-animation/AppearAnimation';
import ElectricBorder from '../electric-border/ElectricBorder';
import beat1 from '../../assets/beat-1.mp4';
import beat2 from '../../assets/beat-2.mp4';
import beat3 from '../../assets/beat-3.mp4';
import beat4 from '../../assets/beat-4.mp4';
import onev1 from '../../assets/1v1-thumbnail.png';
import zonewars from '../../assets/zonewars.png';
import beat5 from '../../assets/beat-5.mp4';
import beat6 from '../../assets/beat-6.mp4';

function Body() {
  const [copyFeedback, setCopyFeedback] = useState('');
  const [setupRotation, setSetupRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);
  const [beatTitles, setBeatTitles] = useState(['Guitar Trap Beat', '"Poison" Trap Beat', 'Lithe Type Beat', '"Waterfall" Hood Trap', '"Bugatti" Trap Beat', 'Sampled Drill Beat']);
  const carouselRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyToClipboard = (text, codeIdentifier) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyFeedback('Code copied!');
      setCopiedCode(codeIdentifier);
      setTimeout(() => {
        setCopyFeedback('');
        setCopiedCode(null);
      }, 2000);
    }).catch(() => {
      setCopyFeedback('Failed to copy');
      setTimeout(() => setCopyFeedback(''), 2000);
    });
  };

  const calculateAge = () => {
    const birthDate = new Date('2006-02-25');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStart;
    setSetupRotation(setupRotation + diff * 0.2);
    setDragStart(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - dragStart;
    setSetupRotation(setupRotation + diff * 0.2);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/szlgy_janos', icon: FaInstagram },
    { name: 'TikTok', url: 'https://tiktok.com/@szlgy_janos', icon: FaTiktok },
    { name: 'Twitter', url: 'https://twitter.com/AseryTTV', icon: FaTwitter },
    { name: 'Twitch', url: 'https://twitch.tv/aseryttv', icon: FaTwitch },
    { name: 'GitHub', url: 'https://github.com/Janeszkoo', icon: FaGithub },
    { name: 'Fortnite', url: 'https://fortnite.gg/creator?name=asery&charts', icon: FaGamepad },
    { name: 'YouTube', url: 'https://youtube.com/@aseryvl', icon: FaYoutube },
    { name: 'Discord', url: 'https://discord.gg/haztDc32Fn', icon: FaDiscord }
  ];

  const setupItems = [
    {
      title: 'CPU',
      description: 'Ryzen 7 9800X3D',
      category: 'Hardware'
    },
    {
      title: 'GPU',
      description: 'RTX 5070Ti',
      category: 'Hardware'
    },
    {
      title: 'RAM',
      description: 'G.Skill 32GB 6400MHz DDR5',
      category: 'Hardware'
    },
    {
      title: 'MOB',
      description: 'Asrock B650M PG Riptide',
      category: 'Hardware'
    },
    {
      title: 'SSD 1',
      description: '1TB Samsung 980 Pro M.2',
      category: 'Storage'
    },
    {
      title: 'SSD 2',
      description: '1TB Samsung 990 Pro M.2',
      category: 'Storage'
    },
    {
      title: 'HDD',
      description: '2TB Seagate',
      category: 'Storage'
    },
    {
      title: 'PSU',
      description: 'Seasonic G12 850W',
      category: 'Power'
    },
    {
      title: 'Cooler',
      description: 'NZXT Kraken Elite 280 RGB',
      category: 'Cooling'
    },
    {
      title: 'PC Case',
      description: 'NZXT H5 FLOW BLACK',
      category: 'Case'
    },
    {
      title: 'Monitor',
      description: '27" 280Hz',
      category: 'Peripherals'
    },
    {
      title: 'Monitor 2',
      description: '27" 165Hz',
      category: 'Peripherals'
    },
    {
      title: 'Keyboard',
      description: 'Razer Huntsman Mini V3 Pro',
      category: 'Peripherals'
    },
    {
      title: 'Mouse',
      description: 'Logitech G Pro x Superlight 2',
      category: 'Peripherals'
    },
    {
      title: 'Headset',
      description: 'Logitech G Pro x',
      category: 'Peripherals'
    },
    {
      title: 'Mousepad',
      description: 'Steelseries QCK 3XL RGB',
      category: 'Peripherals'
    },
    {
      title: 'Mic',
      description: 'Fifine AM8',
      category: 'Peripherals'
    },
    {
      title: 'Mixer',
      description: 'Fifine SC3',
      category: 'Peripherals'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="body">
      {copyFeedback && <div className="copy-toast">{copyFeedback}</div>}
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} title="Scroll to top">
          <FaArrowUp />
        </button>
      )}
      
      {/* Home Section */}
      <div id="home" className="section">
        <div className="section-content">
          <AppearAnimation delay={0}>
            <h2>Hi! My name is <span className="gradient-text">Jani</span></h2>
          </AppearAnimation>
          <AppearAnimation delay={0.2}>
            <p>I am currently pursuing studies to become a Front-End Developer, I'd like to work with <strong>YOU</strong>!</p>
          </AppearAnimation>
          <AppearAnimation delay={0.4}>
            <button className="cta-button" onClick={() => scrollToSection('about')}>
              About Me
            </button>
          </AppearAnimation>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="section">
        <div className="section-content about-wrapper">
          <AppearAnimation delay={0}>
            <h2 className="about-title">About <span className="gradient-text">Me</span></h2>
          </AppearAnimation>
          <div className="about-content">
            <div className="about-left">
              <AppearAnimation delay={0.2}>
                <p>Hi! My name is <span className="name-highlight">Jani</span> but most people know me as <span className='name-highlight'>Asery</span>. I am <span className="age-highlight">{calculateAge()}</span> years old from Nyíregyháza, Hungary. I'm a high school student majoring in software development and testing, where I'm learning to turn complex problems into elegant solutions. When I'm not coding, you can find me streaming, making music, or staying active through sports and fitness. I have a passion for bringing creative ideas to life in both digital and physical spaces.</p>
                <p>My current skill set for Web Development is listed on the right.</p>
              </AppearAnimation>
            </div>
            <AppearAnimation delay={0.3}>
              <div className="about-middle">
                <ul className="skills-list">
                  <li>HTML & CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Web Design</li>
                  <li>Responsive Design</li>
                  <li>Git & GitHub</li>
                </ul>
              </div>
            </AppearAnimation>
            <AppearAnimation delay={0.4}>
              <div className="about-right">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <p className="timeline-date">May 2025</p>
                      <h4>Erasmus+ Internship in Tenerife, Spain</h4>
                      <p>Worked with a team of five to design a 3D model of a car.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <p className="timeline-date">September 2021 - Present</p>
                      <h4>Nyíregyházi SZC Széchényi István Technikum és Kollégium</h4>
                      <p>Started technical school, learning HTML, CSS, JavaScript, Python, and Java as the main focus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AppearAnimation>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      {/* <div id="projects" className="section">
        <div className="section-content projects-wrapper">
          <AppearAnimation delay={0}>
            <h2 className="projects-title">My <span className="gradient-text">Projects</span></h2>
          </AppearAnimation>
          <AppearAnimation delay={0.2}>
            <div className="projects-content">
              <div className="project-image">
                <img src="/assets/needity-project.png"/>
              </div>
              <div className="project-info">
                <h3>Needity</h3>
                <p>Needity is a modern marketplace built to connect people with the products they truly need.
                    We focus on simplicity, trust, and a seamless shopping experience.</p>
                    <strong><p>Everything you're looking for — all in one place.</p></strong>
                <a href="https://needity.hu" target="_blank" rel="noopener noreferrer" className="project-link">
                  Visit Website
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </AppearAnimation>
        </div>
      </div> */}

      {/* My Setup Section */}
      <div id="setup" className="section">
        <div className="section-content setup-wrapper">
          <AppearAnimation delay={0}>
            <h2 className="setup-title">My <span className="gradient-text">Setup</span></h2>
          </AppearAnimation>
          <AppearAnimation delay={0.2}>
            <div 
              className="setup-carousel-container"
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="setup-carousel">
                <div className="carousel-3d" style={{ transform: `rotateY(${setupRotation}deg)` }}>
                  {setupItems.map((setup, index) => (
                    <div
                      key={index}
                      className="carousel-item"
                      style={{
                        transform: `rotateY(${index * 20}deg) translateZ(600px)`
                      }}
                    >
                      <ElectricBorder>
                        <div className="setup-card">
                          <div className="setup-card-content">
                            <h3>{setup.title}</h3>
                            <p>{setup.description}</p>
                            <span className="setup-category">{setup.category}</span>
                          </div>
                        </div>
                      </ElectricBorder>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AppearAnimation>
        </div>
      </div>

      {/* My Songs Section */}
      <div id="flstudio" className="section">
        <div className="section-content songs-wrapper">
          <AppearAnimation delay={0}>
            <h2 className="songs-title">My <span className="gradient-text">Songs</span></h2>
          </AppearAnimation>
          <AppearAnimation delay={0.2}>
            <div className="songs-content">
              <div className="beat-video-wrapper">
                <div className="beat-video">
                  <video controls>
                    <source src={beat1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <input 
                  type="text" 
                  className="beat-title-input" 
                  value={beatTitles[0]}
                  readOnly
                  placeholder="Enter beat title"
                />
              </div>
              <div className="beat-video-wrapper">
                <div className="beat-video">
                  <video controls>
                    <source src={beat2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <input 
                  type="text" 
                  className="beat-title-input" 
                  value={beatTitles[1]}
                  readOnly
                  placeholder="Enter beat title"
                />
              </div>
              <div className="beat-video-wrapper">
                <div className="beat-video">
                  <video controls>
                    <source src={beat3} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <input 
                  type="text" 
                  className="beat-title-input" 
                  value={beatTitles[2]}
                  readOnly
                  placeholder="Enter beat title"
                />
              </div>
              <div className="beat-video-wrapper">
                <div className="beat-video">
                  <video controls>
                    <source src={beat4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <input 
                  type="text" 
                  className="beat-title-input" 
                  value={beatTitles[3]}
                  readOnly
                  placeholder="Enter beat title"
                />
              </div>
              <div className="beat-video-wrapper">
                <div className="beat-video">
                  <video controls>
                    <source src={beat5} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <input 
                  type="text" 
                  className="beat-title-input" 
                  value={beatTitles[4]}
                  readOnly
                  placeholder="Enter beat title"
                />
              </div>
              <div className="beat-video-wrapper">
                <div className="beat-video">
                  <video controls>
                    <source src={beat6} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <input 
                  type="text" 
                  className="beat-title-input" 
                  value={beatTitles[5]}
                  readOnly
                  placeholder="Enter beat title"
                />
              </div>
            </div>
          </AppearAnimation>
          <AppearAnimation delay={0.4}>
            <a href="https://discord.gg/haztDc32Fn" target="_blank" rel="noopener noreferrer" className="beats-button">
              Buy Beats
              <FaGuitar />
            </a>
          </AppearAnimation>
        </div>
      </div>

      {/* My Maps Section */}
      <div id="maps" className="section">
        <div className="section-content maps-wrapper">
          <AppearAnimation delay={0}>
            <h2 className="maps-title">My <span className="gradient-text">Maps</span></h2>
          </AppearAnimation>
          <AppearAnimation delay={0.2}>
            <div className="maps-content">
              <div className="map-item">
                <div className="map-image">
                  <img src={onev1} />
                </div>
                <div className="map-code">
                  <p className="map-code-label">Map Code:</p>
                  <div className="map-code-wrapper">
                    <code onClick={() => copyToClipboard('9293-2250-1900', 'code1')}>
                      {copiedCode === 'code1' ? 'Code Copied!' : '9293-2250-1900'}
                      <FaPaperclip />
                    </code>
                  </div>
                </div>
              </div>
              <div className="map-item">
                <div className="map-image">
                  <img src={zonewars} />
                </div>
                <div className="map-code">
                  <p className="map-code-label">Map Code:</p>
                  <div className="map-code-wrapper">
                    <code onClick={() => copyToClipboard('8651-7530-4276', 'code2')}>
                      {copiedCode === 'code2' ? 'Code Copied!' : '8651-7530-4276'}
                      <FaPaperclip />
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </AppearAnimation>
          <AppearAnimation delay={0.4}>
            <div className="maps-support">
              <p className="support-text">Support me by using:</p>
              <p className="support-code">Code: <span className="code-highlight">Asery <sub>#ad</sub></span></p>
            </div>
          </AppearAnimation>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="section">
        <div className="section-content">
          <AppearAnimation delay={0}>
            <h2>Get in <span className="gradient-text">Touch</span></h2>
          </AppearAnimation>
          <AppearAnimation delay={0.2}>
            <p>Let's connect! Whether you have a project in mind or just want to chat about web development, producing, guitar, sports, I'd love to hear from you.</p>
          </AppearAnimation>
          <AppearAnimation delay={0.3}>
            <div className="social-buttons">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                    title={social.name}
                  >
                    <IconComponent className="social-icon" />
                    <span className="social-name">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </AppearAnimation>
        </div>
      </div>
    </main>
  );
}

export default Body;