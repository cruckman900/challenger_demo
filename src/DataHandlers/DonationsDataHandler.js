/* eslint-disable object-shorthand */
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.chatterboxsm.com/',
    headers: { 'Content-Type': 'application/json' }
})

/* GET donations */
async function getAllDonations () {
    return new Promise(function (resolve, reject) {
        api.get('/donations', {
            params: {
                action: 'getAllDonations'
            }
        })
            .then(rows => resolve(rows))
            .catch(err => reject(err))
    })
}

async function getDonationsByUser (id) {
    return new Promise(function (resolve, reject) {
        api.get('/donations', {
            params: {
                action: 'getDonationsByUserID',
                id: id
            }
        })
            .then(rows => resolve(rows))
            .catch(err => reject(err))
    })
}

/* POST donations */
async function inputDonation (data) {
    return new Promise(function (resolve, reject) {
        api.post('/donations', {
            method: 'POST',
            data: data
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* PUT donations */
async function updateDonation (data) {
    return new Promise(function (resolve, reject) {
        api.put('/donations', {
            method: 'PUT',
            data: data
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

export {
    getAllDonations,
    getDonationsByUser,
    inputDonation,
    updateDonation
}
