import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Resume from "@/components/Resume";

export const metadata: Metadata = {
    title: "Resume - Ryuichi Kozaki",
    description: "Professional experience and education",
};

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
                    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                        {/* Left Sidebar */}
                        <div className="lg:w-80 lg:flex-shrink-0">
                            <Sidebar />
                        </div>

                        {/* Right Content */}
                        <div className="flex-1 min-w-0">
                            <Resume />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}