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


(async () => {
    const person = await getPerson();
    console.log(person);
    console.log(person.first_name);


    if (person.length) {
        const div = document.getElementById('person');
        const loadingDiv = div.childNodes[1];
        
        const ul = document.createElement('ul');

        div.replaceChild(ul, loadingDiv);

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
    };
})();