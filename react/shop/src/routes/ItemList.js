import { useState } from "react";
import data from "../data";
import axios from "axios";

function ItemList(props) {
  return (
    <>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {props.shoes.map((a, i) => {
            return <Card shoes={props.shoes[i]} i={i}></Card>;
          })}
        </div>
      </div>
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((result) => {
              let copy = [...props.shoes, ...result.data];
              props.setShoes(copy);
              console.log(copy);
            })
            .catch(() => {
              console.log("실패!!");
            });
        }}
      >
        버튼
      </button>
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
