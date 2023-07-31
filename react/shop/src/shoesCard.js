import { useState } from "react";
import data from "./data";

const ShoesCard = () => {
  let [shoes] = useState(data);
  console.log(shoes[0].title);
  return (
    <>
      {shoes(() => (
        <div className="col-md-4">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="80%"
          />
          <h4>{shoes[0].title}</h4>
          <p>{shoes[0].price}</p>
        </div>
      ))}
    </>
  );
};

export default ShoesCard;
