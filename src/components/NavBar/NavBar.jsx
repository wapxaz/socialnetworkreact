import React from 'react';
import navbarCss from './NavBar.module.css';

const NavBar = () => {
	return <nav className={`${navbarCss.sidebar} ${navbarCss.sidebar2}`}>
        <div className={navbarCss.item}>
          <a href="/profile">Профиль</a>        
        </div>
        <div className={navbarCss.item}>
          <a href="/dialogs">Сообщения</a>
        </div>
        <div className={navbarCss.item}>
          <a href="/news">Новости</a>
        </div>
        <div className={navbarCss.item}>
          <a href="/music">Музыка</a>
        </div>
        <div className={navbarCss.item}>
          <a href="/settings">Настройки</a>
        </div>
      </nav>
}

export default NavBar;