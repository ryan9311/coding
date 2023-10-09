import styles from "../page.module.css";

export default function SignUp() {
  return (
    <div className={styles.pageContainer}>
      <img src="./logo.png"></img>
      <form action="" method="POST">
        <input
          className="user_info"
          type="text"
          name="name"
          placeholder="이름을 입력해주세요"
        ></input>
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
        <input
          className="user_info"
          type="password"
          name="user_pw_check"
          placeholder="비밀번호 확인"
        ></input>
        <button className="signUp_btn" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
}
