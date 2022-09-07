export function filterPhotosById(photos, id) {
  return photos.filter((element) => element.albumId === +id);
}

export function hideElements(element) {
  console.log(element);
  for (let item of element) {
    item.classList.add('hidden');
  }
  // element.forEach((element) => {
  //   element.classList.add('hidden');
  // });
}
