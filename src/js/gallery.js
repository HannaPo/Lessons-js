'use strict';

import { UnsplashAPI } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashAPI();

const onSearchFormSubmit = async event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['user-search-query'].value;
  unsplashApi.query = searchQuery;

  try {
    const { data } = await unsplashApi.fetchPhotos();

    if (!data.results.length) {
      console.log('Images not found!');
      return;
    }

    galleryListEl.innerHTML = createGalleryCards(data.results);
    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

const onLoadMoreBtnClick = async () => {
  unsplashApi.page += 1;

  try {
    const { data } = await unsplashApi.fetchPhotos();

    if (unsplashApi.page === data.total_pages) {
      loadMoreBtnEl.classList.add('is-hidden');
    }

    galleryListEl.insertAdjacentHTML(
      'beforeend',
      createGalleryCards(data.results)
    );
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
