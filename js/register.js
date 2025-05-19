function checkValid() {
  let nameValid = nameValidation();
  let ageValid = ageValidation();
  let emailValid = emailValidation();
  let passwordValid = passwordValidation();
  let rePassValid = rePassValidation();
  let genderValid = genderValidation();

  if (
    nameValid &&
    ageValid &&
    emailValid &&
    passwordValid &&
    rePassValid &&
    genderValid
  ) {
    let nameInput = document.getElementById("nameFld").value;
    localStorage.setItem("user", nameInput);
    window.location.href = "../pages/home.html";
  }
}

function nameValidation() {
  let nameInput = document.getElementById("nameFld").value;
  if (nameInput.length < 8) {
    document.getElementById("errorMessage").innerHTML =
      "*Name must be more 8 character or more";
    document.getElementById("nameFld").style.border = "1px solid red";
    return false;
  } else {
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("nameFld").style.border = "1px solid #BEBEBE";
    return true;
  }
}

function ageValidation() {
  let age = document.getElementById("ageFld").value;
  if (age < 13) {
    document.getElementById("errorMessage").innerHTML =
      "*Age must be older than 13";
    document.getElementById("ageFld").style.border = "1px solid red";
    return false;
  } else {
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("ageFld").style.border = "1px solid #BEBEBE";
    return true;
  }
}

function emailValidation() {
  let email = document.getElementById("emailFld").value;
  if (!email.endsWith("@gmail.com")) {
    document.getElementById("errorMessage").innerHTML =
      "*Email must ends with @gmail.com";
    document.getElementById("emailFld").style.border = "1px solid red";
    return false;
  } else {
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("emailFld").style.border = "1px solid #BEBEBE";
    return true;
  }
}

function passwordValidation() {
  let password = document.getElementById("passFld").value;
  if (password.length < 8) {
    document.getElementById("errorMessage").innerHTML =
      "*password must be 8 character or more";
    document.getElementById("passFld").style.border = "1px solid red";
    return false;
  } else {
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("passFld").style.border = "1px solid #BEBEBE";
    return true;
  }
}

function rePassValidation() {
  let password = document.getElementById("passFld").value;
  let rePass = document.getElementById("rePassFld").value;
  if (!(password == rePass)) {
    document.getElementById("errorMessage").innerHTML = "*password must match";
    document.getElementById("rePassFld").style.border = "1px solid red";
    return false;
  } else {
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("rePassFld").style.border = "1px solid #BEBEBE";
    return true;
  }
}

function genderValidation() {
  let femaleChoice = document.getElementById("femaleBtn");
  let maleChoice = document.getElementById("maleBtn");
  if (femaleChoice.checked || maleChoice.checked) {
    document.getElementById("errorMessage").innerHTML = "";
    return true;
  } else {
    document.getElementById("errorMessage").innerHTML =
      "*Gender must be chosen";
    return false;
  }
}
