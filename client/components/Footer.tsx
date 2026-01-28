import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold">SB</span>
              </div>
              <span className="font-bold text-lg text-foreground">
                Sanjib Biswal
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Full-stack developer passionate about building modern web
              applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sanjibbiswal689@gmail.com"
                className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30"></div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Sanjib Biswal. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
