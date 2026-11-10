function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I am</p>
          <h1 className="hero-name">Shuvo Roy Dipon</h1>
          <h2 className="hero-title">
            Full Stack Web Developer — Python, Django, React &amp; AI
          </h2>
          <p className="hero-intro">
            I build clean, beautiful and highly functional digital experiences.
            I specialise in intelligent, scalable and user-centric solutions —
            secure, high-performance backends with Python &amp; Django, sleek
            interactive interfaces with React, and smart features powered by AI
            and machine learning APIs.
          </p>
          <div className="hero-buttons">
            <a href="/Dipon-CV.pdf" download className="btn btn-primary">
              ⬇ Download CV
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </div>
          <p className="hero-status">
            <span className="status-dot"></span> Available for work / freelance
          </p>
        </div>

        <div className="hero-avatar-wrap">
          <div className="hero-avatar">
            <span className="hero-avatar-initial">D</span>
          </div>
          <div className="hero-badge hero-badge-top">React ⚛️</div>
          <div className="hero-badge hero-badge-bottom">Django 🐍</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
