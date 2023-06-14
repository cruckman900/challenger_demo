/* eslint-disable object-shorthand */
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.chatterboxsm.com/',
    headers: { 'Content-Type': 'application/json' }
})

/* GET foods */
async function getFoodsByUserID (id) {
    return new Promise(function (resolve, reject) {
        api.get('/foods', {
            params: {
                id: id
            }
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* POST foods */
async function inputFoods (data) {
    return new Promise(function (resolve, reject) {
        api.post('/foods', {
            method: 'POST',
            data: data
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* PUT foods */
async function updateFoods (data) {
    return new Promise(function (resolve, reject) {
        api.put('/foods', {
            method: 'PUT',
            data: data
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

export {
    getFoodsByUserID,
    inputFoods,
    updateFoods
}
