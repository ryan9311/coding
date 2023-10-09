import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Nav from "./nav";
import PostCard from "./postCard";

export default function Home() {
  return (
    <div>
      <Nav />
      <PostCard />
    </div>
  );
}
