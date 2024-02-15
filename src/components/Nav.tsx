import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const stores = [
    { name: "Oakville", route: "/store/oakville" },
    { name: "Toronto", route: "/store/toronto" },
    { name: "Mississauga", route: "/store/mississauga" },
    { name: "Markham", route: "/store/markham" },
    { name: "Guelph", route: "/store/guelph" },
    { name: "Thornhill", route: "/store/thornhill" },
    { name: "Kingston", route: "/store/kingston" },
  ];

  return (
    <nav className="bg-primary shadow-md flex justify-between items-center p-2 relative">
      <Link href="/" className="flex items-center">
        <Image src="/images/l1.webp" alt="Logo" width={100} height={100} />
      </Link>

      {/* Hamburger Menu Icon for Mobile */}

      <button onClick={toggleMobileMenu} className="md:hidden block ml-auto">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div className="flex justify-between items-center">
        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            isMobileMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 right-0 bg-primary p-2 shadow-md z-[1000]`}
        >
          <Link
            onClick={() => {
              toggleMobileMenu();
              setIsDropdownOpen(false);
            }}
            href="/"
            className="text-sm text-secondary hover:text-green-700 block py-1 px-2"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              toggleMobileMenu();
              setIsDropdownOpen(false);
            }}
            href="/about"
            className="text-sm text-secondary hover:text-green-700 block py-1 px-2"
          >
            About
          </Link>
          <Link
            onClick={() => {
              toggleMobileMenu();
              setIsDropdownOpen(false);
            }}
            href="/gallery"
            className="text-sm text-secondary hover:text-green-700 block py-1 px-2"
          >
            Gallery
          </Link>
          <Link
            onClick={() => {
              toggleMobileMenu();
              setIsDropdownOpen(false);
            }}
            href="/menu"
            className="text-sm text-secondary hover:text-green-700 block py-1 px-2"
          >
            Menu
          </Link>
          {/* Dropdown for Stores */}
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              className="text-sm text-secondary hover:text-green-700 focus:outline-none inline-flex items-center block py-1 px-2"
            >
              Stores
              <svg
                className={`transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                } h-4 w-4 ml-2 transition-transform duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute md:right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-1 z-50">
                {stores.map((store, index) => (
                  <Link
                    onClick={toggleMobileMenu}
                    href={store.route}
                    key={index}
                    className="block px-2 py-1 text-sm text-gray-700 hover:bg-green-700 hover:text-white"
                  >
                    {store.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <Link
            href="/"
            className="text-secondary hover:text-green-700 cursor-pointer block py-2 px-4"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-secondary hover:text-green-700 cursor-pointer block py-2 px-4"
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="text-secondary hover:text-green-700 cursor-pointer block py-2 px-4"
          >
            Gallery
          </Link>
          <Link
            href="/menu"
            className="text-secondary hover:text-green-700 cursor-pointer block py-2 px-4"
          >
            Menu
          </Link>
          {/* Dropdown for Stores */}
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              className="text-secondary hover:text-green-700 focus:outline-none inline-flex items-center block py-2 px-4"
            >
              Stores
              <svg
                className={`transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                } h-4 w-4 ml-2 transition-transform duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute md:right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-1 z-50">
                {stores.map((store, index) => (
                  <Link
                    onClick={toggleDropdown}
                    href={store.route}
                    key={index}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-700 hover:text-white"
                  >
                    {store.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
