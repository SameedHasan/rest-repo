import Link from "next/link";

export default function Home() {
  // throw new Error("Hacked");
  return (
    <main>
      <h1>Lecture 3 </h1>
      <p>Date: 10th August 2024</p>
      <hr />
      <ul>
        <li>
          <Link href={"/client"}>Client Components</Link>
        </li>
        <li>
          <Link href={"/"}>Server Components</Link>
          <p>Server components functions can be async but not client</p>
        </li>
        <li>Composition Patterns</li>
        <li>Layout</li>
        <li>Error Page</li>
        <li>Not Found</li>
        <li>
          <Link href={"/image-optimization"}>Image Optimization</Link>
        </li>
      </ul>
    </main>
  );
}
