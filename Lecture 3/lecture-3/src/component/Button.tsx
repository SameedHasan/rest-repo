"use client";

import { useState } from "react";

interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  const [pageTitle, setPageTitle] = useState(title);
  return (
    <button
      onClick={() => {
        setPageTitle("Hello Sameed");
        // console.log(`${pageTitle} clicked!`);
      }}
    >
      {pageTitle}
    </button>
  );
}
