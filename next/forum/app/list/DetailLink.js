"use client";

import { useRouter } from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        홈가기
      </button>
    </>
  );
}
