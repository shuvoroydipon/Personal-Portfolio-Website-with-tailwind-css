function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#home" className="logo">
          Dipon<span className="logo-dot">.</span>
        </a>
        <p className="footer-tagline">
          Full Stack Web Developer — Python, Django, React &amp; AI
        </p>

        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>

        <p className="footer-copy">
          © {currentYear} Shuvo Roy Dipon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
