const updatePassword = async (e) => {
    e.preventDefault();
    const password = document.getElementById('formInputPasswordUpdate').value;
  
    const res = await updatePW({ password });
    logout();
    window.location.href = '/';

      
  }

  const doDelete = async (e) => {
      e.preventDefault();
      const res = await deletePerson();
      logout();
      window.location.href = '/';
  }

  const updatePerson = async (e) => {
      e.preventDefault;

      const first_name = document.getElementById('formInputNewFirstName').value;
      const last_name = document.getElementById('formInputNewLastName').value;

      const res = await updateInfo({ first_name, last_name });
      if (res !== null) {
          inst.generateInfo();
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