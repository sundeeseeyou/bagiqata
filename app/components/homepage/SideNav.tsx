import Link from "next/link";
import { sidebarNav } from "@/app/config/sidebar-nav";

export default function SideNav() {
  return (
    <aside className="w-64 h-[calc(100vh-4rem)] sticky top-16 hidden lg:block border-r border-1 border-gray-800">
      <nav className="p-2">
        <ul className="menu menu-md gap-4 rounded-box">
          {/* Quotes (Home) */}
          {sidebarNav.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="flex justify-start px-6 py-4 hover:bg-gray-900 rounded-full  active:bg-primary active:text-primary-content hover:bg-base-200 text-xl hover:"
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
