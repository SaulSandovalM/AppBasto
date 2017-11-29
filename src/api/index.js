const URL = 'https://still-harbor-68517.herokuapp.com/mobileprojects/';
export default () =>{
    return fetch(URL)
        .then(response => Promise.all([response, response.json()]))
}