import React from "react";

export default function TailwindPage() {
  return (
    <div className="bg-slate-200 flex h-[50vh] justify-center items-baseline">
      <div className="bg-blue-500">Child 1</div>
      <div className="bg-red-500 flex-grow">Child 2</div>
    </div>
  );
}
