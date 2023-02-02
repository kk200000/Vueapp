import axiosInstance from "@/utils/request";



export  const getData = ()=>{
    return axiosInstance.get('/article/all')
}