let nameIsValid = false;
let ageIsValid = false;
let genderIsValid = false;
let emailIsValid = false;
let passwordIsValid = false;



    function nameValidation(){
        let nameInput = document.getElementById("nameFld").value;
        if(nameInput.length<8){
            document.getElementById("errorMessage").innerHTML = "*Name must be more 8 character or more"
            document.getElementById("nameFld").style.border = "1px solid red"
            nameIsValid = false;
        }else{
            document.getElementById("errorMessage").innerHTML = ""
            document.getElementById("nameFld").style.border = "1px solid #BEBEBE"
            nameIsValid= true;
        } 
    }

    function ageValidation(){
        let age = document.getElementById("ageFld").value;
        if(age<13){
            document.getElementById("errorMessage").innerHTML = "*Age must be older than 13"
            document.getElementById("ageFld").style.border = "1px solid red"

            ageIsValid = false;
        }else{
            document.getElementById("errorMessage").innerHTML = ""
            document.getElementById("ageFld").style.border = "1px solid #BEBEBE"            
            ageIsValid= true;
        }
    }

    function emailValidation(){
        let email = document.getElementById("emailFld").value;
        if(!(email.endsWith("@gmail.com"))){
            document.getElementById("errorMessage").innerHTML = "*Email must ends with @gmail.com"
            document.getElementById("emailFld").style.border = "1px solid red"
            emailIsValid = false;
        }else{
            document.getElementById("errorMessage").innerHTML = ""
            document.getElementById("emailFld").style.border = "1px solid #BEBEBE"
            emailIsValid= true;
        }
    }

    function passwordValidation(){
        let password = document.getElementById("passFld").value;
        if(password.length<8 ){
            document.getElementById("errorMessage").innerHTML = "*password must be 8 character or more"
            document.getElementById("passFld").style.border = "1px solid red"
        }else{
            document.getElementById("errorMessage").innerHTML = ""
            document.getElementById("passFld").style.border = "1px solid #BEBEBE"
        }
    }

    function rePassValidation(){
        let password = document.getElementById("passFld").value;
        let rePass = document.getElementById("rePassFld").value;
        if(!(password == rePass)){
            document.getElementById("errorMessage").innerHTML = "*password must match"
            document.getElementById("rePassFld").style.border = "1px solid red"
            passwordIsValid = false;
        }else{
            document.getElementById("errorMessage").innerHTML = ""
            document.getElementById("rePassFld").style.border = "1px solid #BEBEBE"
            passwordIsValid= true;
        }
    }

    function genderValidation(){
        let femaleChoice = document.getElementById("femaleBtn");
        let maleChoice = document.getElementById("maleBtn");

        if((femaleChoice.checked || maleChoice.checked)){
            document.getElementById("errorMessage").innerHTML = ""
            // document.getElementsByName("gender").style.border = "1px solid red"
            genderIsValid = true;
        }else{
            document.getElementById("errorMessage").innerHTML = "*Gender must be chosen"
            // document.getElementsByName("gender").style.border = "1px solid #BEBEBE"
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