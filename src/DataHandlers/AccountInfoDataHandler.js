import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.chatterboxsm.com/",
    headers: { 'Content-Type': 'application/json' }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const mailer = axios.create({
    baseURL: "https://api.chatterboxsm.com/mailer"
});

function sendVerifyMail(email, username, code) {
    const result = mailer.get('/', {
        params: {
            action: 'verifyUser',
            e: email,
            un: username,
            vc: code
        }
    })
    
    console.log(`AccountInfoDataHandler.js sendVerifyMail result`, result);
}

/* GET user by id */
async function getUserInfoById(id) {
    return new Promise(function(resolve, reject) {
        api.get('/users', {
            params: {
                action: 'getUserByID',
                id: id
            }
        })
        .then(row => resolve(row))
        .catch(err => reject(err));
    });
}

/* GET user by username and password */
async function getUserInfoByUserAndPass(username, password) {
    return new Promise(function(resolve, reject) {
        api.get('/users', {
            params: {
                action: 'getUserByUsernameAndPassword',
                username: username,
                password: password
            }
        })
        .then(row => resolve(row))
        .catch(err => reject(err));
    });
}

/* GET user count */
async function getUserCount() {
    return new Promise(function(resolve, reject) {
        api.get('/users', {
            params: {
                action: 'getCountUsers'
            }
        })
        .then(row => resolve(row))
        .catch(err => reject(err));
    });
}

/* GET user count isLoggedIn */
async function getUserCountIsLoggedIn() {
    return new Promise(function(resolve, reject) {
        api.get('/users', {
            params: {
                action: 'getCountUsersOnline'
            }
        })
        .then(row => resolve(row))
        .catch(err => reject(err));
    });
}

/* POST user */
async function inputUserInfo(data) {
    await api.post('/users', {
        method: 'POST',
        data: {
            firstname: data.firstname,
            middlename: data.middlename,
            lastname: data.lastname,
            screenname: data.screenname,
            email: data.email,
            agerange: data.agerange,
            gender: data.gender,
            username: data.username,
            password: data.password,
            description: data.description,
            verificationcode: data.verificationcode,
            validated: data.validated
        }
    })
    .then(result => console.log('AccountInfoDataHandler inputUserInfo result', result))
    .catch(err => console.log('AccountInfoDataHandler inputUserInfo err', err));

    sendVerifyMail(data.email, data.username, data.verificationcode)
}

/* PUT user */
async function updateUserInfo(data) {
    return new Promise(function(resolve, reject) {
        api.put('/users', {
            method: 'PUT',
            data: {
                id: data.id,
                firstname: data.firstname,
                middlename: data.middlename,
                lastname: data.lastname,
                screenname: data.screenname,
                email: data.email,
                agerange: data.agerange,
                gender: data.gender,
                username: data.username,
                password: data.password,
                description: data.description,
                verificationcode: data.verificationcode,
                validated: data.validated,
                isLoggedIn: data.isLoggedIn
            }
        })
        .then(row => resolve(row))
        .catch(err => reject(err));
    });
}

export {
    getRandomInt,
    getUserInfoById,
    getUserInfoByUserAndPass,
    getUserCount,
    getUserCountIsLoggedIn,
    inputUserInfo,
    updateUserInfo,
    sendVerifyMail
};