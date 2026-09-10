"use client";

import { useState, useMemo } from "react";
import type { Course } from "@/app/types/course";
import CourseCard from "@/app/components/CourseCard";

interface CourseExplorerProps {
  courses: Course[];
}

export default function CourseExplorer({ courses }: CourseExplorerProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState<boolean | null>(null);

  // ค้นหา filter courses
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // ค้นหาจากชื่อ รหัสวิชา
      const matchSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.code.includes(searchTerm);

      // filter สถานะ (เปิด/ปิด)
      if (filterOpen === null) return matchSearch;
      return matchSearch && course.isOpen === filterOpen;
    });
  }, [courses, searchTerm, filterOpen]);

  const [favoriteIds, setFavoriteIds] = useState<number[]>([]); 
 
    function handleToggleFavorite(id: number) { 
        setFavoriteIds((prevIds) => 
         prevIds.includes(id) 
      ? prevIds.filter((favoriteId) => favoriteId !== id) 
      : [...prevIds, id] 
  ); 
} 

  return (
    <div className="space-y-6">
      {/* ช่องค้นหา */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <input
          type="text"
          placeholder="ค้นหาชื่อวิชา หรือ รหัสวิชา..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />
      </div>

      {/* ฟิลเตอร์สถานะ */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilterOpen(null)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filterOpen === null
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          ทั้งหมด
        </button>
        <button
          onClick={() => setFilterOpen(true)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filterOpen === true
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          เปิดลงทะเบียน
        </button>
        <button
          onClick={() => setFilterOpen(false)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filterOpen === false
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          ปิดลงทะเบียน
        </button>
      </div>

      {/* แสดงจำนวนผลลัพธ์ */}
      <div className="text-sm text-gray-600">
        พบ {filteredCourses.length} วิชา จากทั้งหมด {courses.length} วิชา
      </div>

      {/* แสดงรายวิชา */}
      {filteredCourses.length > 0 ? (
        <div className="grid gap-4">
          {filteredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">ไม่พบรายวิชาที่ค้นหา</p>
          <p className="text-sm">ลองเปลี่ยนคำค้นหาของคุณ</p>
        </div>
      )}
    </div>
  );
}
