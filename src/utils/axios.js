import axios from 'axios';
axios.defaults.withCredentials = true
axios.defaults.timeout = 30000
const $http = axios.create({
  
})
$http.interceptors.response.use(data => {
  //响应拦截器
  return data;
},err => {
  return Promise.reject(err)
})
$http.interceptors.request.use(data => {
  //请求拦截器
  return data;
},err => {
  return Promise.reject(err)
})
export default $http;