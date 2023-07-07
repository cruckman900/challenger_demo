/* eslint-disable object-shorthand */
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.chatterboxsm.com/',
    headers: { 'Content-Type': 'application/json' }
})

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const mailer = axios.create({
    baseURL: 'https://api.chatterboxsm.com/mailer'
})

function sendVerifyMail (email, username, code) {
    mailer.get('/', {
        params: {
            action: 'verifyUser',
            e: email,
            un: username,
            vc: code
        }
    })
}

function sendResetPasswordMail (email, username) {
    mailer.get('/', {
        params: {
            action: 'resetPass',
            e: email,
            un: username
        }
    })
}

/* GET user by id */
async function getUserInfoById (id) {
    return new Promise(function (resolve, reject) {
        api.get('/users', {
            params: {
                action: 'getUserByID',
                id: id
            }
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* GET user by username and password */
async function getUserInfoByUserAndPass (username, password) {
    return new Promise(function (resolve, reject) {
        api.get('/users', {
            params: {
                action: 'getUserByUsernameAndPassword',
                username: username,
                password: password
            }
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* GET user by email and username */
async function getUserInfoByEmailAndUsername (email, username) {
    return new Promise(function (resolve, reject) {
        api.get('/users', {
            params: {
                action: 'getUserByEmailAndUsername',
                email: email,
                username: username
            }
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* GET user count */
async function getUserCount () {
    return new Promise(function (resolve, reject) {
        api.get('/users', {
            params: {
                action: 'getCountUsers'
            }
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

/* GET user count isLoggedIn */
async function getUserCountIsLoggedIn () {
    return new Promise(function (resolve, reject) {
        api.get('/users', {
            params: {
                action: 'getCountUsersOnline'
            }
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

/* POST user */
async function inputUserInfo (data) {
    return new Promise(function (resolve, reject) {
        api.post('/users', {
            method: 'POST',
            data: data
        })
            .then(result => resolve(result))
            .then(sendVerifyMail(data.email, data.username, data.verificationcode))
            .catch(err => reject(err))
    })
}

/* PUT user */
async function updateUserInfo (data) {
    return new Promise(function (resolve, reject) {
        api.put('/users', {
            method: 'PUT',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

/* PATCH user */
async function updateUserPassword (data) {
    return new Promise(function (resolve, reject) {
        api.patch('/users', {
            method: 'PATCH',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

export {
    getRandomInt,
    getUserInfoById,
    getUserInfoByUserAndPass,
    getUserInfoByEmailAndUsername,
    getUserCount,
    getUserCountIsLoggedIn,
    inputUserInfo,
    updateUserInfo,
    updateUserPassword,
    sendVerifyMail,
    sendResetPasswordMail
}
