const updatePassword = async (e) => {
  e.preventDefault();
  const password = document.getElementById('formInputPasswordUpdate').value;

  try {
    const res = await personService.updatePW({ password });
    authService.logout();
    window.location.href = '/';
  } catch (err) {
    alert('Failed to update password. Please try again.');
  }
}

const doDelete = async (e) => {
  e.preventDefault();
  try {
    const res = await personService.deletePerson();
    authService.logout();
    window.location.href = '/';
  } catch (err) {
    alert('Failed to delete user. Try again.');
  }
}

const updatePerson = async (e) => {
  e.preventDefault;

  const first_name = document.getElementById('formInputNewFirstName').value;
  const last_name = document.getElementById('formInputNewLastName').value;

  if (!first_name && !last_name) {
    alert('Must input a first name or last name');
  } else {
    try {
      const res = await builder.updateInfo({ first_name, last_name });



    } catch (err) {
      console.log(err);
      alert('Failed to update user. Try Again')
    }
  }
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