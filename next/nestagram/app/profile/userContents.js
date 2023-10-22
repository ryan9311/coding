"use client";

import { useState } from "react";

export default function UserContents() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabMenu = [
    { id: 0, menu: "게시물" },
    { id: 1, menu: "저장됨" },
  ];

  return (
    <>
      <div className="tabMenu">
        {tabMenu.map((tab, i) => {
          return (
            <div
              key={tab.id}
              className={`tabMenuItem ${
                selectedTab === tab.id ? "active" : ""
              }`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.menu}
            </div>
          );
        })}
      </div>
      <div className="userContents">
        {selectedTab === 0 && <div>게시물 내용을 여기에 표시</div>}
        {selectedTab === 1 && <div>저장됨 내용을 여기에 표시</div>}
      </div>
    </>
  );
}
