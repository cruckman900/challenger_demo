import { getUserInfoByUserAndPass, getUserCount } from "../DataHandlers/AccountInfoDataHandler";


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

export {
    getUserByUserAndPass,
    getCountUsers
}