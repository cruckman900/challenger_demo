import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_URL || "http://localhost:4000",
    headers: { 'Content-Type': 'application/json' }
});

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

        const data = {
            id: response.id,
            firstname: response.firstname,
            middlename: response.middlename,
            lastname: response.lastname,
            screenname: response.screenname,
            agerange: response.agerange,
            gender: response.gender,
            username: response.username,
            password: response.password,
            description: response.description,
            validated: response.validated
        };

        return data;
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

        const data = {
            id: response.id,
            firstname: response.firstname,
            middlename: response.middlename,
            lastname: response.lastname,
            screenname: response.screenname,
            agerange: response.agerange,
            gender: response.gender,
            username: response.username,
            password: response.password,
            description: response.description,
            validated: response.validated
        };

        return data;
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
                agerange: data.agerange,
                gender: data.gender,
                username: data.username,
                password: data.password,
                description: data.description,
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
                agerange: data.agerange,
                gender: data.gender,
                username: data.username,
                password: data.password,
                description: data.description,
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

exports = {
    getUserInfoById,
    getUserInfoByUserAndPass,
    inputUserInfo,
    updateUserInfo
};