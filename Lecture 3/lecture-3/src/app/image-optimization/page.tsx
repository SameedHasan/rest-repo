import Image from "next/image";
import React from "react";
import burgerImage from "@/assets/burger.png";
export default function ImagePage() {
  const imageURl =
    "https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_1280.png";
  return (
    <div>
      {" "}
      <h1>ImagePage</h1>{" "}
      <div>
        {/* image from public folder */}
        {/* <Image src="/vercel.svg" alt="test" width={300} height={300} /> */}

        {/* image from external source */}
        <Image src={imageURl} alt="cars" width={900} height={400} />
        <br />
        {/* image from assets folder using import */}
        <Image src={burgerImage} alt="burger" width={600} height={300} />

        {/* image from assets folder using import */}
        {/* <Image src={burgerImage} alt="burger" width={600} height={300} /> */}
      </div>
    </div>
  );
}
