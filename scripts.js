const modalPhotos = document.querySelector ('#modal-photos');
const modalImg = modalPhotos.querySelector ('.modal-img');
const photos = document.querySelectorAll ('.photo');


for (let photo of photos) {
  photo.addEventListener ("dblclick", function () {
    const image = photo.innerHTML;

    modalPhotos.querySelector ('.modal-img').innerHTML = image;

    modalPhotos.classList.add ('active');
  });
};


document.querySelector ('.close-modal').addEventListener ('click', function () {
  modalPhotos.classList.remove ('active');
});