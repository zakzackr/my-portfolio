import Sidebar from "@/components/Sidebar";
import TLDR from "@/components/TLDR";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
                    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                        <div className="lg:w-80 lg:flex-shrink-0">
                            <Sidebar />
                        </div>

                        {/* Right Content */}
                        <div className="flex-1 min-w-0">
                            <div className="space-y-4 sm:space-y-6">
                                <TLDR />
                                <Skills />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}