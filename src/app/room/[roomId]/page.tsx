import { CollaborativeApp } from "@/components/CollaborativeApp";
import { Room } from "@/components/Room";

interface PageProps {
  params: {
    roomId: string;
  };
}

export default function RoomPage({ params }: PageProps) {
  return (
    <Room roomId={params.roomId}>
      <CollaborativeApp />
    </Room>
  );
}
