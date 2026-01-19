import NoteCard from "./NoteCard";

interface Note {
  id: number;
  content: string;
  author: {
    name: string;
    username: string;
    avatar?: string;
  };
  timestamp: Date;
  loves: number;
  quotes: number;
  shares: number;
  imageUrl?: string;
}

interface NoteFeedProps {
  notes: Note[];
}

export default function NoteFeed({ notes }: NoteFeedProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {notes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No notes yet. Be the first to share something!
          </p>
        </div>
      ) : (
        notes.map((note) => <NoteCard key={note.id} {...note} />)
      )}
    </div>
  );
}
