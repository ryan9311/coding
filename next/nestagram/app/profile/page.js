import Nav from "../nav";

export default function Profile() {
  return (
    <>
      <Nav />
      <div className="profile_container">
        <div className="profile_header">
          <div>
            <img src="/profile.jpg" />
          </div>
          <div className="profile_info">
            <div>프로필</div>
            <div>
              <span>게시물 00</span>
              <span>프랜드 00</span>
            </div>
          </div>
        </div>
        <div className="profile_content">유저 게시물</div>
      </div>
    </>
  );
}
