import { store } from '../store/store';
import { searchMovie } from '../actions/searchFormActions';
import { fetchMovies } from '../actions/movieActions';

export class SearchForm {
  constructor(holder) {
    this._holder = holder;
    this._domRef = this.init();
    this.setEvents();
  }

  init() {
    this._holder.insertAdjacentHTML(
      'beforeend',
      `
        <form action="" class="search__form">
            <i type="submit" class="search__form__icon icon-search"></i>
            <input class="search__form__input" type="text" placeholder="Search for movies, series and more..">
            <input class="search__form__submit" type="submit" value="Go">
        </form> 
        `
    );
    return this._holder.querySelector('.search__form');
  }

  setEvents() {
    this._domRef.addEventListener('submit', e => {
      e.preventDefault();
      // get movies, fire the dispatch for getting the movies
      store.dispatch(
        searchMovie(this._domRef.querySelector('.search__form__input').value)
      );
      store.dispatch(
        fetchMovies(this._domRef.querySelector('.search__form__input').value)
      );
      this._domRef.querySelector('.search__form__input').value = '';
    });
  }
}

export default function form(holder) {
  return new SearchForm(holder);
}
