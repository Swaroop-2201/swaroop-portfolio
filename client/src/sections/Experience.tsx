const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-8">

        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            Professional Experience
          </h2>

          <div className="mt-6 w-16 h-px bg-gray-300 mx-auto"></div>

          <p className="mt-8 text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Engineering high-performance systems for enterprise environments,
            with a focus on scalability, architectural clarity, and operational excellence.
          </p>
        </div>

        {/* Experience Card */}
        <div className="mt-20 border border-gray-200 rounded-2xl p-12 bg-white shadow-sm hover:shadow-md transition-all duration-300">

          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h3 className="text-2xl font-medium text-gray-900">
                Software Engineer
              </h3>
              <p className="mt-2 text-gray-600">
                GENZ Software Solutions · Pune, India
              </p>
            </div>

            <p className="mt-4 md:mt-0 text-gray-500 text-sm tracking-wide">
              March 2024 — Present
            </p>
          </div>

          <div className="mt-12 space-y-6 text-gray-700 leading-relaxed text-lg">

            <p>
              Architected and delivered scalable full-stack solutions across
              enterprise platforms, strengthening system performance,
              modularity, and long-term maintainability.
            </p>

            <p>
              Engineered secure RESTful services using Java and Spring Boot,
              supporting production-grade deployments with strict reliability
              and compliance standards.
            </p>

            <p>
              Designed AI-driven internal automation tools to optimize code
              quality workflows, accelerating review cycles and enhancing
              CI/CD maturity.
            </p>

            <p>
              Contributed to mission-critical aviation systems serving Lufthansa
              Group and Austrian Airlines, ensuring operational stability and
              SLA adherence in high-availability environments.
            </p>

            <p>
              Strengthened observability and production monitoring practices,
              reducing incident response time and improving system resilience.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;