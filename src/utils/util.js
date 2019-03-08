export default class util {
    static wait(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, ms)
        });
    };

    static isUndef(v) {
        return v === null || v === undefined;
    };

    static _format(number) {
        if (number < 0) {
            return number;
        } else if (number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    };

    static dateFormat(v, format) {
        const type = typeof v;
        if (this.isUndef(v) || (type !== 'number' && !(v instanceof Date)) || v === '') {
            return v;
        }
        // 使用默认的format
        if (!format) {
            format = 'Y-m-d';
        }
        if (typeof v === 'number') {
            v = new Date(v);
        } else {
            v = new Date(v.valueOf());
        }

        format = format.replace('Y', v.getFullYear());
        format = format.replace('m', this._format(v.getMonth() + 1));
        format = format.replace('d', this._format(v.getDate()));
        format = format.replace('H', this._format(v.getHours()));
        format = format.replace('i', this._format(v.getMinutes()));
        format = format.replace('s', this._format(v.getSeconds()));
    
        return format;
    };

    static updata() {
        const updateManager = wx.getUpdateManager();
        updateManager.onUpdateReady(function () {
            wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success(res) {
                    if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate();
                    };
                },
            });
        });
    }
};
