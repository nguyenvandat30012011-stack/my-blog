'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    // Lấy dữ liệu từ các ô input thông qua form
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage('Cảm ơn bạn đã gửi tin nhắn! Tôi sẽ phản hồi sớm nhất. 🎉');
        (e.target as HTMLFormElement).reset(); // Reset lại form sau khi gửi thành công
      } else {
        setStatusMessage(data.message || 'Có lỗi xảy ra, vui lòng thử lại.');
      }
    } catch (error) {
      setStatusMessage('Không thể kết nối đến máy chủ.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Liên hệ với tôi</h1>
        <p className="text-gray-500 text-sm mb-8">
          Bạn có thắc mắc, góp ý hoặc muốn hợp tác? Hãy điền thông tin vào mẫu dưới đây nhé!
        </p>

        {statusMessage && (
          <div className="mb-6 p-4 rounded-xl bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
            {statusMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Cột trái: Form gửi tin nhắn */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Họ và tên</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Nhập tên của bạn..." 
                className="w-full bg-gray-50 border border-gray-300 text-slate-950 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email của bạn</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="name@example.com" 
                className="w-full bg-gray-50 border border-gray-300 text-slate-950 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Nội dung tin nhắn</label>
              <textarea 
                name="message"
                rows={4}
                required
                placeholder="Nội dung bạn muốn trao đổi..." 
                className="w-full bg-gray-50 border border-gray-300 text-slate-950 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition text-sm shadow-md shadow-blue-500/20 disabled:opacity-50"
            >
              {loading ? 'Đang gửi...' : 'Gửi tin nhắn 🚀'}
            </button>
          </form>

          {/* Cột phải: Thông tin liên hệ nhanh */}
          <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 text-base">Thông tin trực tiếp</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Bạn cũng có thể liên hệ nhanh với tôi qua các kênh mạng xã hội hoặc email cá nhân dưới đây:
              </p>
              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <span className="text-base">📧</span>
                  <span className="font-medium">contact@bloggen.vn</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-base">📍</span>
                  <span>Đà Nẵng, Việt Nam</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-base">💬</span>
                  <span>Zalo / Telegram: 0123 456 789</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 text-xs text-gray-400">
              Phản hồi thường trong vòng 24 giờ làm việc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}