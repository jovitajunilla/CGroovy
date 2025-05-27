import { playSong } from "./play-song.js";

window.addEventListener("load", function () {
  updateSong();

  setInterval(updateSong, 1000);
});

function updateSong() {
  if (window.location.pathname === "/pages/song-detail.html") {
    
      const songData = localStorage.getItem("selectedSong");
      const song = JSON.parse(songData);

      const detailBox = document.getElementById("content");

      const audio = new Audio(song.audio);

      const backgroundBox = document.getElementById("background-blur");
      backgroundBox.style.backgroundImage = `url("${song.image}")`;

      audio.onloadedmetadata = function () {
        const duration = audio.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
        const durationFormatted = `${formattedMinutes}:${formattedSeconds}`;

        detailBox.innerHTML = `
    <img
    src="${song.image}"
    alt="song-list1"
            class="img-song"
            />
            <div class="song-title-detail">
            <h1 class="song-title">${song.title}</h1>
            <h2 class="song-singer">${song.artist}</h2>
            <p class="song-desc">${song.desc}</p>
            <p class="song-desc">
            Year Date: ${song.release} <br />
            Mood: ${song.mood}
            </p>
          
            <div id="play-timer">
            <div id="buttonPlay">
            <img src="../assets/img/play-icon.png" alt="Play" id="image-play" />
            <h3 class="white">Play</h3>
            </div>
            <div id="time">
            <img src="../assets/img/time.png" alt="">
            <h3>${durationFormatted}</h3>
            </div>
            </div>
            </div>`;

        const lyrics = document.getElementById("lyrics");

        lyrics.innerHTML = `${song.lyrics}`;

        const buttonPlay = document.querySelector("#buttonPlay");

        buttonPlay.addEventListener("click", function () {
          playSong(song);
        });
      };
    
  }
}
