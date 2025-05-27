import { songData } from "./song-data.js";
import { playSong } from "./play-song.js";

displaySong();

function displaySong() {
  const songBox = document.getElementById("songCategories");
  const songList = {};
  // mengkategorikan lagu dari songData

  songData.forEach((song) => {
    if (!songList[song.name]) {
      songList[song.category] = [];
    }
  });

  songData.forEach((song) => {
    songList[song.category].push(song);
  });

  const durationInfo = document.getElementById("durationInfo");
  durationInfo.innerHTML = ` ${songData.length} song - 1 hour 53 minutes`;

  for (let category in songList) {
    const categoryDiv = document.createElement("section");
    categoryDiv.classList.add("songCollection");

    // membuat kotak category
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
      // membuat list lagu per kategori
      songDiv.innerHTML = `
             <img src="${song.image}" alt="img" class="img-song-list" />
            <p class="song-title">${song.title}</p>
            <p class="song-artist">${song.artist}</p>
            <p class="song-desc">${song.desc}</p>
            <p class="song-release">Year Date: ${song.release}</p>
            <p class="song-mood">Mood: ${song.mood}</p>`;

      listSong.appendChild(songDiv);

      songDiv.addEventListener("click", function () {
        playSong(song);
      });
    });

    songBox.appendChild(categoryDiv);
  }
  
}

let randIndex;
do {
  randIndex = Math.floor(Math.random(songData.length));
} while (
  JSON.stringify(songData[randIndex].title) === localStorage.getItem("selectedSong"));

const randomSong = songData[randIndex];
buttonPlay.addEventListener("click", function () {
  playSong(randomSong);
});