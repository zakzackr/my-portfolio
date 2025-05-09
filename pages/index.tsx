// pages/index.tsx
import Header from '@/components/Header'
import About from '@/components/About'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="p-16 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mt-8 mb-4">Ryuichi Kozaki</h1>
        <About />
      </div>
      {/* <div className="mt-8 flex gap-4">
        <Link 
          href="/resume" 
          className="
            font-bold 
            underline decoration-[#C96442] underline-offset-1 
            border-b border-transparent 
            transition-colors duration-200 hover:border-[#C96442]
            "
        >
          Resume
        </Link>
        <Link 
          href="/projects" 
          className="
          font-bold 
          underline decoration-[#C96442] underline-offset-1 
          border-b border-transparent 
          transition-colors duration-200 hover:border-[#C96442]
          "
        >
          Projects
        </Link>
        <Link 
          href="/posts" 
          className="
          font-bold 
          underline decoration-[#C96442] underline-offset-1 
          border-b border-transparent 
          transition-colors duration-200 hover:border-[#C96442]
          "
        >
          Posts
        </Link>
      </div> */}
    </main>
  )
}

