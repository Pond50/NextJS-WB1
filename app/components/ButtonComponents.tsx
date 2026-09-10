"use client";
export default function ButtonComponents(){
    return (
        <button
            type="button"
            onClick={() => console.log("clicked")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
            ปุ่มทดลอง
        </button>
    );
}