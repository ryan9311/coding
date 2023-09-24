const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;
app.set("view engine", "ejs");

let db;
MongoClient.connect(
  "mongodb+srv://admin:qwer1234@yongki.nk0gsia.mongodb.net/?retryWrites=true&w=majority",
  (err, client) => {
    if (err) {
      console.log(err);
    }

    db = client.db("todoapp");
    // db.collection("post").insertOne(
    //   { _id: 0, 이름: "jhon", 나이: 20 },
    //   (err, res) => {
    //     console.log("저장완료");
    //   }
    // );

    app.listen(8080, () => {
      console.log("listening on 8080");
    });
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

app.post("/add", (req, res) => {
  db.collection("post").insertOne(
    { title: req.body.title, date: req.body.date },
    () => {
      console.log("List 생성!");
    }
  );
});

app.get("/list", (req, res) => {
  db.collection("post")
    .find()
    .toArray((err, result) => {
      if (err) {
        console.log(err);
      }
      // console.log(result);
      res.render("list.ejs", { posts: result });
    });
});
