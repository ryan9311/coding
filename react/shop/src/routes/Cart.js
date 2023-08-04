import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { chnageAge } from "../store/userSlice";
import { conutPlus } from "../store";

function Cart() {
  let stock = useSelector((state) => {
    return state.stock;
  });

  let user = useSelector((state) => {
    return state.user;
  });
  let dispatch = useDispatch();

  return (
    <>
      <h5>
        {user.name} {user.age} 의 장바구니
      </h5>
      <button
        onClick={() => {
          dispatch(chnageAge());
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((a, i) => {
            return <CartList stock={stock[i]} i={i} />;
          })}
        </tbody>
      </Table>
    </>
  );
}

function CartList({ stock, i }) {
  let dispatch = useDispatch();
  return (
    <>
      <tr>
        <td>{i + 1}</td>
        <td>{stock.name}</td>
        <td>{stock.count}</td>
        <td>
          <button
            onClick={() => {
              dispatch(conutPlus(i));
            }}
          >
            +
          </button>
        </td>
      </tr>
    </>
  );
}

export default Cart;
