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
                  onClick={() => {
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
            </div>
          </>
        );
      })}
      {modal === true ? (
        <Modal modalTitle={modalTitle} title={title} SetTitle={SetTitle} />
      ) : null}
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
