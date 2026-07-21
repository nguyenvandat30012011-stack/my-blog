import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

async function getPostData(slug: string) {
  try {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filePath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title || slug,
      date: data.date || 'Hôm nay',
      content,
    };
  } catch (error) {
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-16 text-white">
      <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
      <p className="text-gray-400 mb-8 text-sm">Ngày đăng: {post.date}</p>
      
      {/* Sử dụng ReactMarkdown để tự động định dạng các thẻ ##, chữ đậm, danh sách... */}
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl leading-relaxed text-gray-300 space-y-4">
        <ReactMarkdown
          components={{
            h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-white mt-6 mb-3" {...props} />,
            p: ({node, ...props}) => <p className="mb-4 text-gray-300" {...props} />,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}