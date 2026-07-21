import Link from 'next/link';

// ĐOẠN 2 CỦA BẠN: Định nghĩa kiểu dữ liệu (Interface) cho thuộc tính nhận vào (Props)
interface FeaturedPostsProps {
  posts: Array<{
    slug: string;
    title: any;
    date: any;
    category: any;
    image: any;
    description: any;
  }>;
}

// Kết nối Interface vào hàm Component
export default function FeaturedPosts({ posts = [] }: FeaturedPostsProps) {
  // Lọc lấy tối đa 4 bài viết đầu tiên để hiển thị nổi bật
  const featuredList = posts.slice(0, 4);

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

      {/* Kiểm tra trạng thái trống nếu mảng posts không có dữ liệu */}
      {featuredList.length === 0 ? (
        <div className="bg-white border border-gray-200 p-8 rounded-2xl text-center text-gray-500 text-sm">
          Chưa có bài viết nổi bật nào. Hãy thêm bài viết vào thư mục <code className="bg-gray-100 px-2 py-1 rounded text-red-500">posts/</code> nhé!
        </div>
      ) : (
        /* Giao diện lưới 4 cột */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredList.map((post) => {
            const postSlug = post.slug || '#';
            const postTitle = post.title || "Tiêu đề bài viết nổi bật";
            const postImage = post.image || "/images/kiem-tien.png";
            const postCategory = post.category || "Kiếm tiền online";
            const postDesc = post.description || "Đang cập nhật nội dung mô tả ngắn...";
            const postDate = post.date || "2026-07-21";

            return (
              <article 
                key={postSlug} 
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group"
              >
                <div>
                  {/* Hiển thị hình ảnh bài viết kèm hiệu ứng zoom nhẹ */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={postImage}
                      alt={String(postTitle)}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                      {postCategory}
                    </span>
                  </div>

                  {/* Nội dung chữ */}
                  <div className="p-4">
                    <Link href={`/blog/${postSlug}`}>
                      <h3 className="font-bold text-slate-900 text-sm line-clamp-2 group-hover:text-blue-600 cursor-pointer transition-colors mb-2">
                        {postTitle}
                      </h3>
                    </Link>
                    <p className="text-slate-600 text-xs line-clamp-2">
                      {postDesc}
                    </p>
                  </div>
                </div>

                {/* Thanh thông tin chân trang của Card */}
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
