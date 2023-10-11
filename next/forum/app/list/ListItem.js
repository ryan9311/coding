"use client";

import Link from "next/link";

export default function ListItem(props) {
  return (
    <div>
      {props.result.map((post, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`detail/${post._id}`}>{post.title}</Link>
            <p>1월 1일</p>
            <Link href={`/edit/${post._id}`}>수정</Link>
            <span
              onClick={(e) => {
                // fetch("/api/post/delete", {
                //   method: "POST",
                //   body: post._id,
                // }).then(() => {
                //   e.target.parentElement.style.opacity = 0;
                //   setTimeout(() => {
                //     e.target.parentElement.style.display = "none";
                //   }, 1000);
                // });
                fetch(`/api/delete/${post._id}`).then(() => {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = "none";
                  }, 1000);
                });
              }}
            >
              삭제
            </span>
          </div>
        );
      })}
    </div>
  );
}
