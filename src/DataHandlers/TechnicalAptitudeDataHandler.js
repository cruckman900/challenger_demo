/* eslint-disable object-shorthand */
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.chatterboxsm.com/',
    headers: { 'Content-Type': 'application/json' }
})

/* GET technical */
async function getTechnicalByUserID (id) {
    return new Promise(function (resolve, reject) {
        api.get('/technical', {
            params: {
                id: id
            }
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* POST technical */
async function inputTechnical (data) {
    return new Promise(function (resolve, reject) {
        api.post('/technical', {
            method: 'POST',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

/* PUT technical */
async function updateTechnical (data) {
    return new Promise(function (resolve, reject) {
        api.put('/technical', {
            method: 'PUT',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

export {
    getTechnicalByUserID,
    inputTechnical,
    updateTechnical
}
