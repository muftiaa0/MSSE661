const PERSON_API = `${BASE_API_URL}/person/me`;

const getPerson = () => _get(PERSON_API, DEFAULT_OPTIONS_PLUS_AUTH);
const updatePW = (formData) => _put(`${PERSON_API}/updatePassword`, formData, DEFAULT_OPTIONS_PLUS_AUTH);
const deletePerson = () => _delete(`${PERSON_API}/delete`, OPTIONS_ONLY_AUTH);
const updateInfo = (formData) => _put(`${PERSON_API}/updatePerson`, formData, DEFAULT_OPTIONS_PLUS_AUTH);