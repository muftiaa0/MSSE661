(() => {
    const isAuth = getStorage('isAuth');
    if (!isAuth) {
        logout();
        alert('Please login again.');
        window.location.href = '/index.html';
    }
})();