"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  return (
    <div className="nav_container">
      <ul className="nav_list">
        <img className="logo" src="./logo.png" alt="logo" />
        <li>
          <img src={`./homefill.svg`} />홈
        </li>
        <li>
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
  );
}
