import { bands } from "@/app/data/bands";
import BandCard from "@/app/components/BandCard";

export default function BandPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">วงดนตรีที่ชื่นชอบ</h1>
        <p className="text-gray-400 mb-12">แสดงข้อมูลวงดนตรีและสมาชิกของพวกเขา</p>

        {bands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>
    </div>
  );
}