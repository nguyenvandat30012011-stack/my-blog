import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Hàm lấy tất cả các bài viết từ thư mục posts
async function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  if (!fs.existsSync(postsDirectory)) return [];
  
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || '21/07/2026',
      category: data.category || 'Kiếm tiền Online',
      description: data.description || 'Tổng hợp các cách kiếm tiền trực tuyến uy tín, phù hợp với quỹ thời gian của học sinh, sinh viên.',
      readTime: data.readTime || '8 phút đọc',
    };
  });

  return posts;
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-[#07090e] text-slate-300 font-sans pb-24">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
          Tất cả <span className="text-blue-500">bài viết</span>
        </h1>
        <p className="text-slate-400 text-base">
          Tổng hợp các chia sẻ, kiến thức và kinh nghiệm mới nhất.
        </p>

        {/* 2. FILTER & SORT BAR (Thanh lọc danh mục và sắp xếp) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mt-8 pt-4 border-t border-slate-800/80">
          
          {/* Các nút danh mục */}
          <div className="flex flex-wrap items-center gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-lg shadow-blue-600/20 transition flex items-center gap-1.5">
              <span>🗂️</span> Tất cả bài viết
            </button>
            <button className="bg-[#0b101d] hover:bg-slate-800 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-medium transition">
              Kiếm tiền Online
            </button>
            <button className="bg-[#0b101d] hover:bg-slate-800 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-medium transition">
              Công nghệ
            </button>
            <button className="bg-[#0b101d] hover:bg-slate-800 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-medium transition">
              Phát triển bản thân
            </button>
            <button className="bg-[#0b101d] hover:bg-slate-800 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-medium transition">
              Marketing
            </button>
            <button className="bg-[#0b101d] hover:bg-slate-800 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-medium transition">
              Thiết kế Website
            </button>
          </div>

          {/* Sắp xếp & Chế độ xem lưới/danh sách */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            <div className="bg-[#0b101d] border border-slate-800 text-slate-300 px-3.5 py-2 rounded-xl text-xs font-medium flex items-center gap-2">
              <span className="text-slate-400">Mới nhất</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            
            <div className="flex items-center gap-1 bg-[#0b101d] border border-slate-800 p-1 rounded-xl">
              <button className="p-1.5 bg-blue-600 text-white rounded-lg shadow">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              </button>
              <button className="p-1.5 text-slate-400 hover:text-white rounded-lg transition">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. POSTS GRID (Lưới danh sách bài viết) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="bg-[#0b101d] border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700 transition flex flex-col group shadow-lg"
            >
              {/* Thumbnail giả lập khung hình ảnh bài viết */}
              <div className="relative h-48 bg-gradient-to-tr from-slate-900 via-blue-950/30 to-slate-900 border-b border-slate-800/60 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition"></div>
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-inner group-hover:scale-110 transition duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                </div>
                
                {/* Huy hiệu danh mục nhỏ trên ảnh */}
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-slate-700/60 text-blue-400 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Nội dung bên trong thẻ bài viết */}
              <div className="p-6 flex flex-col flex-grow">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition line-clamp-2 mb-2">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-6 flex-grow">
                  {post.description}
                </p>

                {/* Thông tin ngày tháng và nút Đọc tiếp */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-1 transition">
                    Đọc tiếp →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}