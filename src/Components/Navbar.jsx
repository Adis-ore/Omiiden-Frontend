import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  const navItems = [
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-green-200"
          : "bg-white/10 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full p-1 shadow-lg border-2 border-green-600 group-hover:border-red-600 transition-all duration-300 transform group-hover:scale-105">
              <Link to="/">
                <img
                  src="/logo.png"
                  alt="Omiden Origbo Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </Link>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl lg:text-2xl font-bold text-red-700">
                OMIIDEN ORIGBO
              </span>
              <p className="text-xs text-green-700 font-semibold -mt-1 tracking-wide">
                CULTURAL DANCE GROUP
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-6 py-3 rounded-lg text-sm font-semibold text-green-800 hover:text-red-600 hover:bg-green-50 border border-transparent hover:border-green-200 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/book-us">
              <button className="px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-green-600 to-green-700 rounded-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg border-2 border-red-500 hover:border-red-600 hover:shadow-xl">
                Book Us Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-green-800 hover:text-red-600 transition-colors duration-300 rounded-lg hover:bg-green-50"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/98 backdrop-blur-md border-t border-green-200 py-4 shadow-lg">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-3 text-base font-semibold text-green-800 hover:text-red-600 hover:bg-green-50 rounded-lg transition-all duration-300 mx-4 border border-transparent hover:border-green-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-green-200 mx-4">
                <Link to="/book-us">
                  <button
                    className="w-full px-4 py-3 text-center font-bold text-white bg-gradient-to-r from-green-600 to-green-700 rounded-lg hover:from-green-700 hover:to-green-800 border-2 border-red-500 hover:border-red-600 transition-all duration-300 shadow-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Performance
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
