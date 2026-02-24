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
            Delivering enterprise-grade software solutions in high-availability
            environments, supporting international aviation and large-scale
            operational systems.
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
              March 2024 - Present
            </p>
          </div>

          <div className="mt-12 space-y-6 text-gray-700 leading-relaxed text-lg">

            <p className="mt-12 space-y-6 text-gray-700 leading-relaxed text-lg">

              <p>
                Architected and deployed <b>AI-powered full-stack solutions</b> across enterprise SaaS and aviation systems, including <b>Lufthansa Group and Austrian Airlines</b>.
              </p>

              <p>
                Built <b>LLM-assisted code review and test generation platforms</b> reducing review effort by 40% and test creation time by 60%, fully hosted on AWS with monitoring and CI/CD integration.
              </p>

              <p>
                Engineered <b>secure Spring Boot microservices</b> and <b>25+ reusable React components</b> for SaaS platforms, improving reliability, frontend performance, and feature delivery speed.
              </p>

              <p>
                Maintained <b>production-grade environments</b>, implemented logging, observability, and incident response to meet strict SLA commitments.
              </p>

              <p>
                Continuously explore emerging AI developer tools and LLM workflows to prototype solutions, optimize code quality, and accelerate delivery pipelines.
              </p>

            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;