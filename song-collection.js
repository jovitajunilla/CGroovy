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

  const durationInfo = document.getElementById("durationInfo");
  durationInfo.innerHTML = ` ${songData.length} song - 1 hour 53 minutes`;



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
            <p class="song-release">Year Date: ${song.release}</p>
            <p class="song-mood">Mood: ${song.mood}</p>`;

      songDiv.addEventListener("click", function () {
        console.log(song);
        const play = document.getElementById("play");
        play.style.display = "flex";

        play.innerHTML = ` 
            <img src="${song.image}" alt="" id="image-mini">
          <div id="play-2">
            <p id="play-title">${song.title}</p>
            <p>${song.artist}</p>
          </div>
          <a href="song-detail.html">
          <img src="img/maximize.png" alt="" class="image-mini2">
          </a>
          <img src="img/play-icon-2.png" alt="" class="image-mini2" id="play-icon">
          <audio src="${song.audio}" id="song-audio" preload="auto"></audio>`;

        localStorage.setItem("selectedSong", JSON.stringify(song));
        // window.location.href="song-detail.html";

        const playIcon = document.getElementById("play-icon");
        const songAudio = document.getElementById("song-audio");

        songAudio.play();
        playIcon.src = "img/pause-icon.png";

        playIcon.addEventListener("click", function () {
          if (songAudio.paused) {
            songAudio.play();
            playIcon.src = "img/pause-icon.png";
          } else {
            songAudio.pause();
            playIcon.src = "img/play-icon-2.png";
          }
        });

        songAudio.addEventListener("ended", function () {
          playIcon.src = "img/play-icon-2.png";
        });
      });
      listSong.appendChild(songDiv);
    });

    songBox.appendChild(categoryDiv);
  }
}
