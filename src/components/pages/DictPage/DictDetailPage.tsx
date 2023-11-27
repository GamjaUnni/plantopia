import Plant4 from "@/assets/images/plant4.png";

const DictDetailPage = () => {
    return (
        <div className="wrapper">
            <main className="dict_detail empty_footer">
                <header className="sub_header">
                    <button className="back_btn">
                        <span className="hide">뒤로가기</span>
                    </button>
                    <strong>식물 상세</strong>
                </header>

                <section className="dict_detail_main">
                    <img src={Plant4} alt="식물 이미지" />
                    <span>Philodendron Congo</span>
                    <strong>필로덴드론 콩고</strong>
                    <button className="register_btn">
                        <i></i>내 식물로 등록
                    </button>
                </section>

                <section className="dict_card container">
                    <div className="card">
                        <strong>🌱 식물 정보</strong>
                        <ul>
                            <li>
                                <label className="category">분류</label>
                                잎&꽃보기 식물
                            </li>
                            <li>
                                <label className="humidity">습도</label>
                                40 ~ 70%
                            </li>
                            <li>
                                <label className="management">관리수준</label>
                                초보자
                            </li>
                            <li>
                                <label className="pest">병해충 정보</label>
                                응애, 깍지벌레
                            </li>
                        </ul>
                    </div>

                    <div className="card">
                        <strong>👍 잘 자라는 환경</strong>
                        <div className="box_wrap">
                            <div className="box">
                                <p>햇빛</p>
                                <span className="sun on"></span>
                                <span className="sun on"></span>
                                <span className="sun"></span>
                            </div>
                            <div className="box">
                                <p>물</p>
                                <span className="water on"></span>
                                <span className="water on"></span>
                                <span className="water"></span>
                            </div>
                            <div className="box">
                                <p>생육 적정 온도</p>
                                <em>16 ~ 20℃</em>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <strong>📌 관리 Tip</strong>
                        <div className="box_wrap">
                            <p className="tip">
                                진달래과의 작은 관목으로 척박한 산성토양에서 잘
                                자라며 키는 20cm정도로 포복형이다. 암석정원에 잘
                                어울린다.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
export default DictDetailPage;
