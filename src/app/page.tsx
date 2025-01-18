"use client";

import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";

export default function Home() {
  const router = useRouter();

  const createNewRoom = () => {
    const roomId = nanoid();
    router.push(`/room/${roomId}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-8">Levi Whiteboard</h1>
        <button
          onClick={createNewRoom}
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md hover:bg-zinc-700 transition-colors"
        >
          Create New Whiteboard
        </button>
      </div>
    </div>
  );
}
