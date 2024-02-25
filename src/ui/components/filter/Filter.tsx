import './Filter.css';
import calncelButton from '../../icons/cancel-button.svg';
import { FilterPagination } from '../filter-pagination/FilterPagination';

function Filter() {
  return (
    <aside id="filter">
      <div className="filter-container">
        <section className="filter-header">
          <span className="filter-header__title">Фильтры</span>
          <button className="filter-header__button-close">
            <img src={calncelButton} alt="Close button" />
          </button>
        </section>

        <section className="filter-main">
          <form className="filter-sort-form">
            <div className="filter-sort-general">
              <label htmlFor="filter-sort-general__select">
                Сортировать по:
              </label>
              <select
                className="filter-sort-general__select decorated"
                id="filter-sort-general__select"
                name="filter-sort-general__select"
              >
                <option data-hover="green" value="popular">
                  Популярности
                </option>
                <option data-hover="green" value="date-added">
                  Дате добавления
                </option>
                <option data-hover="green" value="date-release">
                  Дате выхода
                </option>
                <option value="name">Названию</option>
              </select>
            </div>

            <ul className="filter-sort-genres__list">
              <span>Жанры</span>
              <li className="filter-sort-genres__item">
                <input type="checkbox" id="comedy" name="comedy" />
                <label htmlFor="comedy">Комедия</label>
              </li>
              <li className="filter-sort-genres__item">
                <input type="checkbox" id="action" name="action" />
                <label htmlFor="action">Боевик</label>
              </li>
              <li className="filter-sort-genres__item">
                <input type="checkbox" id="drama" name="drama" />
                <label htmlFor="drama">Драма</label>
              </li>
            </ul>
          </form>
        </section>
        <section className="filter-footer">
          <FilterPagination />
        </section>
      </div>
    </aside>
  );
}

export { Filter };
