import { CheckCircle } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science",
    school: "Siksha 'O' Anusandhan University (ITER)",
    period: "2023 – 2027",
    cgpa: "9.46/10",
    current: true,
  },
  {
    id: 2,
    degree: "Class 12 (Higher Secondary)",
    school: "UPENDRA NATH HS SCHOOL",
    period: "Completed",
    cgpa: "7.9/10",
    current: false,
  },
  {
    id: 3,
    degree: "Class 10 (Secondary)",
    school: "Saraswati Sishu Vidyamandir",
    period: "Completed",
    cgpa: "9.15/10",
    current: false,
  },
];

function EducationCard({
  item,
  isLast,
}: {
  item: (typeof education)[0];
  isLast: boolean;
}) {
  return (
    <div className="flex gap-6 relative">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-accent border-4 border-background z-10"></div>
        {!isLast && (
          <div className="w-1 h-24 bg-gradient-to-b from-accent to-accent/30 mt-2"></div>
        )}
      </div>

      {/* Content */}
      <div className="pb-8 flex-1">
        <div className="glow-border p-6 rounded-lg">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-1">
                {item.degree}
              </h3>
              <p className="text-accent font-semibold mb-1">{item.school}</p>
              <p className="text-sm text-muted-foreground">{item.period}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-accent">{item.cgpa}</p>
              {item.current && (
                <p className="text-xs text-secondary font-semibold mt-1 flex items-center gap-1">
                  <CheckCircle size={14} />
                  Current
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic journey</p>

        <div className="space-y-4">
          {education.map((item, index) => (
            <EducationCard
              key={item.id}
              item={item}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
