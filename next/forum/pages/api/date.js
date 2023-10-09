export default function handler(res, req) {
  let date = new Date();
  req.status(200).json(date);
}
