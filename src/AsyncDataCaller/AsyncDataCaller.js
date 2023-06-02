import { getUserInfoByUserAndPass } from "../DataHandlers/AccountInfoDataHandler";


async function getUserInfo(username, password) {
    return new Promise(function(resolve, reject) {
        getUserInfoByUserAndPass(username, password)
            .then(row => resolve(row))
            .catch(err => reject(err));
    });
}

export {
    getUserInfo,
}