import React from "react";
import { Link } from "react-router-dom";

const FooterMenu = () => (
  <footer className="w-full border-t py-4 mt-8 bg-white dark:bg-gray-900">
    <div className="container mx-auto flex justify-center">
      <nav className="flex space-x-6">
        <Link to="/privacy-policy" className="transition-colors hover:text-purple-600 dark:hover:text-purple-400">Privacy Policy</Link>
        <Link to="/terms-of-services" className="transition-colors hover:text-purple-600 dark:hover:text-purple-400">Terms of Services</Link>
      </nav>
    </div>
  </footer>
);

export default FooterMenu;
