/* eslint-disable object-shorthand */
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.chatterboxsm.com/',
    headers: { 'Content-Type': 'application/json' }
})

/* GET locations */
async function getLocationByUserID (id) {
    return new Promise(function (resolve, reject) {
        api.get('/locations', {
            params: {
                id: id
            }
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* POST locations */
async function inputLocations (data) {
    return new Promise(function (resolve, reject) {
        api.post('/locations', {
            method: 'POST',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

/* PUT locations */
async function updateLocations (data) {
    return new Promise(function (resolve, reject) {
        api.put('/locations', {
            method: 'PUT',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

export {
    getLocationByUserID,
    inputLocations,
    updateLocations
}
