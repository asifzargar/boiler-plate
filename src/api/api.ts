import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosRequestHeaders, AxiosProgressEvent, } from "axios";
import { redirect } from "react-router-dom";
import { ApiEndpointsConfig } from "@/constants";
import { LocalStorageService, logger } from "@/helpers";
import { ExceptionError } from "@/types";
interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
    headers: AxiosRequestHeaders;
}
const base_url = ApiEndpointsConfig.BASE_URL;
let notificationToken = "";

const instance: AxiosInstance = axios.create({
    baseURL: base_url,
    responseType: "json",
});

instance.interceptors.request.use(
    (config: AdaptAxiosRequestConfig) => {
        const localStorageService = new LocalStorageService();
        const token = localStorageService.get_access_token()?.replaceAll(`"`, "");
        if (token) {
            config.headers["Authorization"] = "Bearer " + token;
            config.headers["ngrok-skip-browser-warning"] = "69420";
        }
        logger.log("Request Interceptor:", config);
        return config;
    },
    (error: any) => {
        logger.error("Request Interceptor Error:", error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        logger.log("Response Interceptor:", response);
        return response;
    },
    (error: any) => {
        if (error.response.status === 401) {
            redirect("/login");
            return Promise.reject(error);
        }
        logger.error("Response Interceptor Error:", error);
        return Promise.reject(error);
    }
);

const init = () => {
    instance.defaults.headers["Cache-Control"] = "no-cache";
    // Access-Control-Allow-Origin: *
    instance.defaults.headers["Access-Control-Allow-Origin"] = "*";
    // instance.defaults.withCredentials = true;
};

const getFunction = async (url: string) => {
    try {
        const { data, status } = await instance.get(url);
        if (status === 200 || status === 201) {
            return data;
        } else {
            const error = new ExceptionError();
            error.error_message = "GET-Request:: Bad Response";
            error.error_code = String(status);
            throw error;
        }
    } catch (err) {
        throw err;
    }
};

const postFunction = async (url: string, object: Object) => {
    try {
        const { data } = await instance.post(url, object);
        return data;
    } catch (err) {
        throw err;
    }
};

const putFunction = async (url: string, object: Object) => {
    try {
        const { data, status } = await instance.put(url, object);
        if (status === 200 || status === 201) {
            return data;
        } else {
            const error = new ExceptionError();
            error.error_message = "PUT-Request:: Bad Response";
            error.error_code = String(status);
            throw error;
        }
    } catch (err) {
        throw err;
    }
};
// 
const patchFunction = async (url: string, object: Object) => {
    try {
        const { data, status } = await instance.patch(url, object);
        if (status === 200 || status === 201) {
            return data;
        } else {
            const error = new ExceptionError();
            error.error_message = "PATCH-Request:: Bad Response";
            error.error_code = String(status);
            throw error;
        }
    } catch (err) {
        throw err;
    }
};


const delFunction = async (url: string, object: Object) => {
    try {
        const { data, status } = await instance.delete(url, object);
        if (status === 200 || status === 201) {
            return data;
        } else {
            const error = new ExceptionError();
            error.error_message = "DELETE-Request:: Bad Response";
            error.error_code = String(status);
            throw error;
        }
    } catch (err) {
        throw err;
    }
};

const uploadFunction = async (
    url: string,
    formData: any,
    onUploadProgress: (progressEvent: AxiosProgressEvent) => void
) => {
    try {
        const { data, status } = await instance.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
        if (status === 200 || status === 201) {
            return data;
        } else {
            const error = new ExceptionError();
            error.error_message = "UPLOAD_FILE-Request:: Bad Response";
            error.error_code = String(status);
            throw error;
        }
    } catch (err) {
        throw err;
    }
};

const setNotificationToken = (token: string) => {
    notificationToken = token;
};

const getNotificationToken = () => {
    return notificationToken;
};

const apiConfiguration = {
    base_url,
    instance,
    init,
    getFunction,
    postFunction,
    putFunction,
    delFunction,
    uploadFunction,
    setNotificationToken,
    getNotificationToken,
    patchFunction,
};

export { apiConfiguration };
