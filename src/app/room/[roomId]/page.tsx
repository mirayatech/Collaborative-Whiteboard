import { CollaborativeApp } from "@/components/CollaborativeApp";
import { Room } from "@/components/Room";
import { useParams } from "next/navigation";

export default function RoomPage() {
  const params = useParams();

  return (
    <Room roomId={params.roomId as string}>
      <CollaborativeApp />
    </Room>
  );
}
