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
