const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-8">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            Let’s Connect
          </h2>

          <div className="mt-6 w-16 h-px bg-gray-300 mx-auto"></div>

          <p className="mt-10 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            I collaborate with global teams, founders, and enterprises
            to build high-performance digital systems.
            For serious inquiries and strategic discussions,
            feel free to reach out.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="mt-24 divide-y divide-gray-200">

          {/* LinkedIn */}
          <div className="py-10 flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                LinkedIn
              </h3>
              <p className="mt-2 text-gray-600">
                Professional networking & strategic collaborations.
              </p>
            </div>

            <a
              href="https://linkedin.com/in/swaroopbankar2201/"
              target="_blank"
              className="mt-4 md:mt-0 text-gray-900 font-medium tracking-wide hover:opacity-70 transition"
            >
              linkedin.com/in/swaroopbankar2201 →
            </a>
          </div>

          {/* Email */}
          <div className="py-10 flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                Email
              </h3>
              <p className="mt-2 text-gray-600">
                Business inquiries & enterprise opportunities.
              </p>
            </div>

            <a
              href="mailto:swaroop.devp@gmail.com"
              className="mt-4 md:mt-0 text-gray-900 font-medium tracking-wide hover:opacity-70 transition"
            >
              swaroop.devp@gmail.com →
            </a>
          </div>

          {/* WhatsApp */}
          <div className="py-10 flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                WhatsApp
              </h3>
              <p className="mt-2 text-gray-600">
                Direct international communication.
              </p>
            </div>

            <a
              href="https://wa.me/918177816223"
              target="_blank"
              className="mt-4 md:mt-0 text-gray-900 font-medium tracking-wide hover:opacity-70 transition"
            >
              +91 8177816223 →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;