const skillCategories = [
  {
    title: "Backend Architecture",
    description:
      "Designing scalable, secure, and high-performance server-side systems for enterprise and SaaS platforms.",
    skills: ["Java 8+", "Spring Boot", "REST APIs", "Microservices", "Secure Coding", "Design Patterns"],
  },
  {
    title: "Frontend Systems",
    description:
      "Building maintainable, high-performance user interfaces with React and TypeScript for global SaaS applications.",
    skills: ["React.js", "TypeScript", "API Integration", "Component Architecture", "State Management"],
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Deploying and operating resilient AWS-hosted applications with CI/CD, monitoring, and scalable workflows.",
    skills: ["AWS (EC2, S3, Route53)", "Docker", "CI/CD Pipelines", "Environment Management", "Observability"],
  },
  {
    title: "AI & Automation",
    description:
      "Leveraging AI and LLMs to accelerate software development, automate testing, and enhance code quality.",
    skills: ["Python", "Flask", "OpenAI API", "AI Code Review", "AI Test Generation", "LLM Workflows", "Jenkins"],
  },
  {
    title: "Testing & Quality",
    description:
      "Ensuring system reliability and code quality through automated validation, unit testing, and regression coverage.",
    skills: ["JUnit", "Mockito", "Selenium", "Playwright", "API Testing"],
  },
  {
    title: "Databases & Data Systems",
    description:
      "Designing and optimizing relational and NoSQL storage systems for performance and scalability.",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold text-gray-900">
            Core Capabilities
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            A structured engineering foundation across backend systems,
            distributed architectures, cloud infrastructure,
            and AI-driven development workflows.
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