/* eslint-disable object-shorthand */
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.chatterboxsm.com',
    headers: { 'Content-Type': 'application/json' }
})

/* GET movies */
async function getMoviesByUserID (id) {
    return new Promise(function (resolve, reject) {
        api.get('/movies', {
            params: {
                id: id
            }
        })
            .then(row => resolve(row))
            .catch(err => reject(err))
    })
}

/* POST movies */
async function inputMovies (data) {
    return new Promise(function (resolve, reject) {
        api.post('/movies', {
            method: 'POST',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

/* PUT movies */
async function updateMovies (data) {
    return new Promise(function (resolve, reject) {
        api.put('/movies', {
            method: 'PUT',
            data: data
        })
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

export {
    getMoviesByUserID,
    inputMovies,
    updateMovies
}
