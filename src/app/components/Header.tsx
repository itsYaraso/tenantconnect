import { Settings, Bell, HousePlug } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-slate-700 gap-2 flex p-4">
      <Link href="/">
        <button className="gap-2 flex md:hidden">
          <HousePlug />
        </button>
      </Link>
        <button className="hidden md:flex">
          TENANT CONNECT
        </button>
      <div className="gap-2 flex justify-end w-full">
        <button className="border border-slate-800 p-2">
          <Bell />
        </button>
        <button className="border border-slate-800 p-2">
          <Settings />
        </button>
      </div>
    </div>
  );
}
