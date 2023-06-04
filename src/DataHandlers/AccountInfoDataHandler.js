import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_URL, // "https://api.chatterboxsm.com/", // || "http://localhost:4000",
    headers: { 'Content-Type': 'application/json' }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const mailer = axios.create({
    baseURL: process.env.MAILER_URL, // || "http://localhost:80"
});

async function sendVerifyMail(email, username, code) {
    mailer.get('/', {
        params: {
            action: 'verifyUser',
            e: email,
            un: username,
            vc: code
        }
    })
    .then((response) => {
        console.log('Response:', response.data);
    });
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
        api.get('users', {
            params: {
                action: 'getCountUsersOnline'
            }
        })
        .then(row => resolve(row))
        .catch(err => reject(err));
    })
}

/* POST user */
async function inputUserInfo(data) {
    try {
        const response = await api.post('/users', {
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
        });
        
        let result = response.data;

        // handle success
        sendVerifyMail(data.email, data.username, data.verificationcode);
        console.log('DataHandler: api POST', result);
        return result;
    } catch (err) {

        // handle error
        console.log(err);
        return err;
    }
};

/* PUT user */
async function updateUserInfo(data) {
    try {
        const response = await api.put('/users', {
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
        });

        // handle success
        console.log('DataHandler: api PUT', response);
        return response;
    } catch (err) {

        // handle error
        console.log(err);
        return err;
    }
};

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