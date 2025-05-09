import { songData } from "./song-data.js";

displaySong();

function displaySong() {
  const songBox = document.getElementById("songCategories");
  const songList = {};

  songData.forEach((song) => {
    if (!songList[song.name]) {
      songList[song.category] = [];
    }
  });

  songData.forEach((song) => {
    songList[song.category].push(song);
  });

  for (let category in songList) {
    const categoryDiv = document.createElement("section");
    categoryDiv.classList.add("songCollection");

    categoryDiv.innerHTML = `
        <div class="buttonWhite">
        <p class="heavy" id="song-genre">${category}</p>
      </div>
      <div class="black-container">
        <p class="white-bold">All</p>
        <div class="song-list" id="list-song">
        </div>`;

    const listSong = categoryDiv.querySelector(".song-list");
    songList[category].forEach((song) => {
      const songDiv = document.createElement("div");
      songDiv.classList.add("song");
      songDiv.innerHTML = `
             <img src="${song.image}" alt="img" class="img-song-list" />
            <p class="song-title">${song.title}</p>
            <p class="song-artist">${song.artist}</p>
            <p class="song-desc">${song.desc}</p>
            <p class="song-release">${song.release}</p>
            <p class="song-mood">${song.mood}</p>`;

            songDiv.addEventListener("click",function(){
                detail
            });
      listSong.appendChild(songDiv);
    });

    songBox.appendChild(categoryDiv);
  }
}
