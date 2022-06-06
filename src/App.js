import './App.css';

function App() {
  return (
    <div className="App grid">
      <header className="header">
        <img src="https://i.7fon.org/150/u386300.jpg" />
      </header>
      <nav className="sidebar">
        <div>
          <a href="">Профиль</a>
        </div>
        <div>
          <a href="">Сообщения</a>
        </div>
        <div>
          <a href="">Новости</a>
        </div>
        <div>
          <a href="">Музыка</a>
        </div>
        <div>
          <a href="">Настройки</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://s1.cdn.autoevolution.com/images/news/compact-suv-comparison-finds-bmw-x1-is-better-than-mercedes-gla-and-audi-q3-115365_1.jpg" />
        </div>
        <div>
          <div>
            <img src="https://www.celebsmoney.com/wp-content/uploads/net-worth/nala-cat-image.jpg" />
          </div>
          <div>
            Описание
          </div>
        </div>
        <div>
          Пост
            <div>
              Новый пост
            </div>
        </div>
        <div>
          <div>
            Пост 1
          </div>
          <div>
            Пост 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
