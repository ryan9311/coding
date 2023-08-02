import { useState } from "react";
import data from "../data";
import axios from "axios";

function ItemList() {
  let [shoes, setShoes] = useState(data);
  let [btnCnt, setBtnCnt] = useState(2);

  return (
    <>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} i={i}></Card>;
          })}
        </div>
      </div>
      {btnCnt > 3 ? null : (
        <button
          onClick={() => {
            setBtnCnt(btnCnt + 1);
            axios
              .get(`https://codingapple1.github.io/shop/data${btnCnt}.json`)
              .then((result) => {
                let copy = [...shoes, ...result.data];
                setShoes(copy);
              })
              .catch((err) => {
                console.log("요청 실패:", err);
              });
          }}
        >
          더 보기
        </button>
      )}
    </>
  );

  function Card(props) {
    // let [shoes] = useState(data);
    return (
      <>
        <div className="col-md-4">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (props.i + 1) +
              ".jpg"
            }
            width="80%"
          />
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
        </div>
      </>
    );
  }
}

export default ItemList;
