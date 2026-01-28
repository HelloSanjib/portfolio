import { ArrowRight, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-foreground leading-tight">
                Hi, I'm <span className="gradient-primary bg-clip-text text-transparent">Sanjib Biswal</span>
              </h1>
            </div>

            <p className="text-2xl md:text-3xl font-semibold text-accent">
              Full-Stack Developer | MERN | AI & DevOps Enthusiast
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Computer Science student with hands-on experience in MERN stack, AI/ML basics, and DevOps tools. Passionate about building scalable full-stack applications and cloud-native solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </a>
            </div>
          </div>

          {/* Right side - Profile image with glow effect */}
          <div className="flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-accent rounded-full blur-2xl opacity-50 animate-glow"></div>
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-accent/30 bg-gradient-to-br from-card to-card/50 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl">👨‍💻</div>
                    <p className="text-muted-foreground mt-4 text-sm">Full-Stack Developer</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-12 h-12 rounded-lg border-2 border-accent/30 animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full border-2 border-secondary/30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
