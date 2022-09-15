function displayUsers(usersArray) {
    for(let i=0; i < usersArray.length; i++) {  //travel the array (for)
        //get the user
        let user = usersArray[i];
        //create the html row element
        row = `
            <tr>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td>${user.gender}</td>
                <td>${user.address}</td>
                <td>${user.phone}</td>
                <td style="background-color: ${user.color};"></td>
                <td>${user.payment}</td>
            </tr>
        `;
        $("#usersTable").append(row); //append the row into the table
    }
}

function init() {
    console.log("Listing...");
    let users = readUsers();
    displayUsers(users);
}
window.onload=init;