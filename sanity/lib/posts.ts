import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Đường dẫn trỏ tới thư mục chứa các tệp markdown bài viết
const postsDirectory = path.join(process.cwd(), 'posts');

// Định nghĩa kiểu dữ liệu (Interface) cho bài viết để TypeScript kiểm soát tốt hơn
interface PostData {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  featured?: boolean;
}

/**
 * 1. Lấy tất cả bài viết từ thư mục và sắp xếp theo ngày mới nhất
 */
export function getSortedPostsData(): PostData[] {
  // Kiểm tra nếu thư mục không tồn tại thì trả về mảng rỗng để tránh crash ứng dụng
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md')) // Chỉ xử lý các tệp có đuôi .md
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, ''); // Lấy tên file làm ID bài viết

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Tách phần metadata (front-matter) ở đầu file markdown
      const matterResult = matter(fileContents);

      return {
        id,
        ...(matterResult.data as Omit<PostData, 'id'>),
      };
    });

  // Sắp xếp bài viết giảm dần theo thời gian (Mới nhất lên đầu)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * 2. Lấy danh sách bài viết nổi bật (Có gắn cờ featured: true)
 * Nếu không tìm thấy bài viết nào, tự động lấy 4 bài mới nhất để lấp đầy giao diện.
 */
export function getFeaturedPosts(): PostData[] {
  const allPosts = getSortedPostsData();
  const featured = allPosts.filter((post) => post.featured === true);
  
  // Trả về danh sách bài nổi bật hoặc cắt lấy 4 bài mới nhất làm dự phòng
  return featured.length > 0 ? featured : allPosts.slice(0, 4);
}
