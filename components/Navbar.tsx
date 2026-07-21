import Link from 'next/link';
import { Search, Moon, User } from 'lucide-react';
import CategoryDropdown from './CategoryDropdown'; 
// ĐÃ KÍCH HOẠT: Loại bỏ phần chữ ghi chú phía sau để Next.js nhận diện file
import ResourceDropdown from './ResourceDropdown'; 

export default function Navbar() {
  return (
    <>
      {/* Top Bar Nhỏ phía trên */}
      <div className="bg-slate-900 text-gray-300 text-xs py-2 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="bg-red-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">Xu hướng</span>
          <span>Kiếm tiền online</span>
          <span>Digital Marketing</span>
          <span>Phát triển bản thân</span>
          <span>Công nghệ</span>
        </div>
        <div className="flex items-center space-x-3">
          <span>🌐</span>
          <span>📺</span>
          <span>🎵</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-8">
          {/* Logo trang Web */}
          <Link href="/" className="text-2xl font-black text-blue-900 tracking-wider">
            BlogGen
          </Link>
          
          {/* Khu vực menu chính */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link href="/" className="hover:text-blue-600 transition py-2">Trang chủ</Link>
            
            {/* Menu 1: Danh mục xổ xuống (Đã hoạt động) */}
            <CategoryDropdown /> 
            
            <Link href="/blog" className="hover:text-blue-600 transition py-2">Blog</Link>
            <Link href="/about" className="hover:text-blue-600 transition py-2">Về tôi</Link>
            
            {/* Menu 2: Tài nguyên xổ xuống (Đã hoạt động nhờ import ở dòng 5) */}
            <ResourceDropdown /> 

            <Link href="/contact" className="hover:text-blue-600 transition py-2">Liên hệ</Link>
          </nav>
        </div>

        {/* Thanh tìm kiếm và các nút chức năng */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden lg:block">
            <input 
              type="text" 
              placeholder="Tìm kiếm bài viết..." 
              className="bg-gray-100 text-sm rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
          </div>
          
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Moon className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-blue-700 transition flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>Đăng nhập</span>
          </button>
        </div>
      </header>
    </>
  );
}
