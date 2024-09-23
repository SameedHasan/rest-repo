// "use client";

// import { useEffect, useState } from "react";

export default async function Home() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const response = await fetch(
  //     //   "https://jsonplaceholder.typicode.com/posts"
  //     // );
  //     const response = await fetch("http://localhost:3000/api/users");
  //     const json = await response.json();
  //     setData(json.slice(0, 10)); // Fetch only the first 10 posts
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // if (loading) return <p>Loading...</p>;

  // POST

  const response1 = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Sameed" }),
  });
  
  const json1 = await response1.json();

  console.log("json1", json1);

  // GET
  const response = await fetch("http://localhost:3000/api/users");
  const json = await response.json();
  return (
    <div>
      <h1>Client-Side Fetched Data</h1>
      <ul>
        {json1.users.map((post: any) => (
          <li key={post.id}>
            <h2>Title: {post.id}</h2>
            <p>Body: {post.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
