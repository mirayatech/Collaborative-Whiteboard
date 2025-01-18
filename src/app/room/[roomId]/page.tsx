import { CollaborativeApp } from "@/components/CollaborativeApp";
import { Room } from "@/components/Room";

export default function RoomPage({ params }: { params: { roomId: string } }) {
  return (
    <Room roomId={params.roomId}>
      <CollaborativeApp />
    </Room>
  );
}
