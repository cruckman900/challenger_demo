import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.chatterboxsm.com/',
    headers: { 'Content-Type': 'application/json' }
})

/* GET activities by userid */
async function getActivitiesByUserID (id) {
    return new Promise(function (resolve, reject) {
        api.get('/activities', {
            params: {
                id: id
            }
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* POST activities */
async function inputActivities (data) {
    return new Promise(function (resolve, reject) {
        api.post('/activities', {
            method: 'POST',
            data: data
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* PUT activities */
async function updateActivities (data) {
    return new Promise(function (resolve, reject) {
        api.put('/activities', {
            method: 'PUT',
            data: data
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

export {
    getActivitiesByUserID,
    inputActivities,
    updateActivities
}
