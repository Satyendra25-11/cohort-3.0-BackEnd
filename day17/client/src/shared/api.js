import axios from 'axios'
import { useAuth } from '../modules/auth/context/authContext'

const api = axios.create({
    baseURL: "http://localhost:5173/api",
    withCredentials: true,        //api call includes cookies data , bydefault it is false
})


const useApi = ()=>{

    const {accessToken } = useAuth()

    api.interceptors.request.use(
        (config)=>{
            if(accessToken){
                config.headers.Authorization = `Bearer ${accessToken}`
            }
            return config
        },
        (error)=>{
            return Promise.reject(error)
        }
    )
    return api
}


export default useApi