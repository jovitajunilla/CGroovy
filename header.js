document.addEventListener('DOMContentLoaded', function(){
    console.log(localStorage.getItem("user"));
    let username = localStorage.getItem("user");
    
    let container = document.getElementById("username");

    if(username){

        container.innerHTML = username;
        console.log(container.innerHTML);
    }else{
        container.innerHTML = "Register";
    }
});


        // let nameValidation = nameValidation();
        // let name = nameValidation.nameInput;
        // console.log(localStorage.getItem("user"));
        // localStorage.setItem("user", name);