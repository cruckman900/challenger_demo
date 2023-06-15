/* eslint-disable object-shorthand */
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.chatterboxsm.com',
    headers: { 'Content-Type': 'application/json' }
})

/* GET suggestions */
async function getAllSuggestions () {
    return new Promise(function (resolve, reject) {
        api.get('/suggestions', {
            params: {
                action: 'getAllSuggestions'
            }
        })
            .then(rows => resolve(rows))
            .catch(err => reject(err))
    })
}

async function getSuggestionsByUserID (id) {
    return new Promise(function (resolve, reject) {
        api.get('/suggestions', {
            params: {
                action: 'getSuggestionsByUser'
            }
        })
            .then(rows => resolve(rows))
            .catch(err => reject(err))
    })
}

/* POST suggestions */
async function inputSuggestions (data) {
    return new Promise(function (resolve, reject) {
        api.post('/suggestions', {
            method: 'POST',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

/* PUT suggestions */
async function updateSuggestions (data) {
    return new Promise(function (resolve, reject) {
        api.put('/suggestions', {
            method: 'PUT',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

export {
    getAllSuggestions,
    getSuggestionsByUserID,
    inputSuggestions,
    updateSuggestions
}
