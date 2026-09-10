"use client";
import ButtonComponents from "@/app/components/ButtonComponents";
import CounterDemo from "@/app/components/CounterDemo";
import { courses } from "@/app/data/courses";
import CourseExplorer from "@/app/components/CourseExplorer";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">รายวิชา</h1>

        <div className="mb-8">
          <ButtonComponents /><br /><br />
          <CounterDemo />
        </div>

        {/* ส่วนค้นหาและฟิลเตอร์ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">ค้นหารายวิชา</h2>
          <CourseExplorer courses={courses}/>
        </div>
      </div>
    </div>
  );
}