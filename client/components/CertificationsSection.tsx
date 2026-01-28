import { Award } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Hack Odisha 5',
    description: 'Plant Disease Prediction System',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'Infosys Frontend Web Developer',
    description: 'Professional certification in frontend development',
    icon: '🎖️',
  },
  {
    id: 3,
    title: 'Infosys Networking',
    description: 'Network fundamentals and protocols',
    icon: '🔗',
  },
  {
    id: 4,
    title: 'Sheryians Backend Developer',
    description: 'Backend development with modern technologies',
    icon: '⚙️',
  },
];

function CertificationCard({ cert }: { cert: typeof certifications[0] }) {
  return (
    <div className="glow-border p-6 rounded-lg hover:border-accent/50 transition-all duration-300 flex items-start gap-4">
      <div className="text-4xl flex-shrink-0">{cert.icon}</div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-foreground mb-1">{cert.title}</h3>
        <p className="text-muted-foreground text-sm">{cert.description}</p>
      </div>
    </div>
  );
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">Recognized accomplishments</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
