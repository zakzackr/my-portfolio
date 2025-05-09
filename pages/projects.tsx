import Navbar from '@/components/Navbar';

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div className="p-16 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mt-8 mb-8">Projects</h1>
        <div className="mb-3">
            <a
                href="https://shibainuu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold mb-2 inline-block"
            >
                Reminder App
            </a>
            <ul className="list-none p-0 m-0">
                <li className="relative pl-6 mb-1">
                    <span className="absolute left-2 text-brown-800">–</span>
                    Java, Spring Boot, JavaScript, React, MySQL, AWS  
                </li>
                <li className="relative pl-6 mb-1">
                    <span className="absolute left-2 text-brown-800">–</span>
                    メールでリマインダーをお知らせするアプリ
                </li>
            </ul>
        </div>
      </div>
    </main>
  );
}
