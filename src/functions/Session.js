export default function isLoggedIn() {
    const sessionData = sessionStorage.getItem('userInfo');
    return sessionData !== null;
}