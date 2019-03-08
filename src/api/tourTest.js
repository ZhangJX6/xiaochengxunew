import base from './base';

export default class tourTest extends base {
    static getList(data) {
        // GET /a/ws/kwgl/kwXkdj/getXkList/getXkList
        let b = 'kwXkdj'
        const url = `${this.baseUrl}/${b}/getXkList`;
        return this.get(url, data).then(res => res).catch(err => ({msg: err.message, }));
    }
    // GET /a/ws/kwgl/kwXkdj/form 编辑或巡考登记详情
    static form(data) {
        // GET /a/ws/kwgl/kwXkdj/getXkList/getXkList
        const url = `${this.baseUrl}/kwXkdj/form`;
        return this.post(url, data).then(res => res).catch(err => ({msg: err.message, }));
    }
    // POST /a/ws/kwgl/kwXkdj/save 保存巡考登记
    static save(data) {
        // GET /a/ws/kwgl/kwXkdj/getXkList/getXkList
        const url = `${this.baseUrl}/kwXkdj/save`;
        return this.post(url, data).then(res => res).catch(err => ({msg: err.message, }));
    }
    // /localhost:8080/a/ws/kwgl/kwXkap/getXkryZj?xkryId=2e220c871241403db852098925ad068d 查看总结
    static getSummarize(data) {
        // GET /a/ws/kwgl/kwXkdj/kwXkap/getXkryZj
        const url = `${this.baseUrl}/kwXkap/getXkryZj`;
        return this.get(url, data).then(res => res).catch(err => ({msg: err.message, }));
    }
    // /localhost:8080/a/ws/kwgl/kwXkap/saveXkryZj?xkryId=2e220c871241403db852098925ad068d 
    static SaveSummarize(data) {
        // GET /a/ws/kwgl/kwXkdj/kwXkap/saveXkryZj
        const url = `${this.baseUrl}/kwXkap/saveXkryZj`;
        return this.post(url, data).then(res => res).catch(err => ({msg: err.message, }));
    }
    // 查看学生
    static searchStudent(data) {
        const url = `${this.baseUrl}/kwXkdj/getKsStuList`;
        return this.get(url, data).then(res => res).catch(err => ({msg: err.message, }));
    }
    // 保存违规学生 /a/ws/kwgl/
    static saveStudentOut(data) {
        const url = `${this.baseUrl}/kwXkdj/saveWgjl`;
        return this.post(url, data).then(res => res).catch(err => ({msg: err.message, }));
    }
    
};