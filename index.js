// Write Javascript Here
const baseUrl = "http://localhost:3000/users";
const headers = {
    'Content-type': 'application/json; charset=UTF-8'
};



getUsersRequest().then(users =>{
    //This function has been implemented already for you
    const tableEl = document.getElementById("table");
    for (const user of users) {
        tableEl.appendChild(createTableRow(user))
    }
})








function addNewUser(){
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
  var row = table.insertRow(table.lastChild);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "Name";
  cell2.innerHTML = "ID";
  cell2.innerHTML = `<a href=# onClick="editUser(this)">Edit</a>
  <a href=# onClick="deleteUser(this)">Delete</a>`;
}



function editUser(id, userName){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("id").value = selectedRow.cells[1].innerHTML;
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.id;
}

function deleteUser(id){
    var i = id.parentNode.parentNode.rowIndex;
  document.getElementById("table").deleteRow(i);
    }






//CRUD HELPER METHODS
function createUserRequest(user){
    return fetch(baseUrl, {
        method: 'POST',
        headers: headers,
        body:JSON.stringify(user),
    }).then(response => response.json())
}


function  getUsersRequest()  {
    return fetch(baseUrl, {
        method: 'GET',
    }).then(response => response.json())
}

function  deleteUserRequest(id)  {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    }).then(response => response.json())
}


function updateUserRequest(user){
    return fetch(`${baseUrl}/${user.id}`, {
        method: 'PATCH',
        headers: headers,
        body:JSON.stringify(user),
    }).then(response => response.json())
}


//HELPER METHODS
function createTableRow(user){
    var tr = document.createElement("tr");
    tr.innerHTML = `<td>${user.name}</td> <td><a href="#" onclick="editUser(${user.id}, '${user.name}')">Edit</a> / <a href="#" onclick="deleteUser(this)">Delete</a></td>`;
    return tr;
}
