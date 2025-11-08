import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // 1. Security Automation & Development (Focus on Engineering)
  { name: "Python (Automation)", level: 90, category: "automation" },
  { name: "Node.js / Express", level: 90, category: "automation" },
  { name: "JavaScript (Tooling)", level: 90, category: "automation" },
  { name: "Tailwind CSS (UI/Dashboards)", level: 90, category: "automation" },
  { name: "Regex (Log Parsing)", level: 90, category: "automation" },
  { name: "Go (Security Scripts)", level: 90, category: "automation" },
  { name: "AI/LLM Integration", level: 85, category: "automation" },
  { name: "Cryptography (PKI, Hashing)", level: 75, category: "automation" },

  // 2. Defensive Tools & Triage (Focus on SOC & DFIR)
  { name: "Wireshark (Packet Analysis)", level: 90, category: "defensive" },
  { name: "Brim (SIEM/Log Triage)", level: 90, category: "defensive" },
  { name: "Endpoint Artifact Analysis", level: 80, category: "defensive" },
  { name: "Threat Hunting (IOC Correlation)", level: 75, category: "defensive" },
  { name: "Incident Response Playbooks", level: 70, category: "defensive" },
  { name: "MITRE ATT&CK Mapping", level: 75, category: "defensive" },
  { name: "Open Source Threat Feeds", level: 70, category: "defensive" },

  // 3. Cloud & Infrastructure Security (Focus on Engineering/DevOps)
  { name: "Linux Administration & Hardening", level: 90, category: "infra" },
  { name: "Windows Hardening (GPOs, Registry)", level: 90, category: "infra" },
  { name: "Docker / Container Security", level: 70, category: "infra" },
  { name: "AWS (Security Groups/IAM)", level: 65, category: "infra" },
  { name: "Networking (TCP/IP, Firewalls)", level: 90, category: "infra" },
  { name: "Cisco Packet Tracer / Simulation", level: 90, category: "infra" },
  { name: "Kubernetes (Basic Security Config)", level: 65, category: "infra" },
  { name: "DevSecOps Principles", level: 70, category: "infra" },
  { name: "CI/CD Pipeline Security", level: 70, category: "infra" },

  // 4. Vulnerability & Testing (Offensive Knowledge for Defense)
  { name: "Nmap (Scanning/Discovery)", level: 85, category: "vulnerability" },
  { name: "Burp Suite (Web App Testing)", level: 75, category: "vulnerability" },
  { name: "OWASP Top 10 / Sanitization", level: 80, category: "vulnerability" },
  { name: "Metasploit (Exploit Testing)", level: 70, category: "vulnerability" },
  { name: "Input Validation / XSS Defense", level: 85, category: "vulnerability" },
];

const categories = ["all", "automation", "defensive", "infra", "vulnerability"];

const categoryLabels = {
  all: "All Skills",
  automation: "Security Automation & Dev",
  defensive: "Defensive Tools & Triage",
  infra: "Cloud & Infrastructure Security",
  vulnerability: "Vulnerability & Pen Testing",
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Technical <span className="text-primary"> Toolkit</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
