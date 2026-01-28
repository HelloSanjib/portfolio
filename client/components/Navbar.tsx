import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-border/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">SB</span>
              </div>
              <span className="hidden sm:inline font-bold text-lg text-foreground">Sanjib Biswal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://drive.google.com/uc?export=download&id=17R1juNVC7bA84sYkIklCjsSXK-LkKOyy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-card transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/30 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-card/50 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full btn-secondary mt-4 inline-flex items-center justify-center gap-2">
              <Download size={18} />
              <span>Resume</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
