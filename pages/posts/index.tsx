import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

import Navbar from '@/components/Navbar'


type Post = {
  slug: string;
  title: string;
  date: string;
};

type PostsPageProps = {
  posts: Post[];
};

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <main>
      <Navbar />
      <div className="p-16 max-w-4xl mx-auto">
        {/* Posts一覧 */}
        <h1 className="text-3xl font-bold mt-8 mb-4">Posts</h1>
        <div className="space-y-4 mt-10">
          {posts.map(({ slug, title, date }) => (
            <div key={slug} className="border-b border-dashed border-black pb-4 mb-4">
              <Link href={`/posts/${slug}`} className="text-xl">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold mr-10">{title}</span>
                  <span className="text-sm whitespace-nowrap">{date}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

// ✅ Markdownファイルをビルド時に読み込む
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const slug = name.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents); // frontmatter取得

      return {
        slug,
        title: data.title || slug, // titleがなければslugを使う
        date: data.date || 'No date',
      };
    });

  return {
    props: {
      posts,
    },
  };
}