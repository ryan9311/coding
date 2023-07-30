import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import data from "./data";

import "./App.css";

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ryan_Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="mainBg"></div>
      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} i={i}></Card>;
          })}
        </div>
      </div>
    </div>
  );

  function Card(props) {
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

export default App;
