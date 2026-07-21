import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-14 shadow-sm">
      {/* Layout Grid chia cột thông minh */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Cột trái: Tiêu đề, mô tả và nút bấm (Chiếm 7/12 cột trên màn hình lớn) */}
        <div className="lg:col-span-7 space-y-6">
          <span className="inline-block bg-blue-50 text-blue-600 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            Chia sẻ kiến thức - Tạo giá trị
          </span>
          
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Chào mừng bạn đến với <span className="text-blue-600">BlogGen</span>
          </h1>
          
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Nơi chia sẻ kiến thức, kinh nghiệm và những câu chuyện hữu ích trong cuộc sống.
          </p>
          
          {/* Cụm nút bấm điều hướng Next.js */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/blog"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/20 text-sm"
            >
              Khám phá bài viết →
            </Link>
            <Link
              href="/about"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-6 py-3.5 rounded-xl transition text-sm"
            >
              Về BlogGen
            </Link>
          </div>
        </div>

        {/* Cột phải: HIỂN THỊ HÌNH ẢNH THẬT (Chiếm 5/12 cột trên màn hình lớn) */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="relative w-full h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src="/images/hero-laptop.png" // Đảm bảo bạn đã bỏ file ảnh này vào thư mục public/images/
              alt="Minh họa Laptop BlogGen"
              fill
              className="object-cover"
              priority // Tải ảnh ngay lập tức để tối ưu chỉ số LCP cho SEO
            />
          </div>
        </div>

      </div>
    </div>
  );
}
