import { useState } from "react";
import { Link } from "react-router-dom";

import Plant4 from "@/assets/images/plant4.png";

import "./DiaryPage.scss";

const DiaryPage = () => {
    const [tab, setTab] = useState(0);

    return (
        <div className="wrapper">
            <main className="diary">
                <section className="diary_top">
                    <h2 className="container">
                        <em>박유나</em>님, 식물의 성장 기록을 남겨보세요.
                    </h2>
                    <div className="tab_btn">
                        <button
                            className="list"
                            onClick={() => {
                                setTab(0);
                            }}
                        ></button>
                        <button
                            className="img"
                            onClick={() => {
                                setTab(1);
                            }}
                        ></button>
                    </div>
                </section>
                <section className="tab_contents">
                    <Link to="/diary/write" className="diary_register_btn">
                        <span className="hide">글 작성하기</span>
                    </Link>
                    {tab === 0 ? (
                        <div className="tab_list">
                            <ul>
                                <li>
                                    <div className="img_wrap">
                                        <img src={Plant4} alt="thumbnail" />
                                    </div>
                                    <div className="txt_wrap">
                                        <strong>새 잎이 자랐다.</strong>
                                        <p>
                                            플래피노의 새잎이 많이 자랐다. 요즘
                                            날씨가 좋아더 잘 자라는 것 같기도
                                            하고! 앞으로 더 쑥쑥 자랐으면
                                            좋겠다. 앞으로 더 쑥쑥 자랐으면
                                            좋겠다.
                                        </p>
                                        <span>2023.08.15.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="txt_wrap">
                                        <strong>새 잎이 자랐다.</strong>
                                        <p>
                                            플래피노의 새잎이 많이 자랐다. 요즘
                                            날씨가 좋아더 잘 자라는 것 같기도
                                            하고! 앞으로 더 쑥쑥 자랐으면
                                            좋겠다.
                                        </p>
                                        <span>2023.08.15.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="img_wrap">
                                        <img src={Plant4} alt="thumbnail" />
                                    </div>
                                    <div className="txt_wrap">
                                        <strong>새 잎이 자랐다.</strong>
                                        <p>
                                            플래피노의 새잎이 많이 자랐다. 요즘
                                            날씨가 좋아더 잘 자라는 것 같기도
                                            하고! 앞으로 더 쑥쑥 자랐으면
                                            좋겠다. 앞으로 더 쑥쑥 자랐으면
                                            좋겠다.
                                        </p>
                                        <span>2023.08.15.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="txt_wrap">
                                        <strong>새 잎이 자랐다.</strong>
                                        <p>
                                            플래피노의 새잎이 많이 자랐다. 요즘
                                            날씨가 좋아더 잘 자라는 것 같기도
                                            하고! 앞으로 더 쑥쑥 자랐으면
                                            좋겠다.
                                        </p>
                                        <span>2023.08.15.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="img_wrap">
                                        <img src={Plant4} alt="thumbnail" />
                                    </div>
                                    <div className="txt_wrap">
                                        <strong>새 잎이 자랐다.</strong>
                                        <p>
                                            플래피노의 새잎이 많이 자랐다. 요즘
                                            날씨가 좋아더 잘 자라는 것 같기도
                                            하고! 앞으로 더 쑥쑥 자랐으면
                                            좋겠다. 앞으로 더 쑥쑥 자랐으면
                                            좋겠다.
                                        </p>
                                        <span>2023.08.15.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="txt_wrap">
                                        <strong>새 잎이 자랐다.</strong>
                                        <p>
                                            플래피노의 새잎이 많이 자랐다. 요즘
                                            날씨가 좋아더 잘 자라는 것 같기도
                                            하고! 앞으로 더 쑥쑥 자랐으면
                                            좋겠다.
                                        </p>
                                        <span>2023.08.15.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="img_wrap">
                                        <img src={Plant4} alt="thumbnail" />
                                    </div>
                                    <div className="txt_wrap">
                                        <strong>새 잎이 자랐다.</strong>
                                        <p>
                                            플래피노의 새잎이 많이 자랐다. 요즘
                                            날씨가 좋아더 잘 자라는 것 같기도
                                            하고! 앞으로 더 쑥쑥 자랐으면
                                            좋겠다. 앞으로 더 쑥쑥 자랐으면
                                            좋겠다.
                                        </p>
                                        <span>2023.08.15.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="txt_wrap">
                                        <strong>새 잎이 자랐다.</strong>
                                        <p>
                                            플래피노의 새잎이 많이 자랐다. 요즘
                                            날씨가 좋아더 잘 자라는 것 같기도
                                            하고! 앞으로 더 쑥쑥 자랐으면
                                            좋겠다.
                                        </p>
                                        <span>2023.08.15.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="tab_img">
                            <div className="item">
                                <img src={Plant4} alt="thumbnail" />
                            </div>
                            <div className="item">
                                <img src={Plant4} alt="thumbnail" />
                            </div>
                            <div className="item">
                                <img src={Plant4} alt="thumbnail" />
                            </div>
                            <div className="item">
                                <img src={Plant4} alt="thumbnail" />
                            </div>
                            <div className="item">
                                <img src={Plant4} alt="thumbnail" />
                            </div>
                            <div className="item">
                                <img src={Plant4} alt="thumbnail" />
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};
export default DiaryPage;
