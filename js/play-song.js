import { songData } from "./song-data.js";

export function playSong(song) {
  // console.log(song);
  const play = document.getElementById("play");
  play.style.display = "flex";

  //play bar
  play.innerHTML = ` <div id="playbar">
          <img src="${song.image}" alt="" id="image-mini" />
          <div>
            <p id="play-title">${song.title}</p>
            <p>${song.artist}</p>
          </div>
          <div class="playbar-content">
            <img src="../assets/img/play-back-icon.png" alt="" class="image-mini3 image-mini" id="back-icon" title="Previous Song"/>
            <img src="../assets/img/play-icon-2.png" alt="" class="image-mini2 image-mini" id="play-icon" title = "Click to Play/Pause"/>
            <img src="../assets/img/play-next-icon.png" alt="" class="image-mini3 image-mini" id="next-icon" title ="Next Song"/>
          </div>
          <a href="song-detail.html">
            <img src="../assets/img/maximize.png" alt="" class="image-mini2 image-mini" title = "Maximize"/>
          </a>
          <audio src="${song.audio}" id="song-audio" preload="auto"></audio>
        </div>

        <div id="audiobar">
          <div id="audioPercentage"></div>
        </div>`;

  // kalau mau simpen ke localStorage harus distringify dlu JSON nya
  localStorage.setItem("selectedSong", JSON.stringify(song));
  // window.location.href="song-detail.html";

  const playIcon = document.getElementById("play-icon");
  const songAudio = document.getElementById("song-audio");

  //autoplay
  songAudio.play();

  //deklarasi pas lagu diputer di awal tekan jadi icon pause
  playIcon.src = "../assets/img/pause-icon.png";

  // ubah icon pause dan play
  playIcon.addEventListener("click", function () {
    if (songAudio.paused) {
      songAudio.play();
      playIcon.src = "../assets/img/pause-icon.png";
    } else {
      songAudio.pause();
      playIcon.src = "../assets/img/play-icon-2.png";
    }
  });

  // ubah icon jadi play kalau uda selesai
  songAudio.addEventListener("ended", function () {
    playIcon.src = "../assets/img/play-icon-2.png";

    let nextIndex;
    do {
      nextIndex= Math.floor(Math.random() * songData.length);
    } while (JSON.stringify(songData[nextIndex].title) === JSON.stringify(song.title));

    const songNextIndex = songData[nextIndex];
    // console.log(`${songNextIndex.title}`);

    localStorage.setItem("previousSong", JSON.stringify(song));
    localStorage.setItem("selectedSong", JSON.stringify(songNextIndex));
    localStorage.setItem("nextSong", null);

    const songLocalStorage = localStorage.getItem("selectedSong");
    const nextSong = JSON.parse(songLocalStorage);

    setTimeout(function () {
      playSong(nextSong);
    }, 500);
  });

  //deklarasi audiobar
  songAudio.addEventListener("loadedmetadata", function () {
    const audioBar = $("#audioPercentage");
    const duration = songAudio.duration;

    // buat perubahan warna audio bar
    songAudio.ontimeupdate = function () {
      const currentTime = songAudio.currentTime;
      const progress = (currentTime / duration) * 100;

      audioBar.width(progress + "%");
    };
  });

  const backIcon = $("#back-icon");
  const nextIcon = $("#next-icon");

  if (localStorage.getItem("previousSong") === null) {
    localStorage.setItem("previousSong", null);
  }

  if (localStorage.getItem("nextSong") === null) {
    // Similarly, initialize nextSong with null or your default value
    localStorage.setItem("nextSong", null);
  }

  backIcon.on("click", function () {
    playBackIcon(song);
  });

  nextIcon.on("click", function () {
    playNextIcon(song);
  });

}

function playBackIcon(song) {
  localStorage.setItem("nextSong", JSON.stringify(song));

  const savePreviousLocalStorage = localStorage.getItem("previousSong");
  const savePrevious = JSON.parse(savePreviousLocalStorage);

  if (!savePrevious) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songData.length);
      // I spent 10 minutes trying to figure out why I couldn't get the index,
      // only to realize I had forgotten to add parentheses after Math.random -jopita 19/05/2025 08.03
    }while (JSON.stringify(songData[randomIndex].title) === JSON.stringify(song.title));

    const randomSong = songData[randomIndex];

    playSong(randomSong);
  } else {
    playSong(savePrevious);
    localStorage.removeItem("previousSong");
  }
}

function playNextIcon(song) {
  localStorage.setItem("previousSong", JSON.stringify(song));

  const nextSongLocalStorage = localStorage.getItem("nextSong");
  const nextSong = JSON.parse(nextSongLocalStorage);

  if (!nextSong) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songData.length);
      // I spent 10 minutes trying to figure out why I couldn't get the index,
      // only to realize I had forgotten to add parentheses after Math.random -jopita 19/05/2025 08.03
    } while (JSON.stringify(songData[randomIndex].title) === JSON.stringify(song.title));

    const randomSong = songData[randomIndex];

    playSong(randomSong);
  } else {
    playSong(nextSong);
    localStorage.removeItem("nextSong");
  }
}
