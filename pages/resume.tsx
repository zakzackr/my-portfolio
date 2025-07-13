// pages/resume.tsx
import Sidebar from "@/components/Sidebar";
import ResumeContent from "@/components/Resume";
import Navbar from "@/components/Navbar";

export default function ResumePage() {
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
                            <ResumeContent />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
