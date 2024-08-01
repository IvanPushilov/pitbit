import React from 'react';
import '../styles/nav.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../../../store/store';
import { authLogout } from '../../Auth/authSlice';
import * as api from '../../Auth/api';

import logo from '/pitmining.png';
import tg from '/telegram.png';
import whatsapp from '/whatsapp.png';
import tel from '/telephone.png'

function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.auth.user);

  const handleLogout = async (): Promise<void> => {
    await api.logoutFetch().then((data) => {
      if (data.message === 'success') {
        dispatch(authLogout()).catch(console.log);
        navigate('/');
      }
    });
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar1">
          <img className="logo" src={logo} alt="logo" />
          <a href="/">Главная</a>
          <a href="/miners">Каталог</a>
          <a href="/leasing">Лизинг</a>
          <a href="/about">Клиенты о нас</a>
          <a href="/contact">Контакты</a>
          {user ? (
            <>
              <li className="menu__group">
                <NavLink className="link-profile link" to="/profile">
                  <svg
                    width="27px"
                    height="27px"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>Личный кабинет</title>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -2159.000000)"
                        fill="#000000"
                      >
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <path
                            d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598"
                            id="profile_round-[#1342]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span> hello, {user.name}!</span>
                </NavLink>
              </li>

              <li className="menu__group">
                <NavLink
                  onClick={handleLogout}
                  className="menu__link r-link text-underlined link"
                  to="/auth"
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Выход
                </NavLink>
              </li>
            </>
          ) : (
            <NavLink className="menu__link" to="/auth">
              Авторизация
            </NavLink>
          )}
          <ul className="social-links-group">
            <li className="link">
              <NavLink className="link-vk link" to="https://vk.com/" target="_blank">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M27.55,35.19V28.55c4.46.68,5.87,4.19,8.71,6.64H43.5a29.36,29.36,0,0,0-7.9-10.47c2.6-3.58,5.36-6.95,6.71-12.06H35.73c-2.58,3.91-3.94,8.49-8.18,11.51V12.66H18l2.28,2.82,0,10.05c-3.7-.43-6.2-7.2-8.91-12.87H4.5C7,20.32,12.26,37.13,27.55,35.19Z" />
                </svg>
              </NavLink>
            </li>
            <li className="link">
              <NavLink className="link-telegram link" to="https://t.me/" target="_blank">
                <img width="30px" height="30px" src={tg} />
              </NavLink>
            </li>
            <li className="link">
              <NavLink className="link-whatsapp link" to="https://wa.me/" target="_blank">
                <img width="30px" height="30px" src={whatsapp} />
              </NavLink>
            </li>
          </ul>
          <ul className="phone-group">
            <li className="link">
              <NavLink className="link-call link" to="tel:+79519805480" target="_blank">
                <img
                  width="30px"
                  height="30px"
                  src= {tel}
                  alt="Телефон"
                />
              </NavLink>
            </li>
            <li className="link">+7 (966) 161-11-16</li>
          </ul>
        </div>
        <div className="navbar2">
          <NavLink className="link-call link" to="tel:+79519805480" target="_blank">
            <img width="30px" height="30px" src={tel} alt="Телефон" />
          </NavLink>
          <NavLink className="link-call link" to="tel:+79519805480" target="_blank">
            <img width="30px" height="30px" src={tel} alt="Телефон" />
          </NavLink>
          <NavLink className="link-call link" to="tel:+79519805480" target="_blank">
            <img width="30px" height="30px" src={tel} alt="Телефон" />
          </NavLink>
          <NavLink className="link-call link" to="tel:+79519805480" target="_blank">
            <img width="30px" height="30px" src={tel} alt="Телефон" />
          </NavLink>
          <NavLink className="link-call link" to="tel:+79519805480" target="_blank">
            <img width="30px" height="30px" src={tel} alt="Телефон" />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
