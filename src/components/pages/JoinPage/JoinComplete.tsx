import { Link } from "react-router-dom";

import Mockup from "@/assets/images/img_mockup.png";

import "./JoinPage.scss";

const JoinComplete = () => {
    return (
        <main className="login_page join empty_footer">
            <div className="login_box container">
                <h1>
                    <span>Plantopia</span>
                </h1>
                <h2>
                    <div>
                        가입을 축하드립니다.
                        <br />
                        <em>다양한 서비스를 이용하세요.</em>
                    </div>
                </h2>
                <img src={Mockup} className="mockup" alt="mockup" />
                <Link to="/login" className="submit_btn">
                    로그인 하러 가기
                </Link>
            </div>
        </main>
    );
};
export default JoinComplete;
