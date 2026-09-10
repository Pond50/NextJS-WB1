"use client";

import { useState } from "react";

export default function CounterDemo() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 ml-2"
    >
      คลิกแล้ว {count} ครั้ง
    </button>
  );
}
