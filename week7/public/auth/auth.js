const doLogin = async (e) => {
  e.preventDefault();
  const username = document.getElementById("formInputUsername").value;
  const password = document.getElementById("formInputPassword").value;

  try {
    const res = await authService.login({ username, password });

    if (res.auth) { 
      const { auth, access_token, refresh_token, expires_in } = res;
      const expiryDate = authService.setExpiration(expires_in);

      setStorage('isAuth', auth);
      setStorage('expires_in', expiryDate)
      setStorage('access_token', access_token);
      setStorage('refresh_token', refresh_token);
      

      window.location.href = './person/home.html';
    } else {
      window.location.href = '/';
      alert('Invalid Password');
    }

  } catch (err) {
    alert('Failed to login. Please try again.');
  }
};

const createPerson = async (e) => {
  e.preventDefault();
  const username = document.getElementById('formInputUsernameReg').value;
  const password = document.getElementById('formInputPasswordReg').value;

  const first_name = document.getElementById('formInputFirstNameReg').value;
  const last_name = document.getElementById('formInputLastNameReg').value;

  try {
    console.log("hello");
    const res = await authService.create({ username, password, first_name, last_name });
    window.location.href = '/';
  } catch (err) {
    alert('Failed to create new person. Please try again')
  }
};

const doLogout = (e) => {
  e.preventDefault();
  authService.logout();
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

