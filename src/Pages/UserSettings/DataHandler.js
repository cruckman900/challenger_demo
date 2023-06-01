import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.chatterboxsm.com/", // || "http://localhost:4000",
    headers: { 'Content-Type': 'application/json' }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


const mailer = axios.create({
    baseURL: process.env.MAILER_URL, // || "http://localhost:80"
});

async function sendVerifyMail(email, username, code) {
    mailer.get('/', {
        params: {
            action: 'verifyUser',
            e: email,
            un: username,
            vc: code
        }
    })
    .then((response) => {
        console.log('Response:', response.data);
    });
}

/* GET user by id */
async function getUserInfoById(id) {
    try {
        const response = await api.get('/users', {
            params: {
                id: id
            }
        });

        // handle success

        console.log('DataHandler: getUserInfoById', response);
        return response;
    } catch (err) {

        // handle error
        console.log(err);
        return err;
    }
}

/* GET user by username and password */
async function getUserInfoByUserAndPass(username, password) {
    try {
        const response = await api.get('/users', {
            params: {
                username: username,
                password: password
            }
        });

        //handle success
        
        return response.data[0];
    } catch (err) {

        // handle error
        console.log(err);
        return err;
    }
}

/* POST user */
async function inputUserInfo(data) {
    try {
        const response = await api.post('/users', {
            method: 'POST',
            data: {
                firstname: data.firstname,
                middlename: data.middlename,
                lastname: data.lastname,
                screenname: data.screenname,
                email: data.email,
                agerange: data.agerange,
                gender: data.gender,
                username: data.username,
                password: data.password,
                description: data.description,
                verificationcode: data.verificationcode,
                validated: data.validated
            }
        });
        
        let result = response.data;

        // handle success
        sendVerifyMail(data.email, data.username, data.verificationcode);
        console.log('DataHandler: api POST', result);
        return result;
    } catch (err) {

        // handle error
        console.log(err);
        return err;
    }
};

/* PUT user */
async function updateUserInfo(data) {
    try {
        const response = await api.put('/users', {
            method: 'PUT',
            data: {
                id: data.id,
                firstname: data.firstname,
                middlename: data.middlename,
                lastname: data.lastname,
                screenname: data.screenname,
                email: data.email,
                agerange: data.agerange,
                gender: data.gender,
                username: data.username,
                password: data.password,
                description: data.description,
                verificationcode: data.verificationcode,
                validated: data.validated
            }
        });

        // handle success
        console.log('DataHandler: api PUT', response);
        return response;
    } catch (err) {

        // handle error
        console.log(err);
        return err;
    }
};

export {
    getRandomInt,
    getUserInfoById,
    getUserInfoByUserAndPass,
    inputUserInfo,
    updateUserInfo,
    sendVerifyMail
};