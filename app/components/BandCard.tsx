import type { Band } from "@/app/types/types";
import Image from "next/image";

// ประเภท Props ของ component
interface BandCardProps {
  band: Band;
  isFollowed?: boolean;
  onFollow?: () => void;
  likes?: number;
  onLike?: () => void;
}

export default function BandCard({
  band,
  isFollowed = false,
  onFollow,
  likes = 0,
  onLike,
}: BandCardProps) {
  // คำนวณจำนวนสมาชิก จากข้อมูลที่มี (ไม่เพิ่ม State ใหม่)
  const memberCount = band.members.length;

  return (
    <div className="border border-gray-700 rounded-lg p-6 bg-gray-900 text-white mb-8 hover:shadow-lg transition-shadow">
      {/* Logo วง */}
      <div className="mb-6">
        <div className="relative w-32 h-32 mx-auto">
          <Image
            src={band.logo}
            alt={band.name}
            fill
            className="object-contain"
            sizes="(max-width: 128px) 100vw"
          />
        </div>
      </div>

      {/* ข้อมูลวง */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2">{band.name}</h2>
        <p className="text-gray-400">ก่อตั้ง: {band.formedYear}</p>
        <p className="text-gray-500 text-sm">👥 สมาชิก: {memberCount} คน</p>
      </div>

      {/* คำอธิบายวง */}
      <p className="text-gray-300 mb-6 text-center">{band.description}</p>

      {/* ปุ่มติดตามและ Like */}
      {onFollow && onLike && (
        <div className="flex gap-4 mb-6 justify-center">
          {/* ปุ่มติดตาม/เลิกติดตาม */}
          <button
            onClick={onFollow}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              isFollowed
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-purple-500 hover:bg-purple-600 text-white"
            }`}
          >
            {isFollowed ? " เลิกติดตาม" : " ติดตาม"}
          </button>

          {/* ปุ่ม Like พร้อมจำนวน */}
          <button
            onClick={onLike}
            className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-medium transition-colors"
          >
             Like ({likes})
          </button>
        </div>
      )}

      {/* สตัตส์ติดตาม */}
      {isFollowed && (
        <div className="text-center mb-4 text-sm text-purple-300">
          ✓ คุณกำลังติดตามวงนี้
        </div>
      )}

      {/* หัวข้อสมาชิก */}
      <h3 className="text-2xl font-semibold mb-4">สมาชิก</h3>

      {/* กริดสมาชิก */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {band.members.map((member) => (
          <div key={member.id} className="text-center">
            {/* รูปภาพสมาชิก */}
            <div className="relative w-full aspect-square mb-2 bg-gray-800 rounded-lg overflow-hidden hover:opacity-80 transition-opacity">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            {/* ชื่อและบทบาท */}
            <p className="font-semibold text-sm">{member.name}</p>
            {member.role && (
              <p className="text-xs text-gray-400">{member.role}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
