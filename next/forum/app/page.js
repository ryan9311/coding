import { connectDB } from "@/util/datadase";

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  // await fetch("/URL", { cache: "force-cache" });

  return (
    <>
      <div>aa</div>
    </>
  );
}
