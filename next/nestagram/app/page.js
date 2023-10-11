import Friends from "./friends";
import Nav from "./nav";
import PostCard from "./postCard";

export default function Home() {
  return (
    <>
      <div className="main_container">
        <Nav />
        <PostCard />
        <Friends />
      </div>
    </>
  );
}
