import { useState } from "react";

const JoinPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
            return;
        }

        if (name === "password") {
            setPassword(value);
            return;
        }

        if (name === "nickname") {
            setNickname(value);
            return;
        }
    };

    const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email) {
            alert("이메일을 입력하세요");
            return;
        }
        if (!password) {
            alert("비밀번호를 입력하세요");
            return;
        }
        if (!nickname) {
            alert("닉네임을 입력하세요");
            return;
        }
    };

    return (
        <main className="login_page empty_footer">
            <div className="login_box container">
                <h1>
                    <span>Plantopia</span>
                </h1>
                <h2>
                    <div>
                        간편하게 가입하고
                        <br />
                        <em>다양한 서비스를 이용하세요.</em>
                    </div>
                </h2>
                <form onSubmit={onLogin}>
                    <label htmlFor="inpEmail">이메일</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                        placeholder="이메일을 입력해주세요."
                        id="inpEmail"
                    />
                    <label htmlFor="inpPwd" className="mar_top32">
                        비밀번호
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                        placeholder="비밀번호를 입력해주세요."
                    />
                    <label htmlFor="inpPwd" className="mar_top32">
                        닉네임
                    </label>
                    <input
                        type="text"
                        name="nickname"
                        value={nickname}
                        onChange={onInputChange}
                        placeholder="닉네임을 입력해주세요."
                    />
                    <button type="submit" className="submit_btn">
                        등록
                    </button>
                </form>

                <div className="oauth_box">
                    <p>SNS 계정으로 로그인하기</p>
                    <ul>
                        <li>
                            <button className="naver">
                                <span className="hide">
                                    네이버 아이디로 로그인하기
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="kakao">
                                <span className="hide">
                                    카카오 아이디로 로그인하기
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="google">
                                <span className="hide">
                                    구글 아이디로 로그인하기
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};
export default JoinPage;
