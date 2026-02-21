const skillCategories = [
  {
    title: "Backend Architecture",
    description:
      "Designing scalable, secure, and high-performance server-side systems.",
    skills: [
      "Java 8+",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Secure Coding",
    ],
  },
  {
    title: "Frontend Systems",
    description:
      "Building responsive, maintainable, and performance-optimized user interfaces.",
    skills: [
      "React.js",
      "TypeScript",
      "API Integration",
      "Modern UI Architecture",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Deploying and operating resilient cloud-native applications.",
    skills: [
      "AWS (EC2, S3, Route53)",
      "Docker",
      "CI/CD Pipelines",
      "Environment Management",
    ],
  },
  {
    title: "Testing & Automation",
    description:
      "Ensuring reliability through automated validation and quality systems.",
    skills: [
      "JUnit",
      "Mockito",
      "Selenium",
      "Playwright",
      "API Testing",
    ],
  },
  {
    title: "Data & Persistence",
    description:
      "Structuring and optimizing relational and NoSQL storage systems.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    title: "AI & Engineering Tooling",
    description:
      "Leveraging AI systems and modern tooling to accelerate engineering workflows.",
    skills: [
      "Python",
      "Flask",
      "OpenAI API",
      "Git",
      "Maven",
      "Gradle",
      "Jenkins",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold text-gray-900">
            Engineering Capabilities
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            A structured foundation across backend systems, cloud infrastructure,
            automation frameworks, and AI-driven engineering workflows.
          </p>
        </div>

        {/* CAPABILITY LIST */}
        <div className="mt-20 space-y-20">
          {skillCategories.map((category) => (
            <div key={category.title} className="grid md:grid-cols-[1fr_1.2fr] gap-12">

              {/* LEFT COLUMN */}
              <div>
                <h3 className="text-xl font-medium text-gray-900">
                  {category.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* RIGHT COLUMN */}
              <div className="text-gray-700 leading-loose">
                {category.skills.join(" · ")}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;