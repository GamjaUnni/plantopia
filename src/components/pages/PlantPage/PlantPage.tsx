import { Link } from "react-router-dom";

import Plant4 from "@/assets/images/plant4.png";

import "./PlantPage.scss";

const PlantPage = () => {
    return (
        <div className="wrapper">
            <main className="plant">
                <section className="main_plant_box container">
                    <h2>
                        <em>박유나</em>님의 식물을 한눈에 보기!
                    </h2>
                    <span className="main_plant_tag">메인 식물</span>
                    <div className="main_plant">
                        <img src={Plant4} alt="메인 식물" />
                        <p>Philodendron Congo</p>
                        <strong>쑥쑥이</strong>
                    </div>
                    <div className="register_btn">
                        <Link to="/plant/register">+ 식물 등록</Link>
                    </div>
                </section>
                <section className="sub_plant_box">
                    <ul>
                        <li>
                            <div>
                                <img src={Plant4} alt="서브 식물" />
                                <strong>이상해풀</strong>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="chk01"
                                    className="ch_check hide"
                                />
                                <label
                                    htmlFor="chk01"
                                    className="label"
                                ></label>
                                <Link
                                    to="/plant/modify"
                                    className="modify_btn"
                                ></Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={Plant4} alt="서브 식물" />
                                <strong>이상해풀</strong>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="chk02"
                                    className="ch_check hide"
                                />
                                <label
                                    htmlFor="chk02"
                                    className="label"
                                ></label>
                                <Link
                                    to="/plant/modify"
                                    className="modify_btn"
                                ></Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={Plant4} alt="서브 식물" />
                                <strong>이상해풀</strong>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="chk03"
                                    className="ch_check hide"
                                />
                                <label
                                    htmlFor="chk03"
                                    className="label"
                                ></label>
                                <Link
                                    to="/plant/modify"
                                    className="modify_btn"
                                ></Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={Plant4} alt="서브 식물" />
                                <strong>이상해풀</strong>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="chk04"
                                    className="ch_check hide"
                                />
                                <label
                                    htmlFor="chk04"
                                    className="label"
                                ></label>
                                <Link
                                    to="/plant/modify"
                                    className="modify_btn"
                                ></Link>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
};
export default PlantPage;
