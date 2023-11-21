import { Link } from "react-router-dom";

import IconDictionary from "@/assets/images/icons/icon_dictionary.png";
import IconDiary from "@/assets/images/icons/icon_diary.png";
import IconHome from "@/assets/images/icons/icon_home.png";
import IconMyPlant from "@/assets/images/icons/icon_plant.png";
import IconMy from "@/assets/images/icons/icon_my.png";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <Link to="/dictionary">
                        <img src={IconDictionary} />
                        식물도감
                    </Link>
                </li>
                <li>
                    <Link to="/diary">
                        <img src={IconDiary} />
                        다이어리
                    </Link>
                </li>
                <li className="home">
                    <Link to="/">
                        <img src={IconHome} />
                    </Link>
                </li>
                <li>
                    <Link to="/myplant">
                        <img src={IconMyPlant} />
                        내식물
                    </Link>
                </li>
                <li>
                    <Link to="/mypage">
                        <img src={IconMy} />
                        My
                    </Link>
                </li>
            </ul>
        </footer>
    );
};
export default Footer;
