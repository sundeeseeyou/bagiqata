import { Qata } from "@/app/lib/types";
import Image from "next/image";

interface QataCardProps {
  qata: Qata;
}

export default function QataCard({ qata }: QataCardProps) {
  return (
    <article className="card bg-base-100 shadow-lg border-xs border-white border-2 hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto">
      <div className="card-body">
        {/* Author Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="avatar placeholder">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary">
              {qata.author.avatar ? (
                <Image
                  src={qata.author.avatar}
                  alt={qata.author.name}
                  width={48}
                  height={48}
                  className="object-cover rounded-full"
                />
              ) : (
                <span className="text-lg text-base-content">
                  {qata.author.name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-base-content">
              {qata.author.name}
            </h3>
            <p className="text-sm text-base-content/60">
              @{qata.author.username}
            </p>
          </div>
          <time className="text-sm text-base-content/40">
            {new Date(qata.timestamp).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>

        {/* Quote Content */}
        <div className="mb-4">
          <blockquote className="text-lg text-base-content leading-relaxed italic">
            "{qata.content}"
          </blockquote>
        </div>

        {/* Optional Image */}
        {qata.imageUrl && (
          <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
            <Image
              src={qata.imageUrl}
              alt="Quote illustration"
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Interaction Buttons */}
        <div className="card-actions justify-start pt-4 border-t border-base-300">
          {/* Love Button */}
          <button className="btn btn-ghost btn-sm gap-2 hover:text-error">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>{qata.loves}</span>
          </button>

          {/* Quote Button */}
          <button className="btn btn-ghost btn-sm gap-2 hover:text-info">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>{qata.quotes}</span>
          </button>

          {/* Share Button */}
          <button className="btn btn-ghost btn-sm gap-2 hover:text-success">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <span>{qata.shares}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
