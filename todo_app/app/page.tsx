"use client";
import React from "react";
import Navbar from "@/components/MyNavbar";
import AddAndDisplayTodo from "@/components/AddAndDisplayTodo";
export default function Home() {
  return (
    <div id="main">
      <div className="container-01">
        <Navbar />
        <AddAndDisplayTodo />
      </div>
    </div>
  );
}
