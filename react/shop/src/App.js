import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import { Route, Routes, useNavigate, Outlet } from "react-router-dom";
import ItemList from "./routes/ItemList";
import Detail from "./routes/Detail";
import data from "./data";
import { useState } from "react";

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Ryan_Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/0");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="mainBg"></div>

      <Routes>
        <Route path="/" element={<ItemList shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤바</div>} />
        </Route>
        {/* instart/about */}
        <Route path="event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추 서비스</p>} />
          <Route path="tow" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        <Route path="*" element={<div>엥?</div>} />
      </Routes>
    </div>
  );

  function About() {
    return (
      <>
        <div>
          <h4>회사정보</h4>
          <Outlet></Outlet>
        </div>
      </>
    );
  }

  function Event() {
    return (
      <>
        <h4>오늘의 이벤트</h4>
        <Outlet></Outlet>
      </>
    );
  }
}

export default App;
