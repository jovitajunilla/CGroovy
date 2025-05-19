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
            
            
            listSong.appendChild(songDiv);

            songDiv.addEventListener("click", function () {
              playSong(song);
            });
            
          });
          
          songBox.appendChild(categoryDiv);
  }
}

function playSong(song){ 
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
            <img src="img/play-back-icon.png" alt="" class="image-mini3 image-mini" id="back-icon"/>
            <img src="img/play-icon-2.png" alt="" class="image-mini2 image-mini" id="play-icon"/>
            <img src="img/play-next-icon.png" alt="" class="image-mini3 image-mini" id="next-icon"/>
          </div>
          <a href="song-detail.html">
            <img src="img/maximize.png" alt="" class="image-mini2 image-mini" />
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

          const index = songData.indexOf(song);
          const nextIndex = (index+1)%songData.length;
          const songNextIndex = songData[nextIndex];
          console.log(`${songNextIndex.title}`)

          localStorage.setItem("previousSong",JSON.stringify(song));
          localStorage.setItem("selectedSong",JSON.stringify(songNextIndex));
          localStorage.setItem("nextSong",null);

        const songLocalStorage = localStorage.getItem("selectedSong");
        const nextSong = JSON.parse(songLocalStorage);

          setTimeout(function(){playSong(nextSong)},1000);
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

function playBackIcon(song){

  localStorage.setItem("nextSong",JSON.stringify(song));

  const savePreviousLocalStorage = localStorage.getItem("previousSong");
  const savePrevious = JSON.parse(savePreviousLocalStorage);

  if(!savePrevious){

    let randomIndex;
    do{
      randomIndex = Math.floor(Math.random()*songData.length); 
      // I spent 10 minutes trying to figure out why I couldn't get the index, 
      // only to realize I had forgotten to add parentheses after Math.random -jopita 19/05/2025 08.03
    }while(randomIndex===songData.indexOf(song));
  
    const randomSong = songData[randomIndex];

    playSong(randomSong);
  }else{
    playSong(savePrevious);
    localStorage.removeItem("previousSong");
  }

};

function playNextIcon(song){

   localStorage.setItem("previousSong",JSON.stringify(song));

   const nextSongLocalStorage = localStorage.getItem("nextSong");
   const nextSong = JSON.parse(nextSongLocalStorage);

  if(!nextSong){
    
    let randomIndex;
    do{
      randomIndex = Math.floor(Math.random()*songData.length); 
      // I spent 10 minutes trying to figure out why I couldn't get the index, 
      // only to realize I had forgotten to add parentheses after Math.random -jopita 19/05/2025 08.03
    }while(randomIndex===songData.indexOf(song));
  
    const randomSong = songData[randomIndex];

    playSong(randomSong);
  }else{
    playSong(nextSong);
     localStorage.removeItem("nextSong");
  }
}