import Link from 'next/link';
import { getFeaturedPosts } from '@/sanity/lib/posts';

export default function FeaturedPosts() {
  // Tự động lấy dữ liệu bài viết nổi bật và giới hạn tối đa hiển thị 4 bài
  const rawPosts = getFeaturedPosts() || [];
  const posts = rawPosts.slice(0, 4);

  return (
    <section className="mt-12 mb-12">
      {/* Thanh tiêu đề phần bài viết nổi bật */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl">🔥</span>
          <h2 className="text-xl font-bold text-slate-900">Bài viết nổi bật</h2>
        </div>
        <Link href="/blog" className="text-sm font-semibold text-blue-600 hover:underline">
          Xem tất cả →
        </Link>
      </div>

      {/* Kiểm tra trạng thái trống nếu chưa gắn tag featured */}
      {posts.length === 0 ? (
        <div className="bg-white border border-gray-200 p-8 rounded-2xl text-center text-gray-500 text-sm">
          Chưa có bài viết nổi bật nào. Hãy thêm <code className="bg-gray-100 px-2 py-1 rounded text-red-500">featured: true</code> vào file `.md` nhé!
        </div>
      ) : (
        /* Giao diện lưới: Tự động co giãn mượt mà từ 1 cột (mobile) lên 4 cột (desktop) */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => {
            // Đồng bộ linh hoạt dữ liệu từ cả hai phiên bản code của bạn
            const postPostId = post.id || post.slug || `featured-${index}`;
            const postTitle = post.title || "Tiêu đề bài viết nổi bật";
            const postImage = post.image || "/images/kiem-tien.png";
            const postCategory = post.category || "Kiếm tiền online";
            const postDesc = post.description || post.excerpt || "Đang cập nhật nội dung mô tả ngắn cho bài viết...";
            const postDate = post.date || "2026-07-21";

            return (
              <article 
                key={postPostId} 
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group"
              >
                <div>
                  {/* HIỂN THỊ ẢNH THẬT & HIỆU ỨNG HOVER (Tích hợp từ đoạn code 2) */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={postImage}
                      alt={postTitle}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Huy hiệu danh mục nằm đè lên góc ảnh */}
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                      {postCategory}
                    </span>
                  </div>

                  {/* KHU VỰC NỘI DUNG CHỮ */}
                  <div className="p-4">
                    <Link href={`/blog/${postPostId}`}>
                      <h3 className="font-bold text-slate-900 text-sm line-clamp-2 group-hover:text-blue-600 cursor-pointer transition-colors mb-2">
                        {postTitle}
                      </h3>
                    </Link>
                    <p className="text-slate-600 text-xs line-clamp-2">
                      {postDesc}
                    </p>
                  </div>
                </div>

                {/* THANH THÔNG TIN BÊN DƯỚI CARD */}
                <div className="p-4 pt-0">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-gray-100">
                    <span>📅 {postDate}</span>
                    <span className="text-amber-500 font-semibold flex items-center gap-1">
                      ⭐ Nổi bật
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
