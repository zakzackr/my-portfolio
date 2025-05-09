// pages/posts/[slug].tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { remark } from 'remark';
import html from 'remark-html';

import Navbar from '@/components/Navbar';

type PostPageProps = {
  title: string;
  date: string;
  contentHtml: string;
};

export default function PostPage({ title, date, contentHtml }: PostPageProps) {
  return (
    <main>
      <Navbar />
      <div className="p-16 max-w-4xl mx-auto">
        <h1 className="text-4xl mt-8 mb-5">{title}</h1>
        <p className="text-gray-500 mb-5">{date}</p>
        {/* MarkdownをHTMLに変換して表示 */}
        <div className="prose mt-12" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);

  const paths = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => ({
      params: { slug: name.replace(/\.md$/, '') },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Markdown → HTML に変換
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      title: data.title || slug,
      date: data.date || '',
      contentHtml,
    },
  };
};
