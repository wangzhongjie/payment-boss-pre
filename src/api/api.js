import axios from 'axios';

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };


//var qs=require('qs');
var instance = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    // transformRequest: [function (data) {
    //
    //     data = qs.stringify(data);
    //     return data;
    // }],
    // withCredentials:true   //加了这段就可以跨域了
});

//instance .get(`http://localhost:1083`, qs.stringify(params)).then(res => res.data);

let base1 = 'http://localhost:1083';

export const getMerchantList = params => { return instance.get(`${base1}/posp/search3`, { params: params }); };