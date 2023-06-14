/* eslint-disable object-shorthand */
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.chatterboxsm.com/',
    headers: { 'Content-Type': 'application/json' }
})

/* GET communities */
async function getAllCommunities () {
    return new Promise(function (resolve, reject) {
        api.get('/communities', {
            params: {
                action: 'getAllCommunities'
            }
        })
            .then(rows => resolve(rows))
            .catch(err => reject(err))
    })
}

async function getCommunity (id) {
    return new Promise(function (resolve, reject) {
        api.get('/communities', {
            params: {
                action: 'getCommunityByID',
                id: id
            }
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* POST communities */
async function inputCommunity (data) {
    return new Promise(function (resolve, reject) {
        api.post('/communities', {
            method: 'POST',
            data: data
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* PUT communities */
async function updateCommunity (data) {
    return new Promise(function (resolve, reject) {
        api.put('/communities', {
            method: 'PUT',
            data: data
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

export {
    getAllCommunities,
    getCommunity,
    inputCommunity,
    updateCommunity
}
