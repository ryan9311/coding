import { useState } from "react";
import data from "../data";

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
    </>
  );

  function Card(props) {
    let [shoes] = useState(data);
    console.log(shoes);
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
