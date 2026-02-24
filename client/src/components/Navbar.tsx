import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// const navItems = ["Work", "About", "Experience", "Contact"];
const navItems = ["Capabilities", "Experience", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // premium cubic-bezier
      }}
      className={`fixed top-0 w-full z-50 will-change-transform ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-gray-200/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-7 flex justify-between items-center">

        {/* NAME */}
        <div className="flex flex-col">
          <h1 className="text-[13px] tracking-[0.4em] uppercase text-gray-900 font-medium">
            SWAROOP BANKAR
          </h1>
          <span className="text-[11px] text-gray-500 tracking-wide">
            Software Engineer · Enterprise Systems
          </span>
        </div>

        {/* NAV */}
        <div className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative text-[14px] text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              {item}

              {/* Underline */}
              <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-gray-900 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
        {/* CTA */}
        <a
          href="#contact"
          className="group relative text-[13px] text-gray-900 transition-colors duration-300"
        >
          Connect

          {/* Underline Animation */}
          <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-gray-900 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;