const PERSON_API = `${BASE_API_URL}/person/me`;

class PersonService {
    getPerson = () => _get(PERSON_API, DEFAULT_OPTIONS_PLUS_AUTH);
    updatePW = (formData) => _put(`${PERSON_API}/updatePassword`, formData, DEFAULT_OPTIONS_PLUS_AUTH);
    deletePerson = () => _delete(`${PERSON_API}/delete`, OPTIONS_ONLY_AUTH);
    }

const personService = new PersonService;
