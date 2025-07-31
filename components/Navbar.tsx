"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="fixed w-full bg-white/95 border-b border-gray-200 z-20 backdrop-blur">
            <div className="px-4 sm:px-6 py-3 flex justify-between items-center max-w-5xl mx-auto">
                <div className="flex items-center gap-4">
                    <Link
                        href="/"
                        className="flex items-center gap-3 text-gray-900 hover:text-gray-700 transition-colors"
                    >
                        <Avatar className="w-8 h-8">
                            <AvatarImage
                                src="/profile.jpg"
                                alt="Ryuichi Kozaki"
                            />
                            <AvatarFallback>RK</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold">zakzackr</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-sm text-gray-700 hover:text-gray-900 transition"
                    >
                        Overview
                    </Link>
                    <Link
                        href="/resume"
                        className="text-sm text-gray-700 hover:text-gray-900 transition"
                    >
                        Resume
                    </Link>
                    <Link
                        href="/oss"
                        className="text-sm text-gray-700 hover:text-gray-900 transition"
                    >
                        OSS
                    </Link>
                    <Link
                        href="/projects"
                        className="text-sm text-gray-700 hover:text-gray-900 transition"
                    >
                        Projects
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                    aria-label="Toggle mobile menu"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur">
                    <div className="px-4 py-2 space-y-1">
                        <Link
                            href="/"
                            className="block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Overview
                        </Link>
                        <Link
                            href="/resume"
                            className="block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Resume
                        </Link>
                        <Link
                            href="/oss"
                            className="block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            OSS
                        </Link>
                        <Link
                            href="/projects"
                            className="block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Projects
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
