"use client"
import Link from "next/link";
import { House, Users, Calendar, Wrench, LogOut, LogIn } from "lucide-react";
import { useEffect, useState } from "react"

export default function NavMenu() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      window.localStorage.getItem("SIGNED_IN")
    }, [])

    
    const handleLogin = () => {
      isLoggedIn ? setIsLoggedIn(!isLoggedIn) : setIsLoggedIn(!isLoggedIn)
      window.localStorage.setItem("SIGNED_IN", isLoggedIn.toString())
    };
    
    const handleLogout = () => {
      isLoggedIn ? setIsLoggedIn(!isLoggedIn) : setIsLoggedIn(!isLoggedIn)
      window.localStorage.removeItem("SIGNED_IN")
    };
    
  return (
    <>
      {isLoggedIn ? (
        <div className="flex flex-col bg-slate-700 justify-center gap-12 p-6 h-96">
          <Link href="/tenants"><button><Users /></button></Link>
          <Link href="/properties"><button><House /></button></Link>
          <Link href="/calendar"><button><Calendar /></button></Link>
          <Link href="/manage"><button><Wrench /></button></Link>
          <Link href="/"><button onClick={handleLogout}><LogOut /></button></Link>
        </div>
      ) : (
        <div className="flex flex-col bg-slate-700 justify-center gap-12 p-6 h-96">
          <Link href=""><button onClick={handleLogin}><LogOut /></button></Link>
        </div>
      )}
    </>
  );
}
