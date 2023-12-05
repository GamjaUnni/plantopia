import { useState } from "react";

import profile from "@/assets/images/profile.png";

import "./MyPage.scss";

const MyInfoPage = () => {
    const [user, setUser] = useState({
        email: "",
        nickname: "",
        password: "",
        newPassword: "",
        passwordChk: "",
        birthday: "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: targetVal, name: targetName } = e.target;
        setUser((prev) => ({
            ...prev,
            [targetName]: targetVal,
        }));
    };

    return (
        <div className="my_info_page">
            <main className="my_info_container empty_footer">
                <header className="sub_header">
                    <button className="back_btn">
                        <span className="hide">뒤로가기</span>
                    </button>
                    <strong>내 정보</strong>
                </header>
                <section className="profile_section container">
                    <div className="profile">
                        <img src={profile} alt="profile" />
                        <button className="edit_btn">
                            <span className="hide">프로필 사진 수정하기</span>
                        </button>
                    </div>
                </section>

                <section className="input_section container">
                    <ul>
                        <li className="btn_layer">
                            <label>이메일</label>
                            <input
                                className="calc_width"
                                type="text"
                                name="email"
                                value={user.email}
                                onChange={onChange}
                            />
                            <button className="gray_btn">인증 받기</button>
                        </li>
                        <li>
                            <label>닉네임</label>
                            <input
                                type="text"
                                name="nickname"
                                value={user.nickname}
                                onChange={onChange}
                            />
                        </li>
                        <li>
                            <label>현재 비밀번호</label>
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={onChange}
                            />
                        </li>
                        <li>
                            <label>비밀번호</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={user.newPassword}
                                onChange={onChange}
                            />
                        </li>
                        <li>
                            <label>비밀번호 확인</label>
                            <input
                                type="password"
                                name="passwordChk"
                                value={user.passwordChk}
                                onChange={onChange}
                            />
                        </li>
                        <li>
                            <label>생년월일</label>
                            <input
                                type="date"
                                name="birthday"
                                value={user.birthday}
                                onChange={onChange}
                            />
                        </li>
                    </ul>
                    <div className="quit_box">
                        <button className="quit_btn">회원탈퇴</button>
                    </div>
                </section>
                <button className="mint_btn">저장</button>
            </main>
        </div>
    );
};
export default MyInfoPage;
