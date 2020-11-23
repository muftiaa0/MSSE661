const doLogin = function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username);
    console.log(password);

    login({
        username: username,
        password: password
    }).then(function(res) {
        window.location.href = 'home.html';
    });
};

const createPerson = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    create({
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName
    }).then(function(res) {
        window.location.href = 'home.html';
    });
};

/** 
class Authentication {
    username;
    password;
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class Person {
    authentication;
    firstName;
    lastName;
    dob; // needs to be a date later on. 
    
    constructor(username, password, firstName, lastName, dob) {
    // TODO: we need to check to see if the authentication for this username exists
    // if it does there's no point in creating a new reference object.
    this.authentication = new Authentication(username, password);
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}
}

console.log(new Person('amufti', 'password', 'Azeem', 'Mufti', '04/14/1995'))
*/