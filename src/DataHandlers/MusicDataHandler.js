/* eslint-disable object-shorthand */
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.chatterboxsm.com/',
    headers: { 'Content-Type': 'application/json' }
})

/* GET music */
async function getMusicByUserID (id) {
    return new Promise(function (resolve, reject) {
        api.get('/music', {
            params: {
                id: id
            }
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* POST music */
async function inputMusic (data) {
    return new Promise(function (resolve, reject) {
        api.post('/music', {
            method: 'POST',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

/* PUT music */
async function updateMusic (data) {
    return new Promise(function (resolve, reject) {
        api.post('/music', {
            method: 'PUT',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

export {
    getMusicByUserID,
    inputMusic,
    updateMusic
}
