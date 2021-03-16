/*== MODAL SONGS ==*/

const modalSongs = document.querySelector ('#modal-songs');
const songs = document.querySelectorAll ('td');

for (let song of songs) {
  song.addEventListener ('click', function () {
    const songId = song.getAttribute ('id');

    modalSongs.classList.add ('active');
    modalSongs.querySelector ('iframe').src = `https://www.youtube.com/embed/${songId}`;
  });
};

document.querySelector ('.close-song').addEventListener ('click', function () {
  modalSongs.classList.remove ('active');
  modalSongs.querySelector ('iframe').src = '';
});
