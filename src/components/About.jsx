function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a passionate Full Stack Web Developer who loves turning
              complex problems into elegant, user-friendly interfaces. My core
              expertise is crafting secure, high-performance backends with
              Python and Django, combined with designing sleek, interactive
              frontends with React. I also enjoy going beyond traditional web
              development by integrating AI capabilities and machine learning
              APIs into applications to create smart features.
            </p>

            <h3>🎓 Educational Background</h3>
            <p>
              I am a web development student (Batch 10), currently learning
              modern web technologies through a structured, project-based
              course — covering HTML, CSS, JavaScript, React, and full stack
              development with Python and Django. Every module ends with a
              real project, like the Bank Management System and this portfolio
              website.
            </p>

            <h3>🎯 Career Goals</h3>
            <p>
              My goal is to become a professional full stack developer who
              builds real-world products that people use every day — and to
              keep growing towards intelligent, AI-powered web applications.
            </p>
          </div>

          <div className="profile-card">
            <div className="profile-avatar">
              <span>D</span>
            </div>
            <h3>Profile Information</h3>
            <ul className="profile-info">
              <li>
                <strong>Name:</strong> Shuvo Roy Dipon
              </li>
              <li>
                <strong>Title:</strong> Full Stack Web Developer
              </li>
              <li>
                <strong>Location:</strong> Bangladesh
              </li>
              <li>
                <strong>Languages:</strong> Bangla, English
              </li>
              <li>
                <strong>Status:</strong> Available for work / freelance
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://sterlingpharmatech.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  sterlingpharmatech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
