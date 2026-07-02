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

  // Automatically close mobile menu and restore scrolling when resizing to desktop widths
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 1024px matches our lg breakpoint
        setIsOpen(false);
        document.body.style.overflow = "unset";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile drawer and restore scroll when auth state changes (view changes)
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
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
    
    // Tiny delay to allow React state updates and body overflow to apply before smooth scroll begins
    setTimeout(() => {
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
    }, 80);
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
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(isLoggedIn ? "#cvkaro-dashboard" : "#home");
              }}
              className="flex items-center gap-2 group focus:outline-hidden"
              id="header-logo"
            >
              <div className="h-12 w-12 rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0 bg-[#080c18]">
                <img 
                  src="/logo_main.png" 
                  alt="CVKaro Logo" 
                  className="h-full w-full object-contain bg-[#080c18]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display text-2xl font-bold text-white tracking-tight leading-none block">
                  CV<span className="text-brand-green">Karo</span>
                </span>
                <div className="flex justify-between w-full text-[8.5px] text-[#f9fafb] font-bold mt-1 uppercase tracking-normal">
                  <span>CV</span>
                  <span>Karo</span>
                  <span>Job</span>
                  <span>Pao</span>
                </div>
              </div>
            </a>

            {/* Desktop Navbar */}
            <nav className="hidden lg:flex items-center gap-1" id="desktop-navbar">
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

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3" id="desktop-actions">
            {isLoggedIn ? (
              <button
                onClick={onLogout}
                className="px-5 py-2.5 text-sm font-bold text-white bg-red-600/10 border border-red-500/20 hover:bg-red-600/25 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                Sign Out
              </button>
            ) : (
              <>
                <button
                  onClick={onLoginClick}
                  id="btn-login"
                  className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-brand-green transition-colors duration-200 cursor-pointer"
                >
                  Login
                </button>
                <button
                  onClick={onGetStartedClick}
                  id="btn-get-started"
                  className="px-5 py-2.5 text-sm font-bold text-navy-dark bg-brand-green hover:brightness-110 rounded-lg shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex lg:hidden items-center gap-2" id="mobile-menu-trigger">
            {!isLoggedIn && (
              <button
                onClick={onGetStartedClick}
                className="px-3 py-1.5 text-xs font-bold text-navy-dark bg-brand-green hover:brightness-110 rounded-md cursor-pointer"
              >
                Get Started
              </button>
            )}
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

      {/* Mobile Drawer Navigation (renders on absolute/fixed overlay outside the Z-50 wrapper container) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" id="mobile-drawer">
          {/* Backdrop covers full viewport on z-30 */}
          <div 
            className="fixed inset-0 bg-navy-dark/80 backdrop-blur-md transition-opacity duration-300" 
            onClick={() => setIsOpen(false)} 
          />
          {/* Menu Drawer container on z-40, padded with pt-6 to offset header and includes top bar */}
          <nav className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#0f1526] border-l border-white/10 px-6 py-6 flex flex-col gap-6 shadow-2xl overflow-y-auto text-white">
            
            {/* Drawer Brand & Close button */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-lg overflow-hidden flex items-center justify-center bg-[#080c18]">
                  <img 
                    src="/logo_main.png" 
                    alt="CVKaro Logo" 
                    className="h-full w-full object-contain bg-[#080c18]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-display text-xl font-bold text-white tracking-tight leading-none">
                  CV<span className="text-brand-green">Karo</span>
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-brand-green hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center border border-transparent hover:border-brand-green/30"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

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
            
            <div className="border-t border-white/10 pt-6 mt-auto flex flex-col gap-3">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    if (onLogout) onLogout();
                  }}
                  className="w-full py-3 text-center font-bold text-white bg-red-600/20 border border-red-500/30 hover:bg-red-600/30 rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onLoginClick();
                    }}
                    className="w-full py-3 text-center font-semibold text-gray-300 border border-white/10 hover:bg-white/5 rounded-lg cursor-pointer"
                  >
                    Login / Sign In
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onGetStartedClick();
                    }}
                    className="w-full py-3 text-center font-bold text-navy-dark bg-brand-green hover:brightness-110 rounded-lg shadow-sm cursor-pointer"
                  >
                    Get Started Free
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
