// add payment method using a select element on the html

//object constructor
function User(
  email,
  password,
  firstName,
  lastName,
  age,
  gender,
  address,
  phone,
  color,
  payment
) {
  this.email = email;
  this.password = password;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  this.address = address;
  this.phone = phone;
  this.color = color;
  this.payment = payment;
}

function isValid(user) {
  let valid = true;
  if (user.email == "") {
    valid = false;
    $("userEmail").addClass("input-error");
    console.log("Please enter an email");
  }
  if (user.firstName == "") {
    valid = false;
    $("userFirstName").addClass("input-error");
    console.log("Please add a first name");
  }
  if (user.lastName == "") {
    valid = false;
    $("userLastName").addClass("input-error");
    console.log("Please add a last name");
  }
  if (user.phone == "") {
    valid = false;
    $("userPhone").addClass("input-error");
    console.log("Please add a phone number");
  }
  if (user.password.length == 0) {
    valid = false;
    $("userPassword").addClass("input-error");
    console.log("Please enter a password");
  }
  return valid;
}
function validatePass() {
  console.log("Validating password");
  let inputPass = $("#userPassword"); //getting the input #userPassword
  let password = inputPass.val(); //getting the value of the password
  if (password.length < 6) {
    inputPass.css("background-color", "#ff9898");
    console.log("The password is too short");
    displayError("The password is too short");
  } else {
    inputPass.css("background-color", "#98ff9a");
    console.log("The password has the correct extension");
    hideError();
  }
}
function displayError(msg) {
  $("#alert-error").removeClass("hide").text(msg);
}
function hideError() {
  $("#alert-error").addClass("hide"); //hiding the alert area
}

//getting the values from the inputs
function register() {
  let txtEmail = $("#userEmail").val();
  let txtPassword = $("#userPassword").val();
  let txtFirstName = $("#userFirstName").val();
  let txtLastName = $("#userLastName").val();
  let txtAge = $("#userAge").val();
  let txtGender = $("#userGender").val();
  let txtAddress = $("#userAddress").val();
  let txtPhone = $("#userPhone").val();
  let selColor = $("#userColor").val();
  let selPayment = $("#userPayment").val();

  //create the user obj
  let aUser = new User(
    txtEmail,
    txtPassword,
    txtFirstName,
    txtLastName,
    txtAge,
    txtGender,
    txtAddress,
    txtPhone,
    selColor,
    selPayment
  );
  //display the object in the console
  if (isValid(aUser)) {
    hideError();
    saveUser(aUser);
    //clear the inputs
    $("input").val("");
  } else {
    displayError("Please complete all the fields");
  }
}

function init() {
  //hook event
  $("#btnSave").on("click", register);
  //$("h1").on("click",function(){
  //    $("nav").hide();
  //});

  $(".form-container").hide();
  $("#btnShowForm").on("click", function () {
    //$(".form-container").show();
    $(".form-container").slideDown(500);
  });

  $("#btnHideForm").on("click", function () {
    $(".form-container").slideUp(500);
  });

  $("#userPassword").keyup(validatePass);
}
window.onload = init;
