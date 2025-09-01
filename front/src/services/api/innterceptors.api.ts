import axios from "axios";
import {API_URL} from "@/config/api.config.ts";
import tostik from "@/utils/tostik.ts";

 const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

instance.interceptors.request.use(async (config) => {
    console.log("< REQUEST > - ", config.url, config.params, config.data);
    return config;
})

instance.interceptors.response.use(
    (config) => config,
    async (error) => {
        console.log('< ERROR > - ', error?.response?.data?.message || error?.message);
        const originRequest = error.config;
        if(error.response?.status === 401 && !originRequest._isRequest){
            originRequest._isRequest = true;
            return instance.request(originRequest);
        }else if(error.response?.status === 401 && originRequest._isRequest){
        }
        tostik.error(error?.response?.data?.message || error.message);
        throw error?.response?.data || error.message;
    }
)

export default instance;