import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({children}) {
  return (
    <>
      <header className="max-w-screen-xl  mx-auto">
        <Navbar/>
      </header>
      <main className="max-w-screen-xl  mx-auto sm:px-6 px-4 ">
        {children}
      </main>
      <Footer/>
    </>
  );
}
