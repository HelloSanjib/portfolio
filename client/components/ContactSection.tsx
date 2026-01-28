import { Mail, Phone, Github, Linkedin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's connect and create something amazing</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:sanjibbiswal689@gmail.com"
            className="glow-border p-6 rounded-lg hover:border-accent/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-semibold break-all">sanjibbiswal689@gmail.com</p>
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919937123862"
            className="glow-border p-6 rounded-lg hover:border-accent/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <Phone className="text-secondary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-semibold">+91 9937123862</p>
              </div>
            </div>
          </a>

          {/* Social Links */}
          <div className="glow-border p-6 rounded-lg flex items-center gap-4">
            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-colors"
                title="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Social</p>
              <p className="text-foreground font-semibold text-sm">GitHub, LinkedIn</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glow-border p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors text-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors text-foreground resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div className="flex items-center gap-4">
              <button type="submit" className="btn-primary inline-flex items-center gap-2">
                <MessageCircle size={20} />
                Send Message
              </button>
              {submitted && (
                <p className="text-accent font-semibold animate-fade-up">Message sent successfully! 🎉</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
