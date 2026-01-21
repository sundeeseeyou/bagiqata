import { Qata } from "@/app/lib/types";
import QataCard from "./QataCard";

interface QataFeedListProps {
  qatas: Qata[];
}

export default function QataFeedList({ qatas }: QataFeedListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 py-6">
      {qatas.length > 0 ? (
        qatas.map((qata) => <QataCard key={qata.id} qata={qata} />)
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-base-content/60 text-lg">
            Belum ada quote yang dibagikan
          </p>
        </div>
      )}
    </div>
  );
}
