import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, conutPlus } from "../store";

// 동적이 UI 만드는 방법
//1. UI 상태를 저장할 state 만들고
//2. state에 따라서 UI가 어떻게 보일지 작성

function Detail(props) {
  useEffect(() => {
    let watchItem = localStorage.getItem("watched");
    watchItem = JSON.parse(watchItem);
    watchItem.push(itemNum.id);
    watchItem = new Set(watchItem);
    watchItem = Array.from(watchItem);
    localStorage.setItem("watched", JSON.stringify(watchItem));
  }, []);

  let { id } = useParams();

  const itemNum = props.shoes.find(function (x) {
    return x.id == id;
  });

  let [alert, setAlert] = useState(true);

  let stock = useSelector((state) => {
    return state.stock;
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });

  let [count, setCount] = useState(0);
  let [itemCnt, setItemCnt] = useState("");
  let [tabNum, setTabNum] = useState(0);
  let [fade, setFade] = useState("");

  let dispatch = useDispatch();

  useEffect(() => {
    setFade("end");
    return () => {
      setFade("");
    };
  }, []);

  return (
    <div className={"container start " + fade}>
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
              `https://codingapple1.github.io/shop/shoes` +
              (itemNum.id + 1) +
              `.jpg`
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
          <button
            className="btn btn-danger"
            onClick={() => {
              let serch = stock.find((stock) => {
                return stock.id == itemNum.id;
              });
              if (!serch) {
                dispatch(
                  addItem({ id: itemNum.id, name: itemNum.title, count: 1 })
                );
              } else {
                dispatch(conutPlus(itemNum.id));
              }
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabNum(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabNum(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabNum(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContant tabNum={tabNum} shoes={props.shoes} />
    </div>
  );
}

function TabContant({ tabNum, shoes }) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [tabNum]);

  return (
    <div className={"start " + fade}>
      {
        [<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][
          tabNum
        ]
      }
    </div>
  );
}

export default Detail;
