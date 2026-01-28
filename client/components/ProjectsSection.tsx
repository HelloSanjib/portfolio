import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Agentic Video Content Generator",
    description:
      "A SaaS platform that uses AI agents to automatically generate, edit, and optimize video content for social media and marketing.",
    tags: ["React", "Node.js", "MongoDB", "AI", "Claude API"],
    links: {
      code: "#",
      live: "#",
    },
  },
  {
    id: 2,
    title: "AI Agent Chat Application",
    description:
      "An intelligent chat application powered by AI agents, featuring real-time conversations, context awareness, and multi-turn dialogue capabilities.",
    tags: ["React", "Express.js", "WebSocket", "AI", "OpenAI"],
    links: {
      code: "#",
      live: "#",
    },
  },
  {
    id: 3,
    title: "AI-Powered Receipt Tracker",
    description:
      "A SaaS expense management tool that uses OCR and AI to automatically extract data from receipts and categorize expenses.",
    tags: ["React", "Node.js", "PostgreSQL", "OCR", "AI"],
    links: {
      code: "#",
      live: "#",
    },
  },
  {
    id: 4,
    title: "Reddit-Style Platform with AI Moderation",
    description:
      "A community platform with threaded discussions, voting system, and AI-powered content moderation for spam and harmful content detection.",
    tags: ["React", "Express.js", "PostgreSQL", "AI Moderation", "WebSocket"],
    links: {
      code: "#",
      live: "#",
    },
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="glow-border p-6 rounded-xl group hover:border-accent/50 transition-all duration-300">
      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <a
          href={project.links.code}
          className="inline-flex items-center gap-2 text-accent hover:text-accent-foreground hover:bg-accent px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
        >
          <Github size={16} />
          Code
        </a>
        <a
          href={project.links.live}
          className="inline-flex items-center gap-2 text-secondary hover:text-accent-foreground hover:bg-secondary px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
        >
          <ExternalLink size={16} />
          Live
        </a>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Explore some of my recent work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
