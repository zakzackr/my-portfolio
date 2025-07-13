// pages/index.tsx
import Sidebar from "@/components/Sidebar";
import TLDR from "@/components/TLDR";
import PopularRepositories from "@/components/PopularRepositories";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-16">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-80 lg:flex-shrink-0">
                            <Sidebar />
                        </div>

                        {/* Right Content */}
                        <div className="flex-1 min-w-0">
                            <div className="space-y-6">
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
