import { songData } from "./song-data.js";
import { playSong } from "./play-song.js";

displaySong();
displaySongRecommendation();

function displaySong() {
  const contentGroup = document.getElementById("content-group");
  // const contentGroupRecommendation = document.getElementById("content-group-recommendation");

  songData.slice(0, 5).forEach((song) => {
    const songBox = document.createElement("div");
    songBox.classList.add("each-content");

    songBox.innerHTML = `<img src="${song.image}" alt="" />
        <div class="content-teks">
        <h4>${song.title}</h4>
        <h5>${song.artist}</h5>
        </div>`;

    contentGroup.appendChild(songBox);
    
    songBox.addEventListener("click", function () {
      playSong(song);
    });

  });
}

function displaySongRecommendation() {
  const contentGroupRecommendation = document.getElementById(
    "content-group-recommendation"
  );

  songData.forEach((song) => {
    const songBox = document.createElement("div");
    songBox.classList.add("each-content");

    songBox.innerHTML = `<img src="${song.image}" alt="" />
        <div class="content-teks">
        <h4>${song.title}</h4>
        <h5>${song.artist}</h5>
        </div>`;

    contentGroupRecommendation.appendChild(songBox);

    songBox.addEventListener("click", function () {
      playSong(song);
    });
  });
}

// JQUERY ANIMATION

$("#button-slider-left").on("click", function () {
  const $container = $("#content-group-recommendation");
  const $card = $container.find(".each-content").first();
  const cardWidth = $card.width();
  const scrollAmount = cardWidth + 40;

  $container.animate({ scrollLeft: "-=" + scrollAmount }, 300);
});

$("#button-slider-right").on("click", function () {
  const $container = $("#content-group-recommendation");
  const $card = $container.find(".each-content").first();
  const cardWidth = $card.width();
  const scrollAmount = cardWidth + 40;

  $container.animate({ scrollLeft: "+=" + scrollAmount }, 300);
});


// JavaScript native

// document.getElementById("button-slider-left").addEventListener("click", function () {
//   const container = document.getElementById("content-group-recommendation");
//   const card = container.querySelector(".each-content");
//   const scrollAmount = card.offsetWidth + 40; // 40 adalah gap antar card
//   container.scrollLeft -= scrollAmount;
// });

// document.getElementById("button-slider-right").addEventListener("click", function () {
//   const container = document.getElementById("content-group-recommendation");
//   const card = container.querySelector(".each-content");
//   const scrollAmount = card.offsetWidth + 40; // 40 adalah gap antar card
//   container.scrollLeft += scrollAmount;
// });


// -----------------------------------------------------------------

// document
//   .getElementById("button-slider-left")
//   .addEventListener("click", function () {
//     const container = document.getElementById("content-group-recommendation");
//     container.scrollLeft -= 220;
//   });

// document
//   .getElementById("button-slider-right")
//   .addEventListener("click", function () {
//     const container = document.getElementById("content-group-recommendation");
//     container.scrollLeft += 220;
//   });

  // -- JAVASCRIPT FOR SCROLLING --

  
