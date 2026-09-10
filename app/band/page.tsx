"use client";

import { bands } from "@/app/data/bands";
import BandExplorer from "@/app/components/BandExplorer";

export default function BandPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* หัวข้อหน้า */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4"> วงดนตรีที่ชื่นชอบ</h1>
          <p className="text-gray-400">ค้นหา ติดตาม และให้คะแนน Like ให้กับวงดนตรีที่คุณชื่นชอบ</p>
        </div>

        {/* ใช้ BandExplorer component เพื่อจัดการค้นหา ฟิลเตอร์ ติดตาม และ Like */}
        <BandExplorer bands={bands} />
      </div>
    </div>
  );
}
