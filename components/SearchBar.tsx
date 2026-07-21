'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SearchBar({ allPosts = [] }: { allPosts: any[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Đảm bảo dữ liệu an toàn và lọc không phân biệt hoa thường / khoảng trắng
  const safePosts = Array.isArray(allPosts) ? allPosts : [];
  
  const filteredPosts = searchTerm.trim() === '' ? [] : safePosts.filter(post => {
    const title = post?.title || '';
    const description = post?.description || '';
    const term = searchTerm.toLowerCase();

    return (
      title.toLowerCase().includes(term) ||
      description.toLowerCase().includes(term)
    );
  });

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Ô input tìm kiếm */}
      <div className="relative flex items-center bg-slate-100 rounded-full px-4 py-2.5 border border-slate-200 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 transition shadow-sm">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Tìm kiếm bài viết..."
          className="w-full bg-transparent outline-none text-slate-800 text-sm placeholder-slate-400"
        />
        <svg className="w-5 h-5 text-slate-400 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Hộp kết quả thả xuống */}
      {searchTerm.trim() !== '' && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 max-h-80 overflow-y-auto z-50 p-2">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <Link 
                key={index} 
                href={`/blog/${post.slug}`}
                onClick={() => setSearchTerm('')} 
                className="flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-xl transition"
              >
                <img 
                  src={post.image || "/images/kiem-tien.png"} 
                  alt={post.title} 
                  className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{post.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">📅 {post.date}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="p-4 text-center text-xs text-slate-400">
              Không tìm thấy bài viết nào phù hợp với từ khóa "{searchTerm}".
            </div>
          )}
        </div>
      )}
    </div>
  );
}