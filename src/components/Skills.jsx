import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <p className="section-subtitle">
          Technologies I work with, and how confident I am with each one.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
