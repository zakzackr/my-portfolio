// pages/resume.tsx
import Resume from '@/components/Resume'
import Others from '@/components/Others'
import Navbar from '@/components/Navbar'

import Link from 'next/link'

export default function ResumePage() {
  return (
    <main>
      <Navbar />
      <div className="p-16 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mt-8 mb-4">Resume</h1>
        <Resume />
        <Others />
      </div>
    </main>
  )
}
