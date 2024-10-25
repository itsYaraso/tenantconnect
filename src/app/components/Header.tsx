"use client";
import { Settings, Bell, HousePlug, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {

  const handleNightMode = () => {
    isNightMode ? setIsNightMode(!isNightMode) : setIsNightMode(!isNightMode)
  }
  const [isNightMode, setIsNightMode] = useState(true);
  console.log(isNightMode)
  return (
    <div className="bg-slate-700 gap-2 flex p-4">
      <Link href="/">
        <button className="gap-2 flex md:hidden">
          <HousePlug />
        </button>
      </Link>
      <button className="hidden md:flex">TENANT CONNECT</button>
      <div className="gap-2 flex justify-end w-full">
        {isNightMode ? (
          <button onClick={handleNightMode} className="border border-slate-800 p-2">
            <Moon />
          </button>
        ) : (
          <button onClick={handleNightMode} className="border border-slate-800 p-2">
            <Sun />
          </button>
        )}
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
