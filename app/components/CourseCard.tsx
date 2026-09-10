import type { Course } from "@/app/types/course";

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  return (
    <div
      className={`p-6 rounded-lg border-2 shadow-sm transition-all hover:shadow-md ${
        course.isOpen
          ? "bg-white border-green-300 hover:border-green-400"
          : "bg-gray-50 border-gray-300 hover:border-gray-400"
      }`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {index + 1}. {course.title}
          </h2>
          <p className="text-gray-600 mt-2">รหัสวิชา: {course.code}</p>
          <p className="text-gray-600">หน่วยกิต: {course.credits}</p>
        </div>
        <span
          className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap ${
            course.isOpen
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {course.isOpen ? "✓ เปิด" : "✗ ปิด"}
        </span>
      </div>
    </div>
  );
}
