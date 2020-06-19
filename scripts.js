const modalPhotos = document.querySelector ('#modal-photos');
const modalImg = modalPhotos.querySelectorAll ('.modal-img');
const photos = document.querySelectorAll ('.photo');

for (let photo of photos) {
  photo.addEventListener ("mouseouver", function () {
    const image = photo.querySelector ('.photo').innerHTML
    modalPhotos.querySelector ('.modal-img').innerHTML = image;
  });
};