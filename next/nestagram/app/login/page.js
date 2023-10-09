import Link from "next/link";
import styles from "../page.module.css";

export default function Story() {
  return (
    <>
      <div className={styles.pageContainer}>
        <img src="./logo.png"></img>
        <form className="login_form" action="" method="POST">
          <input
            className="user_info"
            type="text"
            name="user_id"
            placeholder="아이디를 입력해주세요"
          ></input>
          <input
            className="user_info"
            type="password"
            name="user_pw"
            placeholder="비밀번호를 입력해주세요"
          ></input>
          <button className="login_btn" type="submit">
            로그인
          </button>
          <Link href={"/signUp"}>
            <button className="signUp_btn">회원가입</button>
          </Link>
        </form>
      </div>
    </>
  );
}
