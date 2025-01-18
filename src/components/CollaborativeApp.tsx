"use client";

import { useOthers } from "@liveblocks/react/suspense";
import { Canvas } from "./canvas";

export function CollaborativeApp() {
  const others = useOthers();
  const userCount = others.length;

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-sm z-10">
        {userCount} other user(s) online
      </div>
      <Canvas />
    </div>
  );
}
