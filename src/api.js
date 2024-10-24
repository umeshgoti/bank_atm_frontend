import axios from "axios";
import Swal from "sweetalert2";

export default class Api {
    constructor() {
        this.api_token = "";
        this.api_url = "http://localhost:8080/";
        this.headers = {
            Accept: "application/json",
        };
    }

    init = () => {
        this.api_token = localStorage.getItem("token");
    };

    login = (username, password) => {
        const credentials = {
            username: username,
            password: password,
        };
        return axios({
            method: "post",
            url: this.api_url + "api/login-with-otp",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data: JSON.stringify(credentials),
        })
            .then((response) => {
                localStorage.setItem("accessToken", response.data.data.access_token);
                localStorage.setItem("roles", response.data.data.roles);
                localStorage.setItem("firstName", response.data.data.firstName);
                localStorage.setItem("lastName", response.data.data.lastName);
                return response.data;
            })
            .catch((error) => {
                throw error;
            });
    };

    registerAPI = (data, url) => {
        try {
            let response = axios({
                method: "post",
                url: this.api_url + url,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                data: data,
            });
            return response;
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "error occured in register please contact to support!",
            });
        }
    };

    getAPI = (url, token, isExternal) => {
        isExternal = isExternal || false;
        let client;
        if (isExternal) {
            client = axios({
                method: "get",
                url: url,
            });
        } else {
            if (token === undefined || token === "undefined") {
                client = axios({
                    method: "get",
                    url: this.api_url + url,
                });
            } else {
                client = axios({
                    method: "get",
                    url: this.api_url + url,
                    headers: { Authorization: "Bearer " + token },
                });
            }
        }

        return client;
    };

    postAPI = (url, data, token) => {
        let client;
        if (token === undefined || token === "undefined") {
            client = axios({
                method: "post",
                url: this.api_url + url,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                data: data,
            });
        } else {
            client = axios({
                method: "post",
                url: this.api_url + url,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
                data: data,
            });
        }

        return client;
    };

    putAPI = (url, data, token) => {
        let client = axios({
            method: "put",
            url: this.api_url + url,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            data: data,
        });

        return client;
    };

    deleteAPI = (url, token) => {
        let client = axios({
            method: "delete",
            headers: {
                Authorization: "Bearer " + token,
            },
            url: this.api_url + url,
        });

        return client;
    };

    uploadImageAPI = (url, file, token) => {
        const formData = new FormData();
        formData.append("file", file);

        let client = axios({
            method: "post",
            url: this.api_url + url,
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
            data: formData,
        });

        return client;
    };

    uploadCategoryWithImage = (url, formData, token) => {
        let client = axios({
            method: "post",
            url: this.api_url + url,
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
            data: formData,
        });

        return client;
    };

    getDownloadAPI = (url, token, options) => {
        let config = {
            method: "get",
            url: this.api_url + url,
            headers: { Authorization: "Bearer " + token },
            ...options,
        };

        return axios(config);
    };
}
