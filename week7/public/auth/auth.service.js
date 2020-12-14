const AUTH_API = `${BASE_API_URL}/auth`;

class AuthService {

    create = (formData) => _post(`${AUTH_API}/createPerson`, formData, DEFAULT_OPTIONS);
    login = (formData) => _post(`${AUTH_API}/login`, formData, DEFAULT_OPTIONS);
    logout = () => {
        localStorage.clear();
    }

    setExpiration = (maxExpiration) => new Date(new Date().getTime() + maxExpiration * 1000);

    isAuth = () => {
        return getStorage('isAuth');
    }

    isTokenExpired() {
        const expiryDate = getStorage('expires_in');
        const isExpired = expiryDate === new Date();

        if (isExpired) {
            localStorage.clear();
        }
        return isExpired;
    }



}

const authService = new AuthService;