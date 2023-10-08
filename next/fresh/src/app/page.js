import Link from "next/link";

export default function Home() {
  let name = "park";
  let age = 20;
  return (
    <>
      <div className="title" style={{ color: "red", fontSize: "30px" }}>
        애플후레시
      </div>
      <p className="titleSub">by dev {name}</p>
    </>
  );
}
