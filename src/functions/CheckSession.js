export default function checkSession() {
    const userInfo = sessionStorage.getItem("userInfo");
    return !!userInfo;
}
