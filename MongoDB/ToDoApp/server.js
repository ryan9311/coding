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
  db.collection("counter").findOne({ name: "게시물 개 수" }, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result.totalPost);
    let totalPost = result.totalPost;
    db.collection("post").insertOne(
      { _id: totalPost + 1, title: req.body.title, date: req.body.date },
      () => {
        console.log("List 생성!");
        db.collection("counter").updateOne(
          { name: "게시물 개 수" },
          { $inc: { totalPost: 1 } },
          (err) => {
            if (err) {
              console.log(err);
            }
            console.log("업데이트 완료!");
          }
        );
      }
    );
  });
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

app.delete("/delete", (req, res) => {
  console.log(req.body);
  req.body._id = parseInt(req.body._id);
  db.collection("post").deleteOne(req.body, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("삭제 성공!");
    res.status(200).send({ message: "성공했습니당" });
  });
});
