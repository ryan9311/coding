import { connectDB } from "@/util/datadase";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((post, i) => {
        return (
          <div className="list-item" key={i}>
            <h4>{post.title}</h4>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
