const doLogin = async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const res = await login({ username, password });

    const { auth, access_token, refresh_token } = res;

    setStorage('isAuth', auth);
    setStorage('access_token', access_token);
    setStorage('refresh_token', refresh_token);

    window.location.href = 'home.html';
};

const createPerson = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const first_name = document.getElementById('first-name').value;
    const last_name = document.getElementById('last-name').value;

    const res = await create({ username, password, first_name, last_name });

    window.location.href = 'index.html';
};

(() => {
    if (storageHasData()) {
      const isAuth = getStorage('isAuth');
      if (!isAuth) {
        document.getElementById('logout').style.display = 'none';
      } else {
        document.getElementById('logout').style.display = 'block';
      }
    }
  })();