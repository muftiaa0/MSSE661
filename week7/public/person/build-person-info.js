class PersonInfo {
    info = [];
    personService;

    constructor(personService) {
        this.personService = personService;
    }

    init() {
        this.render();
    }
    
    _renderWelcomeMessage = (person) => {
        const div = document.getElementById('person');
        const loadingDiv = div.childNodes[0];
        const fragment = document.createDocumentFragment();
        const ul = document.createElement('ul');
        
        ul.id = 'person-information';
        ul.className = 'center-text';
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
        
        ul.appendChild(header);
        fragment.appendChild(ul)
        div.replaceChild(fragment, loadingDiv);
    }

    _renderErrorMsg = (message) => {
        const div = document.getElementById('person');
        const loadingDiv = div.childNodes[0];
        const text = document.createTextNode(message);
        const newDiv = document.createElement('div');
        newDiv.id = 'error-message';
        newDiv.className = 'center-text';
        newDiv.appendChild(text);
        div.replaceChild(newDiv, loadingDiv);
        return div;
    }

    updateInfo = async (formData) => {
        _put(`${PERSON_API}/updatePerson`, formData, DEFAULT_OPTIONS_PLUS_AUTH);
        const person = await this.personService.getPerson();
        this._renderWelcomeMessage(person);
    };

    render = async () => {
        const person = await this.personService.getPerson();
        try {
            if (person.length) {
                this.info = person;
                this._renderWelcomeMessage(person);
            } else {
                this._renderErrorMsg(person.msg);
            }
        } catch (err) {
            alert(`Error: ${err.message}`);
        }
    };
}


