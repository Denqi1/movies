import './Header.css';

function WidgetHeaderUi() {
  return (
    <header id="header-section">
      <div className="movies-header movies-header-container">
        <h1 className="movies-header__title">
          <a href="#">Фильмы</a>
        </h1>
        <button className="movies-header__button">Войти</button>
      </div>
    </header>
  );
}

export { WidgetHeaderUi };
