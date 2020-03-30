import axios from 'axios'

const BASE_URL = "https://batman-archive.herokuapp.com";
const SIGN_UP_URL = BASE_URL + "/users/sign-up";
const LOGIN_URL = BASE_URL + "/login";
const NEW_ARCHIVE_POST = BASE_URL + "/archive/new";
const GET_ALL_URL = BASE_URL = "/archive/all";


export default {
    postNewArchive(archiveText) {
        const transferData = {
            archiveText : archiveText
        };
        axios({
            method: 'post',
            url: NEW_ARCHIVE_POST,
            data: transferData
          })
          .then(response => {
            console.log(response);
          })
    },
    login(username, password) {
        const transferData = {
            username : username,
            password: password
        };
        axios({
            method: 'post',
            url: LOGIN_URL,
            data: transferData
          })
          .then(response => {
            console.log(response);
          })
    },
    signup(username, password) {
        const transferData = {
            username : username,
            password: password
        };
        axios({
            method: 'post',
            url: SIGN_UP_URL,
            data: transferData
          })
          .then(response => {
            console.log(response);
          })
    },
    getAll() {
        axios({
            method: 'get',
            url: GET_ALL_URL
          })
          .then(response => {
            console.log(response);
          })
    }
}