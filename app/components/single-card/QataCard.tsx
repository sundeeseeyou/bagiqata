import { Qata } from "@/app/lib/types";
import Image from "next/image";
import {
  HiDotsVertical,
  HiHeart,
  HiChat,
  HiShare,
  HiBookmark,
} from "react-icons/hi";

interface QataCardProps {
  qata: Qata;
}

export default function QataCard({ qata }: QataCardProps) {
  return (
    <article className="card border-1 border-gray-800 shadow-white shadow-xs rounded-xl aspect-[3/4]">
      {/* Top Section: Header + Content */}
      <div className="flex-1 flex flex-col min-h-0 relative">
        {/* Header: Author + Menu */}
        <div className="flex justify-between items-start p-4 z-10 w-full bg-gradient-to-b from-base-100/50 to-transparent">
          <div className="flex items-center gap-2">
            <div className="avatar placeholder">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-content flex items-center justify-center text-xs">
                {qata.author.avatar ? (
                  <Image
                    src={qata.author.avatar}
                    alt={qata.author.name}
                    width={32}
                    height={32}
                    className="object-cover bg-white rounded-full"
                  />
                ) : (
                  <span>{qata.author.name.charAt(0).toUpperCase()}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-base-content/60">
                @{qata.author.username}
              </span>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="p-1 text-base-content/70 hover:text-primary transition-colors cursor-pointer"
            >
              <HiDotsVertical className="w-5 h-5" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[20] menu p-2 shadow bg-base-100 rounded-box w-52 text-sm border border-base-200"
            >
              <li>
                <a>Report</a>
              </li>
              {/* distinct separation for owner actions */}
              <div className="divider my-0"></div>
              <li>
                <a>Edit</a>
              </li>
              <li>
                <a className="text-error">Remove</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Box */}
        <div className="flex-1 px-4 pb-2 w-full overflow-hidden flex flex-col justify-center items-center text-center">
          {qata.imageUrl ? (
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={qata.imageUrl}
                alt="Content"
                fill
                className="object-cover"
              />
              {qata.content && (
                <div className="absolute inset-x-0 bottom-0 bg-black/50 p-2 text-white text-sm truncate">
                  {qata.content}
                </div>
              )}
            </div>
          ) : (
            <blockquote className="text-base font-medium leading-relaxed italic overflow-y-auto max-h-full no-scrollbar">
              "{qata.content}"
            </blockquote>
          )}
        </div>
      </div>

      {/* Bottom Area: Stats & Interactions */}
      <div className="p-3 border-t border-gray-800 bg-base-50/50 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-base-content hover:text-error transition-colors">
            <HiHeart className="w-6 h-6" />
            <span className="text-xs font-semibold">{qata.loves}</span>
          </button>
          <button className="flex items-center gap-1 text-base-content hover:text-info transition-colors">
            <HiChat className="w-6 h-6" />
            <span className="text-xs font-semibold">{qata.quotes}</span>
          </button>
          <button className="flex items-center gap-1 text-base-content hover:text-success transition-colors">
            <HiShare className="w-6 h-6" />
            <span className="text-xs font-semibold">{qata.shares}</span>
          </button>
        </div>

        <button className="text-base-content/70 hover:text-primary transition-colors">
          <HiBookmark className="w-6 h-6" />
        </button>
      </div>
    </article>
  );
}
