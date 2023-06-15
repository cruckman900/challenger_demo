/* eslint-disable object-shorthand */
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.chatterboxsm.com/',
    headers: { 'Content-Type': 'application/json' }
})

/* GET systemsettings */
async function getSystemSettingsByUserID (id) {
    return new Promise(function (resolve, reject) {
        api.get('/systemsettings', {
            params: {
                id: id
            }
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* POST systemsettings */
async function inputSystemSettings (data) {
    return new Promise(function (resolve, reject) {
        api.post('/systemsettings', {
            method: 'POST',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

/* PUT systemsettings */
async function updateSystemSettings (data) {
    return new Promise(function (resolve, reject) {
        api.put('/', {
            method: 'PUT',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

export {
    getSystemSettingsByUserID,
    inputSystemSettings,
    updateSystemSettings
}
