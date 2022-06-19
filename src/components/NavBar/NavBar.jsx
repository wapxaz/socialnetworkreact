import React from 'react';
import navbarCss from './NavBar.module.css';

const NavBar = () => {
	return <nav className={`${navbarCss.sidebar} ${navbarCss.sidebar2}`}>
        <div className={navbarCss.item}>
          <a href="">Профиль</a>        
        </div>
        <div className={navbarCss.item}>
          <a href="">Сообщения</a>
        </div>
        <div className={navbarCss.item}>
          <a href="">Новости</a>
        </div>
        <div className={navbarCss.item}>
          <a href="">Музыка</a>
        </div>
        <div className={navbarCss.item}>
          <a href="">Настройки</a>
        </div>
      </nav>
}

export default NavBar;