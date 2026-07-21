"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Tự động đóng menu nếu người dùng click ra ngoài khu vực menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Nút bấm kích hoạt menu danh mục */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-blue-600 transition py-2 font-medium flex items-center gap-1 focus:outline-none"
      >
        Danh mục
        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* ĐOẠN CODE THỨ 2 CỦA BẠN ĐƯỢC TÍCH HỢP Ở ĐÂY VỚI TRẠNG THÁI ẨN / HIỆN */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <Link 
            href="/category/cong-nghe" 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-xl transition text-sm font-medium text-slate-700"
          >
            💻 Công nghệ
          </Link>
          <Link 
            href="/category/digital-marketing" 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-xl transition text-sm font-medium text-slate-700"
          >
            📈 Digital Marketing
          </Link>
          <Link 
            href="/category/phat-trien-ban-than" 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-xl transition text-sm font-medium text-slate-700"
          >
            🌱 Phát triển bản thân
          </Link>
        </div>
      )}
    </div>
  );
}
