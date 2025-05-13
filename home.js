import {songData} from "./song-data.js";

displaySong();
displaySongRecommendation();

function displaySong(){
    const contentGroup = document.getElementById("content-group");
    // const contentGroupRecommendation = document.getElementById("content-group-recommendation");
    
    songData.slice(0, 5).forEach(song => {
        const songBox = document.createElement("div");
        songBox.classList.add("each-content");
        
        songBox.innerHTML = `<img src="${song.image}" alt="" />
        <div class="content-teks">
        <h4>${song.title}</h4>
        <h5>${song.artist}</h5>
        </div>`;
        
        // const songBoxClone = songBox.cloneNode(true);
        
        contentGroup.appendChild(songBox);
        // contentGroupRecommendation.appendChild(songBoxClone);
        
        songBox.addEventListener("click", function(){
            localStorage.setItem("selectedSong", JSON.stringify(song));
            window.location.href="song-detail.html";
        });
        
        // songBoxClone.addEventListener("click", function(){
            //     localStorage.setItem("selectedSong", JSON.stringify(song));
            //     window.location.href="song-detail.html";
            // });
            
    });    
}
    
function displaySongRecommendation(){
    const contentGroupRecommendation = document.getElementById("content-group-recommendation");

    songData.forEach(recSong => {
        const songBox = document.createElement("div");
        songBox.classList.add("each-content");

        songBox.innerHTML = `<img src="${recSong.image}" alt="" />
        <div class="content-teks">
        <h4>${recSong.title}</h4>
        <h5>${recSong.artist}</h5>
        </div>`;

        contentGroupRecommendation.appendChild(songBox);

        songBox.addEventListener("click", function(){
            localStorage.setItem("selectedSong", JSON.stringify(song));
            window.location.href="song-detail.html";
        });
        
    })

}

// contentGroup.innerHTML = `<div class="each-content">
//               <img src="img/gambar1-bestseller.png" alt="" />
//               <div class="content-teks">
//                 <h4>Talking To The Moon</h4>
//                 <h5>Bruno Mars</h5>
//               </div>
//             </div>`