"use client";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Image from "next/image";
import Alien from "../public/chowa.svg"

export default function App() {
  return (
    <div className="overscroll-none">
      <Header />
      <div className="">
        <NavMenu />
        <Image src={Alien} alt="this is an alien" className="text-red-700 "/>
      </div>
    </div>
  );
}
