// add payment method using a select element on the html

//object constructor
function User(email,password,firstName,lastName,age,gender,address,phone,payment,color) {
    this.email=email;
    this.password=password;
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.gender=gender;
    this.address=address;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
}

//getting the values from the inputs


function register() {
    let txtEmail = $("userEmail").val();
    let txtPassword = $("userPassword").val();
    let txtFirstName = $("#userFirstName").val();
    let txtLastName = $("#userLastName").val();
    let txtAge = $("#userAge").val();
    let txtGender = $("#userGender").val();
    let txtAddress = $("#userAddress").val();
    let txtPhone = $("#userPhone").val();
    let selPayment = $("#userPayment").val();
    let selColor = $("#userColor").val();
    
    //create the user obj
    let aUser = new User(txtEmail,txtPassword,txtFirstName,txtLastName,txtAge,txtGender,txtAddress,txtPhone,selPayment,selColor);
    //display the object in the console

    console.log(aUser);
    //clear the inputs
    $("input").val("");
}

function init() {
    //hook event
}