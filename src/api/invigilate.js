import base from './base';
import tips from 'utils/tips';

export default class InvigilateDetail extends base {
    static KWJKDJ = '/kwJkdj';
    static KWKCAP = '/kwKcap';
    /*
    * 监考考试详情
    */
    static getJkKsInfo(data) {
        const url = `${this.baseUrl}${InvigilateDetail.KWJKDJ}/getJkKsInfo`;
        return this.get(url, data).then(res => res);
    };
    /*
    * 监考安排列表
    */
    static getJkList(data) {
        const url = `${this.baseUrl}${InvigilateDetail.KWJKDJ}/getJkList`;
        return this.get(url, data).then(res => res);
    };
    /*
    * 编辑或监考登记详情
    */
    static form(data) {
        const url = `${this.baseUrl}${InvigilateDetail.KWJKDJ}/form`;
        return this.post(url, data).then(res => res);
    };
    /*
    * 保存监考登记
    */
    static save(data) {
        const url = `${this.baseUrl}${InvigilateDetail.KWJKDJ}/save`;
        return this.post(url, data).then(res => res);
    };
    
    /*
    * 获取学生列表
    */
    static listStudent(data) {
        const url = `${this.baseUrl}${InvigilateDetail.KWKCAP}/listStudent`;
        return this.get(url, data).then(res => res);
    };
};