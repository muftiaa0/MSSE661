const BASE_API_URL = 'http://localhost:3000/api';
const AUTH_API = `${BASE_API_URL}/auth`;
const PERSON_API = `${BASE_API_URL}/person`;

function create(formData) {
    return _post(`${AUTH_API}/createPerson`, formData)
}

function login(formData) {
    return _post(`${AUTH_API}/login`, formData);
}