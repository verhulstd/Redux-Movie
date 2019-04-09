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
    this._domRef.querySelector('.movies__list').innerHTML = '';
    this._domRef.querySelector(
      'span'
    ).innerHTML = store.getState().search.search;
    this._domRef.querySelector('.movies__list').insertAdjacentHTML(
      'beforeend',
      store
        .getState()
        .movies.movies.map(
          el => `
    <div class="movies__card">
      <img src="${el.Poster}">
      <h3>${el.Title}</h3>
    </div>
    `
        )
        .join('')
    );
    console.log(store.getState().movies.movies);
  }
}

export default function movies(holder) {
  return new Movies(holder);
}
