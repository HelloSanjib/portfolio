const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "C"],
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "Express.js", "Tailwind CSS", "WebRTC"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "ConvexDB"],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "CI/CD",
      "AWS",
      "GCP",
      "Kubernetes",
      "Jenkins",
      "Grafana",
      "Container Orchestration",
    ],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Analytical Thinking", "Problem Solving"],
  },
];

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="glow-border p-6 rounded-lg">
      <h3 className="text-xl font-bold text-accent mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-card border border-accent/20 rounded-full text-sm font-medium text-foreground hover:bg-accent/10 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
