/* eslint-disable object-shorthand */
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.chatterboxsm.com/',
    headers: { 'Content-Type': 'application/json' }
})

/* GET groups */
async function getAllGroups () {
    return new Promise(function (resolve, reject) {
        api.get('/groups', {
            params: {
                action: 'getAll'
            }
        })
            .then(rows => resolve(rows))
            .catch(err => reject(err))
    })
}

async function getGroupByID (id) {
    return new Promise(function (resolve, reject) {
        api.get('/groups', {
            params: {
                action: 'getGroupByID',
                id: id
            }
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* POST groups */
async function inputGroups (data) {
    return new Promise(function (resolve, reject) {
        api.post('/groups', {
            method: 'POST',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

/* PUT groups */
async function updateGroups (data) {
    return new Promise(function (resolve, reject) {
        api.put('/groups', {
            method: 'PUT',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

export {
    getAllGroups,
    getGroupByID,
    inputGroups,
    updateGroups
}
