import { Settings, Bell, HousePlug } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-slate-700 p-4 flex gap-2">
      <Link href="/">
        <button className="w-3 ">
          <HousePlug />
        </button>
      </Link>
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
