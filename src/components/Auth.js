export const BASE_URL = 'https://auth.nomoreparties.co';

export const signup = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({password, email})
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    
}

export const signin = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({password, email})
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
}

export const checkValidity = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
}