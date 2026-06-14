const workItems = [
  {
    title: "MDSA Legal Nest LLP Website",
    industry: "Legal / Professional Services",
    description:
      "Designed and deployed a responsive corporate website for a law firm, delivering a professional digital presence with intuitive navigation and a seamless user experience.",
    tech: "React · TypeScript",
    link: "https://mdsalegalnestllp.in/",
  },
  {
    title: "UNBOUND SPORTS",
    industry: "Sports Retail",
    description:
      "Built and launched a responsive website for a sports retailer, showcasing products through a modern interface and optimizing the customer browsing experience.",
    tech: "React · TypeScript",
    link: "https://unboundsports.in/",
  },

];
const SelectedWork = () => {
  return (
    <section id="work" className="py-36 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold text-gray-900">
            Selected Client Work
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Production platforms delivered for international clients.
            Each engagement focused on scalability, performance,
            and long-term architectural clarity.
          </p>
        </div>

        {/* Work List */}
        <div className="mt-24 space-y-24">
          {workItems.map((item) => (
            <div key={item.title} className="grid md:grid-cols-[1.2fr_0.8fr] gap-16">

              {/* LEFT */}
              <div>
                <p className="text-sm text-gray-500 tracking-wide uppercase">
                  {item.industry}
                </p>

                <h3 className="mt-3 text-2xl font-medium text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-6 text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <p className="mt-6 text-sm text-gray-500">
                  {item.tech}
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex items-start md:justify-end">
                <a
                  href={item.link}
                  target="_blank"
                  className="group relative text-gray-900 font-medium"
                >
                  Visit Live Site →
                   {item.link}

                  <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-gray-900 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </div>

              

            </div>
          ))}
        </div>

        {/* Ongoing Work Line */}
        {/* <p className="mt-28 text-center text-sm text-gray-500">
          Additional client projects currently in development.
        </p> */}

      </div>
    </section>
  );
};

export default SelectedWork;