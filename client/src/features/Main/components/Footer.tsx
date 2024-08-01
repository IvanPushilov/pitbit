import React from 'react';

import pb from '/pitbit.png'
import place from '/placeholder.png'
import tel from '/telephone.png'
import mail from "/email.png"


import '../styles/foot.css';
function Footer(): JSX.Element {
  return (
    <>
      <div className="footer">
        <div className="footer1">
          <div className="footer1-1">
            <img className="logo" src={pb} alt="logo" />
          </div>
          <div className="footer1-1">
            <p className="footer1-1-1">КОМПАНИЯ </p>
            <a href="/">Главная</a>
            <a href="/profile">Профиль</a>
            <a href="/about">Клиенты о нас</a>
            <a href="/contact">Контакты</a>
          </div>
          <div className="footer1-1">
            <p className="footer1-1-1">УСЛУГИ</p>
            <a href="/leasing">Лизинг</a>
            <a href="/miners">Каталог</a>
          </div>
          <div className="footer1-1">
            <p className="footer1-1-1">КОНТАКТЫ</p>
            <li>
              <img width="15px" height="15px" src={place} /> Москва,
              метро Фили, ул. Новозаводская 23/8, к.1
            </li>
            <li>
              <img width="15px" height="15px" src={tel} /> Тел.: +7
              (495) 198-05-80
            </li>
            <li>
              <img width="15px" height="15px" src={mail} />{' '}
              pitbit.msk@yandex.ru
            </li>
          </div>
        </div>
        <hr className="footer-divider" />

        <div className="footer2">
          <p className="footer1-2-1">© PitBit Mining 2019-2024</p>
          <p className="footer1-2-1">Политика конфиденциальности</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
