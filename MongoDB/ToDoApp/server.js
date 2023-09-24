const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb+srv://admin:qwer1234@yongki.nk0gsia.mongodb.net/?retryWrites=true&w=majority",
  (err, client) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(8080, () => {
        console.log("listening on 8080");
      });
    }
  }
);

app.get("/pet", function (req, 응답) {
  응답.send("반갑다");
});

app.get("/beauty", (요청, 응답) => {
  응답.send("뷰티용품 사세요");
});

app.get("/", (요청, 응답) => {
  응답.sendFile(__dirname + "/index.html");
});

app.get("/write", (요청, 응답) => {
  응답.sendFile(__dirname + "/write.html");
});

app.post("/add", (요청, 응답) => {
  console.log(요청.body);
  응답.send("전송완료");
});
