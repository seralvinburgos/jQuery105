const KEY = "user";
function saveUser(user) {
    let oldData = readUsers(); // [] [users]
    oldData.push(user);
    let val = JSON.stringify(oldData); //convert into a string
    localStorage.setItem(KEY,val); //send the data to the local storage
}

function readUsers() {
    let data=localStorage.getItem(KEY);//get the values from the local storage
    console.log(data);
    if(!data) {//is not data?
        return []; // creating the array (first time)
    }else{ //we have data
        let list = JSON.parse(data); //return the string to an object
        console.log(list); 
        return list;
    }
}