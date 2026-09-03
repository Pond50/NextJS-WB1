import type {Band} from "/Users/Treethossaphon/Nextjs/next-course-hub/app/types/types.ts";
import Image from "next/image";

export default function BandCard({ band }: { band: Band }) {
  return (
    <div className="border border-gray-700 rounded-lg p-6 bg-gray-900 text-white mb-8">
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

      <h2 className="text-3xl font-bold mb-2 text-center">{band.name}</h2>
      <p className="text-gray-400 mb-4 text-center">ก่อตั้ง: {band.formedYear}</p>
      <p className="text-gray-300 mb-6 text-center">{band.description}</p>

      <h3 className="text-2xl font-semibold mb-4">สมาชิก</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {band.members.map((member) => (
          <div key={member.id} className="text-center">
            {/* รูปภาพสมาชิก - สมมาตร aspect-ratio */}
            <div className="relative w-full aspect-square mb-2 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
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
