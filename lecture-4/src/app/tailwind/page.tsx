import React from "react";

export default function TailwindPage() {
  return (
    <div className="font-serif h-[100vh] bg-emerald-100">
      <h1 className="text-4xl font-bold text-red-500">TailwindPage</h1>
      <p> Tailwind is a pre processor</p>
      <p className="text-[14px] italic text-[#983849]">
        Custom size in tailwind can be added by text-[14px]
        <br />
        For custom styling we add -[customvalue]
      </p>
      <div className="h-12 w-12 bg-slate-800 rounded-full"></div>
    </div>
  );
}
