import Link from "next/link";

export default function Home() {
  // throw new Error("Hacked");
  return (
    <main className="m-2">
      <h1>Lecture 4 </h1>
      <p>Date: 17th August 2024</p>
      <hr />
      <ol>
        <li>
          <Link href={"/tailwind"}>Tailwind</Link>
        </li>
        <li>
          <Link href={"/tailwind/box-model"}>Tailwind Box Model</Link>
        </li>
        <li>
          <Link href={"/tailwind/assignment"}>Assignment</Link>
        </li>
      </ol>
    </main>
  );
}
