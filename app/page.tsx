import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';
import RecentPosts from '@/components/RecentPosts'; 
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar'; // 1. IMPORT COMPONENT TÌM KIẾM

// Hàm lấy danh sách bài viết từ thư mục nội bộ (Markdown)
function getPosts() {
  try {
    const postsDirectory = path.join(process.cwd(), 'posts');
    if (!fs.existsSync(postsDirectory)) return [];

    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title || '',
          date: data.date || '',
          category: data.category || '',
          image: data.image || '',
          description: data.description || '',
        };
      });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("Lỗi khi đọc file Markdown:", error);
    return [];
  }
}

export default function Home() {
  const posts = getPosts();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <Hero />
        
        {/* 2. ĐẶT Ô TÌM KIẾM VÀ TRUYỀN DỮ LIỆU POSTS VÀO ĐÂY */}
        <div className="my-8">
          <SearchBar allPosts={posts} />
        </div>
        
        <FeaturedPosts posts={posts} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-900 mb-6">👉 Bài viết mới nhất</h2>
            <RecentPosts posts={posts} /> 
          </div>
          
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
}