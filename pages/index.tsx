// pages/index.tsx
import About from '@/components/About'
import Stats from '@/components/Stats'
import TechStack from '@/components/TechStack'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <About />
              <Stats />
              <TechStack />
            </div>
            <div className="lg:col-span-1">
              <div className="github-border p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3">Pinned</h3>
                <div className="space-y-3">
                  <div className="github-border p-3 rounded hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm text-blue-600">my-portfolio</h4>
                      <span className="text-xs text-gray-500">Public</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Personal portfolio website built with Next.js</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                          JavaScript
                        </span>
                        <span className="flex items-center gap-1">
                          ⭐ 2
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="github-border p-3 rounded hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm text-blue-600">spring-security-demo</h4>
                      <span className="text-xs text-gray-500">Public</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Spring Security implementation examples</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          Java
                        </span>
                        <span className="flex items-center gap-1">
                          ⭐ 5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

