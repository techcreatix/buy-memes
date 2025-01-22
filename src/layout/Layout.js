import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({children}) {
  return (
    <>
      <header className="container mx-auto">
        <Navbar/>
      </header>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  );
}
