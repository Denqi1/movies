import './FilterPagination.css';

import arrowOrangeRight from '../../icons/curved-arrow-right-orange-icon.svg';
import arrowLightOrangeRight from '../../icons/curved-arrow-right-light-orange-ico.svg';

function FilterPagination() {
  return (
    <div className="pagination">
      <button
        className="pagination-main-button not-active-button"
        id="pagination-button-previous"
      >
        <img src={arrowLightOrangeRight} alt="Previous page button" />
      </button>
      <ul className="pagination__list">
        <li className="pagination__item pagination_selected">
          <button className="pagination__button">1</button>
        </li>
        <li className="pagination__item">
          <button className="pagination__button">2</button>
        </li>
        <li className="pagination__item">
          <button className="pagination__button">3</button>
        </li>
        <li className="pagination__item">
          <button className="pagination__button">4</button>
        </li>
        <li className="pagination__item">
          <button className="pagination__button">5</button>
        </li>
      </ul>
      <button className="pagination-main-button" id="pagination-button-next">
        <img src={arrowOrangeRight} alt="Next page button" />
      </button>
    </div>
  );
}

export { FilterPagination };
