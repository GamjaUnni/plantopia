import { Link } from "react-router-dom";

import Logo from "@/assets/images/logo.png";
import IconCalendar from "@/assets/images/icons/icon_calendar.png";
import IconBell from "@/assets/images/icons/icon_bell.png";

import "./Header.scss";

const Header = () => {
    return (
        <header>
            <Link to="/" className="main_logo">
                <img src={Logo} alt="logo" />
            </Link>
            <div>
                <Link to="/calendar" className="calendar_btn">
                    <img src={IconCalendar} alt="logo" />
                </Link>
                <Link to="/" className="bell_btn">
                    <img src={IconBell} alt="logo" />
                </Link>
            </div>
        </header>
    );
};
export default Header;
