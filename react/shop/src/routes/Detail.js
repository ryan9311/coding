import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// 동적이 UI 만드는 방법
//1. UI 상태를 저장할 state 만들고
//2. state에 따라서 UI가 어떻게 보일지 작성

function Detail(props) {
  let { id } = useParams();

  const itemNum = props.shoes.find(function (x) {
    return x.id == id;
  });

  let [alert, setAlert] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
      console.log("didi");
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });

  let [count, setCount] = useState(0);
  let [itemCnt, setItemCnt] = useState("");

  console.log(isNaN(itemCnt));

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인!!</div>
      ) : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              `https://codingapple1.github.io/shop/shoes` + itemNum.id + `.jpg`
            }
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{itemNum.title}</h4>
          <p>{itemNum.content}</p>
          <p>{itemNum.price}</p>
          <input
            type="text"
            placeholder="수량"
            onChange={(e) => {
              setItemCnt(e.target.value);
            }}
          />
          {isNaN(itemCnt) == true ? <p>숫자만 입력</p> : null}
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
