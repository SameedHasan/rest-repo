import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="m-2">
      <h1>Lecture 5 </h1>
      <p>Date: 24th August 2024</p>
      <hr />
      <ol>
        <li>
          <Link href={"/tailwind"}>Tailwind</Link>
        </li>
        <li>
          <Link href={"/shadcn"}>Shadcn</Link>
        </li>
        {/* <li>
          <Link href={"/tailwind/box-model"}>Tailwind Box Model</Link>
        </li>
        <li>
          <Link href={"/tailwind/assignment"}>Assignment</Link>
        </li> */}
      </ol>

      <div>
        <p>justify works on main axis and align item works on cross axis</p>
      </div>
    </main>
  );
}
