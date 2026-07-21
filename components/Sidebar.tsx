export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Widget Tác giả */}
      <div className="bg-white border border-gray-200 p-6 rounded-2xl">
        <h3 className="text-sm font-bold text-slate-900 mb-4">Về tác giả</h3>
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-12 h-12 bg-slate-300 rounded-full shrink-0"></div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-1">
              Nguyễn Đạt <span className="text-blue-600 text-xs">✔</span>
            </h4>
            <p className="text-xs text-gray-500">Chia sẻ kiến thức về kiếm tiền online, công nghệ và phát triển bản thân.</p>
          </div>
        </div>
      </div>

      {/* Widget Đăng ký nhận tin */}
      <div className="bg-white border border-gray-200 p-6 rounded-2xl">
        <h3 className="text-sm font-bold text-slate-900 mb-2">Nhận bài viết mới qua email</h3>
        <p className="text-xs text-gray-500 mb-4">Đăng ký để nhận những bài viết mới nhất từ BlogGen.</p>
        <input 
          type="email" 
          placeholder="Nhập email của bạn..." 
          className="w-full bg-gray-50 border border-gray-200 text-xs rounded-xl px-3 py-2.5 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 rounded-xl transition">
          Đăng ký ngay →
        </button>
      </div>

      {/* Widget Bài viết phổ biến */}
      <div className="bg-white border border-gray-200 p-6 rounded-2xl">
        <h3 className="text-sm font-bold text-slate-900 mb-4">Bài viết phổ biến</h3>
        <div className="space-y-4 text-xs">
          <div className="flex items-start space-x-3">
            <span className="w-5 h-5 bg-blue-50 text-blue-600 rounded-full font-bold flex items-center justify-center shrink-0">1</span>
            <p className="font-medium text-slate-800 hover:text-blue-600 cursor-pointer line-clamp-2">
              10 cách kiếm tiền online hiệu quả cho học sinh, sinh viên
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="w-5 h-5 bg-blue-50 text-blue-600 rounded-full font-bold flex items-center justify-center shrink-0">2</span>
            <p className="font-medium text-slate-800 hover:text-blue-600 cursor-pointer line-clamp-2">
              7 thói quen giúp bạn thành công mỗi ngày
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="w-5 h-5 bg-blue-50 text-blue-600 rounded-full font-bold flex items-center justify-center shrink-0">3</span>
            <p className="font-medium text-slate-800 hover:text-blue-600 cursor-pointer line-clamp-2">
              Notion là gì? Hướng dẫn sử dụng Notion từ A đến Z
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}