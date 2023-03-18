export function checkSession() {
    const userInfo = sessionStorage.getItem('userInfo');

    if (!userInfo) {
        window.location.href = "/login";
    }
}

export function sessionClear() {
    sessionStorage.clear()
    window.location.href = "/login";
}