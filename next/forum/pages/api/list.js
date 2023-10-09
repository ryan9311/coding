import { connectDB } from "@/util/datadase";

export default async function handler(res, req) {
  if (res.method == "GET") {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();
    req.status(200).json(result);
  }
}
