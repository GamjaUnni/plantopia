import { Link, useLocation } from 'react-router-dom';

import IconDictionary from '@/assets/images/icons/icon_dictionary.png';
import IconDiary from '@/assets/images/icons/icon_diary.png';
import IconHome from '@/assets/images/icons/icon_home.png';
import IconMyPlant from '@/assets/images/icons/icon_plant.png';
import IconMy from '@/assets/images/icons/icon_my.png';
import IconDictionaryOn from '@/assets/images/icons/icon_dictionary_on.png';
import IconDiaryOn from '@/assets/images/icons/icon_diary_on.png';
import IconMyPlantOn from '@/assets/images/icons/icon_plant_on.png';
import IconMyOn from '@/assets/images/icons/icon_my_on.png';

import './Footer.scss';

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <ul>
        {FooterMenus.map((menu) => (
          <li key={menu.classname} className={`${menu.classname} ${location.pathname === menu.pathname && 'on'}`}>
            <Link to={menu.pathname}>
              <img src={location.pathname === menu.pathname ? menu.imgon : menu.img} />
              {menu.text}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

const FooterMenus = [
  {
    classname: 'dictionary',
    pathname: '/dictionary',
    text: '식물도감',
    img: IconDictionary,
    imgon: IconDictionaryOn,
  },
  {
    classname: 'diary',
    pathname: '/diary',
    text: '다이어리',
    img: IconDiary,
    imgon: IconDiaryOn,
  },
  {
    classname: 'home',
    pathname: '/',
    text: '',
    img: IconHome,
    imgon: IconHome,
  },
  {
    classname: 'myplant',
    pathname: '/myplant',
    text: '내식물',
    img: IconMyPlant,
    imgon: IconMyPlantOn,
  },
  {
    classname: 'mypage',
    pathname: '/mypage',
    text: 'My',
    img: IconMy,
    imgon: IconMyOn,
  },
];
