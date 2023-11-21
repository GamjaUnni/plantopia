import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import WeatherRain from "@/assets/images/weather/weather_rain.png";
import IconWatering from "@/assets/images/icons/icon_watering.png";
import Plant1 from "@/assets/images/plant1.png";
import Plant2 from "@/assets/images/plant2.png";

import "./HomePage.scss";

const plants = [
    {
        no: 1,
        src: Plant1,
        name: "쑥쑥이",
    },
    {
        no: 2,
        src: Plant2,
        name: "이상해씨1",
    },
    {
        no: 3,
        src: Plant2,
        name: "이상해씨2",
    },
    {
        no: 4,
        src: Plant1,
        name: "이상해씨3",
    },
    {
        no: 5,
        src: Plant2,
        name: "이상해씨4",
    },
];

interface MainPlantType {
    src: string;
    name: string;
}

const HomePage = () => {
    const [mainPlant, setMainPlant] = useState<MainPlantType>(plants[0]);
    const changeMain = (src: string, name: string) => {
        setMainPlant({ src, name });
    };

    return (
        <div className="wrapper">
            <main>
                <section className="info_wrap container">
                    <ul>
                        <li className="location">
                            <strong>서울, 후암동</strong>
                        </li>
                        <li>
                            <div>
                                <strong>비 조금 36˚</strong>
                                <span>36˚ | 27˚</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <strong>
                                    오늘은 창밖으로 빗소리가 들리겠어요
                                </strong>
                            </div>
                        </li>
                    </ul>
                    <img src={WeatherRain} alt="weather" />
                </section>

                <section className="main_wrap">
                    <div className="main_plant">
                        <img src={mainPlant?.src} alt="main plant" />
                        <button className="watering_btn">
                            <strong>물주기</strong>
                            <img src={IconWatering} />
                        </button>
                    </div>
                    <div className="main_info">
                        <span className="main_tag">아글라오네마</span>
                        <strong>{mainPlant?.name}</strong>
                        <ul>
                            <li>
                                <span>물주기</span>
                                <label>D-5</label>
                            </li>
                            <li>
                                <span>마지막 물준 날</span>
                                <p>2023-08-02</p>
                            </li>
                            <li>
                                <span>처음 함께한 날</span>
                                <p>2023-06-13</p>
                            </li>
                        </ul>
                    </div>
                    <div className="slide_wrap">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={10}
                            speed={1300}
                            className="mySwiper"
                            onActiveIndexChange={(swiper) => {
                                console.log(swiper);
                            }}
                        >
                            {plants.map(({ no, src, name }) => (
                                <SwiperSlide key={no}>
                                    <div
                                        className="slide_img_wrap active"
                                        onClick={() => changeMain(src, name)}
                                    >
                                        <img
                                            src={src}
                                            className="slide_img"
                                            alt="슬라이드 이미지"
                                        />
                                    </div>
                                    <p className="slide_title">{name}</p>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </main>
        </div>
    );
};
export default HomePage;
