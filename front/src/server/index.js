import axios from 'Axios';
//添加一个请求拦截器  
axios.interceptors.request.use(function(config) {
    //在请求发出之前进行一些操作
    return config;
}, function(err) {
    //Do something with request error  
    return Promise.reject(error);
});
//添加一个响应拦截器  
axios.interceptors.response.use(function(res) {
    //在这里对返回的数据进行处理
    if (res.data.code == 0) {
        return res;
    } else {
        return Promise.reject(res.data);
    }

}, function(err) {
    //Do something with response error 
    return Promise.reject(error);
})