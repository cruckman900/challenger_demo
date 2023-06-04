import { getUserInfoById, getUserInfoByUserAndPass, getUserCount, getUserCountIsLoggedIn } from "../DataHandlers/AccountInfoDataHandler";

async function getUserById(id) {
    return new PromiseRejectionEvent(function(resolve, reject) {
        getUserInfoById(id)
        .then(row => resolve(row))
        .catch(err => reject(err));
    })
}

async function getUserByUserAndPass(username, password) {
    return new Promise(function(resolve, reject) {
        getUserInfoByUserAndPass(username, password)
            .then(row => resolve(row))
            .catch(err => reject(err));
    });
}

async function getCountUsers() {
    return new Promise(function(resolve, reject) {
        getUserCount()
            .then(row => resolve(row))
            .catch(err => reject(err));
    });
}

async function getCountUsersLoggedIn() {
    return new Promise(function(resolve, reject) {
        getUserCountIsLoggedIn()
            .then(row => resolve(row))
            .catch(err => reject(err));
    })
}

export {
    getUserById,
    getUserByUserAndPass,
    getCountUsers,
    getCountUsersLoggedIn
}