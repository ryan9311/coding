const express = require("express");
const app = express();

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.get("/pet", function (req, 응답) {
  응답.send("반갑다");
});

app.get("/beauty", (요청, 응답) => {
  응답.send("뷰티용품 사세요");
});
