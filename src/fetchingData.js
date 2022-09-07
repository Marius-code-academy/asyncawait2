export async function getAlbums() {
  const albums = await fetch('https://jsonplaceholder.typicode.com/albums');
  const albumsJSON = await albums.json();
  return albumsJSON;
}

export async function getAllPhotos() {
  const photos = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photosJSON = await photos.json();
  return photosJSON;
}
