// Footer.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        {/* Social Media Icons */}
        <div className="mb-3 sm:mb-0 order-1 sm:order-none">
          <a
            href="https://www.instagram.com/gotchabubbletea_oakville/"
            className="text-xl"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" className="w-8 h-8" />
          </a>
          {/* Add other social media icons here */}
        </div>

        {/* Center Text */}
        {/* Use flex-grow to ensure it takes up the available space */}
        <div className="flex-grow px-3 pb-0">
          <p className="text-sm">
            Made with ❤️ in Ontario - Coming to Calgary 👀
          </p>
        </div>

        {/* Right Text */}
        <div className="order-3 sm:order-none">
          © 2024 Gotcha Canada. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
