import { connectDB } from "@/util/datadase";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.body) });
    console.log(result);
    if (result.deletedCount == 1) {
      res.status(200).json("삭제완료");
    } else {
      res.status(500).json(console.log("삭제 실패 id : " + req.body));
    }
  }
}
