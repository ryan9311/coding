import { connectDB } from "@/util/datadase";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log(new ObjectId(req.query.id));
  try {
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.query.id) });
    console.log(result);
    if (result.deletedCount == 1) {
      res.status(200).json("삭제완료");
    }
  } catch (err) {
    res.status(500).json(console.log("err : " + err));
  }
}
