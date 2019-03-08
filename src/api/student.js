// GET /a/ws/kwgl/kwCj/getCjList 学生获取成绩（小程序）
// GET /a/ws/kwgl/kwCj/getCjXq 学生获取年度学期（小程序）
// POST /a/ws/kwgl/kwCj/getKsap 学生获取考试安排（小程序）
// GET /a/ws/kwgl/kwJcsj/getXsJdxx 获取学生简要
import base from './base';

export default class student extends base {
    static getStudentGrade(data) {
        const url = `${this.baseUrl}/kwCj/getCjList`;
        return this.get(url, data).then(res => res).catch(err => ({msg: err.message, }));
    }
    static getStudentYGrade(data) {
        const url = `${this.baseUrl}/kwCj/getCjXq`;
        return this.get(url, data).then(res => res).catch(err => ({msg: err.message, }));
    }
    static getTextPlan(data) {
        const url = `${this.baseUrl}/kwCj/getKsap`;
        return this.post(url, data).then(res => res).catch(err => ({msg: err.message, }));
    }
    static getStudentIntroduce(data) {
        const url = `${this.baseUrl}/kwJcsj/getXsJdxx`;
        return this.get(url, data).then(res => res).catch(err => ({msg: err.message, }));
    }
    static getTeacherInfo(data) {
        const url = `${this.baseUrl}/kwJcsj/jsForm`;
        return this.get(url, data).then(res => res).catch(err => ({msg: err.message, }));
    }
};