import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

interface HeaderProps {
  onLoginClick: () => void;
  onGetStartedClick: () => void;
  activeSection: string;
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

export default function Header({ 
  onLoginClick, 
  onGetStartedClick, 
  activeSection,
  isLoggedIn = false,
  onLogout
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Automatically close mobile menu when resizing to desktop widths
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 1024px matches our lg breakpoint
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile drawer when auth state changes
  useEffect(() => {
    setIsOpen(false);
  }, [isLoggedIn]);

  // Dynamically configure nav items based on authentication state
  const navItems = isLoggedIn
    ? [{ label: "Workspace Dashboard", href: "#cvkaro-dashboard" }]
    : [
        { label: "Home", href: "#home" },
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
        { label: "Career Hub", href: "#career-hub" },
        { label: "FAQs", href: "#faqs" },
      ];

  const handleNavClick = (href: string) => {
    // Unset overflow synchronously before scrolling to ensure browser allows scrolling
    document.body.style.overflow = "unset";
    setIsOpen(false);
    
    // Smooth scroll directly to the target element without blocking or delays
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of the sticky header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-dark/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
          : "bg-navy-dark border-b border-white/5 py-4"
      }`}
    >
      {/* Main header bar (Z-50 wrapper ensures it is always on top of the menu) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex items-center justify-between h-12">
          
          {/* Left: Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-1 group cursor-pointer"
            id="header-brand-logo"
          >
            <img
              src="/logo_main.png"
              alt="CVKaro Logo"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Center: Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8" id="desktop-navbar-container">
            <nav className="flex items-center gap-1" id="desktop-navbar">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? "text-brand-green bg-brand-green/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right: Actions (Desktop & Mobile combined) */}
          <div className="flex items-center gap-3" id="header-actions">
            
            {/* Desktop Actions */}
            <div className="hidden lg:block">
              {isLoggedIn ? (
                <button
                  onClick={onLogout}
                  className="px-5 py-2.5 text-sm font-bold text-white bg-red-600/10 border border-red-500/20 hover:bg-red-600/25 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={onGetStartedClick}
                  id="btn-get-started"
                  className="px-5 py-2.5 text-sm font-bold text-navy-dark bg-brand-green hover:brightness-110 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  Get Started
                </button>
              )}
            </div>

            {/* Mobile Actions and Hamburger (both aligned nicely on mobile right) */}
            <div className="flex lg:hidden items-center gap-2">
              {isLoggedIn ? (
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 text-xs font-bold text-white bg-red-600/10 border border-red-500/20 hover:bg-red-600/25 rounded-md cursor-pointer"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={onGetStartedClick}
                  className="px-3 py-1.5 text-xs font-bold text-navy-dark bg-brand-green hover:brightness-110 rounded-md shadow-sm cursor-pointer"
                >
                  Get Started
                </button>
              )}

              {/* Hamburger Toggle always leftmost item of right action container on mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-brand-green hover:bg-white/10 rounded-full transition-all duration-300 focus:outline-hidden cursor-pointer flex items-center justify-center border border-transparent hover:border-brand-green/30"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu (renders directly below the header, ensuring it doesn't block top buttons) */}
      <div 
        className={`absolute top-full left-0 right-0 bg-[#0f1526]/95 backdrop-blur-md border-b border-white/10 px-6 py-6 lg:hidden transition-all duration-300 ease-in-out shadow-2xl ${
          isOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`} 
        id="mobile-menu-dropdown"
      >
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-2">Navigation</span>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`flex items-center px-4 py-3 rounded-lg font-semibold text-base transition-all ${
                  isActive
                    ? "text-brand-green bg-brand-green/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
