import { useState } from "react";
import "./App.css";

function App() {
  let [title, SetTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  let [like, Setlike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Ryan ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let titleSet = [...title];
          titleSet.sort();
          // titleSet.sort((a, b) => {
          //   if (a > b) {
          //     return 1;
          //   } else if (a < b) {
          //     return -1;
          //   } else {
          //     return 0;
          //   }
          // });
          console.log(titleSet);
          SetTitle(titleSet);
        }}
      >
        가나다순 정렬
      </button>
      <div className="list">
        <h4>
          {title[0]}{" "}
          <span
            onClick={() => {
              Setlike(like + 1);
            }}
          >
            👍
          </span>{" "}
          {like}
        </h4>
        <p>2월 17일 발행</p>
        <button
          onClick={() => {
            let copy = [...title];
            copy[0] = "여자 코드 추천";
            SetTitle(copy);
            console.log(copy);
          }}
        >
          변경?
        </button>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
