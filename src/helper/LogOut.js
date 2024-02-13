export const handleLogOut = () => {
    localStorage.removeItem("token");

    setTimeout(function () {
        window.location.href = '/';
    }, 1700);
    }
