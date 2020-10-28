import api from '../assets/lib/api.js';
/**
 * 发送请求示例：
 * let params = {aa:2};
 * this.$https.getData(params).then(res=>{
 *  console.log(res)
 * });
*/
const users = {
    Login(params){
        return api.getAxios('post','/login',params);
    }
};

export default users;