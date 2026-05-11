import QataFeedList from "@/components/single-card/QataFeedList";
import { mockQatas } from "@/lib/_mockQatas";

export default function ContentPage() {
  return (
    <main className="w-[90svw]flex flex-col items-center justify-start grow">
      <div className="mx-auto px-8">
        <QataFeedList qatas={mockQatas} />
      </div>
    </main>
  );
}
