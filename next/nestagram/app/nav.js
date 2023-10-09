"use client";

import { useState } from "react";

export default function Nav() {
  const [modal, setModal] = useState(false);

  const modalhandler = () => {
    if (modal == false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };
  return (
    <>
      <div className="nav_container">
        <ul className="nav_list">
          <img className="logo" src="./logo.png" alt="logo" />
          <li>
            <img src={`./homefill.svg`} />홈
          </li>
          <li onClick={modalhandler}>
            <img src={`./plus.svg`} />
            만들기
          </li>
          <li>
            <div>이미지</div>
            프로필
          </li>
          <li className="logout">
            <img src={`./out.svg`} />
            로그아웃
          </li>
        </ul>
      </div>
      <div className={`post_make ${modal ? "" : "post_make_hidden"}`}>
        <div className="post_make_box">게시글 만들기</div>
        <button onClick={modalhandler}>닫기</button>
      </div>
    </>
  );
}
