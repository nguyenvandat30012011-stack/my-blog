import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Vui lòng điền đầy đủ thông tin!' },
        { status: 400 }
      );
    }

    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    const filePath = path.join(process.cwd(), 'messages.json');

    let existingMessages = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      existingMessages = JSON.parse(fileData);
    }

    existingMessages.push(newMessage);
    fs.writeFileSync(filePath, JSON.stringify(existingMessages, null, 2), 'utf8');

    return NextResponse.json(
      { success: true, message: 'Gửi tin nhắn thành công!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Đã có lỗi xảy ra ở server.' },
      { status: 500 }
    );
  }
}