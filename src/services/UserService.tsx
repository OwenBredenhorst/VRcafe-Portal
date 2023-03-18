
// const BASE_URL = process.env.REACT_APP_API;
const BASE_URL = "http://localhost:8089/api";

export function getAllUser() {
    return fetch(BASE_URL+'/users')
        .then(response => response.json())
        .catch(error => console.error(error));
}


export function getLoginInfo(email: string, password: string) {
    return fetch(BASE_URL+'/users/' + email +"/" + password )
        .then(response => response.json())
        .catch(error => console.error(error));
}



export function sendLoginInfo(username: string, password: string, email: string, lastname: string, firstname: string) {
    const user = {
        firstName: firstname,
        lastName: lastname,
        username: username,
        email: email,
        password: password,
        img: "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
    };

    return fetch(BASE_URL + '/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.error(error));
}




