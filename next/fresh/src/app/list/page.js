"use client";

import { useState } from "react";

export default function List() {
  let item = ["Tomatoes", "Pasta", "Coconut"];
  //
  let [itemCnt, setItemCnt] = useState(new Array(item.length).fill(0));

  return (
    <>
      <h4 className="title"> 상품목록</h4>
      {item.map((item, i) => {
        return (
          <div className="food" key={i}>
            <img className="foodImg" src={`/food${i}.png`} />
            <h4>{item} $40</h4>
            <span>{itemCnt[i]} </span>
            <button
              onClick={() => {
                let copy = [...itemCnt];
                copy[i]++;
                setItemCnt(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                if (itemCnt[i] < 1) {
                  alert("0개 이하는 불가능");
                } else {
                  let copy = [...itemCnt];
                  copy[i]--;
                  setItemCnt(copy);
                }
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </>
  );
}
