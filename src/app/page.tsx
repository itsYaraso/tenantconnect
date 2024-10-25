"use client";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";

export default function App() {
  return (
    <div className="overscroll-none">
      <Header />
      <div className="">
        <NavMenu />
      </div>
    </div>
  );
}
