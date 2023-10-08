import data from "./data.js";

export default function Cart() {
  let cartItem = ["Tomatoes", "Pasta"];
  return (
    <>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명</p>
        <p>금액</p>
        <p>개수</p>
      </div>
      {cartItem.map((cartItem, i) => {
        return <CartItem cartItem={cartItem} />;
      })}
      <RedBtn color="blue" />
    </>
  );
}

function RedBtn(props) {
  return <button style={{ background: `${props.color}` }}>빨간색?</button>;
}

function CartItem(props, i) {
  return (
    <div className="cart-item">
      <p>{props.cartItem}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
