import QataFeedList from "@/app/components/single-card/QataFeedList";
import { mockQatas } from "@/app/lib/mockData";

export default function ContentPage() {
  return (
    <main className="min-h-screen">
      <div className="w-full mx-auto px-8">
        <QataFeedList qatas={mockQatas} />
      </div>
    </main>
  );
}
