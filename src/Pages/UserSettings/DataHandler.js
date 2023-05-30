import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_URL || "http://localhost:4000",
    headers: { 'Content-Type': 'application/json' }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


const mailer = axios.create({
    baseURL: process.env.MAILER_URL || "http://localhost:80"
});

async function sendVerifyMail(email, username, code) {
    mailer.get('/mailer', {
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
        console.log(response);

        const result = {
            id: response.id,
            firstname: response.firstname,
            middlename: response.middlename,
            lastname: response.lastname,
            screenname: response.screenname,
            email: response.email,
            agerange: response.agerange,
            gender: response.gender,
            username: response.username,
            password: response.password,
            description: response.description,
            verificationcode: response.verificationcode,
            validated: response.validated
        };

        return result;
    } catch (err) {

        // handle error
        console.log(err);
        return err;
    }
}

/* GET user by username and password */
async function getUserInfoByUserAndPass(data) {
    try {
        const response = await api.get('/users', {
            params: {
                username: data.username,
                password: data.password
            }
        });

        //handle success
        console.log(response);

        const result = {
            id: response.id,
            firstname: response.firstname,
            middlename: response.middlename,
            lastname: response.lastname,
            screenname: response.screenname,
            email: response.email,
            agerange: response.agerange,
            gender: response.gender,
            username: response.username,
            password: response.password,
            description: response.description,
            verificationcode: response.verificationcode,
            validated: response.validated
        };

        return result;
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

        // handle success
        console.log(response);
        if(response) {
            sendVerifyMail(data.email, data.username, data.verificationcode);
        }

        return response;
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
        console.log(response);
        return response.json();
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