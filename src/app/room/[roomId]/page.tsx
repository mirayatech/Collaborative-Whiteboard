import { CollaborativeApp } from "@/components/CollaborativeApp";
import { Room } from "@/components/Room";

interface RoomPageProps {
  params: { roomId: string };
}

export default function RoomPage({ params }: RoomPageProps) {
  return (
    <Room roomId={params.roomId}>
      <CollaborativeApp />
    </Room>
  );
}
