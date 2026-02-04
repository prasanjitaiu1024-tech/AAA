import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Book Your Nature Trail', href: '#' },
    { name: 'Wild Reflexs', href: '#' },
    { name: 'Member', href: '#' }
  ];

  return (
    <nav className=" Nav bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo & NGO Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img src="/logo.png" alt="Animal Aid Alliance Logo" className="w-8 h-8" />
            </div>
            <span className="text-xl font-bold tracking-wide hover:text-yellow-300 transition-colors">
              Animal Aid Alliance
            </span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-1 text-gray-700 focus:outline-none"
            />
            <button className="px-3 text-green-700 hover:text-green-900">
              <Search size={18} />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group font-medium"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-green-800">
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-1 text-gray-700 focus:outline-none w-full"
            />
            <button className="px-3 text-green-700 hover:text-green-900">
              <Search size={18} />
            </button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 px-3 rounded hover:bg-green-600"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
