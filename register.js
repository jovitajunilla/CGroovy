let nameIsValid = false;
let ageIsValid = false;
let genderIsValid = false;
let emailIsValid = false;
let passwordIsValid = false;



    function nameValidation(){
        let nameInput = document.getElementById("nameFld").value;
        if(nameInput.length<8){
            document.getElementById("errorMessage").innerHTML = "*Name must be more 8 character or more"
            nameIsValid = false;
        }else{
            document.getElementById("errorMessage").innerHTML = ""
            nameIsValid= true;
        } 
    }

    function ageValidation(){
        let age = document.getElementById("ageFld").value;
        if(age<13){
            document.getElementById("errorMessage").innerHTML = "*Age must be older than 13"
            ageIsValid = false;
        }else{
            document.getElementById("errorMessage").innerHTML = ""
            ageIsValid= true;
        }
    }

    function emailValidation(){
        let email = document.getElementById("emailFld").value;
        if(!(email.endsWith("@gmail.com"))){
            document.getElementById("errorMessage").innerHTML = "*Email must ends with @gmail.com"
            emailIsValid = false;
        }else{
            document.getElementById("errorMessage").innerHTML = ""
            emailIsValid= true;
        }
    }

    function passwordValidation(){
        let password = document.getElementById("passFld").value;
        if(password.length<8 ){
            document.getElementById("errorMessage").innerHTML = "*password must be 8 character or more"
        }else{
            document.getElementById("errorMessage").innerHTML = ""
        }
    }

    function rePassValidation(){
        let password = document.getElementById("passFld").value;
        let rePass = document.getElementById("rePassFld").value;
        if(!(password == rePass)){
            document.getElementById("errorMessage").innerHTML = "*password must match"
            passwordIsValid = false;
        }else{
            document.getElementById("errorMessage").innerHTML = ""
            passwordIsValid= true;
        }
    }

    function genderValidation(){
        let femaleChoice = document.getElementById("femaleBtn");
        let maleChoice = document.getElementById("maleBtn");

        if((femaleChoice.checked || maleChoice.checked)){
            document.getElementById("errorMessage").innerHTML = ""
            genderIsValid = true;
        }else{
            document.getElementById("errorMessage").innerHTML = "*Gender must be chosen"
            genderIsValid= false;
        }

    }


function checkValid(){
    if(nameIsValid==true && ageIsValid ==true && genderIsValid==true && emailIsValid==true && passwordIsValid==true){
        return true;
    }else{
        return false;
    }
}