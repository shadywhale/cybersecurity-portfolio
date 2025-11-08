import { Shield, Zap, Search } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Cybersecurity Engineer & Defensive Architect
            </h3>

            <p className="text-muted-foreground">
              My background in cybersecurity engineering allows me to build
              sophisticated tools that solve critical security and operational
              challenges. I specialize in accelerating DFIR workflows,
              optimizing SIEM alerting and integrating Generative AI for
              actionable threat triage, as shown in my DFIR Analyzer project.
            </p>

            <p className="text-muted-foreground">
              I am driven by the goal of transforming chaotic security data into
              clear, efficient defense mechanisms. I focus on creating modular,
              performance-optimized solutions to empower SOC teams to detect and
              respond to threats faster and smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Collaborate on Defense
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Security Automation</h4>
                  <p className="text-muted-foreground">
                    Engineering Python & JavaScript tools to streamline incident
                    response and audit compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    DFIR & Threat Triage
                  </h4>
                  <p className="text-muted-foreground">
                    Expertise in endpoint artifact analysis, log correlation
                    (O(1) matching) and incident prioritization.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    AI for Threat Intelligence
                  </h4>
                  <p className="text-muted-foreground">
                    Leveraging LLMs for structured threat analysis,
                    MITRE ATT&CK mapping and data enrichment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
