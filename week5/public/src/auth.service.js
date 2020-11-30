const AUTH_API = `${BASE_API_URL}/auth`;

console.log(AUTH_API);

const create = (formData) => _post(`${AUTH_API}/createPerson`, formData);
const login = (formData) => _post(`${AUTH_API}/login`, formData);


const logout = () => {
    clearStorage('isAuth');
    clearStorage('access_token');
    clearStorage('refresh_token');
}