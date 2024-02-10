// Footer.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        {/* Social Media Icons - On small screens, this will be on top */}
        <div className="mb-3 sm:mb-0 order-1 sm:order-none">
          <a
            href="https://www.instagram.com/gotcha_canada/"
            className="text-xl"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" className="w-8 h-8" />
          </a>
          {/* Add other social media icons here */}
        </div>

        {/* Center Text - This will be truly centered on all screen sizes */}
        {/* Use flex-grow to ensure it takes up the available space */}
        <div className="flex-grow px-3 pb-0">
          <p className="text-sm">Made with ❤️ in Ontario</p>
        </div>

        {/* Right Text - On small screens, this will be at the bottom */}
        <div className="order-3 sm:order-none">
          © 2024 Gotcha Canada. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
