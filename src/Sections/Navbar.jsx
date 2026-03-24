import { useState } from "react";
import { motion } from "framer-motion";

function Navigation() {
  return (
    <ul className="nav-ul flex space-x-6">
      <li className="nav-li">
        <a className="nav-link" href="/#home">Home</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="/#about">About</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="/#work">Work</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="/#contact">Contact</a>
      </li>
      {/* Desktop Resume Button */}
      <li className="nav-li hidden sm:inline-block">
        <a
          className="text-xl font-bold text-white transition-colors hover:text-gray-200"
          href="/assets/RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">

          {/* Left: Gabriel + Mobile Resume */}
          <div className="flex items-center space-x-4">
            <a
              href="#home"
              className="text-xl font-bold text-white transition-colors hover:text-gray-200"
            >
              Gabriel
            </a>

            {/* Mobile Resume link */}
            <a
              className="text-xl font-bold text-white hover:text-gray-200 transition-colors"
              href="/assets/RESUME.pdf"
              download="Gabriel_Resume.pdf"  // ← this makes it downloadable
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/assets/cancel.png" : "/assets/menu.png"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-4">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.5 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;