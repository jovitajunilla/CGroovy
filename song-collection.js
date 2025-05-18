import { songData } from "./song-data.js";

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

      songDiv.addEventListener("click", function () {
        console.log(song);
        const play = document.getElementById("play");
        play.style.display = "flex";

        //play bar
        play.innerHTML = ` <div id="playbar">
            <img src="${song.image}" alt="" id="image-mini">
          <div>
            <p id="play-title">${song.title}</p>
            <p>${song.artist}</p>
          </div>
          <div class="playbar-content">
          <img src = "img/play-back-icon.png" alt="" class="image-mini3 image-mini">
          <img src="img/play-icon-2.png" alt="" class="image-mini2 image-mini" id="play-icon">
          <img src = "img/play-next-icon.png" alt="" class="image-mini3 image-mini">
          </div>
          <a href="song-detail.html">
          <img src="img/maximize.png" alt="" class="image-mini2 image-mini">
          </a>
          <audio src="${song.audio}" id="song-audio" preload="auto"></audio>
          </div>
          
          <div id="audiobar">
          <div id="audioPercentage"></div>
          </div>
          `;

        localStorage.setItem("selectedSong", JSON.stringify(song));
        // window.location.href="song-detail.html";

        const playIcon = document.getElementById("play-icon");
        const songAudio = document.getElementById("song-audio");

        //autoplay
        songAudio.play();

        //deklarasi pas lagu diputer di awal tekan jadi icon pause
        playIcon.src = "img/pause-icon.png";

        // ubah icon pause dan play
        playIcon.addEventListener("click", function () {
          if (songAudio.paused) {
            songAudio.play();
            playIcon.src = "img/pause-icon.png";
          } else {
            songAudio.pause();
            playIcon.src = "img/play-icon-2.png";
          }
        });

        // ubah icon jadi play kalau uda selesai
        songAudio.addEventListener("ended", function () {
          playIcon.src = "img/play-icon-2.png";
        });

        songAudio.addEventListener("loadedmetadata",function(){
          //deklarasi audiobar 
          const audioBar = $("#audioPercentage");
          const duration = songAudio.duration;
  
          // buat perubahan warna audio bar
          songAudio.ontimeupdate = function(){
            const currentTime = songAudio.currentTime;
            const progress = (currentTime / duration) * 100; 
  
            audioBar.width(progress + "%");
            
          }
        });



      });
      listSong.appendChild(songDiv);
    });

    songBox.appendChild(categoryDiv);
  }
}
