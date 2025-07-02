"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, Phone, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import darkLogo from "@/assets/images/logo/darkmodelogo.png";
import lightLogo from "@/assets/images/logo/lightmodelogo.png";
import { Link } from "react-router-dom";
import {
  motion,
  Variants,
  SVGMotionProps,
  AnimatePresence,
} from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuItemClick = (sectionId: string) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "techstack", label: "Tech Stack" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "clients", label: "Clients" },
    { id: "contact", label: "Contact" },
  ];

  const menuVariants = {
    open: { rotate: 90, scale: 1 },
    closed: { rotate: 0, scale: 1 },
  };

  const Path = (props: SVGMotionProps<SVGPathElement>) => (
    <motion.path
      fill="transparent"
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      {...props}
    />
  );

  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <Path
        variants={{
          closed: { d: "M4 6h16", opacity: 1 },
          open: { d: "M4 6h16", opacity: 0 },
        }}
        transition={{ duration: 0.2 }}
      />
      <Path
        variants={{
          closed: { d: "M4 12h16", opacity: 1 },
          open: { d: "M4 12h16", rotate: 45 },
        }}
        transition={{ duration: 0.2 }}
      />
      <Path
        variants={{
          closed: { d: "M4 18h16", opacity: 1 },
          open: { d: "M4 12h16", rotate: -45 },
        }}
        transition={{ duration: 0.2 }}
      />
    </svg>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home">
              <img
                src={lightLogo}
                alt="Nexxen IT Light Logo"
                className="h-5 sm:h-6 md:h-7 w-auto block dark:hidden"
              />
              <img
                src={darkLogo}
                alt="Nexxen IT Dark Logo"
                className="h-5 sm:h-6 md:h-7 w-auto hidden dark:block"
              />
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`/${item.id === 'home' ? '' : '#' + item.id}`}
                  className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 font-medium ${
                    activeSection === item.id
                      ? "!text-purple-600 dark:!text-purple-400 font-medium"
                      : ""
                  }`}
                  onClick={(e) => {
                    if (window.location.pathname !== "/") {
                      e.preventDefault();
                      window.location.href = `/${item.id === 'home' ? '' : '#' + item.id}`;
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#"
                className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 font-medium"
              >
                <Phone className="inline-block mr-1" />
                +880 1762627422
              </a>

              <ThemeToggle />
            </nav>

            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <motion.button
                ref={buttonRef}
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
                variants={menuVariants}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <MenuIcon />
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <div className="md:hidden relative">
                <motion.div
                  ref={menuRef}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    duration: 0.3,
                  }}
                  className="absolute top-0 left-0 right-0 mt-2 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  {menuItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      delay: index * 0.05,
                    }}
                    href={`/${item.id === 'home' ? '' : '#' + item.id}`}
                    onClick={(e) => {
                      if (window.location.pathname !== "/") {
                        e.preventDefault();
                        window.location.href = `/${item.id === 'home' ? '' : '#' + item.id}`;
                      } else {
                        handleMenuItemClick(item.id);
                      }
                    }}
                    className={`block px-4 py-2 text-base transition-colors font-medium duration-200 ${
                      activeSection === item.id
                        ? "!text-purple-600 dark:!text-purple-400 bg-purple-100 dark:bg-purple-900/30"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                  ))}
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};
