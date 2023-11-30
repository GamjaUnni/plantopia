import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Plant5 from "@/assets/images/plant5.jpg";

import "./DiaryPage.scss";

const DiaryDetailPage = () => {
    return (
        <div className="wrapper">
            <main className="diary empty_footer">
                <header className="sub_header">
                    <button className="back_btn">
                        <span className="hide">뒤로가기</span>
                    </button>
                    <strong>다이어리</strong>
                    <div className="more_wrap">
                        <button className="more_btn">
                            <span className="hide">더보기</span>
                        </button>
                        <ul>
                            <li className="modify">수정</li>
                            <li className="delete">삭제</li>
                        </ul>
                    </div>
                </header>
                <section className="diary_slide">
                    <Swiper
                        pagination={true}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={Plant5} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Plant5} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Plant5} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Plant5} />
                        </SwiperSlide>
                    </Swiper>
                </section>

                <section className="diary_txt container">
                    <strong>새 잎이 자랐다.</strong>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={6}
                        freeMode={true}
                        grabCursor={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <span>몬식이</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>플래피노</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>쑥쑥이</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>이상해풀</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>몬식이</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>플래피노</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>쑥쑥이</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>이상해풀</span>
                        </SwiperSlide>
                    </Swiper>
                    <pre>
                        플래피노의 새잎이 많이 자랐다. 요즘 날씨가 좋아서 더 잘
                        자라는 것 같기도 하고! 앞으로 더 쑥쑥 자라서 꽃을 더
                        많이 피울 수 있었으면 좋겠다. 꽃 잎이 엄청 화려하고
                        예뻐서 기분이 좋아진다~~ 플래피노의 새잎이 많이 자랐다.
                        요즘 날씨가 좋아서 더 잘 자라는 것 같기도 하고! 앞으로
                        더 쑥쑥 자라서 꽃을 더 많이 피울 수 있었으면 좋겠다. 꽃
                        잎이 엄청 화려하고 예뻐서 기분이 좋아진다~~ 더 잘 자라는
                        것 같기도 하고! 앞으로 더 쑥쑥 자라서 꽃을 더 많이 피울
                        수 있었으면 좋겠다. 꽃 잎이 엄청 화려하고 예뻐서 기분이
                        좋아진다~~
                    </pre>
                    <p>2023.12.15.</p>
                </section>
            </main>
        </div>
    );
};
export default DiaryDetailPage;
