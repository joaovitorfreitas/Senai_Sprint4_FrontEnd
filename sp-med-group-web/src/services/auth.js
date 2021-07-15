export const userAuth = () => localStorage.getItem('@jwt') !== null;


export const parseJwt = () => {
    let base64 = localStorage.getItem('@jwt').split('.')[1];

    return JSON.parse(window.atob(base64));
}
