import React from "react";

import { CollaborativeApp } from "@/components/CollaborativeApp";
import { Room } from "@/components/Room";

interface Props {
  params: Promise<{ roomId: string }>;
}

export default async function RoomPage({ params }: Props) {
  return (
    <Room roomId={(await params).roomId}>
      <CollaborativeApp />
    </Room>
  );
}
