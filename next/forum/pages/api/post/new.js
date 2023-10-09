import { connectDB } from "@/util/datadase";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (!req.body.title) {
      return res.status(500).json({ message: "제목을 입력해주세요." });
    }
    const db = (await connectDB).db("forum");
    await db.collection("post").insertOne(req.body);
    return res.redirect(302, "/list");
  }
}
