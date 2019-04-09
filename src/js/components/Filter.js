import {
  filterMovie,
  filterGame,
  filterEpisode,
  filterSeries,
  filterYear,
  filterPoster,
} from '../actions/filterActions';
import { store } from '../store/store';

class Filter {
  constructor(holder) {
    this._holder = holder;
    this._domRef = this.init();
    this.render();
    this.setEvents();
  }

  init() {
    this._holder.insertAdjacentHTML(
      'beforeend',
      `
          <section class="filter">
              <fieldset class="filter__movies">
              <legend class="filter__movies__legend">Filter</legend>
              <p class="filter__movies__text">Year</p>
              <select class="filter__movies__year">
                <option value="0" selected>-- filter by year --</option>
              </select>
              <p class="filter__movies__text">Type</p>
              <input id="movie" type="checkbox" checked>
              <label class="checkbox" for="movie"> movie </label>
              <input id="game" type="checkbox" checked>
              <label class="checkbox" for="game"> game </label>
              <input id="series" type="checkbox" checked>
              <label class="checkbox" for="series"> series </label>
              <input id="episode" type="checkbox" checked>
              <label class="checkbox" for="episode"> episode </label>
              <p class="filter__movies__text">Optional filter</p>
              <input id="poster" type="checkbox">
              <label class="checkbox" for="poster"> Only with Poster </label>
              </fieldset>
          </section>  
        `
    );
    return this._holder.querySelector('.filter');
  }

  render() {
    let currentYear = new Date().getFullYear();
    while (currentYear > 1900) {
      this._domRef.querySelector(
        '.filter__movies__year'
      ).innerHTML += `<option value='${currentYear}'>${currentYear}</option>`;
      currentYear -= 1;
      if (currentYear === 1900) break;
    }
  }

  setEvents() {
    this._domRef
      .querySelector('.filter__movies__year')
      .addEventListener('change', () => {
        store.dispatch(
          filterYear(this._domRef.querySelector('.filter__movies__year').value)
        );
      });
    this._domRef.addEventListener('click', e => {
      if (e.target.id === 'movie') {
        store.dispatch(filterMovie());
      }
      if (e.target.id === 'game') {
        store.dispatch(filterGame());
      }
      if (e.target.id === 'series') {
        store.dispatch(filterSeries());
      }
      if (e.target.id === 'episode') {
        store.dispatch(filterEpisode());
      }
      if (e.target.id === 'poster') {
        store.dispatch(filterPoster());
      }
    });
  }
}

export default function filter(holder) {
  return new Filter(holder);
}
