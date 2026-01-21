import Link from "next/link";
import Image from "next/image";
import logo from "@/public/official-logo.png";
import { headerNav } from "@/app/config/navigation";
import AvatarImage from "./AvatarImage";

export default function HeaderPrimary() {
  return (
    <>
      <header className="flex items-center justify-between h-16 relative w-full bg-black z-20 shadow-[0px_4px_25px_0px_#0000000D] transition-all border-b-1 border-gray-800 sticky top-0">
        <div className="flex flex-row justify-between lg:px-4 items-center py-4 w-full mx-auto">
          <Link href="/">
            <div className="flex flex-row items-center">
              <div className="relative w-12 aspect-[3/2]">
                <Image
                  src={logo}
                  alt="icon logo"
                  className="object-contain dark:brightness-10000"
                  priority
                  fill
                />
              </div>
              <span className="text-2xl font-bold">bagiqata</span>
            </div>
          </Link>
          <nav className="hidden sm:block">
            <ul className="flex flex-row gap-4">
              {headerNav.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-white hover:opacity-75"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>{" "}
          <AvatarImage />
        </div>
      </header>
    </>
  );
}
