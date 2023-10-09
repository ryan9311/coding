import { connectDB } from "@/util/datadase";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((post, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`detail/${post._id}`}>{post.title}</Link>
            <p>1월 1일</p>
            <DetailLink />
          </div>
        );
      })}
    </div>
  );
}
