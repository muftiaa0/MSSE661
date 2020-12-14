(() => {
    if (!authService.isAuth() || authService.isTokenExpired()) {
        alert('Please login again.');
        authService.logout();
        window.location.href = '/';
    }
})();