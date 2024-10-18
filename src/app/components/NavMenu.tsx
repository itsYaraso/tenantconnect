"use client"
import Link from "next/link";
import { House, Users, Calendar, Wrench, LogOut, LogIn } from "lucide-react";
import { useEffect, useState } from "react"

export default function NavMenu() {
    
  return (
        <div className="flex flex-col bg-slate-700 justify-center gap-12 p-6 h-full">
          <Link href="/tenants"><button><Users /></button></Link>
          <Link href="/properties"><button><House /></button></Link>
          <Link href="/calendar"><button><Calendar /></button></Link>
          <Link href="/manage"><button><Wrench /></button></Link>
          <Link href="/"><button><LogOut /></button></Link>
          </div>
  );
}
