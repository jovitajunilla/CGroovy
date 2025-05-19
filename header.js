window.addEventListener("load", function() {
    // console.log(localStorage.getItem("user"));
    let username = localStorage.getItem("user");
    let usernameSplit = username.split(" ");
    
    let container = document.getElementById("username");
    if(username){
        container.innerHTML = usernameSplit[0];
        // console.log(container.innerHTML);
    }else{
        container.innerHTML = "User";
    }

    //membuat dropdown mengikuti posisi menu di atasnya, 
    // jadi jika nama user yang register panjang lengthnya, 
    // dropdown tidak akan terganggu
    const menuElement = document.querySelector(".menu");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const menuRect = menuElement.getBoundingClientRect();
    const menuRight = menuRect.right;
    dropdownMenu.style.right = `${window.innerWidth - menuRight}px`;

});