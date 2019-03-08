import wepy from 'wepy';

export default class http {
    static async request(method, url, data, loading = true, header = wepy.$instance.globalData.header) {
        const params = {
            url,
            method,
            data,
            header,
        };
        const res = await wepy.request(params);
        if (this.isSuccess(res)) {
            return res;
        } else {
            return this.requestException(res);
        }
    };

    static isSuccess(res) {
        const wxCode = res.data.statusCode;
        if (wxCode !== 200) return false;
        return res;
    };

    static requestException(res) {
        const err = {};
        err.statusCode = res.data.statusCode;
        err.message = res.data.message;
        err.header = res.header;
        return err;
    };

    static get(url, data, loading = true, header) {
        return this.request('GET', url, data, loading, header);
    };
    
    static put(url, data, loading = true, header) {
        return this.request('PUT', url, data, loading, header);
    };

    static post(url, data, loading = true, header) {
        return this.request('POST', url, data, loading, header);
    };
    
    static patch(url, data, loading = true, header) {
        return this.request('PATCH', url, data, loading, header);
    };
    
    static delete (url, data, loading = true, header) {
        return this.request('DELETE', url, data, loading, header);
    };
};