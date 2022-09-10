// add payment method using a select element on the html

//object constructor
function User(email,password,name,age,gender,address,phone,color,payment) {
    this.email=email;
    this.password=password;
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.address=address;
    this.phone=phone;
    this.color=color;
    this.payment=payment;
}

//getting the values from the inputs


function register() {
    let txtEmail = $("userEmail").val();
    let txtPassword = $("userPassword").val();
    let txtName = $("#userName").val();
    let txtAge = $("#userAge").val();
    let txtGender = $("#userGender").val();
    let txtAddress = $("#userAddress").val();
    let txtPhone = $("#userPhone").val();
    let txtPayment = $("#userPayment").val();
    let selColor = $("#userColor").val();
    
    //create the user obj
    let aUser = new User(txtEmail, txtPassword, txtName, txtAge, txtGender, txtAddress, txtPhone, selColor);
    //display the object in the console

    console.log(aUser);
    //clear the inputs
    $("input").val("");
}



function init() {
    //hook event
}