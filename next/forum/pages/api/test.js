export default function handler(res, req) {
  if (res.method == "POST") {
    return req.status(200).json("처리완료");
  }
}
