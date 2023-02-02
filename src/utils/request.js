import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'/api'
})



axiosInstance.interceptors.request.use((config)=>{
    // 相当于Promise中的fulfilled
    // console.log('请求拦截器触发,此处要返回config让request发出去')
    return config
}, (error)=> {
    // 相当于Promise中的Reject
    // console.log('触发reject驳回',error)
})


export  default axiosInstance