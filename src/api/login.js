import wepy from 'wepy';
import base from './base';

export default class Login extends base {
    /*
    * 登录
    */
    static login({ username, password, }) {
        const url = `${this.baseUrlSys}/login`;
        const data = {
            username,
            password,
        };
        const header = Object.assign({}, wepy.$instance.globalData.header, {'content-type':'application/x-www-form-urlencoded', });
        console.log(header, 8);
        return this.post(url, data, true, header).then(res => res);
    };
    /*
    * 登出
    */
    static logout() {
        const url = `${this.baseUrlSys}/logout`;
        return this.get(url).then(res => res);
    };
    /*
    * 修改密码
    */
    static updatePwd(data) {
        const url = `${this.baseUrlSys}/user/updatePwd`;
        return this.post(url, data).then(res => res);
    };
};