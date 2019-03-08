import base from './base';

export default class Common extends base {
    static kwJcsj =  '/kwJcsj';
    /*
    * POST /a/ws/kwgl/kwJcsj/nowNdXq 获取当前考试年度学期
    */
    static nowNdXq() {
        const url = `${this.baseUrl}${Common.kwJcsj}/nowNdXq`;
        return this.post(url).then(res => res);
    };
};