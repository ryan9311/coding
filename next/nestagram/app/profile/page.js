import Nav from "../nav";
import UserContents from "./userContents";

export default function Profile() {
  return (
    <>
      <Nav />
      <div className="profile_container">
        <div className="profile_header">
          <div className="profile_info">
            <img src="/profile.jpg" />
            <div className="profile_name">프로필</div>
          </div>
          <div className="profile_cnt">
            <div> 게시물 00</div>
            <div>프랜드 00</div>
          </div>
        </div>
        <div className="profile_content">
          <UserContents />
        </div>
      </div>
    </>
  );
}
