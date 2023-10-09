import { connectDB } from "@/util/datadase";
import { ObjectId } from "mongodb";

export default async function Detil(props) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.id),
  });

  console.log(props.params.id);
  return (
    <>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </>
  );
}
