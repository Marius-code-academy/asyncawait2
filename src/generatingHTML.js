import { getAllPhotos } from './fetchingData.js';
import { filterPhotosById, hideElements } from './utils.js';

const gridContainer = document.getElementById('grid-container');

export function generateAlbum(albumData) {
  const card = document.createElement('div');
  const title = document.createElement('p');

  card.classList.add('card');
  card.id = albumData.id;

  card.addEventListener('click', cardEventHandler);

  title.textContent = albumData.title;
  card.appendChild(title);
  gridContainer.appendChild(card);
}

function createPhotoCard(photoData) {
  const cardContainer = document.createElement('div');
  const img = document.createElement('img');
  const title = document.createElement('p');

  img.src = photoData.url;
  title.textContent = photoData.title;

  cardContainer.appendChild(title);
  cardContainer.appendChild(img);
  gridContainer.appendChild(cardContainer);
}

async function cardEventHandler(event) {
  const photos = await getAllPhotos();
  const filteredPhotos = filterPhotosById(photos, event.target.id);
  hideElements(getAllAlbums());
  filteredPhotos.forEach((photo) => {
    createPhotoCard(photo);
  });
}

function getAllAlbums() {
  return document.getElementsByClassName('card');
}
