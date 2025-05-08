"use client"

import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-none fixed w-full z-50">
      <div className=" p-4 sm:px-6 lg:px-8">
        <div className="flex h-fit">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-12 w-auto"
                src="/logo.png"
                alt="Logo"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center ml-8 text-base text-white font-medium space-x-8">
            <Link 
              href="/sites-vitrine"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md  "
            >
              Sites Vitrine
            </Link>
            <Link 
              href="/applications"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Applications
            </Link>
            <Link 
              href="/intelligence-artificielle"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Intelligence Artificielle
            </Link>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;