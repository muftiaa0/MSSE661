const doLogin = async (e) => {
    e.preventDefault();
    const username = document.getElementById("formInputUsername").value;
    const password = document.getElementById("formInputPassword").value;

    const res = await login({ username, password });

    console.log(res);
    if (res.auth) {
    const { auth, access_token, refresh_token } = res;

    setStorage('isAuth', auth);
    setStorage('access_token', access_token);
    setStorage('refresh_token', refresh_token);

    window.location.href = 'home.html';
    } else {
      window.location.href = '/';
    }
};

const createPerson = async (e) => {
    e.preventDefault();
    const username = document.getElementById('formInputUsernameReg').value;
    const password = document.getElementById('formInputPasswordReg').value;

    const first_name = document.getElementById('formInputFirstNameReg').value;
    const last_name = document.getElementById('formInputLastNameReg').value;

    const res = await create({ username, password, first_name, last_name });

    window.location.href = 'index.html';
};

const doLogout = (e) => {
  e.preventDefault();
  logout();
  window.location.href ='/';
}


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
