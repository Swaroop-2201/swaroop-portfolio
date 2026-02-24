import { motion } from "framer-motion";
import profile from "../assets/Profile.jpeg";

const Hero = () => {
  return (
    // <section className="min-h-screen flex items-center bg-white">
    <section className="min-h-screen flex items-center bg-white pt-28 md:pt-40">
      <div className="max-w-5xl mx-auto px-6">

        {/* <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-20 items-center"> */}
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-14 md:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >

            <h1 className="text-5xl md:text-6xl font-semibold leading-[1.1] text-gray-900">
              AI-Driven Full Stack Engineering<br/>
              Scalable Systems & Cloud-Native Solutions for Global Enterprises
            </h1>

            <p className="mt-10 text-lg text-gray-600 max-w-xl leading-relaxed">
              I build high-performance backend systems, React-based frontends, and AI-powered automation platforms hosted on AWS - delivering enterprise-grade software for international clients including Lufthansa Group and Austrian Airlines.
            </p>

            <div className="mt-14">
              <a
                href="#contact"
                className="text-sm text-gray-900 border-b border-gray-900 pb-1 hover:opacity-70 transition"
              >
                Start a conversation →
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-end"
            // className="hidden md:block"
          >
            <img
              src={profile}
              alt="Swaroop Bankar"
              className="w-64 md:w-full max-w-sm object-cover rounded-2xl shadow-xl"
            />
            {/* <img
              src={profile}
              alt="Swaroop Bankar"
              className="w-full max-w-sm object-cover"
            /> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;