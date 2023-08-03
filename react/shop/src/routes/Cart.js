import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let stock = useSelector((state) => {
    return state.stock;
  });
  return (
    <>
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
  return (
    <>
      <tr>
        <td>{i + 1}</td>
        <td>{stock.name}</td>
        <td>{stock.count}</td>
        <td>안녕</td>
      </tr>
    </>
  );
}

export default Cart;
