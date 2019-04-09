import { store } from '../store/store';

class Movies {
  constructor(holder) {
    this._holder = holder;
    this._domRef = this.init();
    this.render();
    store.subscribe(this.render.bind(this));
  }

  init() {
    this._holder.insertAdjacentHTML(
      'beforeend',
      `
      <div class="movies">
        <p class="movies__text">movies matching your search on ' <span></span> '</p>
        <div class="movies__list"></div>
      </div>
    `
    );
    return this._holder.querySelector('.movies');
  }

  render() {
    this._domRef.querySelector('span').innerHTML = store.getState().search;
    const movieList = store.getState().movies;
    this._domRef.querySelector('.movies__list').innerHTML = Object.keys(
      movieList
    )
      .filter(el => {
        if (store.getState().filter.movie && movieList[el].Type === 'movie') {
          return true;
        }
        if (store.getState().filter.series && movieList[el].Type === 'series') {
          return true;
        }
        if (store.getState().filter.game && movieList[el].Type === 'game') {
          return true;
        }
        if (
          store.getState().filter.episode &&
          movieList[el].Type === 'episode'
        ) {
          return true;
        }
        return false;
      })
      .filter(el => {
        if (store.getState().filter.year === '0') {
          return true;
        }
        return store.getState().filter.year === movieList[el].Year;
      })
      .filter(el => {
        if (store.getState().filter.poster) {
          return movieList[el].Poster !== 'N/A';
        }
        return true;
      })
      .map(
        el => `<div class="movies__card">
                <img src="${movieList[el].Poster}">
                <h3>${movieList[el].Title} - ${movieList[el].Year} - ${
          movieList[el].Type
        }</h3>
              </div>
              `
      )
      .join('');
  }
}

export default function movies(holder) {
  return new Movies(holder);
}
