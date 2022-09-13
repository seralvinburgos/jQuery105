// add payment method using a select element on the html

//object constructor
function User(email,password,firstName,lastName,age,gender,address,phone,color,payment) {
    this.email=email;
    this.password=password;
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.gender=gender;
    this.address=address;
    this.phone=phone;
    this.color=color;
    this.payment=payment;
}

function isValid(user) {
    let valid = true;

    if(user.email == "" || user.password == "" || user.firstName == "" || user.gender == "" || user.address == "" || user.phone == "" || user.color == "" || user.payment == "") {
        valid = false;
        alert("Please enter all required fields");
    }
    return valid
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
    let aUser = new User(txtEmail,txtPassword,txtFirstName,txtLastName,txtAge,txtGender,txtAddress,txtPhone,selColor,selPayment);
    //display the object in the console
    if(isValid(aUser)) {
        saveUser(aUser);
        //clear the inputs
        $("input").val("");
    }
}

function init() {
    //hook event
    $("#btnSave").on("click",register);
    $("h1").on("click",function(){
        $("nav").hide();
    });

    $(".form-container").hide(); 
    $("#btnShowForm").on("click",function(){
        //$(".form-container").show();
        $(".form-container").slideDown(1000);
    });

    $("#btnHideForm").on("click",function(){
        $(".form-container").slideUp(500);
    });
}
window.onload=init;