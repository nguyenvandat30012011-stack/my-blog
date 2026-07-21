import Link from 'next/link';
import { getSortedPostsData } from '@/sanity/lib/posts';

export default function RecentPosts() {
  // Lấy dữ liệu bài viết và giới hạn tối đa hiển thị 6 bài
  const rawPosts = getSortedPostsData() || [];
  const posts = rawPosts.slice(0, 6);

  return (
    <section className="mt-12 mb-16">
      {/* Tiêu đề phần bài viết mới nhất */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl">✨</span>
          <h2 className="text-xl font-bold text-slate-900">Bài viết mới nhất</h2>
        </div>
      </div>

      {/* Trạng thái trống nếu không tìm thấy bài viết */}
      {posts.length === 0 ? (
        <div className="bg-white border border-gray-200 p-8 rounded-2xl text-center text-gray-500 text-sm">
          Chưa có bài viết nào được tìm thấy trong hệ thống.
        </div>
      ) : (
        /* Giao diện lưới: 1 cột trên mobile, 2 cột trên tablet, 3 cột trên desktop */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => {
            // Đồng bộ hóa các trường dữ liệu tùy biến từ cả hai đoạn code của bạn
            const postPostId = (post as any).id || (post as any).slug || `post-${index}`;
            const postTitle = post.title || "Tiêu đề bài viết mẫu";
            const postImage = post.image || "/images/kiem-tien.png";
            const postCategory = post.category || "Bài viết";
            const postDesc = post.description || post.excerpt || "Đang cập nhật nội dung mô tả ngắn cho bài viết...";
            const postDate = post.date || "2026-07-21";

            return (
              <article 
                key={postPostId} 
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group"
              >
                <div>
                  {/* KHUNG HIỂN THỊ ẢNH (Từ đoạn code 2) */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={postImage}
                      alt={postTitle}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Huy hiệu danh mục */}
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                      {postCategory}
                    </span>
                  </div>

                  {/* NỘI DUNG CHỮ CỦA BÀI VIẾT */}
                  <div className="p-5">
                    <Link href={`/blog/${postPostId}`}>
                      <h3 className="font-bold text-slate-900 text-base mt-1 line-clamp-2 group-hover:text-blue-600 transition cursor-pointer">
                        {postTitle}
                      </h3>
                    </Link>
                    <p className="text-slate-600 text-xs mt-2 line-clamp-2">
                      {postDesc}
                    </p>
                  </div>
                </div>

                {/* THANH THÔNG TIN PHÍA DƯỚI (FOOTER CARD) */}
                <div className="px-5 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>📅 {postDate}</span>
                  <Link href={`/blog/${postPostId}`} className="text-blue-600 font-semibold hover:underline">
                    Đọc tiếp →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
