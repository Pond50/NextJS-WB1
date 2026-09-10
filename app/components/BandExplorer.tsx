"use client";

import { useState, useMemo } from "react";
import type { Band } from "@/app/types/types";
import BandCard from "@/app/components/BandCard";

// ประเภท Props ของ component
interface BandExplorerProps {
  bands: Band[];
}

export default function BandExplorer({ bands }: BandExplorerProps) {
  // State สำหรับเก็บคำค้นหา - อัปเดตทันทีขณะพิมพ์
  const [searchTerm, setSearchTerm] = useState("");

  // State สำหรับเก็บ ID วงที่ติดตาม
  const [followedBands, setFollowedBands] = useState<string[]>([]);

  // State สำหรับเก็บจำนวน Like ของแต่ละวง
  const [bandLikes, setBandLikes] = useState<Record<string, number>>({});

  // State สำหรับการเรียงลำดับ ("name" = ชื่อวง, "year" = ปีที่ก่อตั้ง)
  const [sortBy, setSortBy] = useState<"name" | "year">("name");

  // ฟังก์ชันสลับสถานะติดตาม
  const handleToggleFollow = (bandId: string) => {
    setFollowedBands((prev) =>
      prev.includes(bandId)
        ? prev.filter((id) => id !== bandId)
        : [...prev, bandId]
    );
  };

  // ฟังก์ชันเพิ่ม Like
  const handleLike = (bandId: string) => {
    setBandLikes((prev) => ({
      ...prev,
      [bandId]: (prev[bandId] || 0) + 1,
    }));
  };

  // ฟังก์ชันล้างเงื่อนไขทั้งหมด
  const handleClearAll = () => {
    setSearchTerm("");
    setFollowedBands([]);
    setBandLikes({});
    setSortBy("name");
  };

  // ใช้ useMemo เพื่อกรองและเรียงลำดับผลลัพธ์ (เพิ่มประสิทธิภาพ)
  const filteredAndSortedBands = useMemo(() => {
    // ขั้นตอนที่ 1: กรองจากคำค้นหา (ค้นหาจากชื่อวง)
    let result = bands.filter((band) =>
      band.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // ขั้นตอนที่ 2: เรียงลำดับตามเงื่อนไข
    if (sortBy === "name") {
      result = result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "year") {
      result = result.sort((a, b) => b.formedYear - a.formedYear); // ปีใหม่ก่อน
    }

    return result;
  }, [bands, searchTerm, sortBy]);

  return (
    <div className="space-y-6">
      {/* ช่องค้นหา - Controlled Input */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <input
          type="text"
          placeholder="ค้นหาชื่อวงดนตรี..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
        />
      </div>

      {/* ปุ่มเรียงลำดับ */}
      <div className="flex gap-2">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            sortBy === "name"
              ? "bg-purple-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          เรียงตามชื่อ
        </button>
        <button
          onClick={() => setSortBy("year")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            sortBy === "year"
              ? "bg-purple-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          เรียงตามปี (ใหม่ก่อน)
        </button>

        {/* ปุ่มล้างเงื่อนไข */}
        <button
          onClick={handleClearAll}
          className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors ml-auto"
        >
          ล้างทั้งหมด
        </button>
      </div>

      {/* แสดงจำนวนวงที่ติดตามและสถิติ */}
      <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg border border-blue-200">
        <p> <strong>ติดตามอยู่:</strong> {followedBands.length} วง</p>
        <p> <strong>พบ:</strong> {filteredAndSortedBands.length} วง จากทั้งหมด {bands.length} วง</p>
      </div>

      {/* แสดงรายวิชา */}
      {filteredAndSortedBands.length > 0 ? (
        <div className="space-y-6">
          {filteredAndSortedBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowed={followedBands.includes(band.id)}
              onFollow={() => handleToggleFollow(band.id)}
              likes={bandLikes[band.id] || 0}
              onLike={() => handleLike(band.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-lg text-gray-600 font-semibold"> ไม่พบวงดนตรีที่ค้นหา</p>
          <p className="text-sm text-gray-500 mt-2">ลองเปลี่ยนคำค้นหาของคุณหรือคลิก "ล้างทั้งหมด"</p>
        </div>
      )}
    </div>
  );
}
