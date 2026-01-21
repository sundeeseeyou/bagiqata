import Image from "next/image";
import { Qata } from "@/app/lib/types";

interface AvatarImageProps {
  qata?: Qata;
  src?: string | null;
  alt?: string;
  name?: string;
}

export default function AvatarImage({
  qata,
  src,
  alt,
  name,
}: AvatarImageProps) {
  const displaySrc = qata?.author.avatar || src;
  const displayName = qata?.author.name || name || "User";
  const displayAlt = qata?.author.name || alt || displayName;

  return (
    <div className="avatar placeholder">
      <div className="w-8 h-8 border-1 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-content flex items-center justify-center text-xs overflow-hidden">
        {displaySrc ? (
          <Image
            src={displaySrc}
            alt={displayAlt}
            width={64}
            height={64}
            className="object-cover w-full h-full bg-white"
          />
        ) : (
          <span>{displayName.charAt(0).toUpperCase()}</span>
        )}
      </div>
    </div>
  );
}
