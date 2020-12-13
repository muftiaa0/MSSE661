/**
 * HTML structure
 * Right now we can display the First Name and the last name of the person
 * 
 * <u1>
 *  <li>
 *      <div class="main">
 *          <span class="firstName"
 * 
 */

class PersonInfo {
    info = [];
    constructor() {}

    createInfoParent = () => {
        const ul = document.createElement('ul');
        ul.id = 'person-information';
        ul.className = 'center-text';
        return ul;
    };

    buildWelcomeInfo = (person) => {
        const header = document.createElement('h1');
        header.className = 'welcome-header';

        const firstNameSpan = document.createElement('span');
        firstNameSpan.className = 'first-name';
        firstNameSpan.innerText = person[0].first_name;

        const lastNameSpan = document.createElement('span');
        lastNameSpan.className = 'last-name';
        lastNameSpan.innerText = person[0].last_name;

        var welcomeMessage = document.createTextNode("Welcome, ");
        var space = document.createTextNode(" ");

        header.appendChild(welcomeMessage);
        header.appendChild(firstNameSpan);
        header.appendChild(space);
        header.appendChild(lastNameSpan);
        return(header);
    }

    generateError = (message) => {
        const div = document.createElement('div');
        const text = document.createTextNode(message);
        div.id = 'error-message';
        div.className = 'center-text';
        div.appendChild(text);
        return div;
    }

    generateInfo = async () => {
        const person = await getPerson();
        const div = document.getElementById('person');
        const loadingDiv = div.childNodes[1];

        if (person.length) {
            this.info = person;
            const ul = this.createInfoParent();
            const header = this.buildWelcomeInfo(person);
            ul.appendChild(header);
            div.replaceChild(ul, loadingDiv);
        } else {
            const errDiv = this.generateError(person.msg);
            div.replaceChild(errDiv, loadingDiv);
        }
    }
}

const inst = new PersonInfo();

(async () => {
    inst.generateInfo();
})();