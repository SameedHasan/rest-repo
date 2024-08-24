import Button from "@/component/Button";

export default async function ClientComponent() {
  // we can not access this variable in browser console but we can console log it.
  const a = "sameed";
  console.log(a);
  await delay();
  return (
    <div>
      <h1>Client Component</h1>
      <Button title="My Button" />
    </div>
  );
}

const delay = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 5000);
  });
};
