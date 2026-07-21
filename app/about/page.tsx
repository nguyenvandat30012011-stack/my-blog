import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-300 font-sans selection:bg-blue-600 selection:text-white pb-20">
      
      {/* 1. HERO SECTION (Phần trên cùng: Chữ bên trái, hình setup máy tính bên phải) */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-16">
        <div className="relative bg-gradient-to-r from-[#0b101d] to-[#0d1527] border border-slate-800/80 rounded-3xl p-8 md:p-14 overflow-hidden shadow-2xl">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Cột trái: Nội dung giới thiệu */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/50 text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-medium">
                <span>Xin chào!</span> 🚀
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                Về <span className="text-blue-500">tôi</span>
              </h1>
              
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                Xin chào! Chào mừng bạn đến với blog cá nhân của tôi. Nơi đây tôi chia sẻ những kiến thức, kinh nghiệm và hành trình học tập, làm việc trong lĩnh vực công nghệ và phát triển bản thân.
              </p>
              
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Nếu bạn có chung niềm đam mê hoặc muốn thảo luận về các chủ đề trên blog, đừng ngần ngại kết nối với tôi nhé! Tôi luôn sẵn lòng lắng nghe và trao đổi.
              </p>
              
              {/* Nút bấm */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="bg-white hover:bg-slate-200 text-slate-950 font-semibold px-6 py-3 rounded-xl transition shadow-lg flex items-center gap-2.5 text-sm"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.545 1.378.203 2.397.101 2.65.64.7 1.027 1.595 1.027 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.415-.012 2.743 0 .267.18.577.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  GitHub cá nhân
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent hover:bg-slate-800/60 text-white border border-slate-700 font-semibold px-6 py-3 rounded-xl transition flex items-center gap-2.5 text-sm"
                >
                  <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  Liên hệ qua Email
                </Link>
              </div>
            </div>

            {/* Cột phải: Hình ảnh setup máy tính công nghệ */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg bg-[#050811] border border-slate-800 rounded-2xl p-4 shadow-2xl flex items-center justify-center">
                {/* Bạn có thể thay thế bằng thẻ <img src="/images/setup.png" alt="Setup" className="rounded-xl w-full object-cover" /> nếu có ảnh thật */}
                <div className="w-full h-64 md:h-72 rounded-xl bg-gradient-to-tr from-slate-900 via-blue-950/40 to-slate-900 flex flex-col items-center justify-center border border-slate-800/60 text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 shadow-inner">
                    <span className="text-2xl font-mono">&lt;/&gt;</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Developer Workspace</h3>
                  <p className="text-slate-400 text-xs">Clean Code • Modern Tech Stack • Passionate</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (Các khối thống kê: 100+ Bài viết, 10K+ Người đọc...) */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="bg-[#0b101d] border border-slate-800/80 rounded-2xl p-6 flex items-start gap-4 hover:border-slate-700 transition">
            <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">100+</h4>
              <p className="text-sm font-semibold text-slate-200 mt-0.5">Bài viết</p>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">Chia sẻ kiến thức và kinh nghiệm thực tế qua các bài viết chi tiết.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0b101d] border border-slate-800/80 rounded-2xl p-6 flex items-start gap-4 hover:border-slate-700 transition">
            <div className="p-3 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">10K+</h4>
              <p className="text-sm font-semibold text-slate-200 mt-0.5">Người đọc</p>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">Cộng đồng đang ngày càng phát triển và lớn mạnh.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0b101d] border border-slate-800/80 rounded-2xl p-6 flex items-start gap-4 hover:border-slate-700 transition">
            <div className="p-3 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">3+</h4>
              <p className="text-sm font-semibold text-slate-200 mt-0.5">Năm kinh nghiệm</p>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">Hành trình học hỏi và làm việc trong lĩnh vực công nghệ.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0b101d] border border-slate-800/80 rounded-2xl p-6 flex items-start gap-4 hover:border-slate-700 transition">
            <div className="p-3 rounded-xl bg-amber-600/10 border border-amber-500/20 text-amber-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mt-1">Đam mê</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">Luôn học hỏi, chia sẻ và giúp đỡ cộng đồng phát triển.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. NHỮNG CHỦ ĐỀ TÔI CHIA SẺ */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-2">TÔI TẬP TRUNG VÀO</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Những chủ đề tôi chia sẻ</h2>
        
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="bg-[#0b101d] hover:bg-slate-800 border border-slate-800 text-slate-300 px-5 py-2.5 rounded-full text-sm font-medium transition cursor-pointer flex items-center gap-2">
            💻 Công nghệ
          </span>
          <span className="bg-[#0b101d] hover:bg-slate-800 border border-slate-800 text-slate-300 px-5 py-2.5 rounded-full text-sm font-medium transition cursor-pointer flex items-center gap-2">
            🌐 Phát triển Web
          </span>
          <span className="bg-[#0b101d] hover:bg-slate-800 border border-slate-800 text-slate-300 px-5 py-2.5 rounded-full text-sm font-medium transition cursor-pointer flex items-center gap-2">
            📈 Kiếm tiền Online
          </span>
          <span className="bg-[#0b101d] hover:bg-slate-800 border border-slate-800 text-slate-300 px-5 py-2.5 rounded-full text-sm font-medium transition cursor-pointer flex items-center gap-2">
            🧠 Phát triển bản thân
          </span>
          <span className="bg-[#0b101d] hover:bg-slate-800 border border-slate-800 text-slate-300 px-5 py-2.5 rounded-full text-sm font-medium transition cursor-pointer flex items-center gap-2">
            ⚙️ Công cụ &amp; Tips
          </span>
        </div>
      </section>

      {/* 4. KẾT NỐI VỚI TÔI (Footer Card) */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-gradient-to-r from-[#0b101d] via-[#0d1527] to-[#0b101d] border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round5" strokeWidth={1.8} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Kết nối với tôi</h3>
              <p className="text-sm text-slate-400 mt-0.5">Hãy cùng nhau học hỏi, chia sẻ và phát triển!</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="https://github.com" target="_blank" className="w-10 h-10 rounded-xl bg-[#07090e] border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.545 1.378.203 2.397.101 2.65.64.7 1.027 1.595 1.027 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.415-.012 2.743 0 .267.18.577.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="w-10 h-10 rounded-xl bg-[#07090e] border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="w-10 h-10 rounded-xl bg-[#07090e] border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.42c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z"/></svg>
            </Link>
            <Link href="mailto:email@gmail.com" className="w-10 h-10 rounded-xl bg-[#07090e] border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}