function login() {
  console.log("Logging function");
  //get the values from email and password
  let password = $("#userPassword").val();
  let userEmail = $("#userEmail").val();
  //flag
  let flag = true;
  //get the user from local storage
  let users = readUsers();
  //travel the array
  for (let i = 0; i < users.length; i++) {
    //compare the credentials
    let user = users[i];
    if (user.password == password && user.email == userEmail) {
      //redirect user to users.html
      console.log("Welcome");
      window.location = "users.html";
    } else {
      flag = false;
    }
  }
  //display the msg invalid credentials
  if (!flag) {
    $("#alert-error").removeClass("hide");
    setTimeout(function () {
      $("#alert-error").addClass("hide");
    }, 3000);
  }
}

function init() {
  $("#loginBtn").click(login);

  $(".form-container").hide();
  $("#btnLogin").on("click", function () {
    //$(".form-container").show();
    $(".form-container").slideDown(500);
  });

  $("#btnHideForm").on("click", function () {
    $(".form-container").slideUp(500);
  });
}
window.onload = init;
