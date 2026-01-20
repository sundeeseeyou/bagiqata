import { Qata } from "@/app/lib/types";
import QataCard from "./QataCard";

interface QataFeedListProps {
  qatas: Qata[];
}

export default function QataFeedList({ qatas }: QataFeedListProps) {
  return (
    <div className="space-y-6 py-6">
      {qatas.length > 0 ? (
        qatas.map((qata) => <QataCard key={qata.id} qata={qata} />)
      ) : (
        <div className="text-center py-12">
          <p className="text-base-content/60 text-lg">
            Belum ada quote yang dibagikan
          </p>
        </div>
      )}
    </div>
  );
}
