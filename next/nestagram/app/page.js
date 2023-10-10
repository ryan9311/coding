import Friends from "./friends";
import Nav from "./nav";
import PostCard from "./postCard";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="main_container">
        <PostCard />
        <Friends />
      </div>
    </>
  );
}
