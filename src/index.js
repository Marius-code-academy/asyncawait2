import { getAlbums, getAllPhotos } from './fetchingData.js';
import { generateAlbum } from './generatingHTML.js';
import { filterPhotosById } from './utils.js';

const albums = await getAlbums();
const photos = await getAllPhotos();

albums.forEach((element) => {
  generateAlbum(element);
});
