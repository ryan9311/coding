import { useState } from "react";
import "./App.css";

function App() {
  let [title, SetTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  let [like, Setlike] = useState([0, 0, 0]);
  let [modal, Setmodal] = useState(false);
  let [modalTitle, SetmodalTitle] = useState(0);
  let [postPlus, SetPostPlus] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Ryan ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let titleSet = [...title];
          titleSet.sort();
          SetTitle(titleSet);
        }}
      >
        가나다순 정렬
      </button>
      {title.map(function (a, i) {
        return (
          <>
            <div className="list">
              <h4
                onClick={() => {
                  modal === true ? Setmodal(!true) : Setmodal(true);
                  SetmodalTitle(i);
                }}
              >
                {title[i]}
                <span
                  onClick={(e) => {
                    e.stopPropagation(); // 이벤트 버블링 방지
                    let likeCount = [...like];
                    likeCount[i] = likeCount[i] + 1;
                    Setlike(likeCount);
                  }}
                >
                  👍
                </span>
                {like[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button
                onClick={() => {
                  let copy = [...title];
                  copy.splice(i, 1);
                  SetTitle(copy);
                }}
              >
                삭제
              </button>
            </div>
          </>
        );
      })}
      {modal === true ? (
        <Modal modalTitle={modalTitle} title={title} SetTitle={SetTitle} />
      ) : null}
      <input
        onChange={(e) => {
          SetPostPlus(e.target.value);
          console.log(postPlus);
        }}
      ></input>
      <button
        onClick={function () {
          // 1. title 배열 가져오기
          let copy = [...title];
          // 2. 가져온 배열에 배열 추가하기
          // console.log(newTitle);
          // SetTitle([...title, newTitle]);
          // Spread 연산자를 통해 배열 추가했지만 뒤에 추가가됨.
          copy.unshift(`${postPlus}`);
          SetTitle(copy);
        }}
      >
        등록
      </button>
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h4>{props.title[props.modalTitle]}</h4>
        <p>날짜</p>
        <p>상세 내용</p>
        <button
          onClick={() => {
            let titlecopy = [...props.title];
            titlecopy[0] = "여자 코드 추천";
            props.SetTitle(titlecopy);
          }}
        >
          글수정
        </button>
      </div>
    </>
  );
}

export default App;
