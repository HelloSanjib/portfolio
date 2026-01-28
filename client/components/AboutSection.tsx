export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a Computer Science student passionate about building robust
            full-stack applications using the MERN stack (MongoDB, Express.js,
            React, Node.js). With hands-on experience in designing and
            implementing scalable web applications, I've worked on several SaaS
            projects that handle real-world use cases.
          </p>

          <p>
            My expertise extends beyond frontend and backend development. I have
            practical experience with cloud platforms including AWS and GCP,
            containerization using Docker, and CI/CD pipelines. I'm also
            exploring AI and ML technologies to integrate intelligent features
            into applications.
          </p>

          <p>
            I believe in writing clean, maintainable code and following best
            practices. Whether it's optimizing API performance, designing
            intuitive user interfaces, or setting up efficient DevOps workflows,
            I approach every problem with analytical thinking and a passion for
            continuous improvement.
          </p>

          <p>
            Beyond coding, I'm driven by a continuous learning mindset. I
            regularly explore emerging technologies, contribute to open-source
            projects, and stay updated with industry trends to deliver modern,
            production-ready solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
