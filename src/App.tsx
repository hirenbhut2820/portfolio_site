import './App.css'

function App() {

  return (
    <>
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content" data-aos="fade-up">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQFM2cfPzWPmQQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729788804242?e=2147483647&v=beta&t=HeQwT1fWY30BrnuMoIAKTCmer20cqp5wBC_aDmDz4no" alt="Hiren Bhut" className="profile-pic"/>
            <h1>Hello, I'm <span>Hiren Bhut</span></h1>
            <p>Full Stack Developer | 4+ Years Experience</p>
            <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </header>
    
      <section id="about" className="section" data-aos="fade-right">
          <h2>About Me</h2>
          <p>I am a passionate Full Stack Developer with expertise in MongoDB, MySQL, Angular, Node.js, React, Express.js, HTML, CSS, JavaScript, and TypeScript.</p>
      </section>

      <section id="skills" className="section" data-aos="fade-left">
        <h2>Skills</h2>
        <div className="skills-grid">
            <div className="skill">MongoDB</div>
            <div className="skill">MySQL</div>
            <div className="skill">Angular</div>
            <div className="skill">Node.js</div>
            <div className="skill">React</div>
            <div className="skill">Express.js</div>
            <div className="skill">HTML & CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">TypeScript</div>
            <div className="skill">AWS</div>
            <div className="skill">Socket.io</div>
            <div className="skill">EC2</div>
        </div>
      </section>

      <section id="experience" className="section" data-aos="fade-right">
        <h2>Experience</h2>
        <div className="experience-item">
            <h3>Full Stack Developer</h3>
            <p><strong>Netclues technologies pvt. ltd.</strong> | Feb 2025 - Present | Ahmedabad, Gujarat, India</p>
        </div>
        <div className="experience-item">
            <h3>Mean Stack Developer</h3>
            <p><strong>Excellent WebWorld</strong> | Sep 2023 - Feb 2025 | Ahmedabad, Gujarat, India</p>
        </div>
        <div className="experience-item">
            <h3>Mean Stack Developer</h3>
            <p><strong>Ranpariya Lab</strong> | Aug 2022 - Sep 2023 | Rajkot, Gujarat, India</p>
        </div>
        <div className="experience-item">
            <h3>Web Developer</h3>
            <p><strong>Icon TechSoft Pvt. Ltd.</strong> | Jan 2021 - Aug 2022 | Rajkot, Gujarat, India</p>
        </div>
      </section>
      

      <section id="portfolio" className="section" data-aos="fade-up">
          <h2>Portfolio</h2>
          <div className="projects-grid">
              <div className="project">
                  <a href="#">
                      <div className="project-info">
                          <h3>YAY Ride</h3>
                          <p>Developed a real-time chat and trip management system using <strong>Node.js</strong> and <strong>Socket.io</strong>.</p>
                      </div>
                  </a>
              </div>
              <div className="project">
                  <a href="#">
                      <div className="project-info">
                          <h3>Mawidy</h3>
                          <p>Optimized the backend with <strong>Firebase</strong>, enhancing performance and scalability.</p>
                      </div>
                  </a>
              </div>
              <div className="project">
                  <a href="#">
                      <div className="project-info">
                          <h3>Positive Loved Dating App</h3>
                          <p>Implemented real-time messaging with <strong>Node.js</strong> and <strong>Socket.io</strong>.</p>
                      </div>
                  </a>
              </div>
              <div className="project">
                  <a href="#">
                      <div className="project-info">
                          <h3>Drive Any Cars</h3>
                          <p>Developed a car marketplace backend using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.</p>
                      </div>
                  </a>
              </div>
              <div className="project">
                  <a href="#">
                      <div className="project-info">
                          <h3>TransitFare</h3>
                          <p>Worked on admin panel using the <strong>MEAN stack</strong> for fare and user management.</p>
                      </div>
                  </a>
              </div>
              <div className="project">
                  <a href="#">
                      <div className="project-info">
                          <h3>Monkeypawgames.com</h3>
                          <p>Developed a gaming platform using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MySQL</strong>.</p>
                      </div>
                  </a>
              </div>
          </div>
      </section>
    
    
      <footer id="contact">
          <p>Contact me: 
              <a href="mailto:hirenbhut2820@gmail.com">hirenbhut2820@gmail.com</a> | 
              Mobile: <a href="tel:+918238690076">+91 8238690076</a>
          </p>
          <div className="social-links">
              <a href="https://www.facebook.com/people/Hiren-Bhut/pfbid028D9DNatEn4EavhiwfX3mx5iMLVRVuf6WHTiv16HTeY44qde6zSs9NDtfsTqCmZ1ul/" target="_blank">
                  <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://chat.whatsapp.com/JF0I90COP2e2wTu9VSh9sd" target="_blank">
                  <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://in.linkedin.com/in/hiren-bhut-88780a1b6" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/hirenbhut2820" target="_blank">
                  <i className="fab fa-github"></i>
              </a>
          </div>
      </footer>
    </>
  )
}

export default App
