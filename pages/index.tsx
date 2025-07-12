// pages/index.tsx
import Sidebar from "@/components/Sidebar";
import TLDR from "@/components/TLDR";
import PopularRepositories from "@/components/PopularRepositories";
import TechStack from "@/components/TechStack";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-16">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Sidebar */}
                        <div className="lg:w-80 lg:flex-shrink-0">
                            <Sidebar />
                        </div>

                        {/* Right Content */}
                        <div className="flex-1 min-w-0">
                            <div className="space-y-6">
                                <TLDR />
                                {/* <PopularRepositories /> */}
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M4 1.75C4 .784 4.784 0 5.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 14.25 16h-8.5A1.75 1.75 0 0 1 4 14.25V1.75zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5H5.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 0 0-.011-.013l-2.914-2.914a.246.246 0 0 0-.013-.011z" />
                                        </svg>
                                        <span className="font-medium">zakzackr</span>
                                        <span>/</span>
                                        <span className="font-bold">resume.md</span>
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-900 pb-2 border-b border-gray-200 mb-4">
                                        Tech Stack
                                    </h2>
                                    <TechStack />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
