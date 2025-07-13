import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar: React.FC = () => {
    return (
        <nav className="fixed w-full bg-white/95 border-b border-gray-200 z-20 backdrop-blur">
            <div className="px-6 py-3 flex justify-between items-center max-w-5xl mx-auto">
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
                <div className="flex items-center gap-6">
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
                        href="/projects"
                        className="text-sm text-gray-700 hover:text-gray-900 transition"
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
