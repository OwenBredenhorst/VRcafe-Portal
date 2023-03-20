export default function sessionClear() {
    sessionStorage.clear()
    window.location.href = "/login";
}