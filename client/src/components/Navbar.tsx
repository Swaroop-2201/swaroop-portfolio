import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = ["Work", "About", "Experience", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/60 backdrop-blur-2xl border-b border-gray-200/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-7 flex justify-between items-center">

        {/* NAME */}
        <h1 className="text-[13px] tracking-[0.35em] uppercase text-gray-900 font-medium">
          SWAROOP BANKAR
        </h1>

        {/* NAV */}
        <div className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[14px] text-gray-500 hover:text-gray-900 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="text-[13px] text-gray-900 border-b border-transparent hover:border-gray-900 transition"
        >
          Connect
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;