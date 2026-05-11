import Link from "next/link";
import { sidebarNav } from "@/utils/sidebar-nav";

export default function SideNav() {
  return (
    <aside className="sticky top-16 self-start w-64 h-[calc(100vh-4rem)] hidden lg:flex flex-col border-r border-gray-800 overflow-y-auto">
      <nav className="p-2">
        <ul className="menu menu-md gap-4 rounded-box">
          {/* Quotes (Home) */}
          {sidebarNav.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="flex justify-start px-6 py-4 hover:bg-base-200 rounded-full  active:bg-primary active:text-primary-content text-xl hover:"
              >
                <item.icons />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
