import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

// Hàm chuẩn hóa tiếng Việt thành không dấu để so khớp chính xác 100%
function removeVietnameseTones(str: string) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .replace(/\s+/g, '-');
}

function getPostsByCategory(categorySlug: string) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
      return {
        slug,
        title: data.title || '',
        category: data.category || '',
        image: data.image || '',
        date: data.date || '',
        description: data.description || '',
      };
    });

  // So sánh tên danh mục sau khi đã chuẩn hóa không dấu và bỏ khoảng trắng
  return allPosts.filter((post) => {
    const postCatSlug = removeVietnameseTones(post.category);
    return postCatSlug === categorySlug.toLowerCase();
  });
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const posts = getPostsByCategory(resolvedParams.slug);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-6 capitalize">
          📂 Danh mục: {resolvedParams.slug.replace(/-/g, ' ')}
        </h1>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <article key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <img src={post.image || "/images/kiem-tien.png"} alt={post.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-bold text-slate-900 mb-2 hover:text-blue-600 transition">{post.title}</h3>
                  </Link>
                  <p className="text-slate-600 text-xs line-clamp-2">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 italic">Chưa có bài viết nào trong danh mục này.</p>
        )}
      </main>
    </div>
  );
}