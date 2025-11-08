import { ArrowRight, ExternalLink, Github } from "lucide-react";

const securityProjects = [
  {
    id: 1,
    title: "🐛 DFIR Analyzer: AI Triage Engine",
    description:
      "An AI-powered assistant for DFIR and SOC triage. Upload raw endpoint data (processes, network, logs) to receive severity-ranked findings, enriched with MITRE ATT&CK IDs and threat intelligence (VirusTotal, NVD).",
    tags: ["Gemini 2.5 Flash", "Node.js", "Express", "DFIR", "Triage"],
    demoUrl: "https://dfir-analyzer.vercel.app/",
    githubUrl: "https://github.com/shadywhale/dfir-analyzer",
    image: "/images/dfir.png",
  },
  {
    id: 2,
    title: "🛠️ LogSentinel: SIEM Logic Sandbox",
    description:
      "A log analysis tool that simulates and tunes alerting logic. It supports multi-format parsing (CLF, Syslog, JSON) and implements heuristic-based alerting by flagging suspicious activity based on custom failure frequency thresholds.",
    tags: [
      "Vanilla JS",
      "Log Parsing",
      "SIEM Logic",
      "Heuristics",
      "XSS Defense",
    ],
    demoUrl: "https://logsentinel.netlify.app/",
    githubUrl: "https://github.com/shadywhale/LogSentinel/",
    image: "/images/logsentinel.png",
  },
  {
    id: 3,
    title: "🛡️ LogRecon: IOC Correlation Engine",
    description:
      "A lightweight, performance-focused engine for rapid IOC (IP-based) correlation against diverse security logs. Utilizes JavaScript Set for O(1) matching to perform fast threat triage and real-time match highlighting.",
    tags: [
      "Vanilla JS",
      "O(1) Performance",
      "IOC Triage",
      "Threat Correlation",
    ],
    demoUrl: "https://logrecon.netlify.app/",
    githubUrl: "https://github.com/shadywhale/LogRecon/",
    image: "/images/logrecon.png",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My Threat <span className="text-primary"> Toolkit </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are purpose-built security engineering projects designed to{" "}
          <strong>automate defensive workflows</strong> and accelerate analysis
          for SOC, DFIR and Security Engineering teams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 min-h-[50px]">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center space-x-1"
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm">Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center space-x-1"
                    >
                      <Github size={20} />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/shadywhale"
          >
            See All Repositories <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
