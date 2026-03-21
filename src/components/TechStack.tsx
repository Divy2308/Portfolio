import "./styles/TechStack.css";

const skills = [
  "C", "Java", "Python", "JavaScript",
  "TypeScript", "React", "Node.js",
  "MongoDB", "MySQL", "Git",
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>My Techstack</h2>
      <div className="techstack-grid">
        {skills.map((skill, i) => (
          <div
            className="techstack-tag"
            key={skill}
            style={{ animationDelay: `${(i % 5) * 0.3}s` }}
          >
            <span className="techstack-dot" />
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
