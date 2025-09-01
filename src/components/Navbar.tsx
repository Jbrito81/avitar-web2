"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Avitar Soluciones Logo"
                width={200}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/arriendos" className="text-[#2B3B8C] hover:text-[#FF6B38] px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Arriendos
            </Link>
            <Link href="/ventas" className="text-[#2B3B8C] hover:text-[#FF6B38] px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Ventas
            </Link>
            <Link href="/proyectos" className="text-[#2B3B8C] hover:text-[#FF6B38] px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Proyectos
            </Link>
            <Link href="/subsidios" className="text-[#2B3B8C] hover:text-[#FF6B38] px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Subsidios
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {/* Simple hamburger / close icons */}
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 18L18 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/arriendos" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Arriendos
            </Link>
            <Link href="/ventas" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Ventas
            </Link>
            <Link href="/proyectos" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Proyectos
            </Link>
            <Link href="/subsidios" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Subsidios
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
