/*function User(email,password) {
    this.email=email;
    this.password=password;
}

function isValid(user) {
    let valid = true;

    if(user.email == "" || user.password == "") {
        valid = false;
        alert("Please enter all required fields");
    }
    return valid
}

function register() {
    let txtEmail = $("#userEmail").val();
    let txtPassword = $("#userPassword").val();
}

let aUser = new User(txtEmail,txtPassword);
    //display the object in the console
    if(isValid(aUser)) {
        saveUser(aUser);
        //clear the inputs
        $("input").val("");
    }
*/
function init() {
    //hook event
    //$("#btnSave").on("click",register);
    //$("h1").on("click",function(){
    //    $("nav").hide();
    //});

    $(".form-container").hide(); 
    $("#btnLogin").on("click",function(){
        //$(".form-container").show();
        $(".form-container").slideDown(500);
    });

    $("#btnHideForm").on("click",function(){
        $(".form-container").slideUp(500);
    });
}
window.onload=init;