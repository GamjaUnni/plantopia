import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import Plant4 from "@/assets/images/plant4.png";

import "swiper/css";

import "./DictPage.scss";

const DictPage = () => {
    const [search, setSearch] = useState<string>("");

    return (
        <div className="wrapper">
            <main className="search">
                <section className="search_wrap container">
                    <h2>
                        <em>박유나</em>님, 어떤 식물을 찾고 있나요?
                    </h2>
                    <div className="search_inp">
                        <input
                            type="text"
                            placeholder="식물 이름으로 검색하기"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button>
                            <span className="hide">검색</span>
                        </button>
                    </div>
                </section>

                <section className="slide_wrap slide01">
                    <div className="container">
                        <strong>초보 식집사를 위한 추천 식물!</strong>
                    </div>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={16}
                        speed={1300}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>

                <section className="slide_wrap slide02">
                    <div className="container">
                        <strong>쑥쑥 자라는 식물만 모았어요.</strong>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={16}
                        speed={1300}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>

                <section className="slide_wrap slide03">
                    <div className="container">
                        <strong>물을 조금만 줘도 잘 자라요.</strong>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={16}
                        speed={1300}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>

                <section className="slide_wrap slide04">
                    <div className="container">
                        <strong>어두운 집에서도 OK!</strong>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={16}
                        speed={1300}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide_img_wrap active">
                                <img
                                    src={Plant4}
                                    className="slide_img"
                                    alt="슬라이드 이미지"
                                />
                                <span>Philodendron Congo</span>
                                <p className="slide_title">필로덴드론 콩고</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
            </main>
        </div>
    );
};
export default DictPage;
